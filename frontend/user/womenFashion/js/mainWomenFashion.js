apiThoiTrangNu().then(result => {
    let womenFashionProductList = result;
    
    document.getElementById("showWomenFashion").innerHTML = showFullWomenFashion(womenFashionProductList);
    
    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showWomenFashion").innerHTML = showFullWomenFashion(womenFashionProductList);
        console.log(womenFashionProductList)
    }

    document.getElementById("NIU24").onclick = () =>{
        let listpro = womenFashionProductList.filter(product => product.Nhom_San_Pham.Ma_so == "NIU24");
        document.getElementById("showWomenFashion").innerHTML = showWomenFashionBySearch(listpro);
    }

    document.getElementById("VENESA").onclick = () =>{
        let listpro = womenFashionProductList.filter(product => product.Nhom_San_Pham.Ma_so == "VENESA");
        document.getElementById("showWomenFashion").innerHTML = showWomenFashionBySearch(listpro);
    }

    document.getElementById("AZUNO").onclick = () =>{
        let listpro = womenFashionProductList.filter(product => product.Nhom_San_Pham.Ma_so == "AZUNO");
        document.getElementById("showWomenFashion").innerHTML = showWomenFashionBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = womenFashionProductList.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showWomenFashion").innerHTML = showWomenFashionBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = womenFashionProductList.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showWomenFashion").innerHTML = showWomenFashionBySearch(findPrice)
    }

}).catch(err => {
    console.log(err);
})