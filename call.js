Function.prototype.call = function() {
  const [thisArg = window, ...args] = arguments;
  thisArg.func = this;
  var res = thisArg.func(...args);
  delete thisArg.func;
  return res;
};

Function.prototype.apply = function() {
  const [thisArg = window, arg] = arguments;
  thisArg.func = this;
  var res = thisArg.func(...arg);
  delete thisArg.func;
  return res;
};

Function.prototype.bind = function() {
  const [thisArg, ...rest] = arguments;
  const fToBind = this;
  const fnop = function() {};
  const fbound = function() {
    return fToBind.apply(this instanceof fbound ? this : thisArg, rest);
  };
  if (this.prototype) {
    fnop.prototype = this.prototype;
  }
  fbound.prototype = new fnop();
  return fbound;
};
