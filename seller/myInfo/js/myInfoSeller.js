

let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));

let NameShop = document.getElementById("NameShop");
NameShop.innerText = `${mySeller.Ten_shop}`;

document.getElementById("staticNameStore").value =  mySeller.Ten_shop;
document.getElementById('staticOwnerNameStore').value = mySeller.Ho_ten;
document.getElementById('staticUsername').value = mySeller.Ten_Dang_nhap;
//console.log(mySeller)

