apiDoChoi().then(result => {
    let listKidToy = result;
    
    document.getElementById("showKidToy").innerHTML = showFullKidToy(listKidToy);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showKidToy").innerHTML = showFullKidToy(listKidToy);
    }

    document.getElementById("OEM").onclick = () =>{
        let listpro = listKidToy.filter(product => product.Nhom_San_Pham.Ma_so == "OEM");
        document.getElementById("showKidToy").innerHTML = showKidToyBySearch(listpro);
    }

    document.getElementById("QMAN").onclick = () =>{
        let listpro = listKidToy.filter(product => product.Nhom_San_Pham.Ma_so == "QMAN");
        document.getElementById("showKidToy").innerHTML = showKidToyBySearch(listpro);
    }

    document.getElementById("ICHIGO").onclick = () =>{
        let listpro = listKidToy.filter(product => product.Nhom_San_Pham.Ma_so == "ICHIGO");
        document.getElementById("showKidToy").innerHTML = showKidToyBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = listKidToy.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showKidToy").innerHTML = showKidToyBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = listKidToy.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showKidToy").innerHTML = showKidToyBySearch(findPrice)
    }

}).catch(err => {
    console.log(err);
})