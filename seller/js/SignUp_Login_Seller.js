const dang_nhap = () => {
    let ten = document.querySelector("#login-username-Seller").value.trim();
    let matkhau = document.querySelector("#login-password-Seller").value.trim();
    if (ten != "" && matkhau != "") {
        let nguoidung = {
            "Ten_Dang_nhap": ten,
            "Mat_khau": matkhau
        }
        apiSellerDangnhap(nguoidung).then(result => {
            if (result.Noi_dung) {
                // Lưu session
                sessionStorage.setItem('SELLER', JSON.stringify(result.Noi_dung));
                // Chuyển trang
                window.location = `dashboard.html`;
            } else {
                alert('Thông tin đăng nhập không hợp lệ')
            }
        }).catch(err => {
            console.log(err)
        })
    } else {
        alert('Dữ liệu không hợp lệ')
    }

}

const dang_ky = () => {
    let fullname = document.querySelector("#sign-up-fullname-Seller").value.trim();
    let brandname = document.querySelector("#sign-up-brandname-Seller").value.trim();
    let username = document.querySelector("#sign-up-username-Seller").value.trim();
    let password = document.querySelector("#sign-up-password-Seller").value.trim();
    if (username != "" && password != "") {
        let nguoidung = {
            "Ten_shop": brandname,
            "Ten": fullname,
            "Ten_Dang_nhap": username,
            "Mat_khau": password
        }
        apiSellerDangky(nguoidung).then(result => {
            sessionStorage.setItem('SELLER_dangky', JSON.stringify(result.Noi_dung));
            // Chuyển trang
            window.location = `index.html`;
        }).catch(err => {
            console.log(err)
        })
    } else {
        alert('Dữ liệu không hợp lệ')
    }

}