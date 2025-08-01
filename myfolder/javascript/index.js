// pwd print working directory
// ls-list directory contents
// cd- change directory
// mkdir make directory
// touch-create file
  

// variable
// let declare a variable
// const-declare a constant variable
// var- declare a constant variable

//data types
//string
//number
//boolean
//object
//array
//function

// twoSum [2,7,11,15]=>9=>[0,1]


//1.array elements log
const printElements=(arr)=>{

for(i=0;i<arr.length;i++){
    console.log(arr[i])
}

}




//2.nested loop->27,211,215

for(i=0;i<twoSum.length;i++){
  for(j=i+1;j<twoSum.length;j++){
    console.log("nested loop",twoSum[i],twoSum[j])
  }
    
}

//const twoSum=(arr)=> for(i=0;i<twoSum.length;i++){
//   for(j=i+1;j<twoSum.length;j++){
//     console.log("nested loop",twoSum[i],twoSum[j])
//   }
    
// }
//3.9 tentseh ved heddeh gishvvdiig nerle . jishee:[0,1]
const twoSum=[2,7,11,15]
const findTwoSum=(arr,target)=>{
    for(i=0;i<arr.length;i++){
  for(j=i+1;j<arr.length;j++){
    if(arr[i]+arr[j]===target){return([i,j])
}}}
}
console.log(findTwoSum(twoSum,9))




