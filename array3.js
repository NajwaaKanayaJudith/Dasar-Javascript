let teman = ["Maya","Sandi","Tata","Anggun"]

console.log("Nama teman");
console.log(teman);
console.log("Jumlah data = " + teman.length);

console.log("---------------------------------");

//menghapus data pada array (nama_array.splice) -> index, jumlah data
teman.splice(2,1)

console.log("Nama teman saat ini");
console.log(teman);
console.log("Jumlah data saat ini = " + teman.length);