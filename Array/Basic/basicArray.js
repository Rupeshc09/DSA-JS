// let arr=[1,"2",{a:"123"}]
// arr[5]=200

// let  arr2 =[2]
// console.log(arr2);

// let arr1=new Array(3)
// arr1.push(10) 
// console.log(arr1);

let arr=[2,4,3,56,101,101,9,10]

console.log("Input Array : ",arr)

// Sum of elements of array
let sum=0
for(let i=0;i<arr.length;i++){
sum+=arr[i]
}
console.log("Sum of element of array =",sum)

// // Find maximum value
let max=arr[0];
for(let i=1;i<arr.length;i++){
 
  max>arr[i]?max=max:max=arr[i]
}
console.log("Maximum value :",max)

// Find minimum value
let min=arr[0];
for(let i=1;i<arr.length;i++){
 
  arr[i]>min?min=min:min=arr[i]
}
console.log("minimum value",min)

// Find Second maximum value
let fe=Math.max(arr[0],arr[1])
let se=Math.min(arr[0],arr[1])
for(let i=2;i<arr.length;i++){
    if(fe<arr[i]){
        se=fe
        fe=arr[i]
    }else if(se<arr[i] && max !=arr[i]){
        se=arr[i]
    }
}
console.log("maximum second max :",fe,se)

// Reversing Array

// Using space
// let arr1=[]
// for(let i=0;i<arr.length;i++){
//    arr1[i]=arr[arr.length-i-1]
// }
// console.log(arr1)

// without space
let i=0,j=arr.length-1
while(i<j){              //  i!=j This misses the middle element in arrays with odd lengths and skips the last swap in even lengths.
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++;
    j--;
}
console.log("Reverse =",arr)

// separeting 0 And 1
let arr2=[1,1,0,1,0,1,0,0] 
 i=0,
 j=0
while(i!=arr2.length){
    if(arr2[i]==0){
        let temp=arr2[j]
        arr2[j]=arr2[i]
        arr2[i]=temp
        j++
    }
    i++
}
console.log("Separating 0 and 1=",arr2);


