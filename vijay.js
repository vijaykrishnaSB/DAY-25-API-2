document.body.innerHTML=`
<div class="background_color">
<h1 class="cat_title">Cat Pic Generator</h1>
<button class="generate_btn" type="button" class="btn btn-info">Info</button>
</div>
<div class="cat_Img_Div"><div>`

let generate_btn =document.querySelector(".generate_btn");

generate_btn.addEventListener("click", fetchPics);

function fetchPics(){
    let cat_Img_Div = document.querySelector(".cat_Img_Div")
    cat_Img_Div.innerHTML=" ";

    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then((data) => {
        console.log(data)
        let catImgUrl = data[0].url

        let catsImg=document.createElement("img")
        catsImg.setAttribute("src",`${catImgUrl}`)
        catsImg.classList.add("Image_cat")

        let cat_Img_Div = document.querySelector(".cat_Img_Div")
        cat_Img_Div.appendChild(catsImg)
    })
    .catch(err => console.log(err))
}