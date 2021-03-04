function divideAndSort(num){    
    let tempArray = []; 
    let numArray = num.toString().split(''); 
    let resultNum = ''; 

    for(i=0;i<numArray.length;i++){                
        if(numArray[i] == 0){            
            tempArray.sort((a,b) => a-b);
            resultNum += tempArray.join(''); 
            tempArray = []; 
            // console.log(resultNum)
        }
        else if(i == (numArray.length-1)){
            if(numArray[i] !== 0){
                tempArray[i] = numArray[i];
                // console.log(tempArray)
            }
            tempArray.sort((a,b) => a-b);
            resultNum += tempArray.join(''); 
            tempArray = [];
        }else{
            tempArray[i] = numArray[i]; 
        }
    }

    return resultNum
  }
  console.log(divideAndSort(5956560159466056))
