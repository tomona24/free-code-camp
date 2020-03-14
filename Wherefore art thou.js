function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  for (let obj in collection){
      for (let i = 0; i < Object.keys(obj).length; i++) {
        let counter = 0;
        for (let item in source) {          
        if(collection[obj].hasOwnProperty(item) && collection[obj][item] == source[item]) {
          counter++
        }
      }
      if (counter == Object.keys(source).length) {
        arr.push(collection[obj])
      }
    }}
      // Only change code above this line
  return arr;
  }


let answer = whatIsInAName(
  [{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })
    

console.log(answer)


// let ans = false;
// if (Object.keys(obj).length < key.length) {
//   ans = false
// } else {
// for (let i = 0; i < key.length; i++) {
//   if (
//     obj.hasOwnProperty(key[i]) && obj[key[i]] == source[key[i]]
//     ) {
//     ans = true
//   } else {
//     ans = false;
//   }
//   return ans;
//   }