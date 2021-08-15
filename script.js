var btn = document.querySelector("#btn");
var trans = document.querySelector("#trans");
var cross = document.querySelector("#cross");

btn.addEventListener('click',function(){
    trans.style.right = "0";
})

cross.addEventListener('click',function(){
    trans.style.right = "-100%";
})