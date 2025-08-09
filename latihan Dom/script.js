const tombol = document.getElementById('tombolwarna');
tombol.onclick = function () {
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('class', 'ubahwarna');
    document.body.classList.toggle('ubahwarna');
}

// tombol untuk warna random
const tombol2 = document.createElement('button');
const text = document.createTextNode('Warna Acak');

tombol2.appendChild(text);
tombol2.setAttribute('type', 'button');
tombol.after(tombol2);

tombol2.addEventListener('click', function () {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

// untuk kotak
const sliderRed = document.querySelector('input[name=sliderRed]');
const sliderGreen = document.querySelector('input[name=sliderGreen]');
const sliderBlue = document.querySelector('input[name=sliderBlue]');

sliderRed.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g + ','+ b +')';
    
});
sliderGreen.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g + ','+ b +')';
});
sliderBlue.addEventListener('input', function() {
    const r = sliderRed.value;
    const g = sliderGreen.value;
    const b = sliderBlue.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +',' + b +')';
})

// untuk mouse berubah warna saat di gerak
document.body.addEventListener('mousemove', function(event) {
    const xpost = Math.round((event.clientX / window.innerWidth) * 255);
    const ypost = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xpost +','+ ypost +',100)';
});