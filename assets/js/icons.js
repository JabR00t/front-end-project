/* Jeu d'icônes SVG : ic('nom') renvoie le <svg> prêt à insérer */
var I={
home:'<path d="M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z"/>',
book:'<path d="M3 5a2 2 0 012-2h6v16H5a2 2 0 00-2 2zM21 5a2 2 0 00-2-2h-6v16h6a2 2 0 012 2z"/>',
heart:'<path d="M12 21s-8-5-8-11a4.5 4.5 0 018-2.7A4.5 4.5 0 0120 10c0 6-8 11-8 11z"/>',
read:'<path d="M4 4h12a4 4 0 014 4v12H8a4 4 0 01-4-4z"/>',
mosque:'<path d="M12 3c2 2 3 3 3 5H9c0-2 1-3 3-5zM6 21V12h12v9M3 21h18"/>',
sprout:'<path d="M12 21V11M12 13C8 13 6 10 6 6c4 0 6 3 6 7zM12 11c0-4 2-6 6-6 0 4-2 6-6 6z"/>',
run:'<circle cx="13" cy="4" r="2"/><path d="M5 22l4-8 3 3v5M9 14l3-5 4 3 3-1M12 9l-4 2"/>',
drop:'<path d="M12 3s6 7 6 11a6 6 0 01-12 0c0-4 6-11 6-11z"/>',
mind:'<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 7 2 8 0M9 9h.01M15 9h.01"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"/>',
moon:'<path d="M21 13A9 9 0 1111 3a7 7 0 0010 10z"/>',
cap:'<path d="M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5"/>',
code:'<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
plane:'<path d="M2 12l20-8-6 18-4-8z"/>',
house:'<path d="M3 11l9-8 9 8v9H3z"/>',
dollar:'<path d="M12 2v20M17 6H9.5a3 3 0 000 6h5a3 3 0 010 6H6"/>'};
function ic(n){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'+I[n]+'</svg>'}
