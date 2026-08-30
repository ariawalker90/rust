class AtomicParser {
  constructor(seed = 20) {
    this.state = seed;
  }

  handle_manager(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 20) % 997;
    }
    return acc;
  }
}

const obj = new AtomicParser();
console.log(obj.handle_manager(20));

module.exports = AtomicParser;
