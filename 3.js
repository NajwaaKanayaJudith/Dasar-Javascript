let tinggi = 153/100
let berat = 46

let BMI = berat/tinggi**2;
console.log("BMI tubuh Rhodey adalah = " + BMI);
console.log("Status tubuh Rhodey :");

if (BMI > 30.0){
    console.log("Kegemukan (obesitas)")
}else if(BMI <= 29.9 && BMI > 25.0){
    console.log("Kelebihan berat badan")
}else if(BMI <= 24.9 && BMI > 18.5){
    console.log("Normal (ideal)")
}else{
    console.log("Kekurangan berat badan")
}