function smallestCommons(arr) {
  let sequence = [];
  if(arr[0] > arr[1]) {
    arr.reverse();
  }
  for (let i = arr[0]; i <= arr[1]; i++){
    sequence.push(i)
  }
  let kari = [];
  for (let item in sequence) {
    for (let k = Number(item) + 1; k < sequence.length ; k++) {
      if (sequence[k] % sequence[item] == 0) {
        sequence[k] /= sequence[item];
      }
      console.log(sequence)

    }
    console.log(sequence)
  }
  console.log(sequence.reduce((a, b) => a * b))

  return sequence.reduce((a, b) => a * b)
}

smallestCommons([23,18]);
