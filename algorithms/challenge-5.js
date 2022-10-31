function filterList(arr) {
 let num = arr.filter(function(nums){
    if(typeof(nums) === 'number'){
        return nums;
    }
 });
 return num;
 }
 console.log(filterList([1,2,'a','b']));

  module.exports =filterList