


// for(let i=1;i<5;i++){
// let str='';
//     for(let j=1;j<5;j++){
//     str+=j  
//   } 
// console.log(str)
// }



// for(let i=1;i<5;i++){
// let str1='';
//     for(let j=1;j<5;j++){
//     str1+="*"
//   } 
// console.log(str1)
// }


// for (let i = 0; i < 4; i++) {
//     let pattern = "";

//     for (let i = 0; i < 4; i++) {
//         pattern += String.fromCharCode(65 + i); // 97 is 'a' 65-A

//     }
//     console.log(pattern);
// }

// let count=1;
// for (let i = 0; i <= 2; i++) {
//     let str = '';
//     for (let j = 1; j <= 3; j++) {
//         str += count;
//         count++  
//     }
//     console.log(str)
// }

// let count=0;
// for (let i = 0; i <= 2; i++) {
//     let pattern = '';
//     for (let j = 1; j <= 3; j++) {
//        pattern += String.fromCharCode(65 + count);
//         count++  
//     }
//     console.log(pattern)
// }


// let n=4
// for (let i=0;i<n;i++){
//     let str='';
//     for(let j=1;j<=i+1;j++){
//        str+=j
//     }
//     console.log(str)

// }

// let n=4
// for (let i=0;i<n;i++){
//     let str='';
//     for(let j=0;j<=i;j++){
//        str+=String.fromCharCode(65+i)
//     }
//     console.log(str)
// }

// let n=4
// for (let i=0;i<n;i++){
//     let str='';
//     for(let j=i+1;j>0;j--){
//        str+=j
//     }
//     console.log(str)
// }

// let n=4
// let count=1
// for (let i=0;i<n;i++){
//     let str='';
//     for(let j=i+1;j>0;j--){
//        str+=count
//        count++
//     }
//     console.log(str)
// }

// let n=4
// let count=0
// for (let i=0;i<n;i++){
//     let str='';
//     for(let j=i+1;j>0;j--){
//        str+=String.fromCharCode(65+count)
//        count++
//     }
//     console.log(str)
// }

// let n=4
// for(let i=0;i<n;i++){
//     let str=''
//     for(let j=i ;j>=0;j--){
//      str+=String.fromCharCode(65 + j)
//     }
//     console.log(str)
// }

//Imp
/*1111
   222
    33
     4*/
// let n=4
// for(let i=0;i<n;i++){
//     let str=''

//     for(let k=0 ;k<i;k++){
//             str+=' '
//         }

//     for(let j=0 ;j<n-i;j++){
//      str+=i+1
//     }

//     console.log(str)
// }

// let n = 4

// for (let i = 0; i < n; i++) {
//    let str=''
//     for (let j = 0; j < i; j++) {
//         str+=' '
//     }
//     for (let j = 0; j < n-i; j++) {
//        str+=String.fromCharCode(97 + i)
//     }
//    console.log(str)
// }

/* a
  aba
 abcba
abcdcba  */


// let n=4
// for(let i=0;i<4;i++){
//    let str=''
//    for(let j=0;j<n-i-1;j++){
//         str+=' '
//    }
//    for(let j=0;j<i+1;j++){
//     str+=String.fromCharCode(97+j)
//    }
//    for(let j=i;j>0;j--){
//       str+=String.fromCharCode(97+j-1)
//    }
//    console.log(str) 
// }

// let n=4
// for(let i=0;i<4;i++){
//     let str=''
//     for(let j=0;j<n-1-i;j++){
//         str+=' '
//     }
//     for(let j=1;j<=i+1;j++){
//         str+=j
//     }
//     for(let j=i;j>0;j--){
//         str+=j
//     }
//    console.log(str)
// }


/*

    *
   * *
  *   *
 *     *
*       *
 *     *
  *   *
   * *
    *
// Hallow diamond pattern
2(n-i)-5
let j=0;j<2*(n-3-i)+1;j++) this is also work
*/

// let n=5

// for(let i=0;i<n;i++){
//    let str=''
//    for(let j=0;j<n-i-1;j++){
//        str+=" "
//    }
//    str+="*"
//    if(i!=0){
//       for(let j=0;j<i*2-1;j++){
//          str+=" "
//       }
//       str+="*"
//    }
//    console.log(str)
// }

// for(let i=0;i<n-1;i++){
//    let str=''
//    for(let j=0;j<i+1;j++){
//        str+=" "
//    }
//    str+="*"
//    for(let j=0;j<2*(n-2-i)-1;j++){
//       str+=' '
//    }
//    if(i!=n-2) str+="*"
// console.log(str)
// }

/*

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

*/
// Butterfly pattern

// let n=4

// for(let i=0;i<4;i++){
//    let str=''
//    for(let j=0;j<i+1;j++){
//       str+="*"
//    }
//    for(let j=0;j<2*(n-i-1);j++){
//       str+=" "
//    }
//     for(let j=0;j<i+1;j++){
//       str+="*"
//    }
//    console.log(str)
// }

// for(let i=0;i<n;i++){
//    let str=''
//    for(let j=0;j<n-i;j++){
//       str+="*"
//    }
//    for(let j=0;j<2*i;j++){
//       str+=" "
//    }
//    for(let j=0;j<n-i;j++){
//       str+="*"
//    }
//    console.log(str)
// }












