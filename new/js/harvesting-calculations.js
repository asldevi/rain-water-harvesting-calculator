// DOM ready for JQuery
$(function() {

    $("button#calculate-supply").on("click", function( event ) {
        var avgRainfall = Number(document.getElementById("avg-rainfall").value);
    
        var pavedArea = Number(document.getElementById("paved-area").value);
        var openArea = Number(document.getElementById("open-area").value);
    
        var roofArea = Number(document.getElementById("roof-area").value);
        var roofEfficiency = Number(document.getElementById("roof-type-efficiency").value);
    
        /* 
        "One millimeter of rain" is actually one cubic millimeter per square millimeter
         1mm rain in 1 sq.m would give  1000 mm * 1000 mm * 1 mm = 1 000 000 mm3 = 1 liter.
    
         For more detailed explanation, refer
         https://earthscience.stackexchange.com/questions/14587/what-does-a-mm-of-rain-mean
        */
    
        var annualRunOffInLiters = ((pavedArea + openArea + (roofArea * roofEfficiency)) * avgRainfall);
    
        var totalWaterInKLD = annualRunOffInLiters/(365.*1000);
        // round it to 2 decimals
        totalWaterInKLD = Math.round(totalWaterInKLD * 100) / 100;
    
        console.log("annualRunOffInLiters! " + annualRunOffInLiters);
        console.log("totalWaterInKLD! " + totalWaterInKLD);
    
        var annualRunOffInKL = Math.round(annualRunOffInLiters/1000.);
        document.getElementById("total-water-in-kld").value = totalWaterInKLD;
        document.getElementById("annual-runoff-in-liters").value = annualRunOffInLiters;
    
        document.getElementById("supply-output").innerHTML = "You can potentially harvest " + annualRunOffInKL + " Kilo Liters of water every year. That's about " + totalWaterInKLD + " KLD!"
    });
    
    
    $("button#add-population-types").on("click", function( event ) {
        // get the last DIV with class populations"
        var $lastPopulation = $('div.populations:last');

        var $newPopulation = $lastPopulation.clone();

        $newPopulation.find('input').each( function() {
            $(this).val('');
        })

        $newPopulation.find( '[id]' ).each( function() {
            var strNewId = $( this ).attr( 'id' ).replace( /\d+$/, function( strId ) { return parseInt( strId ) + 1; } );
            $( this ).attr( 'id', strNewId );
        });

        // Finally add it
        $lastPopulation.after($newPopulation);
    });

    $("button#calculate-water-demand").on("click", function( event ) {
        var dailyWaterDemandInLiters = 0;
        var numPeople, consumption;

        for (let index = 1; index <= $('div.populations').length; index++) {
            numPeople = document.getElementById('population-' + index).value;
            consumption = document.getElementById('daily-demand-per-capita-' + index).value;

            dailyWaterDemandInLiters += ( numPeople * consumption);
        }

        var yearlyWaterDemandInKL = 365 * dailyWaterDemandInLiters/1000.;
        document.getElementById("demand-output").innerHTML = "You have water demand of " + yearlyWaterDemandInKL + " Kilo Liters of water every year."
    });
});

// 
// document.querySelector('button').addEventListener('click', (e) => {
// people += 1;
// document.querySelector(/*insert parent name here*/).insertAdjacentHTML('beforeend', `<input id="name-input--${people}"><input id="address-input--${people}">
// });

// function addPopulation( event ) {
//     console.log( "clicked: " + event.target );
// };
