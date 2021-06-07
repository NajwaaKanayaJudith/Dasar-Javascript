let barang = [
    { nama: "Beras", harga: 10000, jumlah: 5},
    { nama: "Gula", harga: 15000, jumlah: 7},
    { nama: "Telur", harga: 24000, jumlah: 3},
    { nama: "Minyak Goreng", harga: 9000, jumlah: 10},
]

let totalberas = barang[0].harga*barang[0].jumlah;
let totalgula = barang[1].harga*barang[1].jumlah;
let totaltelur = barang[2].harga*barang[2].jumlah;
let totalminyakgoreng = barang[3].harga*barang[3].jumlah;

let bayar = totalberas + totalgula + totaltelur + totalminyakgoreng
console.log("Banyak uang yang harus dibayarkan Bu Astuti adalah sebanyak = " + bayar)