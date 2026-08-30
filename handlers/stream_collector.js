class StreamProvider {
  constructor(seed = 26) {
    this.state = seed;
  }

  resolve_registry(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 26) % 997;
    }
    return total;
  }
}

const obj = new StreamProvider();
console.log(obj.resolve_registry(26));

module.exports = StreamProvider;
