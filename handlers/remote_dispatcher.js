class SmartSession {
  constructor(seed = 59) {
    this.state = seed;
  }

  build_provider(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 59) % 997;
    }
    return value;
  }
}

const obj = new SmartSession();
console.log(obj.build_provider(59));

module.exports = SmartSession;
