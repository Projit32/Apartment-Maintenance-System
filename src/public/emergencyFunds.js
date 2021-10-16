$(function(){

    const client = new XMLHttpRequest();
    client.onload = function (){
            if (this.status == 200) {
                const response = JSON.parse(this.responseText);
                response.data.forEach(element => {
                    $('#EFTable').append(` <tr ${element.ratePerSqFt===0? 'style="color:red;"':''}>
                    <td>${element.flatNumber}</td>
                    <td>${element.totalSqFtArea}</td>
                    <td>${element.superBuildUp}</td>
                    <td>${element.carpetSqFtArea}</td>
                    <td>${element.ratePerSqFt}</td>
                    <td>${element.totalPayable}</td>
                    <td>${element.roundOffAmount}</td>
                  </tr>`);
                });
            }
            else{
                console.log({
                    code : this.status,
                    details : JSON.parse(this.responseText)
                })
            }
        }
    client.open("GET", "/stats/emergencyFunds");
    client.send();
});