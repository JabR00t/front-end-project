/* Sauvegarde locale (localStorage), sans erreur si le navigateur la bloque */
var Store={
  read:function(k){try{return localStorage.getItem(k)}catch(e){return null}},
  write:function(k,v){try{localStorage.setItem(k,v)}catch(e){}},
  getJSON:function(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},
  setJSON:function(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
};
