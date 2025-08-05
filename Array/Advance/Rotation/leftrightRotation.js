// left rotation
var arr=[1,2,3,4,5,6]
k=12
k=k%arr.length
console.log("Orignal array :",arr)
reverse(0,k-1)
reverse(k,arr.length-1)
reverse(0,arr.length-1)
console.log(arr)

function reverse(i,j){
    while(i<j){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++;
    j--;
}

}


// Right rotation
console.log("Right rotation : ")
var arr=[1,2,3,4,5]
k=7
k=k%arr.length
console.log("Orignal array :",arr)
reverse(0,arr.length-1)
reverse(0,k-1)
reverse(k,arr.length-1)
console.log(arr)
