// nomor 1

// function test(nmb){
//     let a = ''
//     for(let i=nmb; i=0; i--){ 
//         a += nmb[i]   
// }   return a,
// console.log(a)
// }

// test(2);

// nomor 2

function balikKata(str) {
    var kata = ""
    for (var i = str.length - 1; i>= 0; i--){
        kata += str[i];
    }
    return kata,
    console.log(kata)
}

balikKata('abcde');

// nomor3

// nomor4
function nomor4(){
    let a = 3
    let b = 7

    a -= b
    b += a
    a = b - a

    console.log(a)
    console.log(b)
}
nomor4()

// nomor 5

function terbilang(x)
{
	var ambil =new Array("", "SATU", "DUA", "TIGA", "EMPAT", "LIMA", "ENAM", "TUJUH", "DELAPAN", "SEMBILAN", "SEPULUH", "SEBELAS");
	if (parseFloat(x) < 12)
	{
		x=Math.floor(x);
		return " "+ambil[x];
	}
	else if (parseFloat(x) < 20)
	{
		return terbilang(parseFloat(x) - 10)+" BELAS";
	}
	else if (parseFloat(x) < 100)
	{
		return terbilang(parseFloat(x) / 10)+" PULUH"+terbilang(parseFloat(x)%10);
	}else if(parseFloat(x) > 100)
    {
        return terbilang(parseFloat(x) - parseFloat(x))+ " silahkan masukkan bilangan 1-100"
    }
    // console.log()
}
var angka = 103;
var str=terbilang(angka);
console.log(str);

// nomor9

var nilai = [4,2,6,88,3,11]          
for(var i=0; i<=nilai.length; i++)
        {    
             if(i == 0)
             { 
              var nilai_mak = nilai[i];
             }
             else
             { if(nilai[i] > nilai_mak){

                   nilai_mak = nilai[i];
                    }else if(nilai[i] < nilai_mak){
                        nilai_mak = nilai[i]
                    }
             }              
        }




// kabisat

function kabisat(x){
        if(x%4 && x%400 == 0){
            
        console.log('adalah tahun kabisat')
    } else{
        console.log('adalah bukan tahun kabisat')

    } };
var a = 2020;
var b = kabisat(a);
console.log(b);
// kabisat('2020');