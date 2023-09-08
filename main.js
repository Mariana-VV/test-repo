const colors = [
    {hex:'#f44367' , rgb:'244,67,54'},
    {hex: '#171d63' ,rgb:'23,29,99' },
    {hex: '#9c1dff' ,rgb: '156,29,276'},
    {hex:  '#3f5165',rgb:'63,81,101' },
];

function  createColorCardsMarkup(colors)  {
  const markup = colors.map((color)=>{
    return `<div class="color-card" style = 'display: flex;'>
        <div  
        class="color-swatch"  
        data-hex="${color.hex}"  
        data-rgb="${color.rgb}"  
        style= "background-color:${color.hex}; margin-right: 20px;margin-bottom:50px"
        
        ></div>
    
    <div class="color-meta" style="margin-top:100px">
        <p>${color.hex}</p>
        <p>${color.rgb}</p>
    </div>
</div>
`})
.join("");

console.log(markup);
return markup;
}
const palleteContainer = document.querySelector('.js-palette');
const markUp = createColorCardsMarkup(colors);
palleteContainer.insertAdjacentHTML('afterbegin', markUp);

palleteContainer.addEventListener('click', onPalleteContainerClick)

function onPalleteContainerClick(event) {
  if(!event.target.classList.contains('color-swatch') ) {
    return;
  }
  const swatchEl = event.target;
  const parentColorCard = swatchEl.closest('.color-card');
  parentColorCard.classList.add('active');
  document.body.style.backgroundColor = swatchEl.dataset.hex;
}

