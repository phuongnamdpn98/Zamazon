// Thư viện http của node
const http = require("http");
// Khai báo port cho dịch vụ
const port = normalizePort(process.env.PORT || 8080);
// Khai báo thư viện fs  của node xử lý thư mục và tập tin
const fs = require("fs");
// Khai báo thư viện mongoDB
const db = require("./mongodbWebShop");



// Tạo dịch vụ:
/*
    request: yêu cầu
    response: hồi đáp
*/
//========================================================================================
const dich_vu = http.createServer((req, res) => {
    let method = req.method;
    let url = req.url;
    // Cấp quyền
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (method == "GET") {
        if (url == "/dsDienthoai") {
            db.getAll("phone").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })

        } else if (url == "/dsTivi") {
            db.getAll("tivi").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsThoiTrangNam") {
            db.getAll("menfashion").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsThoiTrangNu") {
            db.getAll("womenfashion").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsMyPham") {
            db.getAll("cosmetics").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsGiayNam") {
            db.getAll("menshoes").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsGiayNu") {
            db.getAll("womenshoes").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsDongHo") {
            db.getAll("watch").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsDoChoi") {
            db.getAll("kidtoy").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsDoGiaDung") {
            db.getAll("houseware").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/bannerAndVideo") {
            db.getAll("bannerAndVideo").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsSeller") {
            db.getAll("seller").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsUser") {
            db.getAll("user").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsReport") {
            db.getAll("report").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        } else if (url == "/dsCoupon") {
            db.getAll("couponCode").then(result => {
                let kq = JSON.stringify(result)
                res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                res.end(kq);
            }).catch(err => {
                res.end(JSON.stringify(err));
            })
        }   else if (url.match("\.png$")) {
            let imagePath = `./images/${url}`;
            if (!fs.existsSync(imagePath)) {
                imagePath = `./images/noImage.png`;
            }

            let fileStream = fs.createReadStream(imagePath);
            res.writeHead(200, { "Content-Type": "image/png" });
            fileStream.pipe(res);
        } else {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            let kq = `Bạn sử dụng phương thức GET - ${url} `
            res.end(kq);
        }
    } else if (method == "POST") {
        // Lấy dữ liệu gởi
        let noi_dung_nhan = ``;
        // Nhận thông tin gởi gán vào biến noi_dung_nhan
        req.on("data", (data) => {
            noi_dung_nhan += data;
        })
        //////////////////////////////////////////////////////////////
        if (url == "/admin/Dangnhap") {
            req.on("end", () => {
                let ket_qua = {
                    "Noi_dung": true
                }
                let user = JSON.parse(noi_dung_nhan);
                let dieukien = {
                    $and: [
                        { "Ten_Dang_nhap": user.Ten_Dang_nhap },
                        { "Mat_khau": user.Mat_khau }
                    ]
                }
                db.getOne("admin", dieukien).then(result => {
                    console.log(result)
                    ket_qua.Noi_dung = {
                        "Ho_ten": result.Ten,
                        "Nhom": {
                            "Ma_so": result.Nhom_Nguoi_dung.Ma_so,
                            "Ten": result.Nhom_Nguoi_dung.Ten
                        }
                    };
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));

                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                })
            })
        } else if (url == "/seller/Dangnhap") {
            req.on("end", () => {
                let ket_qua = {
                    "Noi_dung": true
                }
                let user = JSON.parse(noi_dung_nhan);
                let dieukien = {
                    $and: [
                        { "Ten_Dang_nhap": user.Ten_Dang_nhap },
                        { "Mat_khau": user.Mat_khau }
                    ]
                }
                db.getOne("seller", dieukien).then(result => {
                    console.log(result)
                    ket_qua.Noi_dung = {
                        "Ten_shop": result.Ten_shop,
                        "Ho_ten": result.Ten,
                        "Ma_so": result.Ma_so,
                        "Ten_Dang_nhap": result.Ten_Dang_nhap,
                        "Nhom": {
                            "Ma_so": result.Nhom_Nguoi_dung.Ma_so,
                            "Ten": result.Nhom_Nguoi_dung.Ten
                        },
                        "Danh_Sach_SanPham": result.Danh_Sach_SanPham
                    };
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));

                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                })
            })
        } else if (url == "/seller/Dangky") {
            req.on("end", () => {
                let kq = {
                    "noi_dung": true
                }
                let seller = JSON.parse(noi_dung_nhan);
                let maSoSeller = "seller" + (Math.floor(Math.random() * 100) + 1);
                let maSoNhomSeller = "s" + Math.floor(Math.random() * 100) + 1;
                //console.log(maSo)
                //console.log(maSoNhomUser)
                let newSeller = {
                    "Ten_shop": seller.Ten_shop,
                    "Ten": seller.Ten,
                    "Ma_so": maSoSeller,
                    "Ten_Dang_nhap": seller.Ten_Dang_nhap,
                    "Mat_khau": seller.Mat_khau,
                    "Nhom_Nguoi_dung": {
                        "Ten": "seller",
                        "Ma_so": maSoNhomSeller
                    },

                }
                // Xử lý thêm vào collection Nguoi_dung.json
                db.insertOne("seller", newSeller).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(kq));
                }).catch(err => {
                    console.log(err);
                    kq.noi_dung = false;
                    res.end(JSON.stringify(kq));
                })
            })
        } else if (url == "/user/Dangnhap") {
            req.on("end", () => {
                let ket_qua = {
                    "Noi_dung": true
                }
                let user = JSON.parse(noi_dung_nhan);
                let dieukien = {
                    $and: [
                        { "Ten_Dang_nhap": user.Ten_Dang_nhap },
                        { "Mat_khau": user.Mat_khau }
                    ]
                }
                db.getOne("user", dieukien).then(result => {
                    console.log(result)
                    ket_qua.Noi_dung = {
                        "Ma_so": result.Ma_so,
                        "Ten": result.Ten,
                        "Ten_Dang_nhap": result.Ten_Dang_nhap,
                        "Nhom": {
                            "Ma_so": result.Nhom_Nguoi_dung.Ma_so,
                            "Ten": result.Nhom_Nguoi_dung.Ten
                        }
                    };
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));

                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                })
            })
        } else if (url == "/user/Dangky") {
            req.on("end", () => {
                let kq = {
                    "noi_dung": true
                }
                let user = JSON.parse(noi_dung_nhan);
                let maSo = "user" + (Math.floor(Math.random() * 100) + 1);
                let maSoNhomUser = "u" + Math.floor(Math.random() * 100) + 1;
                // console.log(maSo)
                // console.log(maSoNhomUser)
                let newUser = {
                    "Ten": user.Ten,
                    "Ma_so": maSo,
                    "Ten_Dang_nhap": user.Ten_Dang_nhap,
                    "Mat_khau": user.Mat_khau,
                    "Nhom_Nguoi_dung": {
                        "Ten": "user",
                        "Ma_so": maSoNhomUser
                    }
                }
                // Xử lý thêm vào collection Nguoi_dung.json
                db.insertOne("user", newUser).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(kq));
                }).catch(err => {
                    console.log(err);
                    kq.noi_dung = false;
                    res.end(JSON.stringify(kq));
                })
            })
        } else if (url == "/Dathang") {
            req.on('end', function () {
                let dsDathang = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": [] };
                dsDathang.forEach(item => {
                    let filter = {
                        "Ma_so": item.key
                    }

                    let nhom = item.nhom;
                    let collectionName = "matHang";
                    switch (nhom) {
                        case 1:
                            collectionName = "tivi";
                            break;
                        case 2:
                            collectionName = "phone";
                            break;
                        case 3:
                            collectionName = "cosmetics";
                            break;
                        case 4:
                            collectionName = "houseware";
                            break;
                        case 5:
                            collectionName = "kidtoy";
                            break;
                        case 6:
                            collectionName = "menfashion";
                            break;
                        case 7:
                            collectionName = "menshoes";
                            break;
                        case 8:
                            collectionName = "watch";
                            break;
                        case 9:
                            collectionName = "womenfashion";
                            break;
                        case 10:
                            collectionName = "womenshoes";
                            break;
                        default:
                            break;
                    }
                    
                    db.getOne(collectionName, filter).then(result => {
                        //result.Danh_sach_Phieu_Ban.push(item.dathang);

                        // Update
                        let capnhat = {}
                        
                        if (collectionName == "matHang") {
                            result.Danh_sach_Ban_hang.push(item.dathang);

                            capnhat = {
                                $set: { Danh_sach_Ban_hang: result.Danh_sach_Ban_hang }
                            }
                        } else {
                            result.Danh_sach_Phieu_Ban.push(item.dathang);
                            capnhat = {
                                $set: { Danh_sach_Phieu_Ban: result.Danh_sach_Phieu_Ban }
                            }
                        }
                        let obj = {
                            "Ma_so": result.Ma_so,
                            "Update": true
                        }
                        db.updateOne(collectionName, filter, capnhat).then(result => {
                            if (result.modifiedCount == 0) {
                                obj.Update = false

                            }
                            ket_qua.Noi_dung.push(obj);
                            //console.log(ket_qua.Noi_dung)
                            if (ket_qua.Noi_dung.length == dsDathang.length) {
                                res.end(JSON.stringify(ket_qua));
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    }).catch(err => {
                        console.log(err);
                    })

                })
            })

        } else if (url == "/Sua") { // thêm - sửa - xóa điện thoại
            req.on('end', function () {
                let products = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": true };
                db.updateOne(products.collection, products.condition, products.update).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua))
                })
            })
        } else if (url == "/Them") {
            req.on('end', function () {
                let products = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": true };
                db.insertOne(products.collection, products.product).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                })
            })
        } else if (url == "/Images") {
            req.on('end', function () {
                let img = JSON.parse(noi_dung_nhan);
                let Ket_qua = { "Noi_dung": true };
                // upload img in images ------------------------------

                let kq = saveMedia(img.name, img.src)
                if (kq == "OK") {
                    res.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                    res.end(JSON.stringify(Ket_qua));
                } else {
                    Ket_qua.Noi_dung = false
                    res.writeHead(200, { "Content-Type": "text/json; charset=utf-8" });
                    res.end(JSON.stringify(Ket_qua));
                }

                // upload img host cloudinary ------------------------------
                /*
                imgCloud.UPLOAD_CLOUDINARY(img.name,img.src).then(result=>{
                    console.log(result);
                    res.end(JSON.stringify(Ket_qua));

                }).catch(err=>{
                    Ket_qua.Noi_dung=false
                    res.end(JSON.stringify(Ket_qua))
                })
                */
            })

        } else if (url == "/Xoa") {
            req.on('end', function () {
                let products = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": true };
                db.deleteOne(products.collection, products.Ma_so).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua))
                })

            })

        } else if (url == "/ThemCoupon") {
            req.on('end', function () {
                let coupon = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": true };
                db.insertOne("couponCode", coupon).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                })
            })
        } else if (url == "/ThemBannerAndVideo") {
            req.on('end', function () {
                let ThemBannerAndVideo = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": true };
                db.insertOne("bannerAndVideo", ThemBannerAndVideo).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                })
            })
        } else if (url == "/SuaBannerAndVideo") {
            req.on('end', function () {
                let suaBannerAndVideo = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": true };
                db.updateOne("bannerAndVideo", suaBannerAndVideo.condition, suaBannerAndVideo.update).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua));
                }).catch(err => {
                    console.log(err);
                    ket_qua.Noi_dung = false;
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(ket_qua))
                })
            })
        } else if (url == "/sendReport") {
            req.on("end", () => {
                let kq = {
                    "noi_dung": true
                }
                let report = JSON.parse(noi_dung_nhan);
                let maSoReport = "report" + (Math.floor(Math.random() * 100) + 1);
                
                //console.log(maSo)
                //console.log(maSoNhomUser)
                let newReport = {
                    "ma_so": maSoReport,
                    "Ma_cuaHang":report.Ma_cuaHang,
                    "Ten": report.Ten,
                    "email": report.email,
                    "noi_dung_report": report.contentReport
                }
                // Xử lý thêm vào collection Nguoi_dung.json
                db.insertOne("report", newReport).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(kq));
                }).catch(err => {
                    console.log(err);
                    kq.noi_dung = false;
                    res.end(JSON.stringify(kq));
                })
            })
        } else if (url == "/comment") {
        
            // cần fix gấp vào sáng mai
            req.on('end', function () {
                let comment = JSON.parse(noi_dung_nhan);
                let ket_qua = { "Noi_dung": [] };
                
                    let filter = {
                        "Ma_so": comment.key
                    }

                    let nhom = comment.nhom;
                    let collectionName = "matHang";
                    switch (nhom) {
                        case 1:
                            collectionName = "tivi";
                            break;
                        case 2:
                            collectionName = "phone";
                            break;
                        case 3:
                            collectionName = "cosmetics";
                            break;
                        case 4:
                            collectionName = "houseware";
                            break;
                        case 5:
                            collectionName = "kidtoy";
                            break;
                        case 6:
                            collectionName = "menfashion";
                            break;
                        case 7:
                            collectionName = "menshoes";
                            break;
                        case 8:
                            collectionName = "watch";
                            break;
                        case 9:
                            collectionName = "womenfashion";
                            break;
                        case 10:
                            collectionName = "womenshoes";
                            break;
                        default:
                            break;
                    }
                    
                    db.getOne(collectionName, filter).then(result => {
                        //result.Danh_sach_Phieu_Ban.push(item.dathang);

                        // Update
                        let capnhat = {}
                        
                        if (collectionName == "matHang") {
                            result.reviews.push(comment.rv);

                            capnhat = {
                                $set: { reviews: result.reviews }
                            }
                        } else {
                            result.reviews.push(comment.rv);
                            capnhat = {
                                $set: { reviews: result.reviews }
                            }
                        }
                        let obj = {
                            "Ma_so": result.Ma_so,
                            "Update": true
                        }
                        db.updateOne(collectionName, filter, capnhat).then(result => {
                            if (result.modifiedCount == 0) {
                                obj.Update = false

                            }
                            ket_qua.Noi_dung.push(obj);
                            //console.log(ket_qua.Noi_dung)
                            if (ket_qua.Noi_dung.length == comment.length) {
                                res.end(JSON.stringify(ket_qua));
                            }
                        }).catch(err => {
                            console.log(err)
                        })
                    }).catch(err => {
                        console.log(err);
                    })

                
            })
        } else if (url == "/SuaNguoidung") {
            req.on("end", () => {
                let kq = {
                    "noi_dung": true
                }
                let objSua = JSON.parse(noi_dung_nhan);
                let filter = {
                    "Ma_so": objSua.Ma_so
                }
                let user = {
                    $set: {
                        "Ten": objSua.Ten,
                        "Ten_Dang_nhap": objSua.Ten_Dang_nhap,
                        "Mat_khau": objSua.Mat_khau
                    }
                }
                db.updateOne("user", filter, user).then(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(kq));
                }).catch(err => {
                    console.log(err);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    kq.noi_dung = false;
                    res.end(JSON.stringify(kq));
                })
            })
        } else if (url == "/XoaSeller") {
            req.on("end", () => {
                let kq = {
                    "noi_dung": true
                }
                let objXoa = JSON.parse(noi_dung_nhan);
                let filter = {
                    "Ma_so": objXoa.Ma_so
                }
                db.deleteOne("seller", filter).catch(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(kq));
                }).catch(err => {
                    console.log(err);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    kq.noi_dung = false;
                    res.end(JSON.stringify(kq));
                })

            })
        }else if (url == "/XoaUser") {
            req.on("end", () => {
                let kq = {
                    "noi_dung": true
                }
                let objXoa = JSON.parse(noi_dung_nhan);
                let filter = {
                    "Ma_so": objXoa.Ma_so
                }
                db.deleteOne("user", filter).catch(result => {
                    console.log(result);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    res.end(JSON.stringify(kq));
                }).catch(err => {
                    console.log(err);
                    res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
                    kq.noi_dung = false;
                    res.end(JSON.stringify(kq));
                })

            })
        } else {
            res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
            let kq = `Bạn sử dụng phương thức POST - ${url} `
            res.end(kq);
        }
    } else {
        res.end(`Dịch vụ  method:${method} - url:${url} `)
    }
})

// Dịch vụ lắng nghe tại địa chỉ và cổng nào

dich_vu.listen(port, () => {
    console.log(`Dịch vụ thực thi tại địa chỉ http://localhost:${port}`)
})

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

// Upload Media -----------------------------------------------------------------
function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

    if (matches.length !== 3) {
        return new Error('Error ...');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

function saveMedia(Ten, Chuoi_nhi_phan) {
    var Kq = "OK"
    try {
        var Nhi_phan = decodeBase64Image(Chuoi_nhi_phan);
        var Duong_dan = "./images/" + Ten
        fs.writeFileSync(Duong_dan, Nhi_phan.data);
    } catch (Loi) {
        Kq = Loi.toString()
    }
    return Kq
}
