apiGiayNu().then(result => {
    let womenShoeProductList = result;
    
    document.getElementById("showWomenShoe").innerHTML = showFullWomenShoe(womenShoeProductList);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showWomenShoe").innerHTML = showFullWomenShoe(womenShoeProductList);
    }

    document.getElementById("BEE_GEE").onclick = () =>{
        let listFreetel = womenShoeProductList.filter(product => product.Nhom_San_Pham.Ma_so == "BEE_GEE");
        document.getElementById("showWomenShoe").innerHTML = showWomenShoeBySearch(listFreetel);
    }

    document.getElementById("TRUONG_HAI").onclick = () =>{
        let listMASSTEL = womenShoeProductList.filter(product => product.Nhom_San_Pham.Ma_so == "TRUONG_HAI");
        document.getElementById("showWomenShoe").innerHTML = showWomenShoeBySearch(listMASSTEL);
    }

    document.getElementById("ZAVAS").onclick = () =>{
        let listTELEGO = womenShoeProductList.filter(product => product.Nhom_San_Pham.Ma_so == "ZAVAS");
        document.getElementById("showWomenShoe").innerHTML = showWomenShoeBySearch(listTELEGO);
    }

    document.getElementById("OEM").onclick = () =>{
        let listASUS = womenShoeProductList.filter(product => product.Nhom_San_Pham.Ma_so == "OEM");
        document.getElementById("showWomenShoe").innerHTML = showWomenShoeBySearch(listASUS);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = womenShoeProductList.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showWomenShoe").innerHTML = showWomenShoeBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = womenShoeProductList.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showWomenShoe").innerHTML = showWomenShoeBySearch(findPrice)
    }
}).catch(err => {
    console.log(err);
})