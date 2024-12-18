const xuatDoChoi = (dsDoChoi) => {
    let html = ``;
    
    ProductDoChoi = dsDoChoi.slice(0, 3);
    ProductDoChoi.forEach((toy, index) => {
        var obj = JSON.stringify(toy);
        html += `
        <div class="col-lg-3 col-md-4 col-sm-6 mix kidtoy">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${toy.Ma_so}.png">
                            <img src="${Dia_chi_Dich_vu}/${toy.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                            <div class="label new">New</div>
                            <ul class="product__hover">
                                <li><a href="#" class="image-popup"><span
                                            class="arrow_expand"></span></a></li>
                                <li><input type="number" min=1 max=10 value=1 id="sl${toy.Ma_so}" /></li>
                                <li><a href="javaScript:void(0)" onclick="addtocart('${toy.Ma_so}',5)"><span class="icon_bag_alt"></span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6><a href="#">${toy.Ten}</a></h6>
                            <div class="rating">
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="product__price">$ ${toy.Don_gia_Ban}</div>
                        </div>
                    </div>
                </div>
        `
    });
    return html;
}

const showFullKidToy = (listToy) => {
    let html = ``;
    
    listToy.forEach(toy => {
        var obj = JSON.stringify(toy);
        html += `
        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${toy.Ma_so}.png">
                                <img src="${Dia_chi_Dich_vu}/${toy.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                                    <div class="label new">New</div>
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                                    class="arrow_expand"></span></a></li>
                                        <li><input type="number" min=1 max=10 value=1 id="sl${toy.Ma_so}" /></li>
                                        <li><a href="javaScript:void(0)" onclick="addtocart('${toy.Ma_so}',5)"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">${toy.Ten}</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ ${toy.Don_gia_Ban}</div>
                                </div>
                            </div>
                        </div>
        `
    });
    return html;
}

const showKidToyBySearch = (listToy) => {
    let html = ``;
    
    listToy.forEach(toy => {
        var obj = JSON.stringify(toy);
        html += `
        <div class="col-lg-4 col-md-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg" data-setbg="${Dia_chi_Dich_vu}/${toy.Ma_so}.png">
                                <img src="${Dia_chi_Dich_vu}/${toy.Ma_so}.png" alt="" onclick=\'showDetail(\`${obj}\`)\'>
                                    <div class="label new">New</div>
                                    <ul class="product__hover">
                                        <li><a href="img/shop/shop-1.jpg" class="image-popup"><span
                                                    class="arrow_expand"></span></a></li>
                                        <li><input type="number" min=1 max=10 value=1 id="sl${toy.Ma_so}" /></li>
                                        <li><a href="javaScript:void(0)" onclick="addtocart('${toy.Ma_so}',5)"><span class="icon_bag_alt"></span></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">${toy.Ten}</a></h6>
                                    <div class="rating">
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                        <i class="fa fa-star"></i>
                                    </div>
                                    <div class="product__price">$ ${toy.Don_gia_Ban}</div>
                                </div>
                            </div>
                        </div>
        `
    });
    return html;
}

function showDetail(objPro) {
    //console.log(objPro);
    localStorage.setItem("productDetail", objPro);
    let objID = JSON.parse(localStorage.getItem('productDetail'));
    window.location = `../product_details.html` + `#id=${objID.Ma_so}`;
}