//declarer les variable
let hidden = true; // Variable pour suivre l'état du message (caché ou affiché)
let btn    = document.querySelector('button');
let p      = document.querySelector('p');

//cacher le message
p.style.display= "none";

//detecter le clic
btn.addEventListener('click',()=>{
    if (hidden){
        btn.textContent="Cacher";
        p.style.display="block";
        hidden=false;
    }else{
        btn.textContent="Afficher";
        p.style.display="none";
        hidden=true;
    }

})