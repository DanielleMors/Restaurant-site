function init() {
    fetch("https://kea-alt-del.dk/t5/api/categories").then(r => r.json()).then(
        function (data) {
            categoriesReceived(data)
        }
    )
}

init();

function categoriesReceived(cats) {
    createNavigation(cats);
    createSections(cats);
}

function createSections(categories) {
    categories.forEach(categorie => {
        const section = document.createElement("section");
        const h1 = document.createElement("h1");
        h1.textContent = categorie;

        document.querySelector("main").appendChild(h1);
        document.querySelector("main").appendChild(section);
    })
}

function createNavigation(categories) {
    categories.forEach(cat => {
        const a = document.createElement("a");
        a.textContent = cat;
        a.setAttribute("href", `#${cat}`)
        document.querySelector("nav").appendChild(a);
    })
}

////fetch data//
//fetch("https://kea-alt-del.dk/t5/api/productlist")
//    .then(function (response) {
//        return response.json();
//    })
//
//    .then(function (data) {
//        console.log(data)
//        dataReceived(data);
//    })
////when we have our data
//
////loop through products//
//function dataReceived(products) {
//    products.forEach(showProduct)
//}
//
////executed once for each product//
//function showProduct(myProduct) {
//    console.log(myProduct)
//
//    //finding the template//
//    const temp = document.querySelector("#productTemplate").content;
//
//    //clone the template// can be copy or called clone//
//    const myCopy = temp.cloneNode(true);
//
//    if (myProduct.discount == 0) {
//        myCopy.querySelector(".price").textContent = myProduct.price + ", -";
//    } else {
//        let discount = myProduct.price - (myProduct.price * myProduct.discount * 0.01);
//        myCopy.querySelector(".price").textContent = myProduct.price + ",-";
//        myCopy.querySelector(".price-discount").classList.remove("hidden");
//        myCopy.querySelector(".price-discount").textContent = discount + ",-";
//    }
//
//    if (!myProduct.vegetarian) {
//        myCopy.querySelector(".vegetarian").remove();
//    }
//
//    if (myProduct.soldout == false) {
//        myCopy.querySelector(".soldOut").classList.add("hidden");
//    }
//
//    //fill out the template//
//    myCopy.querySelector(".dish-title").textContent = myProduct.name;
//    myCopy.querySelector(".short-description").textContent = myProduct.name;
//
//    //append the template//
//    document.querySelector(".starters").appendChild(myCopy);
//}
//
//









//still need to add this!!!!!!!!!

//if (myProduct.soldout == true)  {
//    const p = document.querySelector("p");
//    p.textContent = "Sold Out";
//    p.classList.add("soldOut");
//    myCopy.querySelector(".soldOut").appendChild
//}

//    //setup classes for filtering
//    // 1.find the artticle
//    const.article = myCopy.querySelector("article");
//    // 2. add classes
//    if (myProduct.vegetarian) {
//        article.classList.add("vegetarian");
//    }

//
//const veggieFilter = document.querySelector("#veggieFilter");
//veggieFilter.addEventListener("click", veggieFilterClicked);
//
//function veggieFilterClicked() {
//    const articles = document.querySelectorAll("article:not(.vegetarian)");
////    console.log(articles)
//}
