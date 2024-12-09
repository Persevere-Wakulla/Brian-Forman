const modalContainer1 = document.getElementById('modal-container1');
const modalContainer2 = document.getElementById('modal-container2');
const modalContainer3 = document.getElementById('modal-container3');
const productPage = document.querySelector('.product-page');
const featuredItems = document.querySelector('.featured-container');
const productImg = document.getElementById('pic');
const loginNav = document.querySelector('.head-btn ');
const btn = document.querySelectorAll('nav button');
const closeBtn = document.querySelectorAll('.close');
const cancelBtn = document.querySelectorAll('.cancelbtn');
const navSide = document.querySelector('.nav-sidebar');
const shopNow = document.querySelectorAll('.shop-now');
const parentDiv = document.querySelector('.product-grid');
const aboutPage = document.querySelector('.about-page');
const contactPage = document.querySelector('.contact-page');
const cardPopUp = document.querySelector('.card-popUp');
const searchBar = document.getElementById('search-bar');
const greeting = document.querySelector('.greeting');
const loginBtn = document.getElementById('login');
const userName = document.getElementById('username');
const passWord = document.getElementById('password');
const cartPicture = document.getElementById('cart');
const cartModal = document.getElementById('cart-modal');
const cartContainer = document.querySelector('.cart-container');
const removeBtn = document.querySelectorAll('.remove');

let dataCart = null;
let userData = null;
let merchandise = null;

window.addEventListener('load', async function () {
    let response = await fetch('https://fakestoreapi.com/products');
    merchandise = await response.json();
    // console.log(merchandise);
    let response1 = await fetch('https://fakestoreapi.com/users');
    userData = await response1.json();
    let response2 = await fetch('https://fakestoreapi.com/carts');
    dataCart = await response2.json();
});

// make an array to hold the items
// event listener on add button pushes into array
// cart btn event => forEach the arr to display
let userCart = [undefined];
console.dir(userCart[0]);
let cartTotal = 0;


function showCard(elem, class1) {
    elem.style.display = class1
}

function shopNowBtn(elem1, elem2, class1, class2) {
    elem1.style.display = class1
    elem2.style.display = class2

}

function switchCard(elem1, elem2, elem3, class1, class2) {
    elem1.style.display = class1
    elem2.style.display = class2
    elem3.style.display = class2

}

function navBtns(elem1, elem2, elem3, elem4, class1, class2) {
    elem1.style.display = class1
    elem2.style.display = class2
    elem3.style.display = class2
    elem4.style.display = class2
}

navSide.addEventListener('click', function (ev) {
    const btnElem = ev.target.textContent.toLowerCase();
    let pD = [...parentDiv.children];
    pD.forEach((kid) => {
        // console.dir(kid.children[4]);
        // console.dir(btnElem);
        if(kid.children[4].textContent === btnElem || btnElem === 'all'){
            kid.style.display = 'flex';
        }
        else{
            kid.style.display = 'none';
        }
    })
    console.dir(pD);
    // const data = merchandise.filter(item => item.category === btnElem)
    // buildCard(data)
    // if (btnElem === 'all') {
    //     buildCard(merchandise)

    // }

})


btn.forEach((elem, index) => {
    elem.addEventListener('click', function (ev) {
        let btnElem = ev.target.textContent.toLowerCase()
        switch (btnElem) {
            case 'home':
                navBtns(featuredItems, productPage, aboutPage, contactPage, 'block', 'none')
                break;
            case 'about':
                navBtns(aboutPage, featuredItems, productPage, contactPage, 'block', 'none')
                break;
            case 'product':
                navBtns(productPage, featuredItems, aboutPage, contactPage, 'block', 'none')
                buildCard(merchandise)
                break;
            default:
                navBtns(contactPage, featuredItems, aboutPage, productPage, 'block', 'none')
        }
    })
})

shopNow.forEach(elem => {
    elem.addEventListener('click', function (ev) {
        shopNowBtn(featuredItems, productPage, 'none', 'block')
        buildCard(merchandise)
    })

})

closeBtn.forEach(elem => {
    elem.addEventListener('click', function (ev) {
        closeModal();
    })
})

function closeModal() {
    navBtns(modalContainer1, modalContainer2, modalContainer3, cartModal, 'none', 'none', 'none', 'none')
}

cancelBtn.forEach(elem => {
    elem.addEventListener('click', function (ev) {
        navBtns(modalContainer1, modalContainer2, modalContainer3, cartModal, 'none', 'none', 'none', 'none')
    })
})

loginNav.addEventListener('click', function (ev) {
    let click = ev.target.textContent.toLowerCase()
    if (click === 'login') {
        showCard(modalContainer1, 'block')
    } else {
        showCard(modalContainer2, 'block')
    }

});

loginBtn.addEventListener('click', (ev) => {
    ev.preventDefault();
    let myHeaders = new Headers();
    let user = JSON.stringify({
        username: userName.value,
        password: passWord.value
    });
    myHeaders.set('Content-Type', 'application/json');
    fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        body: user
    })
        .then(res => {
            let user = userData.find(user => userName.value === user.username && passWord.value === user.password);
            loginNav.style.display = 'none'
            closeModal();
            createLogin(user);
        })
        .catch((err) => {
            alert('incorrect login')
        })
});

cartPicture.addEventListener('click', (ev) => {
    if (userCart.length === 1 && userCart[0] === undefined) {
        showCard(cartModal, 'none')
        alert('Empty Cart')
    } else {
        showCard(cartModal, 'block')
        cartContainer.replaceChildren([])
        buildCart(userCart)
    }

})



function createLogin(user) {
    greeting.innerHTML += `<div class="alert">
    <span>Welcome Back</span> <span class="name">${user.name.firstname} ${user.name.lastname} </span>
    </div>`;
}


// function checkLoginInfo() {
//     console.log(userData);
//     console.log(passWord.value);
//     let user = userData.find(user => userName.value === user.username && passWord.value === user.password);
//     console.log(user);
//     if (user !== undefined) {
//         // alert('logged in');
//         greetingElem.innerHTML += `<div class="alert">
//         <span>Welcome Back</span> <span class="name">${user.name.firstname} ${user.name.lastname} </span>
//         </div>`
//     }
//     else {
//         alert('incorrect login')
//     }

// };


function buildCard(arr) {
    parentDiv.replaceChildren()
    arr.forEach(item => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card'
        const productImg = document.createElement('img');
        productImg.id = 'pic';
        productImg.className = 'thumb-nail';
        productImg.src = item.image;
        const productTitle = document.createElement('h3');
        productTitle.className = 'product-title'
        productTitle.id = 'title';
        productTitle.textContent = item.title;
        const productPrice = document.createElement('h3');
        productPrice.id = 'price';
        productPrice.textContent = `Price: $${item.price}`;
        const productDiv = document.createElement('div')
        productDiv.className = 'buy'
        const productInput = document.createElement('input');
        productInput.className = 'quanity';
        productInput.placeholder = '1';
        // console.dir(productInput.placeholder);
        // console.dir(productInput.value);
        productInput.type = 'text';
        const productBtn = document.createElement('button');
        productBtn.className = 'add';
        productBtn.type = 'button';
        productBtn.textContent = 'Add to Cart'
        // console.log(arr, productImg);
        cardContainer.append(productImg)
        cardContainer.append(productTitle)
        cardContainer.append(productPrice)
        productDiv.append(productInput)
        productDiv.append(productBtn)
        cardContainer.append(productDiv)
        let cat = document.createElement('p');
        cat.textContent = item.category;
        cardContainer.append(cat);
        cat.style.display = 'none';
        productBtn.addEventListener('click', () => {
            console.dir(item)
            userCart.forEach((ob) => {
                console.dir(item)
                console.dir(ob)
                if(userCart.length === 1 && userCart[0] === undefined){
                    userCart.pop();
                    userCart.push(item);
                }
                else if(ob.id === item.id){
                    productInput.placeholder = parseInt(productInput.placeholder) + 1;
                    console.dir(productInput.placeholder);
                    console.dir(productInput.value);
                }
                else{
                    userCart.push(item);
                }
            });
            console.dir(userCart);
        });
        parentDiv.append(cardContainer);
    })
    generateModalClicks();
}
// console.dir(parentDiv);

function generateModalClicks() {
    const modalSwitch = document.querySelectorAll('.thumb-nail')
    modalSwitch.forEach(elem => {
        elem.addEventListener('click', function (ev) {
            const cardTitle = ev.target.nextElementSibling.textContent;
            const cardItem = merchandise.filter(item => item.title === cardTitle);
            cardItem.forEach(item => {
                let card = ` <img class="modal-img" src="${item.image}" alt="${item.title}">
                <h3 class="title">${item.title}</h3>
                <p class="description">${item.description}</p>
                <h3 class="price">$${item.price}</h3>`
                cardPopUp.innerHTML = card
                return card
            })
            showCard(modalContainer3, 'block')
        })
    })
}



function buildCart(arr) {
    arr.forEach((item, index) => {
        cartContainer.innerHTML += `
        <div class="cart-item">
        <div class="cart-top">
            <img class="cart-img" src="${item.image}" alt="${item.title}">
            <h3 class="check-t">${item.title}</h3>
            </div>
            <div class="pm">
                <h3 class="check-p">$${item.price}</h3>
                <button id="${item.id}" class="remove" type="button">Remove</button>
            </div>
        </div>`

    })

    cartContainer.querySelectorAll('.remove').forEach(elem => {
        elem.addEventListener('click', (ev) => {
            let id = elem.id;
            elem.parentElement.parentElement.remove();
            let index = arr.indexOf(x => x.id === id);
            arr.splice(index, 1);
        })
    })
}

function addUpCart() {

}



searchBar.addEventListener('input', function (ev) {
    let search = ev.target.value.toLowerCase()
    let data = merchandise.filter(item => {
        if (item.description.includes(search)) {
            console.log(item);
            return item
        }
    })
    if (search && data.length > 0) {
        navBtns(productPage, aboutPage, featuredItems, contactPage, 'block', 'none')
        buildCard(data)

    } else if (data.length === 0) {
        alert('item does not exist')
    }
})