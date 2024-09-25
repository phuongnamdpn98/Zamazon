apiMyPham().then(result => {
    let listCosmetics = result;
    
    document.getElementById("showCosmetics").innerHTML = showFullCosmetics(listCosmetics);

    document.getElementById("ALL").onclick = () =>{
        
        document.getElementById("showCosmetics").innerHTML = showFullCosmetics(listCosmetics);
    }

    document.getElementById("POND").onclick = () =>{
        let listPOND = listCosmetics.filter(product => product.Nhom_San_Pham.Ma_so == "POND");
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(listPOND);
    }

    document.getElementById("LANEIGE").onclick = () =>{
        let listLANEIGE = listCosmetics.filter(product => product.Nhom_San_Pham.Ma_so == "LANEIGE");
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(listLANEIGE);
    }

    document.getElementById("OHUI").onclick = () =>{
        let listOHUI = listCosmetics.filter(product => product.Nhom_San_Pham.Ma_so == "OHUI");
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(listOHUI);
    }

    document.getElementById("TITIONE").onclick = () =>{
        let listTITIONE = listCosmetics.filter(product => product.Nhom_San_Pham.Ma_so == "TITIONE");
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(listTITIONE);
    }
    document.getElementById("ACOSMETICS").onclick = () =>{
        let listACOSMETICS = listCosmetics.filter(product => product.Nhom_San_Pham.Ma_so == "ACOSMETICS");
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(listACOSMETICS);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = listCosmetics.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(findSearch);
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = listCosmetics.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showCosmetics").innerHTML = showFullCosmeticsByBrand(findPrice)
    }
}).catch(err => {
    console.log(err);
})