var pilih;
var angka = [];
var max, min;
var genap, ganjil

do{ 
    pilih = parseInt(prompt("Masukan angka!: "));
    if(pilih * 2 || pilih == 0){
        angka.push(pilih);
    }
}while(pilih * 2 || pilih == 0);    

// soal a
angka = angka.sort((a,b) => a - b);


//soal b
for(i in angka){
    if(i == 0){
        max = angka[i];
        min = angka[i];
    }else{
        if(angka[i] > max)
            max = angka[i];
        if(angka[i] < min)
            min = angka[i];
    }
}

//soal c
for(i in angka){
    if (angka[i] % 2 == 0) {
        angka.push(genap);
    }else{
        angka.push(ganjil);
    }
}

//soal d

avg = ganjil.length
for(var i = 0; i<ganjil.length; i++){
    avg +=ganjil[i]}


console.log("Angka terkecil ke terbesar: " + angka);
console.log ("Nilai min: " + min);
console.log ("Nilai max: " + max);
console.log("Angka Genap: " + genap);
console.log("Angka Ganjil: " + ganjil);