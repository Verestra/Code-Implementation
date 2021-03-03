function divideAndShort(num){    
    let tempArray = []; 
    let numArray = num.toString().split(''); 
    let finalNum = ''; 

    for(i=0;i<numArray.length;i++){                
        if(numArray[i] == 0){            
            tempArray.sort((a,b) => a-b);
            finalNum += tempArray.join(''); 
            tempArray = []; 
        }
        else if(i == (numArray.length-1)){
            if(numArray[i] !== 0){
                tempArray[i] = numArray[i];
            }
            tempArray.sort((a,b) => a-b);
            finalNum += tempArray.join(''); 
            tempArray = []; 
        }else{
            tempArray[i] = numArray[i]; 
        }
    }

    console.log(finalNum);
  }
  divideAndShort(5956560159466056);
