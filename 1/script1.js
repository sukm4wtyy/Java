// // Dom Event
// // Event Handler
// // inline HTML attribute
// const p3 = document.querySelector('.p3');
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'lightblue';
// }
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// // element method
// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2



// // addeventListener()
// const p4 = document.querySelector('section#b p');
//     // javascript tolong carikan elemen p4 lalu saat di click lakukan menu function
// p4.addEventListener('click', function() {
//     alert('tambahkan item baru?');

//     // menambah elemen baru di li saat di click
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const teksLi = document.createTextNode('Item Baru');
    
//     liBaru.appendChild(teksLi);
//     ul.appendChild(liBaru);
// })


const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});