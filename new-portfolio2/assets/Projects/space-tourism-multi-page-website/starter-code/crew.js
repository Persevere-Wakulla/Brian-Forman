const btnOne = document.getElementById('btn1')
const btnTwo = document.getElementById('btn2')
const btnThree = document.getElementById('btn3')
const btnFour = document.getElementById('btn4')
const name = document.getElementById('name')
const bio = document.getElementById('bio')
const pic = document.getElementById('pic')
const role = document.getElementById('role')


window.addEventListener('load', function () {
    fetch('./data.json')
        .then((res) => res.json())
        .then((json) => {
            //!? onload
            name.textContent = json.crew[0].name
            bio.textContent = json.crew[0].bio
            role.textContent = json.crew[0].role
            pic.src = json.crew[0].images.png
            btnOne.classList.add('current')
            // ? buttons to change
            btnOne.addEventListener('click', () => {
                name.textContent = json.crew[0].name
                bio.textContent = json.crew[0].bio
                role.textContent = json.crew[0].role
                pic.src = json.crew[0].images.png
                btnOne.classList.add('current')
                btnTwo.classList.add('current')
                btnThree.classList.add('current')
                btnFour.classList.add('current')
            });

            btnTwo.addEventListener('click', () => {
                name.textContent = json.crew[1].name
                bio.textContent = json.crew[1].bio
                role.textContent = json.crew[1].role
                pic.src = json.crew[1].images.png
                btnTwo.classList.add('current')
                btnOne.classList.remove('current')
                btnThree.classList.remove('current')
                btnFour.classList.remove('current')
            })

            btnThree.addEventListener('click', () => {
                name.textContent = json.crew[2].name
                bio.textContent = json.crew[2].bio
                role.textContent = json.crew[2].role
                pic.src = json.crew[2].images.png
                btnThree.classList.add('current')
                btnOne.classList.remove('current')
                btnTwo.classList.remove('current')
                btnFour.classList.remove('current')
            })

            btnFour.addEventListener('click', () => {
                name.textContent = json.crew[3].name
                bio.textContent = json.crew[3].bio
                role.textContent = json.crew[3].role
                pic.src = json.crew[3].images.png
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



toggleBtn.addEventListener("click", function () {
    navbar.style.display = 'flex';
    toggleBtn.style.display = 'none'
});

closeBtn.addEventListener("click", function () {
    toggleBtn.style.display = 'block'
    navbar.style.display = 'none'
});