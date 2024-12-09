const toggleBtn = document.getElementById('sidebar-toggle');
const navbar = document.querySelector('.nav-bar2');
const closeBtn = document.querySelector('.close-btn')
const destination = document.querySelectorAll('.moon-btn')
const topNav = document.querySelectorAll('.topNav')
let spaceData = null;


toggleBtn.addEventListener("click", function () {
    navbar.style.display = 'flex';
    toggleBtn.style.display = 'none'
});

closeBtn.addEventListener("click", function () {
    toggleBtn.style.display = 'block'
    navbar.style.display = 'none'
});

const planetName = document.getElementById('name')
const content = document.getElementById('describe')
const pic = document.getElementById('pic')
const travel = document.getElementById('travel')
const distance = document.getElementById('distance')



window.addEventListener('load', async function () {
    let response = await fetch('./data.json')
    spaceData = await response.json();
})

window.addEventListener('load',() => {
    topNav.forEach(elem => {
        console.log();
        if(elem.href.includes(window.location.pathname)){

            elem.className += " active2"
        }
    })
})

// ********** Destination ****************

destination.forEach((item,index) => {
    item.addEventListener('click', (e) => {
        let name = e.target.textContent
        console.log(spaceData)
        dataContent(name,spaceData)
        addActive(destination, index ," active2")
    })
})

function dataContent (name,obj) {
    let desData = obj.destinations.find(planets => planets.name === name)
    console.log(desData,name);
    planetName.textContent = `${desData.name}`
    content.textContent = `${desData.description}`
    pic.src = `${desData.images.png}`
    travel.textContent = `${desData.travel}`
    distance.textContent = `${desData.distance}`
};

// ********** CREW PAGE **********

const crews = document.querySelectorAll('.dot')
const crewName = document.getElementById('name')
const bioLog = document.getElementById('bio')
const crewPic = document.getElementById('crew-pic')
const role = document.getElementById('role')


function addCrew(index){
    crewData(index,spaceData)
}

function crewData(index, obj){
    let crew = obj.crew[index]
    console.log(crew);
    crewName.textContent =`${crew.name}`
    bioLog.textContent = `${crew.bio}`
    crewPic.src = `${crew.images.png}`
    role.textContent =`${crew.role}`
    addActive(crews ,index, " active")
}

function addActive(elem,index,classes) {
    for(let i = 0; i < elem.length; i++){
        elem[i].className = elem[i].className.replace(classes, "")
    }
    elem[index].className += classes
}

// ************** Technology ************

const tech = document.querySelectorAll('.btn')
const techName = document.getElementById('name')
const bio = document.getElementById('description')
const techPic = document.getElementById('pic')

tech.forEach((item, index) =>{
    item.addEventListener('click', (e) =>{
        techContent(index, spaceData)
    });
});

function techContent(index, obj){
    let vehdata = obj.technology[index]
    techName.textContent = `${vehdata.name}`;
    bio.textContent = `${vehdata.description}`;
    techPic.src =` ${vehdata.images.portrait}`
    addActive(tech, index ," active3");
}
