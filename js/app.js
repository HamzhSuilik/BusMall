'use strict'

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const img1=document.getElementById("img1");
const img2=document.getElementById("img2");
const img3=document.getElementById("img3");

const list=document.getElementById("list");

let random1=0;
let random2=0;
let random3=0;

let random_new_1=0;
let random_new_2=0;
let random_new_3=0;

let repetition=0;


// ***************************************************************************

function Products (name,image_path){
    
    let shown;
    let selected;

    this.name = name;
    this.image_path = image_path;
    this.shown=0;
    this.selected=0;
}

 let all_product=[
     new Products('bag','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/bag.jpg')
     ,new Products('banana','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/banana.jpg')
     ,new Products('bathroom','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/bathroom.jpg')
     ,new Products('boots','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/boots.jpg')
     ,new Products('breakfast','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/breakfast.jpg')
     ,new Products('bubblegum','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/bubblegum.jpg')
     ,new Products('chair','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/chair.jpg')
     ,new Products('cthulhu','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/cthulhu.jpg')
     ,new Products('dog-duck','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/dog-duck.jpg')
     ,new Products('dragon','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/dragon.jpg')
     ,new Products('pen','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/pen.jpg')
     ,new Products('pet-sweep','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/pet-sweep.jpg')
     ,new Products('scissors','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/scissors.jpg')
     ,new Products('shark','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/shark.jpg')
     ,new Products('sweep','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/sweep.png')
     ,new Products('tauntaun','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/tauntaun.jpg')
     ,new Products('unicorn','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/unicorn.jpg')
     ,new Products('usb','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/usb.gif')
     ,new Products('water-can','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/water-can.jpg')
     ,new Products('wine-glass','https://raw.githubusercontent.com/HamzhSuilik/BusMall/main/img/wine-glass.jpg')
 ];


function update_image(){
    repetition++;

    random_new_1 = Math.round(getRandomArbitrary(0,19));
    while(random_new_1 === random1 || random_new_1 === random2 ||random_new_1 === random3){
      random_new_1 = Math.round(getRandomArbitrary(0,19));
      console.log('****1111***')
    }
    random1=random_new_1;

    random_new_2 = Math.round(getRandomArbitrary(0,19));
    while(random_new_2 === random1 || random_new_2 === random2 ||random_new_2 === random3){
      random_new_2 = Math.round(getRandomArbitrary(0,19));
      console.log('****222***')
    }
    random2=random_new_2;

    random_new_3 = Math.round(getRandomArbitrary(0,19));
    while(random_new_3 === random1 || random_new_3 === random2 ||random_new_3 === random3){
      random_new_3 = Math.round(getRandomArbitrary(0,19));
      console.log('****33333***')
    }
    random3=random_new_3;



    all_product[random1].shown++;
    all_product[random2].shown++;
    all_product[random3].shown++;

    img1.src=all_product[random1].image_path;
    img2.src=all_product[random2].image_path;
    img3.src=all_product[random3].image_path;
    console.log(repetition)
}

update_image();


img1.addEventListener("click",function() {
    if(repetition<24){
        all_product[random1].selected++;
        update_image();
    }else{
        all_product[random1].selected++;
        update_image();
        createChart();
        show_results();
    }
  });

  img2.addEventListener("click",function() {
    if(repetition<24){
        all_product[random2].selected++;
        update_image();
    }else{
        all_product[random2].selected++;
        update_image();
        createChart();
        show_results();
    }
  });

  img3.addEventListener("click",function() {
    if(repetition<24){
        all_product[random3].selected++;
        update_image();
    }else{
        all_product[random3].selected++;
        update_image();
        createChart();
        show_results();
    }
  });


  img1.addEventListener("mouseenter",function() {
    img1.style.borderColor = 'red';
  });

  img2.addEventListener("mouseenter",function() {
    img2.style.borderColor = 'red';
  });
  img3.addEventListener("mouseenter",function() {
    img3.style.borderColor = 'red';
  });
 
  img1.addEventListener("mouseleave",function() {
    img1.style.borderColor = '#ff7ac300';
  });
  img2.addEventListener("mouseleave",function() {
    img2.style.borderColor = '#ff7ac300';
  });
  img3.addEventListener("mouseleave",function() {
    img3.style.borderColor = '#ff7ac300';
  });

  function show_results(){
      img1.style.display = "none";
      img2.style.display = "none";
      img3.style.display = "none";

      for(let i=0;i<19;i++){ 
        add_li(all_product[i].name+' had '+all_product[i].shown+' votes and was shown '+all_product[i].selected+' times');
      }
      
  
  }

  function add_li(text) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    list.appendChild(li);
  }