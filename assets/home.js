const preview=document.getElementById('tomodetr-preview');
const toggle=document.getElementById('motion-toggle');
let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
function update(){preview.src=paused?'/assets/tomodetr-still.png':'/assets/tomodetr.gif';toggle.textContent=paused?'Play animation':'Pause animation';toggle.setAttribute('aria-pressed',String(paused));}
toggle.addEventListener('click',()=>{paused=!paused;update()});update();
