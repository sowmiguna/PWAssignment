//Example1
let s = "Hello World" // declaring variable
let sSplitValue = s.split(" ") // split the s value using space
console.log("The last word is \" "+sSplitValue[sSplitValue.length-1]+ " \" with length "+sSplitValue[sSplitValue.length-1].length)
//Example 2
let sentence = " fly me to the moon "
sentence = sentence.trim() //trim will remove the unwanted space from starting and end of the sentence
let split_Sentence = sentence.split( " ") // split the  value using space
let lastWord = split_Sentence[split_Sentence.length-1] // finds the last word
console.log("The last word is \" "+lastWord + " \" with length "+ lastWord.length)
//Example 3
function isAnagram(value1, value2)
{
    
    let splitValue1 = value1.split("").sort().join("") //split the word, the sort in ascending order, then join the arrayvalue to string 
    let splitValue2 = value2.split("").sort().join("")  //split the word, the sort in ascending order, then join the arrayvalue to string

    return splitValue1===splitValue2 //return the value in boolean format 
}
console.log(isAnagram("listen","silent")) // calling isAnagram function to print the boolean value which is return argument as strict equality
console.log(isAnagram("hello","world"))