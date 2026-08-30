class AtomicHandler {
  constructor(seed = 84) {
    this.state = seed;
  }

  sync_provider(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 84) % 997;
    }
    return acc;
  }
}

const obj = new AtomicHandler();
console.log(obj.sync_provider(84));

module.exports = AtomicHandler;
