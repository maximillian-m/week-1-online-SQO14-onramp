function sumMix(arr) {
    let count = 0;
    let nums = arr.map(function (str){
      return parseInt(str);
    }); 
    for (var i = 0; i < nums.length; i++){
      count+= nums[i];
    }
    return count;
 }
