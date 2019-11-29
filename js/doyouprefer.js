var img1 = {
    alt : "afbeelding van een hond",
    image : "../img/img1.jpeg"
}
var img2 = {
    alt : "afbeelding van een hond",
    image : "../img/img2.png"
}
var img3 = {
    alt : "afbeelding van een hond",
    image : "../img/img3.jpeg"
}
var img4 = {
    alt : "afbeelding van een hond",
    image : "../img/img4.png"
}
var img5 = {
    alt : "afbeelding van een hond",
    image : "../img/img5.jpeg"
}
var img6 = {
    alt : "afbeelding van een hond",
    image : "../img/img6.jpeg"
}

var imgs = [img1, img2, img3, img4, img5, img6];

var imgDog1 = document.getElementById("img1");
var imgDog2 = document.getElementById("img2");


window.onload = function(){
    imgDog1.src = img1.image;
    imgDog2.src = img2.image;
};

//verandering eerste afbeelding
imgDog1.addEventListener("click", function(){
    let random = Math.floor(Math.random() * imgs.length);
    let resultaat = imgs[random];
    
    
    while(resultaat.image === imgDog2.getAttribute('src')){
        random = Math.floor(Math.random() * imgs.length);
        resultaat = imgs[random];  
    };
    imgDog1.src = resultaat.image;
    imgDog1.alt = resultaat.alt;
});

//verandering tweede afbeelding
imgDog2.addEventListener("click", function(){
    let random = Math.floor(Math.random() * imgs.length);
    let resultaat = imgs[random];
    
    
    while(resultaat.image === imgDog1.getAttribute('src')){
        random = Math.floor(Math.random() * imgs.length);
        resultaat = imgs[random];  
    };
    imgDog2.src = resultaat.image;
});

