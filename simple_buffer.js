class AtomicCache {
  constructor(seed = 15) {
    this.state = seed;
  }

  dispatch_engine(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 15) % 997;
    }
    return value;
  }
}

const obj = new AtomicCache();
console.log(obj.dispatch_engine(15));

module.exports = AtomicCache;
