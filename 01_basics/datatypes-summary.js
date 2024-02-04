//BASED ON HOW THE DATA HAS BEEN STORED IN THE MEMORY AND HOW IT IS ACCESSED 
//THE DATA TYPES ARE DIVIDED INTO TWO TYPES PRIMITIVE & NON PRIMITIVE

//PRIMITIVE DATATYPES
// 7 TYPES : String, Number , Boolean , null, undefined ,Symbol, BigInt

const score= 56
const scoreValue=100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail=""

const id= Symbol('2345')
const anotherId= Symbol('2345')

console.log(id === anotherId)

const bigNumber = 1234567890987654321n



// NON PRIMITIVE DATATYPE / REFERENCE DATATYPES

//ARRAY , OBJECTS, FUNCTIONS
//arrays
const actors = ["Ranbir" , "Vicky", "Salman"]
//objects
let myObjs ={
    name:"Prachi",
    age:21,
}


const myFunction =function(){
    console.log("Hello People");

}

console.log(typeof outsideTemp) 

//type of and result
//undefined = undefined
//null= object
//boolean= boolean
//string - string

console.log(typeof actors)