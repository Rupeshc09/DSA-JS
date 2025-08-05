// left rotation by 1
var arr=[2,5,8,9,66,8]
let copy=arr[0]
for(let i=0;i<arr.length-1;i++){
    arr[i]=arr[i+1]
}
arr[arr.length-1]=copy
console.log(arr);


// right rotation by 1
copy=arr[arr.length-1]
for(let i=arr.length-1;i>=0;i--){
    arr[i]=arr[i-1]
}
arr[0]=copy
console.log(arr);

// for(let i=0;i<arr.length-1;i++){
//     for(let j=i+1;j<arr.length;j++){
//         if(arr[i]==arr[j]){
//             arr[j]=null
//         }
//     }
// }
// console.log(arr);


var arr=[1,2,3,4,5,6]
let k=6
k=k%arr.length                  //optimization
for(let j=0;j<k;j++){
 copy=arr[0];
for(let i=0;i<arr.length;i++){
    arr[i]=arr[i+1]

}
arr[arr.length-1]=copy
}
console.log(arr);

k=6
k=k%arr.length
for(let j=0;j<k;j++){
copy=arr[arr.length-1]
for(let i=arr.length-1;i>0;i--){
     arr[i]=arr[i-1]
}
arr[0]=copy

}
console.log(arr);

k=0
let temp=new Array(arr.length)
for(let i=0;i<arr.length;i++){
   temp[i]=arr[(i+k)%arr.length]
}
console.log(temp);

k=0
for(let i=0;i<arr.length;i++){
   temp[(i+k)%arr.length]=arr[i]
}
console.log(temp);


