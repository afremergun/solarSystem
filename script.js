const header = document.querySelector('h1')
const input = document.querySelector('input')
const select = document.querySelector('select')
const btn = document.getElementById('button')
const input_container = document.getElementById('container')
const flex_container = document.querySelector('.flex-container')
const img_container = document.querySelector('.img-container')
const img = document.getElementById('for-img')
const content = document.getElementById('content')

document.body.style.backgroundImage = "url('./img/galaxy.gif')"



header.style.textAlign = "center"
header.style.color = "white"

input_container.style.display = "flex"
input_container.style.justifyContent = "center"
input_container.style.alignItems = "center"
input_container.style.gap = '20px'
input_container.style.margin = "20px auto"


flex_container.style.display = 'flex'
flex_container.style.justifyContent = "center"
flex_container.style.alignItems = "center"
flex_container.style.margin = "50px auto"
flex_container.style.gap = "20px"
flex_container.style.backgroundColor = "rgba(255,255,255,0.100)"
flex_container.style.padding = '30px'

btn.style.width = "150px"
btn.style.height = "30px"
input.style.width = "150px"
input.style.height = "30px"
select.style.width = "150px"
select.style.height = "30px"

content.style.color = "white"
content.style.fontSize = "20px"

btn.addEventListener('click',function(){
  let kilo = Number(input.value)
  kilo /= 9.81
  let gezegen = select.value
  let sonuc = 0

  if(input.value.trim() != "" && select.value != "Bir gezegen seç" && !isNaN(input.value)){
    
    if(gezegen == 'Earth'){
      img.setAttribute("src", "./img/earth.png")
      sonuc = kilo * 9.81
    }
    else if(gezegen == 'Jupiter'){
      img.setAttribute('src',"./img/jupiter.png")
      sonuc = kilo * 24.8
    }
    else if(gezegen == "Mars"){
      img.setAttribute('src',"./img/mars.png")
      sonuc = kilo * 3.7
    }
    else if(gezegen == "Mercury"){
      img.setAttribute('src',"./img/mercury.png")
      sonuc = kilo * 3.7
    }
    else if(gezegen == 'Moon'){
      img.setAttribute('src','./img/moon.png')
      sonuc = kilo * 1.6
    }
    else if(gezegen == "Neptune"){
      img.setAttribute("src","./img/neptune.png")
      sonuc = kilo * 11.15
    }
    else if(gezegen == "Pluto"){
      img.setAttribute('src','./img/pluto.png')
      sonuc = kilo * 0.62
    }
    else if(gezegen == "Saturn"){
      img.setAttribute('src','./img/saturn.png')
      sonuc = kilo * 10.44
    }
    else if(gezegen == "Uranus"){
      img.setAttribute('src',"./img/uranus.png")
      sonuc = kilo * 8.87
    }
    else if (gezegen == "Venus"){
      img.setAttribute('src',".//venus.png")
      sonuc = kilo * 8.87
    }



    content.innerHTML = `seçmiş olduğunuz gezegen: <span class="sekillendir">${gezegen}</span>  ve bu gezegendeki ağırlığınız: <span class="sekillendir">${sonuc.toFixed(2)}</span> kg`

  }else{
    content.textContent = "kilonu rakamlarla gir ve bir gezegen seçtiğinden emin ol"
  }
})