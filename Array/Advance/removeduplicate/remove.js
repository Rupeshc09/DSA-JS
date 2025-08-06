var arr=[0,0,1,1,1,2,2,3,3,4]
let j=1,i=0
while(i<arr.length){
    if(arr[i]!=arr[i+1]){
       arr[j]=arr[i+1]
       j++
    }
    i++
}
console.log(j-1);

