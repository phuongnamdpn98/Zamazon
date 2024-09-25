apiGiayNam().then(result => {
    let ListMenShoe = result;
    
    document.getElementById("showMenShoe").innerHTML = showFullMenShoe(ListMenShoe);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showMenShoe").innerHTML = showFullMenShoe(ListMenShoe);
    }

    document.getElementById("ZAVAS").onclick = () =>{
        let listpro = ListMenShoe.filter(product => product.Nhom_San_Pham.Ma_so == "ZAVAS");
        document.getElementById("showMenShoe").innerHTML = showMenShoeBySearch(listpro);
    }

    document.getElementById("BEE_GEE").onclick = () =>{
        let listpro = ListMenShoe.filter(product => product.Nhom_San_Pham.Ma_so == "BEE_GEE");
        document.getElementById("showMenShoe").innerHTML = showMenShoeBySearch(listpro);
    }

    document.getElementById("PIERRE").onclick = () =>{
        let listpro = ListMenShoe.filter(product => product.Nhom_San_Pham.Ma_so == "PIERRE");
        document.getElementById("showMenShoe").innerHTML = showMenShoeBySearch(listpro);
    }

    document.getElementById("LEATHER").onclick = () =>{
        let listpro = ListMenShoe.filter(product => product.Nhom_San_Pham.Ma_so == "LEATHER");
        document.getElementById("showMenShoe").innerHTML = showMenShoeBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = ListMenShoe.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showMenShoe").innerHTML = showMenShoeBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = ListMenShoe.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showMenShoe").innerHTML = showMenShoeBySearch(findPrice)
    }
}).catch(err => {
    console.log(err);
})