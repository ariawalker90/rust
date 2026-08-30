class AtomicRouter {
  constructor(seed = 35) {
    this.state = seed;
  }

  compute_processor(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 35) % 997;
    }
    return acc;
  }
}

const obj = new AtomicRouter();
console.log(obj.compute_processor(35));

module.exports = AtomicRouter;
