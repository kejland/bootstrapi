let dogButton = document.querySelector("#dog-gen");
let dogImg = document.querySelector("#dog-img");

dogButton.addEventListener("click", function(){
    console.log("click!");

    //fetch:
    fetch("https://dog.ceo/api/breeds/image/random")
    // .then(function(httpReponse){
    //     return httpReponse.json();
    // })
    // .then(function(data){
    //     img.src=data
    // })

    .then(function(data){
        return data.json();
    })
    .then(function(repsonse){
        dogImg.src=repsonse.message;
    })
    .catch(function(error){
        console.log("error!");
    })
})