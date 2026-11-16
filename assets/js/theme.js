/* Thème clair / sombre.
   Chargé dans le <head> : le thème enregistré est appliqué avant l'affichage (pas de flash). */
(function(){
  var root=document.documentElement,KEY='lifeos-theme';
  var saved=Store.read(KEY);
  if(saved==='light'||saved==='dark')root.setAttribute('data-theme',saved);
  function isDark(){var t=root.getAttribute('data-theme');return t?t==='dark':window.matchMedia('(prefers-color-scheme:dark)').matches}
  document.addEventListener('DOMContentLoaded',function(){
    var tb=document.getElementById('theme');if(!tb)return;
    function paint(){var d=isDark();tb.innerHTML=ic(d?'sun':'moon');tb.setAttribute('aria-label',d?'Passer en mode clair':'Passer en mode sombre')}
    tb.onclick=function(){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);Store.write(KEY,n);paint()};
    paint();
  });
})();
