var curry = (fn, ...args) =>
  fn.length > args.length
    ? (...reset) => curry(fn, ...args, ...reset)
    : fn(...args);

var sum = function(a, b, c, d, e) {
  return a + b + c + d + e;
};

var a = curry(sum, 1);
var compose = (...func) => (...reset) => func.reduce((a, b) => b(a(...reset)));
