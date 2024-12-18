

apiDienThoai().then(result => {
    let dsDienThoai = result;
    document.getElementById("ShowSuggertedproduct").innerHTML += xuatDienThoai(dsDienThoai);
   
}).catch(err => {
    console.log(err);
})



apiTivi().then(result => {
    let dsTivi = result;
    document.getElementById("trendContent").innerHTML = xuatdsTiviTrends(dsTivi);
}).catch(err => {
    console.log(err);
})

apiThoiTrangNam().then(result => {
    let dsThoiTrangNam = result;
    document.getElementById("ShowSuggertedproduct").innerHTML += xuatMenFashion(dsThoiTrangNam);
}).catch(err => {
    console.log(err);
})

apiDoChoi().then(result => {
    let dsDoChoi = result;
    document.getElementById("ShowSuggertedproduct").innerHTML += xuatDoChoi(dsDoChoi);
}).catch(err => {
    console.log(err);
})

apiMyPham().then(result => {
    let dsMyPham = result;
    document.getElementById("ShowSuggertedproduct").innerHTML += xuatMyPham(dsMyPham);
}).catch(err => {
    console.log(err);
})

apiGiayNu().then(result => {
    let dsGiayNu = result;
    document.getElementById("ShowSuggertedproduct").innerHTML += xuatGiayNu(dsGiayNu);
}).catch(err => {
    console.log(err);
})

apiGiayNam().then(result => {
    let dsGiayNam = result;
    document.getElementById("ShoesBestSeller").innerHTML = xuatMenShoeBest(dsGiayNam);
}).catch(err => {
    console.log(err);
})

apiDongHo().then(result => {
    let dsWatch = result;
    document.getElementById("hotWatch").innerHTML = xuatWatchBest(dsWatch);
}).catch(err => {
    console.log(err);
})



// apiDienThoai().then(result => {
//     let dsDienThoai = result;
//     let ProductDT = dsDienThoai.Danh_Sach_SanPham;
//     console.log(ProductDT)

//     document.getElementById("ShowSuggertedproduct").innerHTML = xuatDienThoai(dsDienThoai);
// }).catch(err => {
//     console.log(err);
// })