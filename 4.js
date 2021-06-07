// var = variabel
var a = 4;
var r = 3;

// ++ = opersasi increment (penambahan nilai 1)
/** Fungsi Math.pow() mengembalikan basis ke pangkat eksponen, seperti pada basis^eksponen , basis dan eksponen berada dalam sistem angka desimal.
 * Karena pow() adalah metode statis Math , gunakan sebagai Math.*/ 
for (var n = 1; n <= 10; n++) {
    console.log("Suku ke " + n + " adalah " + a*Math.pow(r,n-1))
}