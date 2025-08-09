// // // document.querySelector() -> element
// // const p4 = document.querySelector('#b p');
// // p4.style.color = 'green';
// // p4.style.fontSize = '30px';

// // const li2 = document.querySelector('section#b ul li:nth-child(2)');
// // li2.style.backgroundColor = 'orange';

// // // document.querySelectorAll()
// // const p = document.querySelectorAll('p');
// // for(let i = 0; i < p.length; i++) {
// //     p[i].style.backgroundColor = 'lightblue';
// // } 

// // innerHTML
// // const judul = document.getElementById('judul');
// // judul.innerHTML = '<em>Sukmawati</em>'

// const sectionA = document.querySelector('section#a');
// // sectionA.innerHTML = '<div><p>Paragraf 1</p></div>';

// // element.style.<property css>
// // const judul = document.querySelector('#judul');
// // judul.style.color = 'lightblue';
// // judul.style.backgroundColor = 'salmon';


// // const judul = document.getElementsByTagName('h1') [0];
// // const a = document.querySelector('section#a a');
// // sectionA.innerHTML = '<div><p>Hello World</p></div>';

// //     // setAttribute
// // const p2 = document.querySelector('.p2');
// // p2 = setAttribute('class', 'label'); 

// const button = document.createElement('button');
// const textbutton =document.createTextNode('Lets Go!');
// button.appendChild(textbutton);
// const simpan = document.getElementById('a');
// simpan.appendChild(button);

// // Dom Manipulation
// // Baru Elemen Baru
// const pBaru = document.createElement('p');
// const text = document.createTextNode('Paragraf Baru');

// // simpan tulisan ke dalam paragraf
// pBaru.appendChild(text);
// pBaru.style.backgroundColor = 'lightgreen';

// const lu = document.querySelector('section#a');
// const lu2 = lu.querySelector('p:nth-child(4)') ;
// // const lu2 = lu.querySelector() [0];
// lu.insertBefore(pBaru, lu2 )

// // simpan pBaru di akhir section A
// // const sectionA = document.getElementById('a');
// // sectionA.appendChild(pBaru);

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');
// liBaru.appendChild(teksLiBaru);
// liBaru.style.backgroundColor = 'lightgreen';

// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// ul.insertBefore(liBaru, li2)

// const link = document.getElementsByTagName('a')[0];
// sectionA.removeChild(link);

// const sectionB = document.getElementById('b');
// const p4 =sectionB.querySelector('p');

// const h2Baru = document.createElement('h2');
// const teksH2Baru = document.createTextNode('Judul Baru!');

// // replaceChild
// h2Baru.appendChild(teksH2Baru);

// sectionB.replaceChild(h2Baru, p4);
// h2Baru.style.backgroundColor = 'lightgreen';
// pBaru.style.backgroundColor = 'lightgreen';
// liBaru.style.backgroundColor = 'lightgreen';