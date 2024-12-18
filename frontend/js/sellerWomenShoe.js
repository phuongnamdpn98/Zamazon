const xuatGiayNu = (dsGiayNu) => {
    let html = ``;
    
    ProductGiayNu = dsGiayNu.slice(0, 3);
    ProductGiayNu.forEach((shoeGirl, index) => {
        var obj = JSON.stringify(shoeGirl);
        html += `
        <div class="col-lg-3 col-md-4 col-sm-6 mix womenShoe">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${shoeGirl.Ma_so}.png">
                            <img src="${Dia_chi_Dich_vu}/${shoeGirl.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                            <div class="label new">New</div>
                            <ul class="product__hover">
                                <li><a href="#" class="image-popup"><span
                                            class="arrow_expand"></span></a></li>
                                <li><input type="number" min=1 max=10 value=1 id="sl${shoeGirl.Ma_so}" /></li>
                                <li><a href="javaScript:void(0)" onclick="addtocart('${shoeGirl.Ma_so}',10)" ><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">${shoeGirl.Ten}</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ ${shoeGirl.Don_gia_Ban}</div>
                        </div>
                    </div>
                </div>
        `
    });

    return html;
}

const showFullWomenShoe = (listWomenShoe) => {
    let html = ``;
    
    listWomenShoe.forEach(shoeGirl => {
        var obj = JSON.stringify(shoeGirl);
        html += `
        <div class="col-lg-4 col-md-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${shoeGirl.Ma_so}.png">
            <img src="${Dia_chi_Dich_vu}/${shoeGirl.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                <div class="label new">New</div>
                <ul class="product__hover">
                    <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                class="arrow_expand"></span></a></li>
                    <li><input type="number" min=1 max=10 value=1 id="sl${shoeGirl.Ma_so}" /></li>
                    <li><a href="javaScript:void(0)" onclick="addtocart('${shoeGirl.Ma_so}',10)" ><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${shoeGirl.Ten}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">$ ${shoeGirl.Don_gia_Ban}</div>
            </div>
        </div>
    </div>
        `
    });

    return html;
}

const showWomenShoeBySearch = (listWomenShoe) => {
    let html = ``;
    
    listWomenShoe.forEach(shoeGirl => {
        var obj = JSON.stringify(shoeGirl);
        html += `
        <div class="col-lg-4 col-md-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${shoeGirl.Ma_so}.png">
            <img src="${Dia_chi_Dich_vu}/${shoeGirl.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                <div class="label new">New</div>
                <ul class="product__hover">
                    <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                class="arrow_expand"></span></a></li>
                    <li><input type="number" min=1 max=10 value=1 id="sl${shoeGirl.Ma_so}" /></li>
                    <li><a href="javaScript:void(0)" onclick="addtocart('${shoeGirl.Ma_so}',10)" ><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${shoeGirl.Ten}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">$ ${shoeGirl.Don_gia_Ban}</div>
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
    window.location = `../product_details.html` + `#id=${objID.Ma_so}`;
}