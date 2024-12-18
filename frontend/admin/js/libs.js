const dang_nhap = () => {
    let ten = document.querySelector("#input-username").value.trim();
    let matkhau = document.querySelector("#input-password").value.trim();
    console.log("tets")
    if (ten != "" && matkhau != "") {
        let nguoidung = {
            "Ten_Dang_nhap": ten,
            "Mat_khau": matkhau
        }

        apiAdminDangnhap(nguoidung).then(result => {
            if (result.Noi_dung) {
                document.querySelector("#alert").classList.add("active_alert");
                setTimeout(() => {
                    document.querySelector("#alert").classList.remove("active_alert");
                }, 1000);
                // Lưu session
                sessionStorage.setItem('ADMIN', JSON.stringify(result.Noi_dung));
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

