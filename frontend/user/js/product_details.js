
let list = []
let productMa_so = location.hash.replace("#id=", "");
let product = {};
let showDetail = document.getElementById("showDetail");
let showComments = document.getElementById("showComment");

console.log(productMa_so)
apiTivi().then(result => {
    list = result;
    list.forEach(e => {
        if (productMa_so == e.Ma_so) {
            product = e;
            showShopDetail(product, 1, showDetail)
            showComment(product.reviews, showComments, 1, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(1, product)
                window.location.reload();
            }

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
            showComment(product.reviews, showComments, 2, product)
            //console.log(product.reviews)
            document.getElementById("sendReview").onclick = () => {

                sendComment(2, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 6, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(6, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 9, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(9, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 3, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(3, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 7, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(7, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 10, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(10, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 10, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(8, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 5, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(5, product)
                window.location.reload();
            }
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
            showComment(product.reviews, showComments, 4, product)
            document.getElementById("sendReview").onclick = () => {

                sendComment(4, product)
                window.location.reload();
            }
        }
    });
    //console.log(product)

})



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
                            onclick="showReport('${product.Ma_so_cuaHang}')"><span><i class="fa fa-flag" ></i></span></a></li>
                    
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

function showReport(maCuaHang) {
    window.location = `./report.html` + `#id=${maCuaHang}`;
}


function showComment(review, showComments, nhom, product) {
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

function sendComment(_nhom, product) {
    //console.log("alo")
    //console.log(user)
    let inputComment = document.getElementById("inputComment").value;

    let reviewUser = {
        "Ma_so": user.Ma_so,
        "Ten": user.Ten,
        "comment": inputComment
    }

    let maso = product.Ma_so;
    let review = {
        key: maso,
        nhom: _nhom,
        rv: reviewUser
       
    }

    apiComment(review).then(result => {
        //console.log(result);
        
    }).catch(err => {
        console.log(err);
    })
}

