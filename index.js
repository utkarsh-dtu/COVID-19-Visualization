console.log("hi");




function GetData() {

    url = 'http://api.coronatracker.com/v3/stats/worldometer/country?countryCode=';
    fetch(url).then(response => response.json()).then(
        function (rsp) {
            console.log(rsp);

            rsp.forEach(element => {

                longitude = element.lng;
                latitude = element.lat;

                totalCases = element.totalConfirmed;
                activeCases = element.activeCases;
                deaths = element.totalDeaths
                if (totalCases < 50000) {
                    color = "rgb(75,0,0)"

                }
                else if (totalCases > 50000 && totalCases < 100000) {
                    color = "rgb(115,0,0)"
                }
                else if (totalCases > 10000 && totalCases < 300000) {
                    color = "rgb(140,0,0)"
                }
                else if (totalCases > 30000 && totalCases < 700000) {
                    color = "rgb(190,0,0)"
                }
                else if (totalCases > 70000 && totalCases < 1100000) {
                    color = "rgb(220,0,0)"
                }
                else {
                    color = "rgb(255,0,0)"

                }


                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);



                // text_display = `TOTAL : ${totalCases}<br> ACTIVE : ${activeCases} <br> DEATHS : ${deaths}`

                // new mapboxgl.Popup({ closeOnClick: false })
                //     .setLngLat([longitude, latitude])
                //     .setHTML(`<h4>${text_display}</h4>`)
                //     .addTo(map)


            });






        }
    )
}

// GetData();
setInterval(GetData, 20000);

// write this.responseText while using xhr object
// http://api.coronatracker.com/v3/stats/worldometer/country?countryCode=