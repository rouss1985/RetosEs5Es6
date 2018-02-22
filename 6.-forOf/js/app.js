// ES5
var nums = [10, 20, 30, 20, 30, 40, 60];
var suma=0;
function average(numbers){

    var avg = 0;
    var long=nums.length;
    nums.forEach(function(value,key){
      suma+=value;
    });
    avg=suma/long;
    console.log(avg);
}
average();
console.log(suma);

//ejemplo con json
// var valores = {
//   "num":[10, 20, 30, 20, 30, 40, 60],
//   "num2":[10, 330, 30, 250, 30, 440, 60]
// };
//
// function average(numeros){
//     var nums=numeros['num2'];
//     var suma=0;
//     var avg = 0;
//     var long=nums.length;
//     nums.forEach(function(value,key){
//       suma+=value;
//     });
//     avg=suma/long;
//     console.log(avg);
// }
// average(valores);




// ES6



















                              //ES6
// Comenta todo lo anterior y escribelo en ES6


// declara la variable


// escribe tu funcion
