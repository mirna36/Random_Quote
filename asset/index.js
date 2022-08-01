//Les gouttes de pluie

    const body = document.body;
    //la fréquente des gouttes 
    setInterval(rainFall, 10);

    function rainFall(){
        //création des gouttes
        const waterDrop = document.createElement('i');
        waterDrop.classList.add('fa-solid');
        waterDrop.classList.add('fa-droplet');
        waterDrop.style.fontSize = Math.random() * 7 + 'px';
        waterDrop.style.animationDuration = Math.random() * 2 + 's';
        waterDrop.style.opacity = Math.random() * +0.3;
        waterDrop.style.left = Math.random() * window.innerWidth + 'px';
        

        //intégration dans gouttes dans le body
        body.appendChild(waterDrop);

        //tuer les drop à leur fin 
        setTimeout(()=>{
            waterDrop.remove();
        }, 6000)   
    }

//La citation
    const btn = document.querySelector('.btn');
    const quote = document.querySelector(".quote");
    const author = document.querySelector(".author");

    //aller chercher l'api
    const getQuote = ()=>{
    fetch('https://api.quotable.io/random')
    //attente de la promesse en format jsaon
        .then((res)=> res.json())
    //récupération de la data
        .then((data) => {
            quote.innerHTML = data.content;
            author.innerHTML = data.author;
        });
        };
    //afficher la citation au click
    btn.addEventListener('click', ()=> getQuote());  
