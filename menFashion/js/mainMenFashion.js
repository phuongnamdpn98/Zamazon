apiThoiTrangNam().then(result => {
    let listMenFashion = result;
    
    document.getElementById("showMenFashion").innerHTML = showFullMenFashion(listMenFashion);

    document.getElementById("ALL").onclick = () =>{
        document.getElementById("showMenFashion").innerHTML = showFullMenFashion(listMenFashion);
    }

    document.getElementById("TMAX").onclick = () =>{
        let listpro = listMenFashion.filter(product => product.Nhom_San_Pham.Ma_so == "TMAX");
        document.getElementById("showMenFashion").innerHTML = showMenFashionBySearch(listpro);
    }

    document.getElementById("PRADA").onclick = () =>{
        let listpro = listMenFashion.filter(product => product.Nhom_San_Pham.Ma_so == "PRADA");
        document.getElementById("showMenFashion").innerHTML = showMenFashionBySearch(listpro);
    }

    document.getElementById("btnSearch").onclick = () =>{
        let inputSearch = document.getElementById("inputSearch");
        if(inputSearch.value.trim() == ""){
            inputSearch.focus();
            return false;
        }

        let findSearch = listMenFashion.filter(product => product.Ten.toLowerCase().includes(inputSearch.value.toLowerCase()))
        document.getElementById("showMenFashion").innerHTML = showMenFashionBySearch(findSearch)
    }

    document.getElementById("searchPrice").onclick = ()=>{
        let minamount = document.getElementById("minamount").value;
        let maxamount = document.getElementById("maxamount").value;
        let strMinamount = String(minamount)
        let strMaxamount= String(maxamount)
        let findPrice = listMenFashion.filter(product => product.Don_gia_Ban >= strMinamount.slice(1) && product.Don_gia_Ban <= strMaxamount.slice(1));
        document.getElementById("showMenFashion").innerHTML = showMenFashionBySearch(findPrice)
    }
}).catch(err => {
    console.log(err);
})