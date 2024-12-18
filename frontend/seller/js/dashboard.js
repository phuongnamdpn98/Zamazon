/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace()

  // Graphs
  var ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      datasets: [{
        data: [
          15339,
          21345,
          18483,
          24003,
          23489,
          24092,
          12034
        ],
        lineTension: 0,
        backgroundColor: 'transparent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: false
          }
        }]
      },
      legend: {
        display: false
      }
    }
  })
})()

let Dia_chi_Img = 'http://localhost:8080';
let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));
let listPhone = [];
let listTivi = [];
let listCosmetics = [];
let listHouseware = [];
let listKidToy = [];
let listmenFashion = [];
let listMenShoes = [];
let listWatch = [];
let listWomenFashion = [];
let listWomenShoes = [];


function showProductListMain(arr) {
  let html = ``;
  arr.forEach(product => {
    html += `<tr>
        <td>${product.Ma_so}</td>
        <td><img src='${Dia_chi_Img}/${product.Ma_so}.png' style="width: 70px; height: 70px;" /></td>
        <td>${product.Ten}</td>
        <td>${product.Don_gia_Ban} USD</td>
      </tr>`;
  });
  document.querySelector("#tableProductListMain").innerHTML = html;


}

//console.log(mySeller)
// let mySellerProducts = JSON.parse(sessionStorage.getItem("sellerProducts"));
// console.log(mySellerProducts)

let NameShop = document.getElementById("NameShop");
let tableProducts = document.getElementById("tableProducts");
NameShop.innerText = `${mySeller.Ten_shop}`;

let staticNameStore = document.getElementById("staticNameStore");
staticNameStore = mySeller.Ten_shop;
console.log(mySeller.Ten_shop)

switch (mySeller.Ma_so) {
  case "seller1":
    apiDienThoai().then(result => {
      listPhone = result;
      //let SellerProducts = [];
      //sessionStorage.setItem("sellerProducts", listPhone)
      //let SellerProducts = JSON.parse(sessionStorage.getItem("sellerCategoryProducts"));
      //console.log(listPhone)
      //SellerProducts = listPhone.filter(x => x.Ma_so_cuahang === mySeller.Ma_so);

      //sessionStorage.setItem("sellerProducts", SellerProducts)
      showProductListMain(listPhone);

    }).catch(err => {
      console.log(err);
    });
    break;
  case "seller2":
    apiTivi().then(result => {
      listTivi = result;
      showProductListMain(listTivi);
    })
    break;
  case "seller3":
    apiThoiTrangNam().then(result => {
      listmenFashion = result;
      showProductListMain(listmenFashion);
    })
    break;
  case "seller4":
    apiThoiTrangNu().then(result => {
      listWomenFashion = result;
      showProductListMain(listWomenFashion);
    })
    break;
  case "seller5":
    apiMyPham().then(result => {
      listCosmetics = result;
      showProductListMain(listCosmetics);
    })
    break;
  case "seller6":
    apiGiayNam().then(result => {
      listMenShoes = result;
      showProductListMain(listMenShoes);
    })
    break;
  case "seller7":
    apiGiayNu().then(result => {
      listWomenShoes = result;
      showProductListMain(listWomenShoes);
    })
    break;
  case "seller8":
    apiDongHo().then(result => {
      listWatch = result;
      showProductListMain(listWatch);
    })
    break;
  case "seller9":
    apiDoChoi().then(result => {
      listKidToy = result;
      showProductListMain(listKidToy);
    })
    break;
  case "seller10":
    apiDoGiaDung().then(result => {
      listHouseware = result;
      showProductListMain(listHouseware);
    })
    break;
  default:
    break;
}