fucntion maximumOccurringCharacter(str){ 
    let max = 0; 
    let maxChars = [];  
    const charCount = new Array(26).fill(0); 
   
    for(let i = 0;i<str.length;i++){
      const ch = str.charCodeAt(i)-97; //97 is ASCII value of 'a'
      charCount[ch]++;
      if(charCount[ch]>max){
        maxChars = [str.charAt(i)];
        max = charCount[ch];
      }else if(charCount[ch]===max) maxChars.push(str.charAt(i));
    }
    console.log(maxChars.toString())
    }
    
    maximumOccurringCharacter("abcda") // a
