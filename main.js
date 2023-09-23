function searchItem() {
  debugger;
  const searchfield = document.getElementById("searchresult");
  const search = document.getElementById("search");
  const product = document.getElementsByClassName("product");
  const productTitle = document.getElementsByClassName("product-title");
  const nofood = document.getElementById("nofood");

  for (let i = 0; i < productTitle.length; i++) {
    let IsTrue = productTitle[i].innerHTML.toLowerCase().includes(search.value.toLowerCase());
    if (search.value != "") {
      if (IsTrue) {
        searchfield.style.display = "";

        product[i].style.display = "";
        nofood.style.display = "none";
      } else {
        nofood.style.display = "";
        searchfield.style.display = "";

        product[i].style.display = "none";
      }
    } else {
      searchfield.style.display = "none";
    }
  }
}



// function addToCart(id) {

//   debugger;
//   for (var i = 0; i < subwayData.length; i++) {
//     if (subwayData[i].id === id) {
//       subwayData[i].IsProductAdded = !subwayData[i].IsProductAdded
//       cart.push(subwayData[i]);
//     }
//   }
// }
function clearCart(){
  cart=[];
}

// function removeItemFromCart(id){
// debugger
// for (var i = 0; i < subwayData.length; i++) {
//   if (subwayData[i].id === id) {
//     subwayData[i].IsProductAdded = !subwayData[i].IsProductAdded
//     cart.pop(subwayData[i]);
//   }
// }
// }
var subwayData = [
  {
    id: 1,
    foodName: "Paneer Achari",
    price: 279,
    description: "Multigrain toasted Sub with chunks of paneer, achari mayo, pickled onion, capsicum, tomato and chilli mayo. Serving size - 240 g/ 589 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.",
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/b33b19910a5f966e3afe9149b0326f88",
    IsProductAdded:false
  },
  {
    id: 2,
    foodName: "Crunchy Mexican",
    price: 229,
    description: "Multigrain toasted Sub with Mexican bean patty, tomato, capsicum, onion, olives, jalapeño, southwest chipotle sauce & crunchy nachos. Serving size - 295 g/ 702 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.",
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d7cd2bf55697e97c568f5789299822a7",
    IsProductAdded:false
  },
  {
    id: 3,
    foodName: "Chilli Cheese",
    price: 279,
    description: "Multigrain, 3-cheese toasted Sub with herby aloo patty, jalapeño, onion & capsicum with chilli mayo. Serving size - 284 g/ 678 kcal. Allergens - Contains wheat, rye, barley, oats, milk & soy.",
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/c6b1c34fc51dc5f268ea14834569fb7d",
    IsProductAdded:false
  },
  {
    id: 4,
    foodName: "Italian Pesto",
    price: 299,
    description: "A pesto flavoured toasted sub loaded with tomatoes, cucumber & onions. This warm sandwich has flavourful spinach ‘n cheese patty topped with creamy Italian sauce & pesto sauce. Requires no customization. Serving size - 234 g/ 458 kcal. Allergens - Contains wheat, milk, barley, oats, nuts & soy.",
    imgURL: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/343eb86e2156479e0cb62b700a04eefd",
    IsProductAdded:false
  },
];
// const loopin = document.getElementsByClassName("loopin");
// const price = document.getElementsByClassName("price1");
// const desc = document.getElementById("desc");
// const Name = document.getElementById("name1");
// const pic = document.getElementsByClassName("foodPhoto1");
// foodData.forEach((element) => {
//   debugger
//   price.innerHTML = element.price
//   Name.innerHTML = element.foodName;
// desc.innerHTML = element.description

// });
