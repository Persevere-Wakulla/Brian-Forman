const btnOne =document.getElementById('moon')
const btnTwo = document.getElementById('mars')
const btnThree = document.getElementById('europa')
const btnFour = document.getElementById('titan')
const planetName = document.getElementById('name')
const content = document.getElementById('describe')
const pic = document.getElementById('pic')
const travel = document.getElementById('travel')
const distance = document.getElementById('distance')

window.addEventListener('load', function(){
    fetch('./data.json')
    .then((res) => res.json())
    .then((json) =>{
        //!? onload
        planetName.textContent = json.destinations[0].name
        content.textContent = json.destinations[0].description
        travel.textContent = json.destinations[0].travel
        distance.textContent = json.destinations[0].distance
        pic.src = json.destinations[0].images.png
        btnOne.classList.add('current')
        // ? buttons to change
        btnOne.addEventListener('click', () => {
            planetName.textContent = json.destinations[0].name
            content.textContent = json.destinations[0].description
            travel.textContent = json.destinations[0].travel
            distance.textContent = json.destinations[0].distance
            pic.src = json.destinations[0].images.png
            btnOne.classList.add('current')
            btnTwo.classList.add('current')
            btnThree.classList.add('current')
            btnFour.classList.add('current')
        })
        btnTwo.addEventListener('click', () => {
            planetName.textContent = json.destinations[1].name
            content.textContent = json.destinations[1].description
            travel.textContent = json.destinations[1].travel
            distance.textContent = json.destinations[1].distance
            pic.src = json.destinations[1].images.png
            btnTwo.classList.add('current')
            btnOne.classList.remove('current')
            btnThree.classList.remove('current')
            btnFour.classList.remove('current')
        })
        
        btnThree.addEventListener('click', () => {
            planetName.textContent = json.destinations[2].name
            content.textContent = json.destinations[2].description
            travel.textContent = json.destinations[2].travel
            distance.textContent = json.destinations[2].distance
            pic.src = json.destinations[2].images.png
            btnThree.classList.add('current')
            btnOne.classList.remove('current')
            btnTwo.classList.remove('current')
            btnFour.classList.remove('current')
        })
        btnFour.addEventListener('click', () => {
            planetName.textContent = json.destinations[3].name
            content.textContent = json.destinations[3].description
            travel.textContent = json.destinations[3].travel
            distance.textContent = json.destinations[3].distance
            pic.src = json.destinations[3].images.png
            btnFour.classList.add('current')
            btnOne.classList.remove('current')
            btnTwo.classList.remove('current')
            btnThree.classList.remove('current')
        })
    })
});

const toggleBtn = document.getElementById('sidebar-toggle');
const navbar = document.querySelector('.nav-bar2');
const closeBtn = document.querySelector('.close-btn')



toggleBtn.addEventListener("click", function (){
    navbar.style.display = 'flex';
    toggleBtn.style.display = 'none'
});

closeBtn.addEventListener("click", function () {
    toggleBtn.style.display = 'block'
    navbar.style.display = 'none'
  });