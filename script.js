const gridContainer=document.querySelector('#grid');
const allBoxes=document.querySelectorAll('.box');
const black=document.querySelector('.black');
const white=document.querySelector('.white');
const red=document.querySelector('.red');
const green=document.querySelector('.green');
const blue=document.querySelector('.blue');
const allColors=document.querySelectorAll('.color');


//grid width,height is 400px

// Slider functionality
const slider=document.getElementById('slider');
const valueOutput=document.getElementById('dimension-value');

valueOutput.innerText=`Value: ${slider.value}`;
slider.oninput=function(){
valueOutput.innerText=`Value: ${slider.value}`;
}
let sliderValue=1;
function SliderMoved(){
    if(sliderValue!=slider.value){
        sliderValue=slider.value;
        let color=('linear-gradient(90deg,pink '+((sliderValue/32)*100)+'%, white '+((sliderValue/32)*100)+'%)');
        slider.style.background=color;
        CreateGrid(sliderValue);
        }
}

// let currentColor;
// const arrayAllColors=Array.from(allColors);



// arrayAllColors.forEach(function(){
//         this.addEventListener('click',function(){
//             currentColor=this.name;
//             console.log(currentColor);
//         });
// });



// function ChooseColor(){

// }



// Creates the grid - firstly deletes the previous boxes, then creates new boxes with the dimensions given. An event listener is added to each of the boxes to know, when the cursor enters their perimeter.
// when entered, if the color of the box isn't the one selected by the human, it changes it to the needed color.
function CreateGrid(dimensions){
    let boxAmount=dimensions*dimensions;
    gridContainer.innerHTML='';
    for(let i=1;i<=boxAmount;i++){
        const oneBox=document.createElement('div');
        oneBox.classList.add('box', 'grid'+i);
        gridContainer.appendChild(oneBox);
        oneBox.style.width=`${400/dimensions}`+`px`;
        oneBox.style.height=`${400/dimensions}`+`px`;
        oneBox.addEventListener('pointerenter',function(){
            if(oneBox.style.background!='white'){
            oneBox.style.background='white';}})
    }


}



slider.addEventListener('mousemove', SliderMoved);
