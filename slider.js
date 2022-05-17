const slider=document.getElementById('slider');
const valueOutput=document.getElementById('dimension-value');

valueOutput.innerText=`Value: ${slider.value}`;
slider.oninput=function(){
valueOutput.innerText=`Value: ${slider.value}`;
}

slider.addEventListener('mousemove', function(){
let x=slider.value;
let color=('linear-gradient(90deg,pink '+((x/32)*100)+'%, white '+((x/32)*100)+'%)');
slider.style.background=color;
})
