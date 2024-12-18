const xuatMenShoeBest = (dsMenShoes) => {
    let html = ``;
    
    ProductMenShoes = dsMenShoes.slice(0, 3);
    ProductMenShoes.forEach((menShoe, index) => {
        var obj = JSON.stringify(menShoe);
        html += `
                <div class="trend__item">
                            <div class="trend__item__pic">
                                <img src="${Dia_chi_Dich_vu}/${menShoe.Ma_so}.png" alt="" style="width: 100px; height: 100px;">
                            </div>
                            <div class="trend__item__text">
                                <h6>${menShoe.Ten}</h6>
                                <div class="rating">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <div class="product__price">$ ${menShoe.Don_gia_Ban}</div>
                            </div>
                        </div>
        `
    });
    return html;
};

const showFullMenShoe = (listMenShoe) => {
    let html =``;
    
    listMenShoe.forEach(menShoe => {
        var obj = JSON.stringify(menShoe);
        html += `<div class="col-lg-4 col-md-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${menShoe.Ma_so}.png">
            <img src="${Dia_chi_Dich_vu}/${menShoe.Ma_so}.png" alt="">
                <div class="label new">New</div>
                <ul class="product__hover">
                    <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                class="arrow_expand"></span></a></li>
                    <li><input type="number" min=1 max=10 value=1 id="sl${menShoe.Ma_so}" /></li>
                    <li><a href="javaScript:void(0)" onclick="addtocart('${menShoe.Ma_so}',7)"><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${menShoe.Ten}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">$ ${menShoe.Don_gia_Ban}</div>
            </div>
        </div>
    </div>`
    })
    return html;
};

const showMenShoeBySearch = (listMenShoe) => {
    let html =``;
    
    listMenShoe.forEach(menShoe => {
        var obj = JSON.stringify(menShoe);
        html += `<div class="col-lg-4 col-md-6">
        <div class="product__item">
            <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${menShoe.Ma_so}.png">
            <img src="${Dia_chi_Dich_vu}/${menShoe.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                <div class="label new">New</div>
                <ul class="product__hover">
                    <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                class="arrow_expand"></span></a></li>
                    <li><input type="number" min=1 max=10 value=1 id="sl${menShoe.Ma_so}" /></li>
                    <li><a  href="javaScript:void(0)" onclick="addtocart('${menShoe.Ma_so}',7)"><span class="icon_bag_alt"></span></a></li>
                </ul>
            </div>
            <div class="product__item__text">
                <h6><a href="#">${menShoe.Ten}</a></h6>
                <div class="rating">
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                    <i class="fa fa-star"></i>
                </div>
                <div class="product__price">$ ${menShoe.Don_gia_Ban}</div>
            </div>
        </div>
    </div>`
    })
    return html;
};

function showDetail(objPro) {
    //console.log(objPro);
    localStorage.setItem("productDetail", objPro);
    let objID = JSON.parse(localStorage.getItem('productDetail'));
    window.location = `../product_details.html` + `#id=${objID.Ma_so}`;
}