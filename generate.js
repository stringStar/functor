var thunk = fn => (...args) => callback => fn.call(this, ...args, callback);
var runGenerate = gen => {
  var g = gen();
  function next(data) {
    var result = g.next(data);
    console.log(result, data);
    if (result.done) return result.value;
    console.log(result.value);
    result.value(next);
  }
  next();
};

const person = (sex, fn) => {
  console.log("kaishi");
  setTimeout(() => {
    const data = {
      sex,
      name: "keith",
      height: 180
    };
    console.log("time");
    fn(data);
  }, 1000);
};
const personThunk = thunk(person);
function* gen() {
  console.log("开始yiled");
  const data = yield personThunk("boy");
  console.log(data);
  const cc = yield personThunk("girl");
}
runGenerate(gen);
