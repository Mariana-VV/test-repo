const colors = [
    {hex:'#f44367' , rgb:'244,67,54'},
    {hex: '#171d63' ,rgb:'23,29,99' },
    {hex: '#9c1dff' ,rgb: '156,29,276'},
    {hex:  '#3f5165',rgb:'63,81,101' },
];

function  createColorCardsMarkup(colors)  {
  return  colors.map((color)=>{
    return `
    <div class="color-card">
        <div  
        class="color-swatch"  
        data-hex="${color.hex}"  
        data-rgb="${color.rgb}"  
        style="background-color: ${color.hex}">
        
        </div>
    <div class="color-meta">
        <p>${color.hex}</p>
        <p>${color.rgb}</p>
    </div>
</div>
`})
.join(" ");

}

const palleteContainer = document.querySelector('.js-palette');
const markUp = createColorCardsMarkup(colors);
palleteContainer.insertAdjacentHTML('afterbegin', markUp);

palleteContainer.addEventListener('click', onPalleteContainerClick)

function onPalleteContainerClick(event) {
  if(!event.target.classList.contains('color-swatch') ) {
    return;
  }
  console.log(event.target);
}