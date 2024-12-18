

apiDienThoai().then(result => {
    let dsDienThoai = result;
    
    document.getElementById("showPhone").innerHTML = xuatFullDienThoai(dsDienThoai);
    
    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showPhone").innerHTML = xuatFullDienThoai(dsDienThoai);
    }

    document.getElementById("FREETEL").onclick = () =>{
        let listFreetel = dsDienThoai.filter(product => product.Nhom_San_Pham.Ma_so == "FREETEL");
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(listFreetel);
    }

    document.getElementById("MASSTEL").onclick = () =>{
        let listMASSTEL = dsDienThoai.filter(product => product.Nhom_San_Pham.Ma_so == "MASSTEL");
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(listMASSTEL);
    }

    document.getElementById("TELEGO").onclick = () =>{
        let listTELEGO = dsDienThoai.filter(product => product.Nhom_San_Pham.Ma_so == "TELEGO");
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(listTELEGO);
    }

    document.getElementById("ASUS").onclick = () =>{
        let listASUS = dsDienThoai.filter(product => product.Nhom_San_Pham.Ma_so == "ASUS");
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(listASUS);
    }
    document.getElementById("NEFFOS").onclick = () =>{
        let listNEFFOS = dsDienThoai.filter(product => product.Nhom_San_Pham.Ma_so == "NEFFOS");
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(listNEFFOS);
    }
    document.getElementById("PHILIPS").onclick = () =>{
        let listPHILIPS = dsDienThoai.filter(product => product.Nhom_San_Pham.Ma_so == "PHILIPS");
        document.getElementById("showPhone").innerHTML += xuatFullPhoneByBrand(listPHILIPS);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = dsDienThoai.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = dsDienThoai.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showPhone").innerHTML = xuatFullPhoneByBrand(findPrice)
    }

}).catch(err => {
    console.log(err);
})
// let testapi = apiDienThoai();
// console.log(testapi)
