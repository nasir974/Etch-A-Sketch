const gridSlider = document.querySelector('.grid-slider');
const gridSize = document.querySelector('.grid-size');
const grid=document.querySelector('.grid');
const eraserBtn=document.querySelector('.eraser-btn');
const colorBtn=document.querySelector('.color-btn');
const undoBtn=document.querySelector('.undo-btn');
const pointerBtn=document.querySelector('.pointer-btn');
const colorInput = document.querySelector('.color-input');
const randomBtn = document.querySelector('.random-btn');
const rollerBtn = document.querySelector('.roller-btn');


function newGrid(){
      colorInput.value= '#000000';
      let num= gridSlider.value * gridSlider.value;
      let size= gridSlider.value;
      for(let i=0; i<num; i++){
            const gridItem= document.createElement('div');
            gridItem.classList.add('grid-item');
            undoBtn.addEventListener('click',()=>{
                  gridItem.style.background= "none";
            },false);
            grid.style= `
            grid-template-columns:  repeat(${size},1fr);
            grid-template-rows: repeat(${size},1fr);`;
            grid.append(gridItem);
        
      };
};
function changeGrid(){
      gridSlider.addEventListener('input',()=>{
            gridSize.textContent = `${gridSlider.value} X ${gridSlider.value} `;
            grid.innerHTML='';
            newGrid();
      },false);
}
changeGrid();
window.onload= newGrid();
function changeDivBg(){
     
            grid.addEventListener('mouseover', (e)=>{
                  e.target.addEventListener('mouseenter',()=>{
                        e.target.style=`background: #F7A440;`; 
                  },false);
                  e.target.addEventListener('mouseleave',()=>{
                        e.target.style=`background: black;`;  
                  },false);
            },false);  
  
};     
changeDivBg();


eraserBtn.addEventListener('click', ()=>{
            grid.addEventListener('mouseover', (e)=>{
                  e.target.addEventListener('mouseenter',()=>{
                        e.target.style=`background: none;`; 
                  },false);
                  e.target.addEventListener('mouseleave',()=>{
                        e.target.style=`background: none;`;  
                  },false);
            },false);      
},false);
pointerBtn.addEventListener('click', ()=>{
            grid.addEventListener('mouseover', (e)=>{
                  e.target.addEventListener('mouseenter',()=>{
                        e.target.style=`background: #E05D5D;`; 
                  },false);
                  e.target.addEventListener('mouseleave',()=>{
                        e.target.style=`background: ${colorInput.value};`;  
                  },false);
            },false);      
},false);
randomBtn.addEventListener('click', ()=>{
            grid.addEventListener('mouseover', (e)=>{
                  let randomColor= "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
                  e.target.addEventListener('mouseenter',()=>{
                        e.target.style=`background: #E05D5D;`; 
                  },false);
                  e.target.addEventListener('mouseleave',()=>{
                        e.target.style=`background: ${randomColor};`;  
                  },false);
                  },false);     
},false);
colorBtn.addEventListener('click', ()=>{
            grid.addEventListener('mouseover', (e)=>{
                  e.target.addEventListener('mouseenter',()=>{
                        e.target.style=`background:#E05D5D;`; 
                  },false);
                  e.target.addEventListener('mouseleave',()=>{
                        e.target.style=`background: ${colorInput.value};`;  
                  },false);
                  },false);     
},false);






