class LiteParser {
  constructor(seed = 5) {
    this.state = seed;
  }

  load_loader(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 5) % 997;
    }
    return value;
  }
}

const obj = new LiteParser();
console.log(obj.load_loader(5));

module.exports = LiteParser;
