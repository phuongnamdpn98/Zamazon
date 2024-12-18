const showFullProducts = (list, _nhom) => {
    let html = ``;
    
    list.forEach(product => {
        var obj = JSON.stringify(product);
        html += `
        <div class="col-lg-4 col-md-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${product.Ma_so}.png">
            <img src="${Dia_chi_Dich_vu}/${product.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                <div class="label new">New</div>
                <ul class="product__hover">
                    <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                class="arrow_expand"></span></a></li>
                    <li><input type="number" min=1 max=10 value=1 id="sl${product.Ma_so}" /></li>
                    <li><a href="javaScript:void(0)" onclick="addtocart('${product.Ma_so}',${_nhom})" ><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${product.Ten}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">$ ${product.Don_gia_Ban}</div>
            </div>
        </div>
    </div>
        `
    });

    return html;
};

const showProductBySearch = (ProductList, nhom) => {
    let html = ``;
    ProductList.forEach(product => {
        var obj = JSON.stringify(product);
        console.log(obj)
        html += `
        <div class="col-lg-4 col-md-6" >
        <div class="product__item" >
            <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${product.Ma_so}.png">
            <img src="${Dia_chi_Dich_vu}/${product.Ma_so}.png" alt="" >
                <div class="label new">New</div>
                <ul class="product__hover">
                    <li><a href="img/shop/shop-1.jpg" class="image-popup"><span class="arrow_expand"></span></a></li>
                    <li><input type="number" min=1 max=10 value=1 id="sl${product.Ma_so}" /></li>
                    <li><a href="javaScript:void(0)" onclick="addtocart('${product.Ma_so}',${nhom})"><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a onclick=\'showDetail(\`${obj}\`)\'>${product.Ten}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">$ ${product.Don_gia_Ban}</div>
            </div>
        </div>
    </div>
        `
    });
    return html;
};

function showDetail(objPro) {
    //console.log(objPro);
    localStorage.setItem("productDetail", objPro);
    let objID = JSON.parse(localStorage.getItem('productDetail'));
    window.location.href = `product_details.html` + `#id=${objID.Ma_so}`;
}

let mangTest = [];


// mangTest.forEach(x => {
//     let myString = x.Ma_so;

//     //let myChar = "1";
//     let myCharWatch = "DH"
//     let myCharWomenShoes = "GNU";


//     if (myString.indexOf(myCharWatch) != -1) {
//         nhomPhanLuong = 8;
//     } else if (myString.indexOf(myCharWomenShoes) != -1) {
//         nhomPhanLuong = 10;
//     }


// })
// let myString = "Hello, world!";
// let myChar = "o";
// let regex = new RegExp(myChar, "i"); // "i" để không phân biệt chữ hoa/chữ thường

// const isCharMatched = regex.test(myString);
// console.log(`Ký tự "${myChar}" có trong chuỗi: ${isCharMatched}`);


apiDienThoai().then(result => {
    let listPhone = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listPhone, 2);

}).catch(err => {
    console.log(err);
})

apiTivi().then(result => {
    let listTivi = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listTivi, 1);

}).catch(err => {
    console.log(err);
})

apiThoiTrangNam().then(result => {
    let listMenFashion = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listMenFashion, 6);
}).catch(err => {
    console.log(err);
})

apiDoChoi().then(result => {
    let listToy = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listToy, 5);
}).catch(err => {
    console.log(err);
})

apiMyPham().then(result => {
    let listCosmetics = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listCosmetics, 3);

}).catch(err => {
    console.log(err);
})



apiGiayNu().then(result => {
    let listWomenShoes = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listWomenShoes, 10);
}).catch(err => {
    console.log(err);
})

apiGiayNam().then(result => {

    let listMenShoes = result;
    //let listProductMenShoes = listMenShoes.Danh_Sach_SanPham;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listMenShoes, 7);
    // listProductMenShoes.forEach(x => {
    //     mangTest.push(x);
    // })
    // document.getElementById("btnSearch").onclick = () => {
    //     let inputSearch = document.getElementById("inputSearch");
    //     if (inputSearch.value.trim() == "") {
    //         inputSearch.focus();
    //         return false;
    //     }


    //     let findSearch = mangTest.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
    //     document.getElementById("showAllProducts").innerHTML = showFullProducts(findSearch)
    // }
    // document.getElementById("searchPrice").onclick = () => {
    //     let minamount = document.getElementById("minamount").value;
    //     let maxamount = document.getElementById("maxamount").value;
    //     let strMinamount = String(minamount)
    //     let strMaxamount = String(maxamount)
    //     let findPrice = mangTest.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
    //     document.getElementById("showAllProducts").innerHTML = showFullProducts(findPrice)
    // }
}).catch(err => {
    console.log(err);
})

apiDongHo().then(result => {
    let listWatch = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listWatch, 8);

}).catch(err => {
    console.log(err);
})

//console.log(mangTest)

apiThoiTrangNu().then(result => {
    let listWomenFashion = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listWomenFashion, 9);
}).catch(err => {
    console.log(err);
})

apiDoGiaDung().then(result => {
    let listHouseware = result;
    document.getElementById("showAllProducts").innerHTML += showFullProducts(listHouseware, 4);
}).catch(err => {
    console.log(err);
})


document.getElementById("btnSearch").onclick = () => {
    let inputSearch = document.getElementById("inputSearch");
    if (inputSearch.value.trim() == "") {
        inputSearch.focus();
        return false;
    }

    let findSearch = mangTest.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
    document.getElementById("showAllProducts").innerHTML = showProductBySearch(findSearch)
}

document.getElementById("searchPrice").onclick = () => {
    let minamount = document.getElementById("minamount").value;
    let maxamount = document.getElementById("maxamount").value;
    let strMinamount = String(minamount)
    let strMaxamount = String(maxamount)
    let findPrice = mangTest.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
    document.getElementById("showAllProducts").innerHTML = showProductBySearch(findPrice, nhomPhanLuong)
}