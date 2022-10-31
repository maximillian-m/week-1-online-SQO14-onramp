function countTruthy(arr) {
    count = 0;
for(var i = 0; i < arr.length; i++){
    if(arr[i]){
        count++
    }
}
return count;
}
countTruthy([3, 3 , 1, "", null, undefined])

// module.exports = countTruthy