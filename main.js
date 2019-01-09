$(document).ready(function() {

    var json = [
        { type: 'lightcoral', amount: 5 },
        { type: 'lightcoral', amount: 15 },
        { type: 'yellow', amount: 2 },
        { type: 'lightblue', amount: 25 },
        { type: 'lightblue', amount: 15 },
        { type: 'lightblue', amount: 5 }
    ];

    // var risultatoFinaleDaOttenere = {
    //     lightcoral: 20,
    //     yellow: 2,
    //     lightblue: 45
    // };

    var oggettoDiMezzo = {};

    for (var i = 0; i < json.length; i++) {
        var oggetto = json[i];

        if (oggettoDiMezzo[oggetto.type] == undefined)
        {
            oggettoDiMezzo[oggetto.type] = 0;
        }

        oggettoDiMezzo[oggetto.type] += oggetto.amount;
    }

    console.log(oggettoDiMezzo);

    // var arrayLabels = ['lightcoral', 'yellow', 'lightblue'];
    // var arrayData = [20, 2, 45];

    var arrayLabels = [];
    var arrayData = [];

    for (var chiave in oggettoDiMezzo) {
        arrayLabels.push(chiave);
        arrayData.push(oggettoDiMezzo[chiave]);
    }

    var myPieChart = new Chart($('.test-boolean'), {
        type: 'pie',
        data: {
            datasets: [{
                data: arrayData
            }],

            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: arrayLabels
        }
    });

});
