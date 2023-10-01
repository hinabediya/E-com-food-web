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
function clearCart() {
  cart = [];
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

var loginData = [
  {
    username: "code",
    password: "code@1234",
  },
  {
    username: "hina",
    password: "hina@1234",
  },
  {
    username: "user",
    password: "user@1234",
  },
];

function loginValidate() {
  debugger;
  const userId = document.getElementById("userid").value.toLowerCase();
  const loginPass = document.getElementById("userpass").value.toLowerCase();

  if (userId === "") {
    document.getElementById("usernameError").style.display = "";
    document.getElementById("usernameError").innerHTML = "username cannot be empty";
  } else {
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("usernameError").innerHTML = "";
  }

  if (loginPass === "") {
    document.getElementById("passError").style.display = "";
    document.getElementById("passError").innerHTML = "password cannot be empty";
  } else {
    document.getElementById("usernameError").style.display = "none";
    document.getElementById("usernameError").innerHTML = "";
  }

  loginData.map(({ username, password }) => {
    if (userId === username && loginPass === password) {
      location.href = "http://127.0.0.1:5500/Index.html";
    } else {
      document.getElementById("loginError").style.display = "";
      document.getElementById("loginError").innerHTML = "incorrect userid and password";
    }
  });
}
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
