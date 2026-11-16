/* Page Personal Growth : objectifs, habitudes, bilan de la semaine, progrès */
var MONTHS=['Jan','Fév','Mar','Avr','Mai','Juin','Juil','Août','Sep','Oct','Nov','Déc'];
var STORE='lifeos-data-v1';
function seed(){return{nid:6,goals:[
{id:1,term:'court',icon:'cap',title:'Réussir mes examens',start:'Oct 2025',p:60},
{id:2,term:'court',icon:'code',title:'Développer mes compétences en dev',start:'Nov 2025',p:30},
{id:3,term:'court',icon:'plane',title:'Voyager au Maroc',start:'2026',p:10},
{id:4,term:'long',icon:'house',title:'Devenir indépendant financièrement',start:'2025',p:15},
{id:5,term:'long',icon:'dollar',title:'Lancer mon premier projet',start:'2026',p:5}],
habits:[
{icon:'book',name:'Lire',days:[1,1,1,1,1,0,0]},
{icon:'run',name:'Sport',days:[1,0,1,1,0,0,0]},
{icon:'mind',name:'Méditation',days:[1,1,0,1,1,0,0]},
{icon:'drop',name:'Hydratation',days:[1,1,1,1,1,0,0]},
{icon:'cap',name:'Étude',days:[1,1,1,0,1,0,0]},
{icon:'sun',name:'Gratitude',days:[0,1,0,1,0,0,0]},
{icon:'moon',name:'Sommeil',days:[1,1,0,0,1,0,0]}]}}
function load(){var d=Store.getJSON(STORE);return d&&Array.isArray(d.goals)&&Array.isArray(d.habits)?d:null}
function save(){Store.setJSON(STORE,S)}
var S=load()||seed(),tab='court';
var days=['L','M','M','J','V','S','D'],names=['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'],TODAY=(new Date().getDay()+6)%7;
function $(id){return document.getElementById(id)}
function esc(s){return String(s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}

/* ---------- Objectifs ---------- */
function renderGoals(){
 var list=S.goals.filter(function(g){return g.term===tab});
 $('goals').innerHTML=list.length?list.map(function(g){return '<div class="goal" tabindex="0" role="button" data-id="'+g.id+'" aria-label="Modifier '+esc(g.title)+'"><div class="gi">'+ic(g.icon)+'</div><div class="t"><b>'+esc(g.title)+'</b><span>'+(g.start?'Début : '+esc(g.start):'&nbsp;')+'</span><div class="bar" title="Clique pour changer la progression"><i style="width:'+g.p+'%"></i></div></div><div class="p">'+g.p+'%</div></div>'}).join(''):'<p class="empty">Aucun objectif ici pour le moment. Clique sur « + Ajouter ».</p>';
}
function setTab(k){tab=k;document.querySelectorAll('.tabs button').forEach(function(b){var on=b.dataset.t===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on)});renderGoals()}
document.querySelectorAll('.tabs button').forEach(function(b){b.onclick=function(){setTab(b.dataset.t)}});
function findGoal(id){return S.goals.filter(function(g){return g.id==id})[0]}
$('goals').onclick=function(e){
 var row=e.target.closest('.goal');if(!row)return;
 var bar=e.target.closest('.bar');
 if(bar){var r=bar.getBoundingClientRect(),g=findGoal(row.dataset.id);
  g.p=Math.max(0,Math.min(100,Math.round((e.clientX-r.left)/r.width*20)*5));
  save();renderGoals();refresh();return}
 openGoal(row.dataset.id);
};
$('goals').onkeydown=function(e){if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('goal')){e.preventDefault();openGoal(e.target.dataset.id)}};

/* ---------- Fenêtre objectif ---------- */
var dlg=$('dlg'),editing=null,delArmed=false;
function today(){var d=new Date();return MONTHS[d.getMonth()]+' '+d.getFullYear()}
function openGoal(id){
 var g=id?findGoal(id):null;editing=g?g.id:null;delArmed=false;
 $('dTitle').textContent=g?'Modifier l’objectif':'Nouvel objectif';
 $('fT').value=g?g.title:'';$('fTerm').value=g?g.term:tab;$('fS').value=g?g.start:today();
 $('fI').value=g?g.icon:'sprout';$('fP').value=g?g.p:0;$('fO').textContent=(g?g.p:0)+'%';
 $('fDel').hidden=!g;$('fDel').textContent='Supprimer';
 dlg.showModal();
}
$('addGoal').onclick=function(){openGoal(null)};
$('fP').oninput=function(){$('fO').textContent=this.value+'%'};
$('fCancel').onclick=function(){dlg.close()};
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});
$('fDel').onclick=function(){
 if(!delArmed){delArmed=true;this.textContent='Confirmer ?';return}
 S.goals=S.goals.filter(function(g){return g.id!==editing});save();dlg.close();renderGoals();refresh();
};
$('gf').onsubmit=function(e){
 e.preventDefault();
 var t=$('fT').value.trim();if(!t){$('fT').focus();return}
 var data={title:t,term:$('fTerm').value,start:$('fS').value.trim(),icon:$('fI').value,p:+$('fP').value};
 if(editing){Object.assign(findGoal(editing),data)}else{data.id=S.nid++;S.goals.push(data)}
 save();dlg.close();setTab(data.term);refresh();
};

/* ---------- Habitudes ---------- */
var chk='<svg viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6.5l2.5 2.5L10 3.5"/></svg>';
function renderHabits(){
 var h='<tr><th></th>'+days.map(function(d,i){return '<th class="'+(i==TODAY?'today':'')+'">'+d+'</th>'}).join('')+'</tr>';
 S.habits.forEach(function(r,ri){h+='<tr><td class="n">'+ic(r.icon)+esc(r.name)+'</td>'+r.days.map(function(v,di){return '<td><button type="button" class="dot'+(v?' on':'')+'" data-r="'+ri+'" data-d="'+di+'" aria-pressed="'+!!v+'" aria-label="'+esc(r.name)+' '+names[di]+'">'+chk+'</button></td>'}).join('')+'</tr>'});
 $('habits').innerHTML=h;refresh();
}
$('habits').onclick=function(e){
 var b=e.target.closest('.dot');if(!b)return;
 var r=S.habits[b.dataset.r];r.days[b.dataset.d]=r.days[b.dataset.d]?0:1;save();renderHabits();
 var n=document.querySelector('.dot[data-r="'+b.dataset.r+'"][data-d="'+b.dataset.d+'"]');if(n)n.focus();
};

/* ---------- Stats, bilan, progrès ---------- */
function dayScore(d){var n=S.habits.length;return n?Math.round(S.habits.filter(function(h){return h.days[d]}).length/n*10):0}
function sum(a){return a.reduce(function(x,y){return x+y},0)}
function metrics(){
 var G=S.goals,H=S.habits;
 var sc=days.map(function(_,i){return dayScore(i)}),act=sc.filter(function(v){return v>0});
 var gAvg=G.length?Math.round(sum(G.map(function(g){return g.p}))/G.length):null;
 var done=sum(H.map(function(h){return sum(h.days)})),hRate=H.length?Math.round(done/(H.length*7)*100):0;
 return{sc:sc,avg:act.length?Math.round(sum(act)/act.length):0,active:act.length,gAvg:gAvg,hRate:hRate,R:gAvg===null?hRate:Math.round((gAvg+hRate)/2)};
}
function refresh(){
 var G=S.goals,H=S.habits,m=metrics();
 $('sGoals').textContent=G.filter(function(g){return g.p<100}).length+'/'+G.length;
 $('sHab').textContent=H.filter(function(h){return h.days[TODAY]}).length+'/'+H.length;
 $('chart').innerHTML=m.sc.map(function(v,i){return '<div title="'+names[i]+' : '+v+'/10"><i style="height:'+Math.max(v*9,3)+'%"></i>'+names[i]+'</div>'}).join('');
 $('sWeek').textContent=m.avg+'/10';
 $('sWeekL').textContent=m.avg>=8?'Excellent !':m.avg>=6?'Très bien !':m.avg>=4?'Continue !':m.active?'Courage !':'À démarrer';
 $('wNote').textContent=m.avg>=6?'Cette semaine, tu as été plus régulier sur tes habitudes et tu as bien avancé sur tes objectifs ! Continue comme ça !':'Il reste de la marge : coche tes habitudes chaque jour pour faire monter ton score.';
 $('ring').style.setProperty('--p',m.R);$('pct').textContent=m.R+'%';
 $('pMsg').textContent=m.R>=75?'Excellent travail, continue !':m.R>=40?'Tu es sur la bonne voie !':'Chaque petit pas compte.';
}

/* ---------- Détails ---------- */
var dlg2=$('dlg2'),resetArmed=false;
$('details').onclick=function(){
 var m=metrics(),H=S.habits.map(function(h){return{n:h.name,c:sum(h.days)}}).sort(function(a,b){return b.c-a.c});
 var best=H.length?H[0].n+' ('+H[0].c+'/7)':'—';
 $('dBody').innerHTML=[['Moyenne des objectifs',m.gAvg===null?'—':m.gAvg+'%'],['Habitudes cette semaine',m.hRate+'%'],['Objectifs terminés',S.goals.filter(function(g){return g.p>=100}).length+'/'+S.goals.length],['Habitude la plus régulière',esc(best)],['Score moyen de la semaine',m.avg+'/10']].map(function(r){return '<div class="row"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>'}).join('');
 resetArmed=false;$('dReset').textContent='Réinitialiser les données';dlg2.showModal();
};
$('dClose').onclick=function(){dlg2.close()};
dlg2.addEventListener('click',function(e){if(e.target===dlg2)dlg2.close()});
$('dReset').onclick=function(){
 if(!resetArmed){resetArmed=true;this.textContent='Confirmer la réinitialisation ?';return}
 S=seed();save();dlg2.close();setTab('court');renderHabits();
};

renderGoals();renderHabits();
