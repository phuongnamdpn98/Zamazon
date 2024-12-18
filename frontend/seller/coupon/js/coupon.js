let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));
let NameShop = document.getElementById("NameShop");
NameShop.innerText = `${mySeller.Ten_shop}`;

const createCoupon = () => {
    let couponCode = document.querySelector("#couponCode").value.trim();
    let discount = document.querySelector("#discount").value.trim();
    if (couponCode != "" && discount != "") {
        let coupon = {
            "couponCode": couponCode,
            "discount": discount,
        }
        apiCreateCouponCode(coupon).then(result => {
            alert("Tao ma giam gia thanh cong")
            
        }).catch(err => {
            console.log(err)
        })
    } else {
        alert('Dữ liệu không hợp lệ')
    }

}