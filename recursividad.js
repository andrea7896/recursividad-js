// function bs(n,a){
//     let x = Math.floor(a.length/2);
//     if (n === a[x]){
//         return x;
//     }
//     if(n<a[x]){
//         for(let i=x; i>=0; i--){
//             if(n==a[i]){
//                 return i;
//             }
//         }
//     }
//     else {
//         for(let i=x; i<=a.length; i++){
//             if(n==a[i]){
//                 return i;
//             }
//         }
//     }
//     return -1;
// }
// console.log(bs(7,[1,2,3,4,5,6]));

//arrow function 
// const binarySearch = (array,item) => {
// let min = 0;
// let max = array.length - 1;

// while(min <= max){
//     let middle = Math.floor(min + max / 2);
//     let guess = array[middle];
//     console.log(middle);
//     if(guess === item){
//         return "valor esta en:"+middle;
//     }

//     if(guess > item){
//         max = middle - 1;
//     }else{
//         min = middle + 1;
//     }
// }
// return "caso base:"+ -1;

// }

// const index = binarySearch([1,2,3,4,5],6);
// console.log(index);

// function recursividad(n){
//     if(n <= 1){
//         return 1;
//     }else{
//         return n * recursividad(n-1)
//     }
// }
// console.log(recursividad(4));

// function recursiveStair(cadena,n){
//     if(n > cadena.length){
//         if(cadena.length !== 0)
//         console.log(cadena);
//      return;
//     }else{
//         console.log(cadena.substring(0,++n));
//         cadena = cadena.slice(n,cadena.length);
//         recursiveStair(cadena,n);
//     }
    
// }
// recursiveStair("Hola!!!",0);

// function recursiveStair(cadena,n,nuevaCadena){
//     if(n > cadena.length){
//         if(cadena.length !== 0)
//         nuevaCadena.push(cadena)
//      return;
//     }else{
//         nuevaCadena.push(cadena.substring(0,++n));
//         cadena = cadena.slice(n,cadena.length);
//         return recursiveStair(cadena,n,nuevaCadena);
//     }
    
// }
// recursiveStair("Hola!!!",0,[]);

// function modulo(n,m){
// if(n<m){
//     return n;
// }else{
//     return modulo(n-m,m);
// }
// }

// console.log(modulo(10,3)); //se va restando hasta que nos de el sobrante owo y ya sea menor al divisor

// function maxValue(array,index,max){
//  if(index >= array.length){
//     return max
//  }
//  if(max < array[index]){
//     max = array[index]
//  }
//  return maxValue(array,index+1,max) 
// }
// console.log(maxValue([1,5,20,30,9],0,0));

// //BINARY SEARCH RECURSIVO
// function bsrecursivo(array,item){
// let min=0;
// let max= array.length - 1;

//     //esta es nuestra funcion que lleva la logica
//     const Recursiva = (min,max) => {
//         if(min > max){
//             return -1;
//         }
//         let middle = Math.floor(min + max / 2);
//         let guess = array[middle];
//         if(guess == item){
//             return middle;
//         }
//         if(guess > item){
//             return Recursiva(min,middle - 1)
//         }
//         return Recursiva(middle + 1, max)
//     }

//     //Callback, aqui hace el llamado con max y min 
//     return Recursiva(min,max)
// }

// console.log(bsrecursivo([1,2,3,4,5],3))

// function calc(array){
    
//     const Media = (x,sum) =>{
//         if(x < array.length){
//             sum += array[x];
//             x++
//             return Media(x,sum);
//         }
//         return (sum / array.length).toFixed(2);
//     }

//     const Moda = (i,j,frec,frecant,moda) => {
//       if(i < array.length){
//         frec = Frecuencia(i,0,0);
//         if(frec > frecant){
//             moda = array[i];
//         }
//         frecant = frec;
//         i++
//         return Moda(i,0,0,frecant,moda)
//       }
      
//       return moda;
//     }

//     function Frecuencia(i,j,x){
//         if(j < array.length){
//             if(array[i] == array[j]){
//                 x++
//             }
//             j++
//             return Frecuencia(i,j,x)
//         }
//         return x
//     }
   
//     return "Promedio: "+Media(0,0)+" Moda: "+Moda(0,0,0,0)
    
// }

// console.log(calc([1,5,20,6,9,20,10,50,2,5,5]));
// console.log(calc([10,10,2,3]));
// console.log(calc([1,1,2,2,4,3]));

function rangoHasta(n){
let array = []

    const resultado = (x) => {
        if(x > n){
            return array;
        }else{
            array.push(x);
            x++
            return resultado(x);
        }
    }
    return resultado(0);
}
console.log(rangoHasta(5));

function esPar(x){   
if(x >= 0){
if(x%2 ===0){
    console.log(x," - ",true) 
}else{
    console.log(x," - ",false)
}
x--
return esPar(x);
}

}
esPar(5);
