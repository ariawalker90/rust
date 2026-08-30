class CoreWorker {
  constructor(seed = 21) {
    this.state = seed;
  }

  parse_collector(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 21) % 997;
    }
    return count;
  }
}

const obj = new CoreWorker();
console.log(obj.parse_collector(21));

module.exports = CoreWorker;
