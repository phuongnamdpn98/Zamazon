const dang_nhap=()=>{
    let ten=document.querySelector("#login-username").value.trim();
    let matkhau=document.querySelector("#login-password").value.trim();
    if(ten!="" && matkhau!=""){
        let nguoidung={
            "Ten_Dang_nhap":ten,
            "Mat_khau": matkhau
        }
        apiUserDangnhap(nguoidung).then(result=>{
            if(result.Noi_dung){
                // Lưu session
                sessionStorage.setItem('USER',JSON.stringify(result.Noi_dung));
                // Chuyển trang
                window.location=`user_profile.html`;
            }else{
                alert('Thông tin đăng nhập không hợp lệ')
            }
        }).catch(err=>{
            console.log(err)
        })
    }else{
        alert('Dữ liệu không hợp lệ')
    }

}

const dang_ky = () => {
    let fullname = document.querySelector("#sign-up-fullname").value.trim();
    let username = document.querySelector("#sign-up-username").value.trim();
    let password = document.querySelector("#sign-up-password").value.trim();
    if (username != "" && password != "") {
        if(password.length >= 6){
            let nguoidung = {
                "Ten": fullname,
                "Ten_Dang_nhap": username,
                "Mat_khau": password
            }
            apiUserDangky(nguoidung).then(result => {
                sessionStorage.setItem('USER_dangky', JSON.stringify(result.Noi_dung));
                // Chuyển trang
                window.location = `index.html`;
            }).catch(err => {
                console.log(err)
            })
        } else {
            alert('Dữ liệu không hợp lệ mật khẩu phải trên 6 ký tự')
        }
        
    } else {
        alert('Dữ liệu không hợp lệ')
    }

}