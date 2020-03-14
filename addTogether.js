

function sumTwoAnd(again) {
    return again;
}
function addTogether(first, second) {
    if (typeof first !== "number" || typeof second !== "number") {
      return undefined;
    }
    if (second == null) {
        return first + sumTwoAnd()
    } else {
        return first + second;
    }
  }
  addTogether(2)(3);
  
