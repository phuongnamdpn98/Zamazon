
let Ma_cuaHang = location.hash.replace("#id=", "");
const sendReport = () =>{
    let name=document.querySelector("#nameReport").value.trim();
    let email=document.querySelector("#emailReport").value.trim();
    let contentReport =document.querySelector("#contentReport").value.trim();
    if(name !="" && email!="" && contentReport != ""){
        let report={
            "Ma_cuaHang":Ma_cuaHang,
            "Ten":name,
            "email": email,
            "contentReport": contentReport
        }
        apiSendReport(report).then(result=>{
            alert("Da report thanh cong")
            window.location.href = `./index_main.html`;
        }).catch(err=>{
            console.log(err)
        })
    }else{
        alert('Dữ liệu không hợp lệ')
    }
}