// var arr = ["Sukma", "Wati", "Hairun", ];
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-'+ [i] + ':' + arr[i] );
// }

// method pada array
// 1. join
// var arr = ['Sukma', 'Wati', 'Hairun', 'Buton'];
// console.log(arr.join('_')); 

// 2.push & pop
// arr.push('Eny','Rya');
// arr.pop();
// arr.pop();
// console.log(arr.join('_')); 

// 3. unshift & shift
// arr.unshift('Doddy');
// arr.shift();
// console.log(arr.join('_')); 

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// arr.splice(2, 0, 'Rya');
// console.log(arr.join('-'));

// // 5. slice
// // slice(awal,akhir);
// var arr2 = arr.slice(1,4);
// console.log(arr.join('-'));
// console.log(arr2.join('-'));

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Sukma', 'Wati', 'Eny', 'Rya'];
// // for ( var i = 0; i < angka.length; i++) {
// //     console.log(angka[i]);
// // }
// // angka.forEach(function(e) {
// //     console.log(e);
// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke- ' + (i) + ' adalah : ' + e);
// })

// // 7. map
// var angka =[1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e)) {
//     return e * 2;    
// };
// console.log(angka2.join('-'));

// 8. sort
// var angka = [1,2,10,5,20,3,6,8,4,7];
// angka.sort(function(a,b){
//     return a-b;
// });
// console.log(angka.join('-'));

// 9. filter
var angka =[1,2,5,3,6,8,4];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2);