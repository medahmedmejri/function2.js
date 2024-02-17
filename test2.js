function sumOfUniqueNumbers(arr1, arr2) {
    let uniqueNumbers = [];
    let uniqueSum = 0;
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i];
      
        if (!arr2.includes(num) && !uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
            uniqueSum += num; // 
        }
    }
    for (let i = 0; i < arr2.length; i++) {
        let num = arr2[i];
     
        if (!arr1.includes(num) && !uniqueNumbers.includes(num)) {
            uniqueNumbers.push(num);
            uniqueSum += num;
        }
    }
    
    return uniqueSum;
}