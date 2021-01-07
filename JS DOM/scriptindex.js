//ubah tombol
const first = document.getElementById('first');
first.onclick = function() {
    //document.body.style.backgroundColor = 'lightblue';
    //document.body.setAttribute('class','biru-muda');
    document.body.classList.toggle('biru-muda'); //mengubah warna menjadi biru dan kembali lagi jadi putih

}

//membuat tombol tanpa mengubah html
const acakWarna = document.createElement('button');
const textTombol = document.createTextNode('AcakWarna');
acakWarna.appendChild(textTombol);
acakWarna.setAttribute('type', 'button');
first.after(acakWarna);

acakWarna.addEventListener('click', function(){
    const cr = (Math.random() * 255 + 1);
    const cg = (Math.random() * 255 + 1);
    const cb = (Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb(' + cr +', '+ cg +','+ cb +')';
});

//slider red
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');

sRed.addEventListener('input', function(){
    //console.log(sRed.value);
    const cr = sRed.value;
    const cg = sGreen.value;
    const cb = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ cr +','+ cg +','+ cb +')'
});

sGreen.addEventListener('input', function(){
    //console.log(sRed.value);
    const cr = sRed.value;
    const cg = sGreen.value;
    const cb = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ cr +','+ cg +','+ cb +')'
});

sBlue.addEventListener('input', function(){
    //console.log(sRed.value);
    const cr = sRed.value;
    const cg = sGreen.value;
    const cb = sBlue.value;
    document.body.style.backgroundColor = 'rgb('+ cr +','+ cg +','+ cb +')'
});