const btnOne =document.getElementById('vehicle')
const btnTwo = document.getElementById('spaceport')
const btnThree = document.getElementById('capsule')
const name = document.getElementById('name')
const bio = document.getElementById('description')
const pic = document.getElementById('pic')



window.addEventListener('load', function(){
    fetch('./data.json')
    .then((res) => res.json())
    .then((json) =>{
        //!? onload
        name.textContent = json.technology[0].name
        bio.textContent = json.technology[0].description
        pic.src = json.technology[0].images.portrait
        btnOne.classList.add('current')
        // ? buttons to change
        btnOne.addEventListener('click', () => {
            name.textContent = json.technology[0].name;
            bio.textContent = json.technology[0].description;
            pic.src = json.technology[0].images.portrait;
            btnOne.classList.add('current')
            btnTwo.classList.add('current')
            btnThree.classList.add('current')

        })
        btnTwo.addEventListener('click', () => {
            name.textContent = json.technology[1].name
            description.textContent = json.technology[1].description;
            pic.src = json.technology[1].images.portrait;
            btnTwo.classList.add('current')
            btnOne.classList.remove('current')
            btnThree.classList.remove('current')

        })

        btnThree.addEventListener('click', () => {
            name.textContent = json.technology[2].name
            description.textContent = json.technology[2].description;
            pic.src = json.technology[2].images.portrait
            btnThree.classList.add('current')
            btnOne.classList.remove('current')
            btnTwo.classList.remove('current')

        })

    })
});

const toggleBtn = document.getElementById('sidebar-toggle');
const navbar = document.querySelector('.nav-bar2');
const closeBtn = document.querySelector('.close-btn')



toggleBtn.addEventListener("click", function () {
    navbar.style.display = 'flex';
    toggleBtn.style.display = 'none'
});

closeBtn.addEventListener("click", function () {
    toggleBtn.style.display = 'block'
    navbar.style.display = 'none'
});