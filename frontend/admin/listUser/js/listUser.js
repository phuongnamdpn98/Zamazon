
let myAdmin = JSON.parse(sessionStorage.getItem("ADMIN"));
let listUser = [];
let NameAdmin = document.getElementById("NameAdmin");
NameAdmin.innerText = `${myAdmin.Ho_ten}`;


function showUserListMain(arr) {
    let html = ``;
    arr.forEach(user => {
        html += `<tr>
          <td>${user.Ma_so}</td>
          <td>${user.Ten}</td>
          <td>${user.Ten_Dang_nhap}</td>
          <td>
                <a href="javaScript:void(0)" onclick="deleteUser('${user.Ma_so}')">
                    <i class="fa fa-trash text-danger" aria-hidden="true"></i>
                </a>
            </td>
        </tr>`;
        console.log(user.Ma_so)
    });

    document.querySelector("#tableUserList").innerHTML = html;
}

apiUser().then(result => {
    listUser = result;
    showUserListMain(listUser);
}).catch(err => {
    console.log(err);
})

const deleteUser = (key) => {
  console.log(key)
    if (confirm('Hệ thống sẽ Xóa Dữ liệu...?')) {
      let condition = {
        Ma_so: key
      }
      console.log(condition)
      apiUserDelete(condition).then(result => {
        alert('Xóa thành công');
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
    }
  }