class DynamicRouter {
  constructor(seed = 67) {
    this.state = seed;
  }

  decode_dispatcher(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 67) % 997;
    }
    return result;
  }
}

const obj = new DynamicRouter();
console.log(obj.decode_dispatcher(67));

module.exports = DynamicRouter;
