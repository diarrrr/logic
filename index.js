// nomor 1

function sum(n) {
    if (n <= 1) {
      return n;
    }
    return n * sum(n - 1);
  }
  
  console.log(sum(8))



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
function printValue(N, num) {
    var total = 1,
      value = 0,
      rem = 0;
    while (true) {
      rem = N % 10;
      N = parseInt(N / 10);
      if (rem == num) {
        value = total * rem;
        break;
      }
      total = total * 10;

    }

    return value;

  }

  var D = 9;

  var N = 9865321;
  console.log(printValue(N, D))


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
nomor4();
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


// nomor 6
let numbers = [1,4,7,9,12];
let ab = 2
let ac = 15

let cariAngka = numbers.filter(function (numbs) {
  if (numbs > ab && numbs < ac) {
    return true;
  }
});

console.log(cariAngka);
// Nomor7
let angkass = cariAngka.length
console.log(angkass)


// nomor9

var arr = [4,2,6,88,3,11];

    function fun(arr){
            let maxValue = [0]
            let minValue= [0]
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > maxValue){
           maxValue = arr[i]}
            else if(arr[i] < minValue){
           minValue = arr[i]}
        
        }
        return maxValue;
        return minValue;
    }
     
    var maxValue = fun(arr);
    var minValue = fun(arr);
    console.log(maxValue);
    console.log(minValue);



//nomor 10 kabisat

function kabisat(x){
        if(( 0 === x % 4 ) &&(0 !== x %100) || (0 ==x %400 ) ){
            
        console.log('tahun ' + x + ' adalah tahun kabisat')
    } else{
        console.log('tahun ' + x + ' adalah bukan tahun kabisat')

    } };
var a = 2023;;
kabisat(a);
