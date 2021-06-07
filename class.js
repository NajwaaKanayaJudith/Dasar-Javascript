//Class merupakan template atau rancangan dari sebuah objek
//Class mendefinisikan property atau atribut dan method dari sebuah objek
class PersegiPanjang{
    constructor(p, l){
        /**
         * properti atau atribut dari sebuah objek
         * didefinisikan di dalam method constructor
         */
        this.panjang = p
        this.lebar = l
    }

    luas = () => {
        return this.panjang * this.lebar
    }

    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}

let tanah = new PersegiPanjang(10,50)
console.log("Luas Tanah = " + tanah.luas());
console.log("Keliling Tanah = " + tanah.keliling());

/**Constructor() merupakan sebuah fungsi yang pertama kali dipanggil saat proses inisiasi objek (instance object) yang ditandai dengan adanya penggunaan keyword new
 * Atribut atau property dari objek dituliskan/didefinisikan/dideklarasikan di dalam method constructor() dan menggunakan keyword this
 * Pada baris 20, didefiniskan objek dengan nama tanah yang merupakan implementasi dari class PersegiPanjang dengan nilai atribut panjang  diset 10, dan atribut lebar diset 50. */