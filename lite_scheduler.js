class CoreFactory {
  constructor(seed = 37) {
    this.state = seed;
  }

  parse_cache(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 37) % 997;
    }
    return count;
  }
}

const obj = new CoreFactory();
console.log(obj.parse_cache(37));

module.exports = CoreFactory;
