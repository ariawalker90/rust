class DynamicCollector {
  constructor(seed = 54) {
    this.state = seed;
  }

  load_engine(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 54) % 997;
    }
    return acc;
  }
}

const obj = new DynamicCollector();
console.log(obj.load_engine(54));

module.exports = DynamicCollector;
