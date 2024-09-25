apiDoGiaDung().then(result => {
    let listHouseware = result;
    
    document.getElementById("showHouseware").innerHTML = showFullHouseware(listHouseware);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showHouseware").innerHTML = showFullHouseware(listHouseware);    }

    document.getElementById("LockLock").onclick = () =>{
        let listpro = listHouseware.filter(product => product.Nhom_San_Pham.Ma_so == "LockLock");
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(listpro);
    }

    document.getElementById("TOSHIBA").onclick = () =>{
        let listpro = listHouseware.filter(product => product.Nhom_San_Pham.Ma_so == "TOSHIBA");
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(listpro);
    }

    document.getElementById("COMET").onclick = () =>{
        let listpro = listHouseware.filter(product => product.Nhom_San_Pham.Ma_so == "COMET");
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(listpro);
    }

    document.getElementById("SUNHOUSE").onclick = () =>{
        let listpro = listHouseware.filter(product => product.Nhom_San_Pham.Ma_so == "SUNHOUSE");
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(listpro);
    }

    document.getElementById("PHILIPS").onclick = () =>{
        let listpro = listHouseware.filter(product => product.Nhom_San_Pham.Ma_so == "PHILIPS");
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = listHouseware.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = listHouseware.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showHouseware").innerHTML = showHousewareBySearch(findPrice)
    }

}).catch(err => {
    console.log(err);
})