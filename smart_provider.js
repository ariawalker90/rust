class DynamicService {
  constructor(seed = 4) {
    this.state = seed;
  }

  handle_dispatcher(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 4) % 997;
    }
    return value;
  }
}

const obj = new DynamicService();
console.log(obj.handle_dispatcher(4));

module.exports = DynamicService;
