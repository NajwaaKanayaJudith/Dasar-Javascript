let siswa = [
    { nama_depan: "Jack", nama_belakang: "Ma"},
    { nama_depan: "Naya", nama_belakang: "Judith"},
    { nama_depan: "Joe", nama_belakang: "Taslim"}
]

//menampilkan nama lengkap dari array (nama_array.map)
siswa.map(
    (sis, index) => {
        console.log(sis.nama_depan + " " + sis.nama_belakang);
    }
)