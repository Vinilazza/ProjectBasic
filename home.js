 select = document.getElementById('selectElementId');

    const cars = ["BMW","PORSCHE","FIAT","UNO"]

for (var i = 0; i<cars.length; i++){
    var opt = document.createElement('option');
    opt.value = i;
    opt.innerHTML = cars[i];
    select.appendChild(opt);
}



window.onscroll = function () {scrollFunction();};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

document.getElementById("navbar").style.background = "#501e27";
} else {

document.getElementById("navbar").style.background = "none";
}
}