function init() {
    fetch("https://kea-alt-del.dk/t5/api/categories").then(r => r.json()).then(
        function (data) {
            categoriesReceived(data)
        })
}

init();

function categoriesReceived(cats) {
    createNavigation(cats);
    createSections(cats);
    fetchProducts();
}

function createSections(categories) {
    categories.forEach(categorie => {
        const section = document.createElement("section");
        section.setAttribute("id", categorie);
        const h1 = document.createElement("h1");
        h1.textContent = categorie;
        section.appendChild(h1);
        document.querySelector("main").appendChild(section);
    })
}

function createNavigation(categories) {
    categories.forEach(dish => {
        const a = document.createElement("a");
        a.textContent = dish;
        a.setAttribute("href", `#${dish}`)
        document.querySelector("nav").appendChild(a);
    })
}
//fetch data//

function fetchProducts() {
    fetch("https://kea-alt-del.dk/t5/api/productlist")
        .then(function (response) {
            console.log(response)
            return response.json();
        })
        .then(function (data) {
            dataReceived(data);
        })
}

//loop through products//
function dataReceived(products) {
    products.forEach(showProduct)
}

//executed once for each product//
function showProduct(myProduct) {
    console.log(myProduct);


    // //finding the template//
    const temp = document.querySelector("#productTemplate").content;
    //clone the template// can be copy or called clone//
    const myCopy = temp.cloneNode(true);

    const img = myCopy.querySelector(".img-dish");
    img.setAttribute("src", `https://kea-alt-del.dk/t5/site/imgs/small/${myProduct.image}-sm.jpg`);

    if (myProduct.discount == 0) {
        myCopy.querySelector(".price").textContent = myProduct.price + ", -";
    } else {
        let discount = myProduct.price - (myProduct.price * myProduct.discount * 0.01);
        myCopy.querySelector(".price").textContent = discount + ",-";
        myCopy.querySelector(".price-discount").classList.remove("hidden");
        myCopy.querySelector(".price-discount").textContent = myProduct.price + ",-";
    }

    if (!myProduct.vegetarian) {
        myCopy.querySelector(".vegetarian").remove();
        myCopy.querySelector("article").classList.add("veg");
    }

    if (myProduct.soldout == false) {
        myCopy.querySelector(".soldOut").classList.add("hidden");
    }

    if (!myProduct.alcohol) {
        myCopy.querySelector(".alcohol").remove();
        myCopy.querySelector("article").classList.add("alcoholic");
    }

    //fill out the template//
    console.log("what are you? I am a " + myProduct.category);
    myCopy.querySelector(".dish-title").textContent = myProduct.name;
    myCopy.querySelector(".short-description").textContent = myProduct.shortdescription;

    myCopy.querySelector("button").addEventListener("click", () => {
        fetch(`https://kea-alt-del.dk/t5/api/product?id=`+myProduct.id)
            .then(res => res.json())
            .then(showDetails);
    });


    const parentElem = document.querySelector("section#" + myProduct.category);
    parentElem.appendChild(myCopy);

    //append the template//
}


const modal = document.querySelector(".modal-background");

//the moment we have our data//
function showDetails(data) {
    modal.querySelector(".modal-name").textContent = data.name;
    modal.querySelector(".modal-description").textContent = data.longdescription;
    modal.querySelector(".modal-price").textContent = data.price + ", -";

    //...
    modal.classList.remove("hidden");
}

//FILTERS//

const veggieFilter = document.querySelector("#veggieFilter");
veggieFilter.addEventListener("click", veggieFilterClicked);

function veggieFilterClicked() {
    const articles = document.querySelectorAll("article.veg");
    articles.forEach(elem => {
        elem.classList.toggle("hidden");
    })
}

const alcoholFilter = document.querySelector("#alcoholFilter");
alcoholFilter.addEventListener("click", alcoholFilterClicked);

function alcoholFilterClicked() {
    const articles = document.querySelectorAll("article:not(.alcoholic)");
    articles.forEach(elem => {
        elem.classList.toggle("hidden");
    })
}

const lactoseFilter = document.querySelector("#lactoseFilter");
lactoseFilter.addEventListener("click", lactoseFilterClicked);

function lactoseFilterClicked() {
    const articles = document.querySelectorAll("article:not(.lactose)");
    articles.forEach(elem => {
        elem.classList.toggle("hidden");
    })
}


//MODAL//

//close the modal when clicked
modal.addEventListener("click", () => {
    modal.classList.add("hidden");
});
