function getStringLength(string) {
    let length = 0;
    for (let i in string) {
      length++;
    }
    return length;
  }
// buat fungsi untuk memecah string menjadi sebuah array
// menggantikan method build in split
const splitString = (str) => {
    let resultArray = [];              
    let tempString = '';   
    // gunakan kembali fungsi getStringLength untuk mendapatkan panjang dari string
    // tanpa menggunakan method buildin            
    for(var i = 0; i< getStringLength(str);i++){ 
        if(str[i] !== ' '){            
          tempString += str[i];        
         } 
         // disini masih menggunakan satu method built in yaitu trim
         // fungsi dari trim sendiri yaitu untuk menghapus spasi dari ujung kedua string
         else if(tempString.trim()){                     
          resultArray.push(tempString);
          tempString = "";             
        }
    }
    if(tempString){                      
       resultArray.push(tempString);    
    }
    return resultArray;                
 }


function reverseWords(sentence) {
let words = splitString(sentence)
let reverseSentence = "";
// console.log(words);

let j = getStringLength(words);
while (j--) {
  console.log(words[j]);
  reverseSentence += " " + words[j];
}
    return reverseSentence
}
console.log(reverseWords("dimas makan kambing"));
