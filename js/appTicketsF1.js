// Se realiza funcion para cambiar a modo oscuro o a modo claro segun corresponda

const IMGSCUDERIAS = [
    {
        escuderia: 'RedBull',
        src: 'img/redBullBandera.jpg',
        alt: 'RedBull Bandera',
        color: '#182c7c'
    },
    {
        escuderia: 'Ferrari',
        src: 'img/ferrariBandera.png',
        alt: 'Ferrari Bandera',
        color: '#ff141c'
    },
    {
        escuderia: 'Mercedes',
        src: 'img/mercedesBandera.jpg',
        alt: 'Mercedes Bandera',
        color: '#268181'
    },
];

window.addEventListener("load",function(){
    const SWITCH = document.querySelector('#darkMode');
    SWITCH.addEventListener("click", function(){
        // Se trae el valor del switch, el body completo, el texto al lado del switch (cambia su valor segun corresponda) y las cards para cambiar el bg
        let dark = document.querySelector('#darkMode').checked;
        let site = document.querySelector('body');
        let text = document.querySelector('.textDarkMode');
        let cards = document.querySelectorAll('.cards');
    
        if(dark){
            site.classList.toggle('dimmer');
            cards.forEach(card => {
                card.classList.toggle('dimmerCards');
            });
            text.innerHTML = 'Modo Oscuro';
        } else{
                site.classList.toggle('dimmer');
                cards.forEach(card => {
                    card.classList.toggle('dimmerCards');
                });
                text.innerHTML = 'Modo Claro';
            }
        });
});

window.addEventListener("load", function(){
    const IMGSCUDERIA = document.querySelector('#imgScuderia');
    const ESCUDERIAFAV = document.querySelector('#escuderia');
    const SPANSCUDERIA = document.querySelector('#favScuderia');
    IMGSCUDERIA.getAttribute('src') == "" ? IMGSCUDERIA.style.display = 'none': "";
    ESCUDERIAFAV.addEventListener("change", function(){
        IMGSCUDERIA.style.display = 'inline';
        SPANSCUDERIA.innerText = IMGSCUDERIAS[parseInt(ESCUDERIAFAV.value)].escuderia;
        SPANSCUDERIA.style.color = IMGSCUDERIAS[parseInt(ESCUDERIAFAV.value)].color;
        IMGSCUDERIA.setAttribute('src',IMGSCUDERIAS[parseInt(ESCUDERIAFAV.value)].src);
        IMGSCUDERIA.setAttribute('alt',IMGSCUDERIAS[parseInt(ESCUDERIAFAV.value)].alt);
    });
})

window.addEventListener("load", function(){
    let categoria = document.querySelector('#categoria');
    let pais = document.querySelector('#pais');
    let cards = document.querySelectorAll('.cards');

    categoria.addEventListener("change", function(){
        const VALORTICKET = 1000;
        let valorSeleccionadoCategoria = parseInt(categoria.value);
        let valorSeleccionadoPais = parseInt(pais.value);
        let spanTicketValor = document.querySelector('#value');
        let valorDescuentoCategoria = 0;
        let valorDescuentoPais = 0;
        let valorDescuentoTotal = 0;

        switch(valorSeleccionadoCategoria){
            case 0: valorDescuentoCategoria; break;
            case 1: valorDescuentoCategoria = 0.8; break;
            case 2: valorDescuentoCategoria = 0.5; break;
            default: valorDescuentoCategoria; break; 
        };
        switch(valorSeleccionadoPais){
            case 0: valorDescuentoPais = 0.1; break;
            default: valorDescuentoPais; break; 
        };

        valorDescuentoTotal = valorDescuentoCategoria + valorDescuentoPais;
        spanTicketValor.innerText = (VALORTICKET - (VALORTICKET*valorDescuentoTotal));
    });

    pais.addEventListener("change", function(){
        const VALORTICKET = 1000;
        let valorSeleccionadoCategoria = parseInt(categoria.value);
        let valorSeleccionadoPais = parseInt(pais.value);
        let spanTicketValor = document.querySelector('#value');
        let valorDescuentoCategoria = 0;
        let valorDescuentoPais = 0;
        let valorDescuentoTotal = 0;

        switch(valorSeleccionadoCategoria){
            case 0: valorDescuentoCategoria; break;
            case 1: valorDescuentoCategoria = 0.8; break;
            case 2: valorDescuentoCategoria = 0.5; break;
            default: valorDescuentoCategoria; break; 
        };
        switch(valorSeleccionadoPais){
            case 0: valorDescuentoPais = 0.1; break;
            default: valorDescuentoPais; break; 
        };

        valorDescuentoTotal = valorDescuentoCategoria + valorDescuentoPais;
        spanTicketValor.innerText = (VALORTICKET - (VALORTICKET*valorDescuentoTotal));
    })

    cards.forEach(card => {
        card.addEventListener("click",function(){
            const SELECCIONCARD = this.querySelector('h5').innerText;
            const VALORTICKET = 1000;
            let valorTicketSpan = document.querySelector('#value');
            let valorDescuentoCategoria = 0;
            let valorDescuentoPais = 0;
            let valorDescuentoTotal = 0;

            SELECCIONCARD == 'Sin categoria' ? document.querySelector('#categoria').value = 0 : '';  
            SELECCIONCARD == 'Familiar de piloto' ? document.querySelector('#categoria').value = 1 : '';  
            SELECCIONCARD == 'Piloto Jr' ? document.querySelector('#categoria').value = 2 : '';

            let valorSeleccionadoCategoria = parseInt(categoria.value);
            let valorSeleccionadoPais = parseInt(pais.value);

            switch(valorSeleccionadoCategoria){
                case 0: valorDescuentoCategoria; break;
                case 1: valorDescuentoCategoria = 0.8; break;
                case 2: valorDescuentoCategoria = 0.5; break;
                default: valorDescuentoCategoria; break; 
            };
            switch(valorSeleccionadoPais){
                case 0: valorDescuentoPais = 0.1; break;
                default: valorDescuentoPais; break; 
            };

            valorDescuentoTotal = valorDescuentoCategoria + valorDescuentoPais;
            valorTicketSpan.innerText = (VALORTICKET - (VALORTICKET*valorDescuentoTotal));  
        });
    });
});

window.addEventListener("load", function(){
    const BTNRESUMEN = document.querySelector('#submit');
    let categoria = document.querySelector('#categoria');
    let pais = document.querySelector('#pais');
    BTNRESUMEN.addEventListener('click', function(){
        const VALORTICKET = 1000;
        let cantTickets = document.querySelector('#cantidad').value;
        let inputPagar = document.querySelector('#pagar');
        let valorSeleccionadoCategoria = parseInt(categoria.value);
        let valorSeleccionadoPais = parseInt(pais.value);
        let valorDescuentoCategoria = 0;
        let valorDescuentoPais = 0;
        let valorDescuentoTotal = 0;

        switch(valorSeleccionadoCategoria){
            case 0: valorDescuentoCategoria; break;
            case 1: valorDescuentoCategoria = 0.8; break;
            case 2: valorDescuentoCategoria = 0.5; break;
            default: valorDescuentoCategoria; break; 
        };
        switch(valorSeleccionadoPais){
            case 0: valorDescuentoPais = 0.1; break;
            default: valorDescuentoPais; break; 
        };

        valorDescuentoTotal = valorDescuentoCategoria + valorDescuentoPais;
        inputPagar.value = `Total a Pagar: $${(VALORTICKET - (VALORTICKET*valorDescuentoTotal))*cantTickets}`;
        alert(`Total a Pagar: $${(VALORTICKET - (VALORTICKET*valorDescuentoTotal))*cantTickets}`);
    });
});

window.addEventListener("load", function(){
    const BTNBORRAR = this.document.querySelector('#reset');
    const IMGSCUDERIA = document.querySelector('#imgScuderia');
    const SPANSCUDERIA = document.querySelector('#favScuderia');
    const VALORTICKET = 1000;
    const FORMULARIO_INPUT = this.document.querySelectorAll('input');
    const FORMULARIO_SELECT = this.document.querySelectorAll('select');
    let spanTicketValor = document.querySelector('#value');
    BTNBORRAR.addEventListener('click', function(){
        IMGSCUDERIA.style.display = 'none';
        SPANSCUDERIA.innerText = "";
        spanTicketValor.innerText = VALORTICKET;
        FORMULARIO_INPUT.forEach(item => {
            if(item.value != 'on' && item.value != 'Borrar' && item.value != 'Resumen'){
                item.value = "";
            }
        })
        
        FORMULARIO_SELECT.forEach(item => {
            item.value = -1;
        })
    })
})