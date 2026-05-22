//print total number of "a" is presented
let value = 'Java'
let count = 0;
let splitValue = value.split("")//split the value as array
for(let i=0;i<value.length;i++)
{
    if(splitValue[i]==='a')
    {
        count++
    }
}
console.log("Total number of a present is "+count);