
// factorial and validation
// let pr = 5
// if (isNaN(pr)) {
//     console.log("Invalid input")
// } else if (pr === null) {
//     console.log("cancelled");
// } else {
//     let n = Number(pr)
//     if (n > 0) {
//         let sum = 1
//         for (let i = 1; i <= n; i++) {
//             sum *= i;
//         }
//         console.log(sum);
//     } else {
//         console.log("- or 0");
//     }
// }

// Factors of number
// let n=1000;
// for(let i=1;i<=n/2;i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }
// console.log(n)

// Number is prime or not
// let n = 11
// let p = true;
// for (let i = 2; i * i <= n; i++) {
//   if (n % i === 0) {
//     console.log(n + " is not prime, divisible by " + i);
//     p = false;   
//     break;
//   }
// }
// if (p && n > 1) console.log(n + " is prime");

// function isPrime(n){
//   if(n<=1) return false
//   if(n===2) return true
//   if(n%2===0) return false
//   for(let i=3;i<=Math.floor(Math.sqrt(n));i+=2){
//     if(n%i===0){
//       return false 
//     }
//   }
//   return true
// }
// console.log(isPrime( 4))


// Sum of digit
// let n=215

// First method
// console.log(n.toString().split("").reduce((acc,re)=>  Number(acc)+Number(re)))

// Second method
// let sum=0
// while(n>0){
//     sum+=n%10 
//     n=Math.floor(n/10)
//     
// }
// console.log(sum,":sum using while loop")

// Third method
// let l=n.toString().length
// let sum=0
// for(let i=1;i<=l;i++){
//     if(n<=9){
//       sum+=n
//       break;
//     }
//     sum+=Math.floor(n%10) 
//     n=Math.trunc(n/10)
// }
// console.log(sum,":sum")


// Reverse of Number

// Method 1
// let n=567
// let rev=0
// while(n>0){
//     let rem=n%10
//     rev=rev*10+rem
//     n=Math.floor(n/10)
// }
// console.log(rev);

// Method 2
// let n=562
// let str=''
// while(n>0){
//   str+=n%10
//   n=Math.floor(n/10)
// }
// console.log(str || n);


// Strong number
// let n = 15
// let sum = 0
// let copy = n

// while (n > 0) {

//   let rem = n % 10;
//   n = Math.floor(n / 10)
//   let fact = 1

//   for (let i = 1; i <= rem; i++) {
//     fact *= i
//   }
//   sum += fact

// }
// if (sum === copy) {
//   console.log("strong number");
// } else {
//   console.log("Not strong number");
// }



// Guess number
// let comp=Math.floor(Math.random()*100)+1
// let you=-1

// do {
//   you=prompt("Enter Your number 1-100 :")
//   console.log(comp,"comp","you",you)
//   if(you<comp){
//     console.log("high");
//   }else{
//      console.log("low");
//   }
// } while (comp != you);

