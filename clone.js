function deepClone(data, target) {
  var output = data;
  if (typeof data !== "object" || typeof target !== "object") return data;
  for (var i in target) {
    if (typeof target[i] === "object") {
      if (Array.isArray(target[i])) {
        output[i] = deepClone([], target[i]);
      } else {
        output[i] = deepClone({}, target[i]);
      }
    } else {
      console.log(target[i]);
      output[i] = target[i];
    }
  }
  return output;
}
var a = [
  1,
  {
    a: 1,
    b: { d: 1 },
    c: new Date()
  },
  {
    c: () => {
      console.log("111");
    }
  },
  5
];
