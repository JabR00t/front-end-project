/* Barre latérale : la page courante est lue dans <body data-page="...">.
   Remplace '#' par le fichier de la page quand elle existe (ex. 'productivity.html'). */
var NAV=[
  ['home','Accueil','../index.html','home'],
  ['book','Productivité & Études','#','productivity'],
  ['heart','Santé & Bien-être','#','health'],
  ['read','Lecture & Loisirs','#','reading'],
  ['mosque','Spiritualité','#','spiritual'],
  ['sprout','Développement personnel','personal-growth.html','growth']
];
document.getElementById('nav').innerHTML=NAV.map(function(n){
  var on=n[3]===document.body.dataset.page;
  return '<a href="'+n[2]+'" class="'+(on?'on':'')+'"'+(on?' aria-current="page"':'')+'>'+ic(n[0])+n[1]+'</a>';
}).join('');
