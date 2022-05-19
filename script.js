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

let currentColor='black';


// Gets the color from the color choosing block when clicked.
allColors.forEach(function(element){

        element.addEventListener('click',function(){
            const x = document.querySelector(`.${currentColor}`);
            x.style.borderColor=`chartreuse`;
            currentColor=element.classList.value.slice(6);
            element.style.borderColor='darkorange';
        });
});



function ChooseColor(){

}
let isPointerDown=false;
gridContainer.addEventListener('pointerdown',function(){
    isPointerDown=true;
});
gridContainer.addEventListener('pointerup', function(){
    isPointerDown=false;
});


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
            if(isPointerDown==true){
            if(oneBox.style.background!=`${currentColor}`){
            oneBox.style.background=`${currentColor}`;}}})
    }



}



slider.addEventListener('mousemove', SliderMoved);
