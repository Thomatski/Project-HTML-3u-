var quotesArray = ["The greatest pleasure of a dog is that you may make a fool of yourself with him and not only will he not scold you, but he will make a fool of himself too. – Samuel Butler", "A dog is the only thing on earth that loves you more than he loves himself. – Josh Billings", "Dogs have given us their absolute all. We are the center of their universe. We are the focus of their love and faith and trust. They serve us in return for scraps. It is without a doubt the best deal man has ever made. – Roger A. Caras", "The better I get to know men, the more I find myself loving dogs.  – Charles de Gaulle"];
var uitvoerQuote = document.getElementById("uitvoerQuote");
var btnQuote = document.getElementById("btnQuote");


btnQuote.addEventListener("click", function(){
    let random = Math.floor(Math.random() * quotesArray.length);
    uitvoerQuote.innerHTML = quotesArray[random];
});