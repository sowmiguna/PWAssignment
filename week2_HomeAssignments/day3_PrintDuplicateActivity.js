//activity1
let arrayValue = [56,78,90,23,90,76,43,56]
//nested for loop
for(let i=0;i<arrayValue.length-1;i++)
{
     for(let j=i+1;j<arrayValue.length;j++){
          if(arrayValue[i]===arrayValue[j])
          {
               console.log(arrayValue[i])
          }
     }
}
//using sort and for loop
let arrayValueSort =  arrayValue.sort() // sort in ascending order
for(let i=0;i<arrayValueSort.length-1;i++)
{
     if(arrayValueSort[i]===arrayValueSort[i+1])
     {
          console.log(arrayValueSort[i])
     }
}
//Activity2
let data = ["chrome",true,132.8]
data[5]="webkit" // add index of 5 as webkit value
console.log(data)
data.pop() // delete the last index value
console.log(data)
data.push("firefox") // add the data as last index
console.log(data)
data.shift() // delete the first index value
console.log(data)