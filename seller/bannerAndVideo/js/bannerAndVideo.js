
let Dia_chi_Img = 'http://localhost:8080';

let mySeller = JSON.parse(sessionStorage.getItem("SELLER"));
let NameShop = document.getElementById("NameShop");
NameShop.innerText = `${mySeller.Ten_shop}`;
let capNhat = true;
// Show Modal

// let banner =  document.getElementById("banner").value;
// let video = document.getElementById("video").value;
// Add
const insertBannerAndVideo = () => {
    capNhat = true;
    let banner = document.getElementById("banner").value;
    let video = document.getElementById("video").value;
    // console.log(banner)
    // console.log(video)
    // console.log(mySeller.Ma_so)

    let NewBannerAndVideo = {
        "Ma_so_cua_hang": mySeller.Ma_so,
        "banner": banner,
        "video": video
    }
    console.log(NewBannerAndVideo)
    apiAddBannerAndVideo(NewBannerAndVideo).then(result => {
        console.log(result);
        window.location.reload();
        alert("Thêm thành công");
    }).catch(err => {
        alert("Thêm thất bại");
    })
}

// Update
const updateBannerAndVideo = () => {
    capNhat = false;
    let banner = document.getElementById("banner").value;
    let video = document.getElementById("video").value;

    let UpdateBannerVideo = {

        condition: {
            "Ma_so_cua_hang": mySeller.Ma_so
        },
        update: {
            $set: {
                "banner": banner,
                "video": video
            }
        }
    }
    console.log(UpdateBannerVideo)
    // Call API
    apiUpdateBannerAndVideo(UpdateBannerVideo).then(result => {
        console.log(result);
        window.location.reload();
        alert("Cập nhật thành công");
    }).catch(err => {
        alert("Cập nhật thất bại");
    })
}

// const previewImg = () => {
//     var reader = new FileReader();
//     reader.onload = function (e) {
//         console.log(e.target.result)
//         Th_PreImg.src = e.target.result;
//     }
//     reader.readAsDataURL(document.querySelector("#Th_File").files[0]);

// }

// const saveImg = (Ma_so) => {
//     let imgName = document.querySelector("#Th_File").value
//     // Người dùng có chọn hình
//     if (imgName) {
//         let reader = new FileReader()
//         let Chuoi_nhi_phan = ""
//         let Ten_Hinh = `${Ma_so}.png` // upload vào thư mục images trong dịch vụ nodejs
//         //let Ten_Hinh = `${Ma_so}` // upload lên trên host cloudinary
//         reader.onload = function (e) {
//             Chuoi_nhi_phan = e.target.result;
//             let img = { "name": Ten_Hinh, "src": Chuoi_nhi_phan }
//             //console.log(img)
//             apiImage(img).then(result => {
//                 //console.log(result)
//                 reader.clear()
//             })
//         }
//         reader.readAsDataURL(document.querySelector("#Th_File").files[0])
//     }
// }