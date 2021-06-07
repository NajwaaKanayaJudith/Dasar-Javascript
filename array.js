// array string
let jurusan = ["Rekayasa Perangkat Lunak","Teknik Komputer dan Jaringan"]

//array numeric
let tingkatan_kelas = [10,11,12]

//array objek
let siswa = [
    //objek pertama
    {
        nama: "Yaya", jurusan: "RPL"
    },

    //objek kedua
    {
        nama: "Ying", jurusan: "TKJ"
    },

    //objek ketiga
    {
        nama: "Gopal", jurusan: "RPL"
    }
]

//mendapatkan jumlah data yang tersimpan pada array (nama_array.length)
console.log("Jumlah elemen array jurusan = " +jurusan.length);
console.log("Jumlah elemen array tingkatan_kelas = " + tingkatan_kelas.length);
console.log("Jumlah elemen array siswa = " + siswa.length);
