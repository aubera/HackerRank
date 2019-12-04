// Complete the hourglassSum function below.
function hourglassSum(arr) {
  let hourGlassSums = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[i].length - 2;j++) {
      hourGlassSums.push(countHourGlassSum(i, j, arr));
    }
  }

  return Math.max(...hourGlassSums);
}

function countHourGlassSum(i, j, arr) {
  let sum = 0;
  for (let k = i; k < i + 3; k++) {
    for (let l = j; l < j + 3; l++) {
      if (!(k==i+1 && l==j) && !(k==i+1 && l==j+2)) {
        sum += arr[k][l]
      }
    }
  }
  return sum;
}
