//fetch data//
fetch("https://kea-alt-del.dk/t5/api/productlist")
.then(function (response){
    return response.json();
})

.then(function (data) {
    console.log(data)
    dataReceived(data);
})
//when we have our data

//loop through products//
function dataReceived(products) {
products.forEach(showProduct)
}

//executed once for each product//
function showProduct(myProduct) {
    console.log(myProduct)

//finding the template//
const temp = document.querySelector("#productTemplate").content;

//clone the template// can be copy or called clone//
const myCopy = temp.cloneNode(true);


//if (!myProduct.discount) {
//    myCopy.querySelector(".discount").classList.add("hidden");
//}   //ADD CLASS TO CSS "HIDDEN" //

if (!myProduct.vegetarian) {
    myCopy.querySelector(".vegetarian").remove();
}

if (myProduct.soldout == true) {
myCopy.querySelector(".soldOut").classList.add("hidden");

}


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
//

//fill out the template//
myCopy.querySelector(".dish-title").textContent = myProduct.name;
myCopy.querySelector(".short-description").textContent = myProduct.name;

//append the template//
document.querySelector(".starters").appendChild(myCopy);
}
//
//const veggieFilter = document.querySelector("#veggieFilter");
//veggieFilter.addEventListener("click", veggieFilterClicked);
//
//function veggieFilterClicked() {
//    const articles = document.querySelectorAll("article:not(.vegetarian)");
////    console.log(articles)
//}

