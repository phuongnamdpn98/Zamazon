
let myAdmin = JSON.parse(sessionStorage.getItem("ADMIN"));
let listUser = [];
let NameAdmin = document.getElementById("NameAdmin");
NameAdmin.innerText = `${myAdmin.Ho_ten}`;


function showSellerListMain(arr) {
    let html = ``;
    arr.forEach(seller => {
        html += `<tr>
          <td>${seller.Ma_so}</td>
          <td>${seller.Ten_shop}</td>
          <td>${seller.Ten}</td>
          <td>${seller.Ten_Dang_nhap}</td>
          <td>
                <a href="javaScript:void(0)" onclick="deleteSeller('${seller.Ma_so}')">
                    <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                </a>
            </td>
        </tr>`;
    });

    document.querySelector("#tableSellerList").innerHTML = html;
}

apiSeller().then(result => {
    listSeller = result;
    showSellerListMain(listSeller);
}).catch(err => {
    console.log(err);
})

const deleteSeller = (key) => {
    if (confirm('Hệ thống sẽ Xóa Dữ liệu...?')) {
      let condition = {
        Ma_so: key
      }
      apiSellerDelete(condition).then(result => {
        alert('Xóa thành công');
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
    }
  }