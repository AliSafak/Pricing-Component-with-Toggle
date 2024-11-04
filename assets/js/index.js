const basicPrice = document.querySelector(".basicPrice");
const professionalPrice = document.querySelector(".professionalPrice");
const masterPrice = document.querySelector(".masterPrice");
const switchBtn = document.querySelector(".switch");

let isChecked = true

switchBtn.addEventListener("click",function() {
    if(isChecked == true) {
        basicPrice.innerHTML = `199.99`;
        professionalPrice.innerHTML = "249.99";
        masterPrice.innerHTML = "399.99";
    } else {
        basicPrice.innerHTML = `19.99`;
        professionalPrice.innerHTML = "29.99";
        masterPrice.innerHTML = "39.99";
    }   isChecked = !isChecked
})






