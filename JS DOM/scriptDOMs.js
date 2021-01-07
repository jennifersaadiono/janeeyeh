//DOM Selection
// harus node root nya document.getElementById()-> mengembalikan element
/*const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'green';
judul.innerHTML = 'Janeeyeh';

// document.getElementsByTagName() -> mengembalikan HTMLCollection
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
    
}

//document.getElementsByClassName -> mengembalikan HTMLCollection
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari jaascript';

// */

//document.querySelector() -> menghasilkan element
/*const p4 = document.querySelector('#b p');
p4.style.color = 'orange';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange'; */

/* const p = document.querySelector('p'); //dia akan mengubah paragraf yg pertama
p.innerHTML = 'Ini di ubah melalui javascript'; */

//document.querySelectorAll()
/*const p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
} */

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
