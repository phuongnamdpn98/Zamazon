apiTivi().then(result => {
    let dsTivi = result;
    
    document.getElementById("showTivi").innerHTML = xuatFulldsTivi(dsTivi);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showTivi").innerHTML = xuatFulldsTivi(dsTivi);
    }

    document.getElementById("SAMSUNG").onclick = () =>{
        let listpro = dsTivi.filter(product => product.Nhom_San_Pham.Ma_so == "SAMSUNG");
        document.getElementById("showTivi").innerHTML = showTiviBySearch(listpro);
    }

    document.getElementById("KHAC").onclick = () =>{
        let listpro = dsTivi.filter(product => product.Nhom_San_Pham.Ma_so == "KHAC");
        document.getElementById("showTivi").innerHTML = showTiviBySearch(listpro);
    }

    document.getElementById("LG").onclick = () =>{
        let listpro = dsTivi.filter(product => product.Nhom_San_Pham.Ma_so == "LG");
        document.getElementById("showTivi").innerHTML = showTiviBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = dsTivi.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showTivi").innerHTML = showTiviBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = dsTivi.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showTivi").innerHTML = showTiviBySearch(findPrice)
    }
}).catch(err => {
    console.log(err);
})