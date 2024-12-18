let listTivi = [];
let dsNhom = [];
let listPhone = [];
let listCosmetics = [];
let listHouseware = [];
let listKidToy = [];
let listmenFashion = [];
let listMenShoes = [];
let listWatch = [];
let listWomenFashion = [];
let listWomenShoes = [];
var carts = []


apiTivi().then(result => {
    listTivi = result;

})

apiDienThoai().then(result => {
    listPhone = result
    
})

apiThoiTrangNam().then(result => {
    listmenFashion = result;
})

apiThoiTrangNu().then(result => {
    listWomenFashion = result;
    
})
apiMyPham().then(result => {
    listCosmetics = result;
    
})
apiGiayNam().then(result => {
    listMenShoes = result;
   
})
apiGiayNu().then(result => {
    listWomenShoes = result;
    
})
apiDongHo().then(result => {
    listWatch = result;
    
})
apiDoChoi().then(result => {
    listKidToy = result;
    
})
apiDoGiaDung().then(result => {
    listHouseware = result;
    
})

const addtocart = (key, _nhom) => {
    let Ma_so = key; // ma san pham 
    let value = Number(document.getElementById("sl" + Ma_so).value);
    //console.log(Ma_so)
    //console.log(_nhom)
    let vt = -1;
    // // Lưu vào sessionStorage
    if (sessionStorage.getItem("carts") != undefined) {
        carts = JSON.parse(sessionStorage.getItem("carts"))
        vt = carts.findIndex(item => item.Ma_so == key);
    }

    if (vt == -1) {
        let tmp = {};
        if (_nhom == 1) {
            tmp = listTivi.find(x => x.Ma_so == key);
            //console.log(listTivi)
        } else if (_nhom == 2) {
            tmp = listPhone.find(x => x.Ma_so == key);
            
        } else if (_nhom == 3) {
            tmp = listCosmetics.find(x => x.Ma_so == key);
        } else if (_nhom == 4) {
            tmp = listHouseware.find(x => x.Ma_so == key);
        } else if (_nhom == 5) {
            tmp = listKidToy.find(x => x.Ma_so == key);
        } else if (_nhom == 6) {
            tmp = listmenFashion.find(x => x.Ma_so == key);
        } else if (_nhom == 7) {
            tmp = listMenShoes.find(x => x.Ma_so == key);
        } else if (_nhom == 8) {
            tmp = listWatch.find(x => x.Ma_so == key);
        } else if (_nhom == 9) {
            tmp = listWomenFashion.find(x => x.Ma_so == key);
        } else if (_nhom == 10) {
            tmp = listWomenShoes.find(x => x.Ma_so == key);
        }
        //console.log(tmp)
        let cart = {
            Ma_so: key,
            soluong: value,
            ten: tmp.Ten,
            dongiaban: Number(tmp.Don_gia_Ban),
            nhom: _nhom
        }

        carts.push(cart) // Thêm 

    } else {
        carts[vt].soluong += value // Cập nhật lại số lượng
    }


    if (carts.length > 0) {
        sessionStorage.setItem("carts", JSON.stringify(carts))
    } else {
        sessionStorage.removeItem("carts")
    }
    Th_Gio_hang.innerHTML = `${carts.length}`

}
//Th_Gio_hang.innerHTML = `${carts.length}`
const showProductCarts = (carts, ShowCarts) => {
    ShowCarts.innerHTML = ``;
    var contentHTMl = ``;

    carts.forEach(product => {
        let thanhTien = product.soluong * product.dongiaban;
        //console.log(product.soluong)
        contentHTMl += `<tr>
        <td class="cart__product__item">
            <img src="${Dia_chi_Dich_vu}/${product.Ma_so}.png " alt="" style="height: 120px; width: 120px;">
            <div class="cart__product__item__title">
                <h6>${product.ten}</h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
            </div>
        </td>
        <td class="cart__price">$ ${product.dongiaban}</td>
        <td class="cart__quantity">
            <div class="pro-qty">
                <input onchange="soLuong('${product.Ma_so}',this)" type="text" value="${product.soluong}">
            </div>
        </td>
        <td class="cart__total">$ ${thanhTien}</td>
        <td class="cart__close"  onclick="xoaGiohang('${product.Ma_so}')"><span class="icon_close"></span></td>
    </tr>`
    });
    ShowCarts.innerHTML = contentHTMl;
    tongThanhtien()
}

const showOrder = (carts, showYourOrder) =>{
    showYourOrder.innerHTML = ``;
    var contenYourOrdertHTMl = ``;
    let num = 1;
    carts.forEach(product => {
        let thanhTien = product.soluong * product.dongiaban;
        
        contenYourOrdertHTMl += `<li>${num}. ${product.ten} <span>$ ${thanhTien}</span></li>`;
        num += num;
    })
    showYourOrder.innerHTML = contenYourOrdertHTMl;
    let kq = 0
    carts = JSON.parse(sessionStorage.getItem("carts"))
    carts.forEach(tv => {
        kq += (tv.soluong * tv.dongiaban)
    })
    Tong_tien_Checkout.innerHTML = `<li>Subtotal <span >$ ${(kq)}</span></li>
    <li>Total <span >$ ${(kq)}</span></li> `;
}




const tongThanhtien = () => {
    let kq = 0
    carts = JSON.parse(sessionStorage.getItem("carts"))
    carts.forEach(tv => {
        kq += (tv.soluong * tv.dongiaban)
    })
    Th_Tong.innerHTML = `<li>Subtotal <span >$ ${(kq)}</span></li>
                        <li>Total <span >$ ${(kq)}</span></li> `;
    
}

const xoaGiohang = (maSoXoa) => {
    console.log(maSoXoa)
    if (confirm(`Bạn có đồng ý Xóa sản phẩm không?`)) {
        let vt = carts.findIndex(x => x.maso == maSoXoa)
        carts.splice(vt, 1)
        if (carts.length > 0) {
            sessionStorage.setItem("carts", JSON.stringify(carts))
            showProductCarts(carts, ShowCarts)
            tongThanhtien()
        } 
        else {
            Th_XoaCarts.click()
        }
    }
}
const soLuong = (maSo, sl) => {
    console.dir(sl)
    let tr = sl.parentNode.parentNode
    let soLuong = sl.value
    //console.log(soLuong)
    let dt = carts.find(x => x.maso == maSo)
    dt.soluong = Number(soLuong)
    sessionStorage.setItem("carts", JSON.stringify(carts))
    let thanhTien = Number(soLuong) * Number(dt.dongiaban)
    tr.children[4].innerHTML = `${thanhTien}<sup>$</sup>`
    tongThanhtien()
}
const datHang = () => {
    let dsDonHang = []
    carts = JSON.parse(sessionStorage.getItem("carts"));
    let Khach_hang = {
        "Ho_ten": document.querySelector("#input_fullname").value,
        "Dien_thoai": document.querySelector("#input_phone").value,
        "Email": document.querySelector("#input_email").value,
        "Dia_chi": document.querySelector("#input_adress").value,
        "Country": document.querySelector("#input_country").value
    }
    carts.forEach(item => {
        let donDathang = {
            
            "Ngay_Dat_hang": new Date(),
            "Ma_SP": item.Ma_so,
            "Ten_SP": item.ten,
            // "Ngay_Giao_hang": document.querySelector("#Th_Ngay_Giao_hang").value,
            "So_luong": Number(item.soluong),
            "Don_gia_Ban": Number(item.dongiaban),
            "Tien": Number(item.soluong) * Number(item.dongiaban),
            "Trang_thai": "CHUA_GIAO_HANG",
            "Khach_hang": Khach_hang
        };
        let maso = item.Ma_so;
        let donhang = {
            key: maso,
            dathang: donDathang,
            nhom: item.nhom
        }
        dsDonHang.push(donhang)
        //console.log(dsDonHang);
    })

    // Gọi API 
    apiDathang(dsDonHang).then(result => {
        console.log(result);
        alert('Đơn đặt hàng thành công...')
        sessionStorage.clear("carts");
        window.location = `.index.html`
        //Th_XoaCarts.click();
    }).catch(err => {
        console.log(err);
    })


}

