var selectorHond = document.getElementById("selHond");
var inputLeeftijd = document.getElementById("inpLeeftijd");
var btnBereken = document.getElementById("btnBereken");
var uitvoerResultaat = document.getElementById("uitvoerResultaat");

btnBereken.addEventListener("click", function(){
    let leeftijd = parseInt(inputLeeftijd.value);
    let grootte = selectorHond.value;
    let resultaat = calculateLeeftijdDog(grootte, leeftijd);
    let paragraph = document.createElement("p");
    
    paragraph = "Als je hond " + leeftijd + " jaar is, dan is zijn menselijke leeftijd " + resultaat + " jaar";
    uitvoerResultaat.innerHTML = paragraph;
});

function calculateLeeftijdDog (grootte, leeftijd){
    let resultaat;

    if(grootte === "klein"){
        switch(leeftijd){
            case 1:
                resultaat = 20;
                break;
            case 2:
                resultaat = 28;
                break;
            case 3:
                resultaat = 32;
                break;
            case 4:
                resultaat = 36;
                break;
            case 5:
                resultaat = 40;
                break;
            case 6:
                resultaat = 44;
                break;
            case 7:
                resultaat = 48;
                break;
            case 8:
                resultaat = 52;
                break;
            case 9:
                resultaat = 56;
                break;
            case 10:
                resultaat = 60;
                break;
            case 11:
                resultaat = 64;
                break;
        }
    }
    else if(grootte === "middelmatig"){
        switch(leeftijd){
            case 1:
                resultaat = 18;
                break;
            case 2:
                resultaat = 27;
                break;
            case 3:
                resultaat = 33;
                break;
            case 4:
                resultaat = 39;
                break;
            case 5:
                resultaat = 45;
                break;
            case 6:
                resultaat = 51;
                break;
            case 7:
                resultaat = 57;
                break;
            case 8:
                resultaat = 63;
                break;
            case 9:
                resultaat = 69;
                break;
            case 10:
                resultaat = 75;
                break;
            case 11:
                resultaat = 81;
                break;
        }
    }
    else if(grootte === "groot"){
        switch(leeftijd){
            case 1:
                resultaat = 16;
                break;
            case 2:
                resultaat = 22;
                break;
            case 3:
                resultaat = 31;
                break;
            case 4:
                resultaat = 40;
                break;
            case 5:
                resultaat = 49;
                break;
            case 6:
                resultaat = 58;
                break;
            case 7:
                resultaat = 67;
                break;
            case 8:
                resultaat = 76;
                break;
            case 9:
                resultaat = 85;
                break;
            case 10:
                resultaat = 96;
                break;
            case 11:
                resultaat = 105;
                break;
        }   
    };
    return resultaat;
};