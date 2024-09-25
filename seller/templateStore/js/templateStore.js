let Dia_chi_Img = 'http://localhost:8080';

let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));
let NameShop = document.getElementById("NameShop");
NameShop.innerText = `${mySeller.Ten_shop}`;
let banner;
let video;
var collection = ``;
let Ma_so_cua_hang = mySeller.Ma_so;
var listBannerAndVideo = [];
let list = [];


switch (mySeller.Ma_so) {
    case "seller1":
        apiDienThoai().then(result => {
            list = result;
            collection = `phone`

        }).catch(err => {
            console.log(err);
        });
        break;
    case "seller2":
        apiTivi().then(result => {
            list = result;
            collection = `tivi`

        })
        break;
    case "seller3":
        apiThoiTrangNam().then(result => {
            list = result;
            collection = `menfashion`

        })
        break;
    case "seller4":
        apiThoiTrangNu().then(result => {
            list = result;
            collection = `womenfashion`

        }).catch(err => {
            console.log(err);
        });
        break;
    case "seller5":
        apiMyPham().then(result => {
            list = result;
            collection = `cosmetics`

        })
        break;
    case "seller6":
        apiGiayNam().then(result => {
            list = result;
            collection = `menshoes`

        })
        break;
    case "seller7":
        apiGiayNu().then(result => {
            list = result;
            collection = `womenshoes`

        })
        break;
    case "seller8":
        apiDongHo().then(result => {
            list = result;
            collection = `watch`

        })
        break;
    case "seller9":
        apiDoChoi().then(result => {
            list = result;
            collection = `kidtoy`

        })
        break;
    case "seller10":
        apiDoGiaDung().then(result => {
            list = result;
            collection = `houseware`

        })
        break;
    default:
        break;
}


const showTemplate = (banner, video) => {
    let html = ``;
    let html2 = ``;
    console.log(list)
    //var addBanner = document.getElementById("");
    html += `<div class="banner" style="background-image: url(${banner})">
        </div>
        <div class="video-container">
            ${video}
        </div>
        <h2>My Product</h2>
        <div class="row" id="showProduct">
        </div>
        
        `;

    document.getElementById("showTemplate").innerHTML = html;

    list.forEach(pro => {
        html2 += `<div class="card">
            <img src="${Dia_chi_Img}/${pro.Ma_so}.png" alt="Avatar" style="width:100%">
            <div class="container">
                <h4><b>${pro.Ten}</b></h4> 
                <p>$ ${pro.Don_gia_Ban}</p> 
            </div>
      </div>`
        
    })
    document.getElementById("showProduct").innerHTML += html2;

}



apiBannerAndVideo().then(result => {
    listBannerAndVideo = result;
    listBannerAndVideo.forEach(element => {
        if (element.Ma_so_cua_hang == Ma_so_cua_hang) {
            banner = element.banner;
            video = element.video
        }
    });
    showTemplate(banner, video)
    console.log(banner)
    console.log(video)
    console.log(listBannerAndVideo)
}).catch(err => {
    console.log(err)
})

