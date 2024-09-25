let Dia_chi_Img = 'http://localhost:8080';

let list = [];
let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));
let NameShop = document.getElementById("NameShop");
NameShop.innerText = `${mySeller.Ten_shop}`;
let listOrder = document.querySelector("#tableOrderList");

switch (mySeller.Ma_so) {
    case "seller1":
        apiDienThoai().then(result => {
            list = result;
            showProductList(list);

        }).catch(err => {
            console.log(err);
        });
        break;
    case "seller2":
        apiTivi().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller3":
        apiThoiTrangNam().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller4":
        apiThoiTrangNu().then(result => {
            list = result;
            showProductList(list);
        }).catch(err => {
            console.log(err);
        });
        break;
    case "seller5":
        apiMyPham().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller6":
        apiGiayNam().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller7":
        apiGiayNu().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller8":
        apiDongHo().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller9":
        apiDoChoi().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    case "seller10":
        apiDoGiaDung().then(result => {
            list = result;
            showProductList(list);
        })
        break;
    default:
        break;
}

function showProductList(productList) {
    let html = ``;
    let ordersInfo = []
   
    productList.forEach(orders => {
        ordersInfo.push(...orders.Danh_sach_Phieu_Ban);
    });
    //console.log(ordersInfo)
    ordersInfo.forEach(order => {
        html += `
            <tr>
                <td>${order.Ma_SP}</td>
                <td><img src='${Dia_chi_Img}/${order.Ma_SP}.png' style="width: 50px; height: 50px;" /></td>
                <td>${order.Ten_SP}</td>
                <td>${order.Tien} USD</td>
                <td>${order.Khach_hang.Ho_ten}</td>
                <td>${order.Khach_hang.Dien_thoai}</td>
                <td>${order.Khach_hang.Dia_chi}</td>
            </tr>`;
        
    });
    
    listOrder.innerHTML = html;
    
}