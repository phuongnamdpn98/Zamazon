let Dia_chi_Img = 'http://localhost:8080';

let list = [];
var capNhat = true;
var collection = ``;
let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));
let NameShop = document.getElementById("NameShop");
NameShop.innerText = `${mySeller.Ten_shop}`;

switch (mySeller.Ma_so) {
  case "seller1":
    apiDienThoai().then(result => {
      list = result;
      collection = `phone`
      //let SellerProducts = [];
      //sessionStorage.setItem("sellerProducts", listPhone)
      //let SellerProducts = JSON.parse(sessionStorage.getItem("sellerCategoryProducts"));
      //console.log(listPhone)
      //SellerProducts = listPhone.filter(x => x.Ma_so_cuahang === mySeller.Ma_so);

      //sessionStorage.setItem("sellerProducts", SellerProducts)
      showProductList(list);

    }).catch(err => {
      console.log(err);
    });
    break;
  case "seller2":
    apiTivi().then(result => {
      list = result;
      collection = `tivi`
      showProductList(list);
    })
    break;
  case "seller3":
    apiThoiTrangNam().then(result => {
      list = result;
      collection = `menfashion`
      showProductList(list);
    })
    break;
  case "seller4":
    apiThoiTrangNu().then(result => {
      list = result;
      collection = `womenfashion`
      showProductList(list);
    }).catch(err => {
      console.log(err);
    });
    break;
  case "seller5":
    apiMyPham().then(result => {
      list = result;
      collection = `cosmetics`
      showProductList(list);
    })
    break;
  case "seller6":
    apiGiayNam().then(result => {
      list = result;
      collection = `menshoes`
      showProductList(list);
    })
    break;
  case "seller7":
    apiGiayNu().then(result => {
      list = result;
      collection = `womenshoes`
      showProductList(list);
    })
    break;
  case "seller8":
    apiDongHo().then(result => {
      list = result;
      collection = `watch`
      showProductList(list);
    })
    break;
  case "seller9":
    apiDoChoi().then(result => {
      list = result;
      collection = `kidtoy`
      showProductList(list);
    })
    break;
  case "seller10":
    apiDoGiaDung().then(result => {
      list = result;
      collection = `houseware`
      showProductList(list);
    })
    break;
  default:
    break;
}

function showProductList(productList) {
  let html = ``;

  productList.forEach(product => {

    html += `
      <td>${product.Ma_so}</td>
      <td><img src='${Dia_chi_Img}/${product.Ma_so}.png' style="width: 70px; height: 70px;" /></td>
      <td>${product.Ten}</td>
      <td>${product.Don_gia_Ban} USD</td>

      <td>
          <a href="javaScript:void(0)" data-toggle="modal" data-target="#modelId" onclick="updateProduct('${product.Ma_so}')">
              <i class="fa fa-pencil-square-o text-danger" aria-hidden="true"></i>
          </a>
      </td>
      <td>
          <a href="javaScript:void(0)" onclick="deleteProduct('${product.Ma_so}')">
            <i class="fa fa-trash text-danger" aria-hidden="true"></i>
          </a>
      </td>
    </tr>`;
  });
  document.querySelector("#tableProducts").innerHTML = html;
  //tableProducts.innerHTML = html;
}


const KeyCode = (event) => {
  if (event.keyCode == 13) {
    let gtTim = event.target.value.trim()
    let ds = list.filter(x => x.Ten.toLowerCase().includes(gtTim.toLowerCase()))
    showProductList(ds)

  }
}


// Add
const insertProduct = () => {
  capNhat = true;
  showModal();
}
// Update
const updateProduct = (key) => {
  capNhat = false;
  let item = list.find(x => x.Ma_so == key);
  showModal(item);

}
// Delete
const deleteProduct = (key) => {
  if (confirm('Hệ thống sẽ Xóa Dữ liệu...?')) {
    let condition = {
      Ma_so: {
        "Ma_so": key
      },
      "collection": collection
    }
    apiDelete(condition).then(result => {
      alert('Xóa thành công');
      window.location.reload();
    })
  }
}
// Show Modal
const showModal = (item = null) => {
  let urlImg = null;
  let Nhom = "";
  document.querySelector("#ModalTitle").innerHTML = `Thêm`;
  if (item) {
    document.querySelector("#ModalTitle").innerHTML = `Sửa`;
    urlImg = `${Dia_chi_Img}/${item.Ma_so}.png`;
    Nhom = item.Nhom_San_Pham.Ma_so;
  }

  let html = ``
  html += `
  <div class="form-group">
      <input type="text" class="form-control" id="Th_Ma_so" style="visibility: hidden;"
          value="${item ? item.Ma_so : ''}">
  </div>
  <div class="form-group">
      <label for="Th_Ten">Tên</label>
      <input type="text" class="form-control" id="Th_Ten" 
          placeholder="Tên Sản phẩm" value="${item ? item.Ten : ''}">
  </div>
  <div class="form-group">
      <label for="Th_Don_gia_Nhap">Đơn giá Nhập</label>
      <input type="number" class="form-control" id="Th_Don_gia_Nhap" 
          placeholder="Đơn giá Nhập" value="${item ? item.Don_gia_Nhap : ''}">
  </div>
  <div class="form-group">
      <label for="Th_Don_gia_Ban">Đơn giá Bán</label>
      <input type="number" class="form-control" id="Th_Don_gia_Ban" 
          placeholder="Đơn giá Bán" value="${item ? item.Don_gia_Ban : ''}">
  </div>
  <div class="form-group">
      <label for="Th_Nhom_San_Pham">Nhóm Sản Phẩm</label>
      
      <select id="Th_Nhom_San_Pham">
           <option value="FREETEL" ${Nhom == 'FREETEL' ? 'selected' : ''} >FREETEL</option>
           <option value="MASSTEL" ${Nhom == 'MASSTEL' ? 'selected' : ''}>MASSTEL</option>
       </select>
  </div>
  <div class="form-group">
      <label for="Th_File">Chọn hình</label>
      <input type="file" class="form-control-file" id="Th_File" onchange="previewImg()">`
  if (!item) {
    html += `<img id="Th_PreImg" style="width:10rem"  />`
  } else {
    html += `<img id="Th_PreImg" style="width:10rem" src="${urlImg}"  />`
  }

  html += `</div>`

  document.querySelector("#ModalBody").innerHTML = html

}

{/* <input type="text"  class="form-control" id="Th_Nhom_San_Pham" 
           value="${Nhom ? "ANDROID" : ''}" placeholder="ANDROID"> */}

// Preview Image
const previewImg = () => {
  var reader = new FileReader();
  reader.onload = function (e) {
    console.log(e.target.result)
    Th_PreImg.src = e.target.result;
  }
  reader.readAsDataURL(document.querySelector("#Th_File").files[0]);

}
// Get key end, create key new
const autoKey = () => {
  let keyNhom = Th_Nhom_San_Pham.value;
  console.log(keyNhom)
  let arrNhom = list.filter(x => x.Nhom_San_Pham.Ma_so == keyNhom)
  console.log(arrNhom)
  arrNhom.sort((a, b) => { return Number(a.Ma_so.trim().split("_")[1]) - Number(b.Ma_so.trim().split("_")[1]) })
  let keyEnd = arrNhom[arrNhom.length - 1];
  console.log(keyEnd)
  let num = Number(keyEnd.Ma_so.split("_")[1]) + 1;
  console.log(num)
  keyNhom = keyNhom.concat("_", num.toString());
  console.log(keyNhom)
  return keyNhom;
}

// Save 
const saveProduct = () => {

  let Ma_so = (document.querySelector("#Th_Ma_so").value != "") ? document.querySelector("#Th_Ma_so").value : autoKey();
  console.log(Ma_so);
  // return false;
  let Ten = document.querySelector("#Th_Ten").value.trim();
  let Don_gia_Nhap = Number(document.querySelector("#Th_Don_gia_Nhap").value);
  let Don_gia_Ban = Number(document.querySelector("#Th_Don_gia_Ban").value);
  let Nhom_San_Pham = document.querySelector("#Th_Nhom_San_Pham").value;

  if (capNhat) {
    // Insert

    let Newproduct = {

      "collection": collection,
      product: {
        "Ten": Ten,
        "Ma_so": Ma_so,
        "Don_gia_Ban": Don_gia_Ban,
        "Don_gia_Nhap": Don_gia_Nhap,
        "Nhom_San_Pham": {
          "Ten": Nhom_San_Pham,
          "Ma_so": Nhom_San_Pham
        },
        "Danh_sach_Phieu_Dat": [],
        "Danh_sach_Phieu_Ban": [],
        "Danh_sach_Phieu_Nhap": []
      }

    }
    console.log(Newproduct);

    //console.log(mobileNew)
    //return false;
    // Call API
    apiInsert(Newproduct).then(result => {
      console.log(result);
      saveImg(Ma_so);
      document.querySelector("#ModalCancel").click();
      window.location.reload();
    })


  } else {
    // Update
    let productUpdate = {
      "collection": collection,
      condition: {
        "Ma_so": Ma_so
      },
      update: {
        $set: {
          "Ten": Ten,
          "Don_gia_Ban": Don_gia_Ban,
          "Don_gia_Nhap": Don_gia_Nhap,
          "Nhom_Dien_thoai": {
            "Ten": Nhom_San_Pham,
            "Ma_so": Nhom_San_Pham
          }
        }

      }
    }
    // console.log(mobileUpdate)
    // Call API
    apiUpdate(productUpdate).then(result => {
      //console.log(result);
      saveImg(Ma_so);
      document.querySelector("#ModalCancel").click();
      window.location.reload();
    })


  }


}

const saveImg = (Ma_so) => {
  let imgName = document.querySelector("#Th_File").value
  // Người dùng có chọn hình
  if (imgName) {
    let reader = new FileReader()
    let Chuoi_nhi_phan = ""
    let Ten_Hinh = `${Ma_so}.png` // upload vào thư mục images trong dịch vụ nodejs
    //let Ten_Hinh = `${Ma_so}` // upload lên trên host cloudinary
    reader.onload = function (e) {
      Chuoi_nhi_phan = e.target.result;
      let img = { "name": Ten_Hinh, "src": Chuoi_nhi_phan }
      //console.log(img)
      apiImage(img).then(result => {
        //console.log(result)
        reader.clear()
      })
    }
    reader.readAsDataURL(document.querySelector("#Th_File").files[0])
  }
}
