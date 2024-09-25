
let list = []
let productMa_so = location.hash.replace("#id=", "");
let product = {};
let showDetail = document.getElementById("showDetail");
let showComments = document.getElementById("showComment");
let user = sessionStorage.getItem("USER");


console.log(productMa_so)
apiTivi().then(result => {
    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 1, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})

apiDienThoai().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 2, showDetail)
            showComment(product.reviews, showComments)
            console.log(product.reviews)
        }
    });
    //console.log(product)

})

apiThoiTrangNam().then(result => {
    list = result;

    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 6, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})

apiThoiTrangNu().then(result => {
    list = result;

    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 9, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})
apiMyPham().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 3, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})
apiGiayNam().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 7, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})
apiGiayNu().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 10, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})
apiDongHo().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 8, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})
apiDoChoi().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 5, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})
apiDoGiaDung().then(result => {

    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 4, showDetail)
            showComment(product.reviews, showComments)
        }
    });
    //console.log(product)

})


function sendComment(){
    //console.log("alo")
    
}

function showShopDetail(product, nhom, showDetail) {
    let html = ``;

    html = `<div class="col-lg-6">
        <div class="product__details__pic">

            <div class="product__details__slider__content">
            <img class="product__big__img"
                src="${Dia_chi_Dich_vu}/${product.Ma_so}.png" alt="">
            </div>
        </div>
    </div>
    <div class="col-lg-6">
        <div class="product__details__text">
            <h3>${product.Ten}</h3>
           <div class="rating">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>

            </div>
            <div class="product__details__price">$ ${product.Don_gia_Ban}</div>
            <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                magni lores eos qui ratione voluptatem sequi nesciunt.</p>
            <div class="product__details__button">
                <div class="quantity">
                    <span>Quantity:</span>
                    <div class="pro-qty">
                        <input type="text" value="1" id="sl${product.Ma_so}">
                    </div>
                </div>
                <a href="javaScript:void(0)" onclick="addtocart('${product.Ma_so}',${nhom})" class="cart-btn" ></span> Add to cart</a>
                <ul>
                <li><a style="display: flex; align-items: center; justify-content: center;" 
                        href="javaScript:void(0)" 
                        ><span><i class="fa fa-flag" ></i></span></a></li>
                </ul>
            </div>
            <div class="product__details__widget">
                <ul>
                    <li>
                     <span>Availability:</span>
                        <div class="stock__checkbox">
                            <label for="stockin">
                                In Stock
                                <input type="checkbox" id="stockin">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                    </li>
                
                    <li>
                        <span>Promotions:</span>
                        <p>Free shipping</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>`;

    
    
    showDetail.innerHTML = html;
}


function showComment(review, showComments) {
    let html2 = ``;
    review.forEach(com => {
        html2 += `<div class="blog__comment__item">
        <div class="blog__comment__item__pic">
            <img src="img/blog/details/comment-1.jpg" alt="">
        </div>
        <div class="blog__comment__item__text">
            <h6>${com.Ten}</h6>
            <p>${com.comment}</p>
            
        </div>
    </div>`
    })

    showComments.innerHTML = html2;
}