
var select_day = document.querySelector("#day");
for (i = 1; i <= 31; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	select_day.appendChild(option);
}
var select_month = document.querySelector("#month");
for (i = 1; i <= 12; i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	select_month.appendChild(option);
}
var select_year = document.querySelector("#year");
for (i = 1940; i <= new Date().getFullYear(); i++) {
	var option = document.createElement("option");
	option.value = i;
	option.text = i;
	select_year.appendChild(option);
}

var lis_sidebar_tag = document.querySelectorAll(".navigation > ul > li");
var list_lis = Array.from(lis_sidebar_tag);
var divs_tag_main = document.querySelectorAll(".main-edit > div");
var list_divs_tag_main = Array.from(divs_tag_main);

list_lis.forEach((li, index) => {
	li.addEventListener("click", () => {
		list_lis.forEach((item, i) => {
			item.classList.remove("active");
			try {
				list_divs_tag_main[i].classList.remove("active");
			} catch (error) {}
		});

		li.classList.add("active");
		try {
			list_divs_tag_main[index].classList.add("active");
		} catch (error) {}
	});
});

// var main_don_mua = document.querySelector(".main-don-mua");
// var product = [
// 	{
// 		shop_name: "IDEA Official Store",
// 		title: "Áo T Shirt nam cao cấp nhất trên thị trường. Siêu thoáng mát, khử khuẩn",
// 		old_price: "300.000",
// 		new_price: "198.000",
// 		image_link:
// 			"https://th.bing.com/th/id/R.6c3ddd4f609acc5e3fff3e13255cfc15?rik=nMtuon3w6BIpiw&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2ft473kellygreen.jpg&ehk=ngEG5J4NY4mngHySwtGScfJOpm%2bFsWS9P0TPNj15Qww%3d&risl=&pid=ImgRaw&r=0",
// 	},
// 	{
// 		shop_name: "IDEA Official Store",
// 		title: "Nón Nike chính hãng, độc quyền phân phối. Màu đen full không che",
// 		old_price: "1.000.000",
// 		new_price: "890.000",
// 		image_link: "https://th.bing.com/th/id/OIP.oJQUmmB9EwiC3RXsTkZ4iwHaHa?rs=1&pid=ImgDetMain",
// 	},
// 	{
// 		shop_name: "IDEA Official Store",
// 		title: "Chó lò xo. Đàn hồi siêu bền bật siêu cao ném không bể. Phù hợp cho các bé thích bạo lưc",
// 		old_price: "200.000",
// 		new_price: "99.000",
// 		image_link: "https://th.bing.com/th/id/R.8a4bc24303c0ab76cb10774a98fa6037?rik=SYgf8DcKKXEiIA&pid=ImgRaw&r=0",
// 	},
// ];

// product.forEach((item) => {
// 	html = `
// 	<div class="item">
// 		<div class="shop-name">
// 			<h5>${item.shop_name}</h5>
// 			<button id="visit-shop">Xem shop</button>
// 		</div>
// 		<hr />
// 		<div class="product">
// 			<div class="image">
// 				<img
// 					src="${item.image_link}"
// 					alt=""
// 				/>
// 			</div>
// 			<span class="title">${item.title}</span>
// 			<p class="price"><span class="old-price">₫${item.old_price}</span><span class="new-price">₫${item.new_price}</span></p>
// 		</div>
// 		<hr />

// 		<div class="final-price">
// 			<p>Thành tiền: <span>₫${item.new_price}</span></p>
// 		</div>
// 		<div class="contact-button">
// 			<button id="buy-again">Mua Lại</button>
// 			<button id="contact-seller">Liên Hệ Người Bán</button>
// 		</div>
// 	</div>
// 	`;
// 	main_don_mua.innerHTML += html;
// });


let listCoupon = [];
let showCouponList = document.getElementById("coupon");

function showCoupon(arr, showCouponList){
	let html2 =``;
	arr.forEach(coupon => {
		html2 += `<a href="#" class="data-card">
		<h3>Coupon discount</h3>
		<h4>Discount ${coupon.discount}%</h4>
		<p>Coupon Code ${coupon.couponCode}</p>
		
	  </a>`
	})
	showCouponList.innerHTML = html2;
}


apiCouponCode().then(result => {
	listCoupon = result;
	showCoupon(listCoupon, showCouponList)
}).catch(err => {
	console.log(err)
})


console.log(user)
document.getElementById("username").innerText = user.Ten;
document.getElementById("showUsername").innerText = user.Ten_Dang_nhap;
document.getElementById("showName").innerText = user.Ten;
