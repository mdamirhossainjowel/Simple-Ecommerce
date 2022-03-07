function productToCart(e) {
  // e = e || window.event;
  // var target = e.target || e.srcElement;
  // var parent = target.parentElement;
  // var parentOfparent = parent.parentElement;
  // var product_title = parentOfparent.firstElementChild.innerText;
  // var product_price = parent.firstElementChild.lastElementChild.innerText;
  // console.log(
  //   "Product Name: " + product_title + " " + "Price: " + product_price
  // );

  var notification = 1;
  var notify = parseInt(
    document.getElementById("notificationnumber").innerText
  );
  notify = notify + notification;
  document.getElementById("notificationnumber").innerText = notify;

  var table = document.getElementById("productTable");
  var row = table.insertRow();
  var cell1 = row.insertCell();
  var cell2 = row.insertCell();
  var cell3 = row.insertCell();
  // document.getElementById("staticBackdropLabel").innerText = product_title;
  // document.getElementById("description").innerText = product_description;
  // document.getElementById("inputFeild").value = "0";
  // document.getElementById("productPriceTotal").innerText = "";
  cell1.innerHTML = document.getElementById("staticBackdropLabel").innerText;
  cell2.innerHTML = document.getElementById("inputFeild").value;
  cell3.innerHTML = document.getElementById("productPriceTotal").innerText;
}

// const productTitel = document.getElementById("title").innerText;
// console.log(productTitel);
// for (product of productTitel) {
//   console.log(product);
// }
const products = [];
const productTitel = document.querySelectorAll("#title");
for (let i = 0; i < productTitel.length; i++) {
  products.push(productTitel[i].innerText);
}

function details(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var parent = target.parentElement;
  var parentOfparent = parent.parentElement;
  var product_title = parentOfparent.firstElementChild.innerText;
  var product_description = parentOfparent.childNodes[3].innerText;
  var product_price = parent.firstElementChild.lastElementChild.innerText;

  var imgSrc = parentOfparent.parentElement.firstElementChild.src;
  // document.getElementById("productImg").src;
  // var second = parentOfparent.firstChild.nextSibling;
  // var second1 = second.firstChild.nextSibling;

  document.getElementById("productImg").src = imgSrc;
  document.getElementById("staticBackdropLabel").innerText = product_title;
  document.getElementById("description").innerText = product_description;
  document.getElementById("inputFeild").value = "0";
  document.getElementById("productPriceTotal").innerText = "";
  let num = 0;
  document.getElementById("plusButton").addEventListener("click", function () {
    num = num + 1;

    document.getElementById("inputFeild").value = num;
    document.getElementById("productPriceTotal").innerText =
      num * product_price;
  });
  document.getElementById("minusButton").addEventListener("click", function () {
    let minusNum = parseInt(document.getElementById("inputFeild").value);
    console.log(minusNum);
    if (minusNum > 0) {
      let newMinus = minusNum - 1;

      document.getElementById("inputFeild").value = newMinus;
      document.getElementById("productPriceTotal").innerText =
        newMinus * product_price;
    }
  });
}
