const elemento = document.querySelectorAll('.anim-left, .anim-right');

function animarElementos(){
    elemento.forEach(element =>{
        const posicion = element.getBoundingClientRect().top;
        console.log(posicion);
        const alturaPantalla = window.innerHeight;
        console.log(alturaPantalla);

        if(posicion < alturaPantalla -100){
            element.classList.add('show');
        }
    });
}


function navegar(){
    const proyecto = document.querySelectorAll('.proyecto');
    const url = [
        'https://gavela-r.github.io/pokedex/',
        'https://github.com/gavela-r/reactTresEnRaya',
        'https://github.com/gavela-r/Tapas',
        'https://github.com/gavela-r/TFG',
        'https://gavela-r.github.io/memoria/',
    ];

    proyecto.forEach((enlace, index) =>{
        enlace.addEventListener('click', () =>{
            window.open(url[index], '_blank');
        })
    })
}
window.addEventListener('scroll', animarElementos);
