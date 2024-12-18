
let myAdmin = JSON.parse(sessionStorage.getItem("ADMIN"));
let listReport = [];
let NameAdmin = document.getElementById("NameAdmin");
NameAdmin.innerText = `${myAdmin.Ho_ten}`;


function showReportListMain(arr) {
    let html = ``;
    arr.forEach(report => {
        html += `<tr>
          <td>${report.ma_so}</td>
          <td>${report.Ma_cuaHang}</td>
          <td>${report.Ten}</td>
          <td>${report.email}</td>
          <td>${report.noi_dung_report}</td>
          
        </tr>`;
    });

    document.querySelector("#tableReportList").innerHTML = html;
}

apiReport().then(result => {
    listReport = result;
    showReportListMain(listReport);
}).catch(err => {
    console.log(err);
})
