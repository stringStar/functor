function fastSort(data) {
  var base = data[0];
  var maxArr = [],
    minArr = [];
  if (data.length <= 1) {
    return data;
  }
  for (var i = 1; i < data.length; i++) {
    if (data[i] > base) {
      maxArr.push(data[i]);
    } else {
      minArr.push(data[i]);
    }
  }
  return fastSort(minArr).concat([base], fastSort(maxArr));
}

var arr = [2, 34, 57, 8, 08, 1, 4, 5];
fastSort(arr);
