

let Dia_chi_Img = 'http://localhost:8080';
let myAdmin = JSON.parse(sessionStorage.getItem("ADMIN"));
let listSeller = [];




function showSellerListMain(arr) {
  let html = ``;
  arr.forEach(seller => {
    html += `<tr>
        <td>${seller.Ma_so}</td>
        <td>${seller.Ten_shop}</td>
        <td>${seller.Ten}</td>
        <td>${seller.Ten_Dang_nhap}</td>
      </tr>`;
  });

  document.querySelector("#tableSellerListMain").innerHTML = html;
}


let NameAdmin = document.getElementById("NameAdmin");
NameAdmin.innerText = `${myAdmin.Ho_ten}`;

apiSeller().then(result => {
  listSeller = result;
  showSellerListMain(listSeller);
}).catch(err => {
  console.log(err);
})
