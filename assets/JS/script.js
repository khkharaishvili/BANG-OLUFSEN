

let	burger = document. getElementById('burger');
let menu = document.getElementById('menu')
burger.addEventListener('click',function(){
	this.classList.toggle('active');
	menu.classList.toggle('open');

})


function myFunction(x) {
  x.classList.toggle("change");
}


let all_svg_buttons = document.getElementsByClassName('icon');
let bl = all_svg_buttons.length;

for (let i =0; i <bl; i++) {
    all_svg_buttons [i].addEventListener('click', function(){

        this.classList.toggle('active');
            
        if (this.classList.contains('active')) {
            this.style.background = '#f2f2f2';
        } else {    
            this.style.background = '#fff';
         } 
    
    })
}

