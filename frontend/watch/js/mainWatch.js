apiDongHo().then(result => {
    let ListWatch = result;
    
    document.getElementById("showWatch").innerHTML = showFullWatch(ListWatch);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showWatch").innerHTML = showFullWatch(ListWatch);
    }

    document.getElementById("SAIGIO").onclick = () =>{
        let listpro = ListWatch.filter(product => product.Nhom_San_Pham.Ma_so == "SAIGIO");
        document.getElementById("showWatch").innerHTML = showWatchBySearch(listpro);
    }

    document.getElementById("CARNIVAL").onclick = () =>{
        let listpro = ListWatch.filter(product => product.Nhom_San_Pham.Ma_so == "CARNIVAL");
        document.getElementById("showWatch").innerHTML = showWatchBySearch(listpro);
    }

    document.getElementById("PHILIPPE").onclick = () =>{
        let listpro = ListWatch.filter(product => product.Nhom_San_Pham.Ma_so == "PHILIPPE");
        document.getElementById("showWatch").innerHTML = showWatchBySearch(listpro);
    }

    document.getElementById("JULIUS").onclick = () =>{
        let listpro = ListWatch.filter(product => product.Nhom_San_Pham.Ma_so == "JULIUS");
        document.getElementById("showWatch").innerHTML = showWatchBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = ListWatch.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showWatch").innerHTML = showWatchBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = ListWatch.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showWatch").innerHTML = showWatchBySearch(findPrice)
    }

}).catch(err => {
    console.log(err);
})