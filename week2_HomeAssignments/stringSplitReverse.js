let name="sowmiya"  //declare name variable
let splitName = name.split("") // split the name  as array
for(let i=splitName.length-1;i>=0;i--) //decrement loop to print reverse order
{
    console.log(splitName[i])
}