const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            }else{
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

//function table

const ShowNotes2 = ()=>{
    const button = document.querySelector('button');
    const nav = document.querySelector('.wrap');
    

    button.addEventListener('click', ()=> {
        //Toggle Nav
        nav.classList.toggle('active');
      
        //Burger Animation
        //burger.classList.toggle('toggle');
    });
}

ShowNotes2();


function showNotes(){
    var x = document.getElementById("TableShowNotes");
    if(x.style.display === "none"){
        x.style.display = "inline-block";
    }
    else{
        x.style.display = "none"
    }
}

navSlide();