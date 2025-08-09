// var mahasiswa = {
//     nama = 'sukmawati',
//     lulus = true,
//     IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04],
//     IPKumulatif : function () {
//         var total = 0;
//         var IPS = this.IPSemester;
//         for ( var i = 0; i < IPS.length; i++ ) {
//             total += IPS [i]; 
//         }
//         return total/IPS.length;
//     }
// }
// mahasiswa.IPKumulatif();

// membuat object
// var mhs = {
//     nama : "sukmawati",
//     umur : 24,
//     ips : [3.00, 2.50, 3.20],
//     alamat : { 
//         jalan : "jl. Kapitan Jongker"
//         Kota  : "Piru" 
//         Provinsi : "Maluku"
//     } 
// }

// object literal
// var mhs1 = {
//     nama : 'sukmawati',
//     nrp : '192051',
//     email : 'sukma@gmail.com',
//     jurusan : 'Teknik Informatika'
// } 

// function Declaration
// function buatobjectMahasiswa ( nama, nrp, email, jurusan) {
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nrp = nrp;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }
// var mhs3 = buatobjectMahasiswa('sukma','192051','sukma@gmail.com','Teknik Informatika');
// var mhs3 = buatobjectMahasiswa('uma','12345','uma@gmail.com','Sistem Informasi');

// Constructor
// function mahasiswa (nama, nrp, email, jurusan) {
//     this.nama = nama;
//     this.nrp = nrp;
//     this.email = email;
//     this.jurusan = jurusan;
//     var mhs4 = new mahasiswa('sukma','01234','uma@gmail.com','Teknik Informatika');

// }

// this
// function deklaration
// function halo () {
//     console.log(this);
//     console.log('halo');
// }   this.halo ();
// this mengembalikan object global

// object literal
// var obj = {a:10; nama: 'sukma'};
// obj.halo = function () {
//     console.log(this);
//     console.log('halo');
// } obj.halo();
// this mengembalikan object yang bersangkutan

// constructor
// function Halo () {
//     console.log(this);
//     console.log('halo');
// }
// var obj1 = new Halo ();
// var obj2 = new Halo ();
// this mengembalikan object yg baru di buat

