class DynamicGateway {
  constructor(seed = 92) {
    this.state = seed;
  }

  sync_scheduler(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 92) % 997;
    }
    return total;
  }
}

const obj = new DynamicGateway();
console.log(obj.sync_scheduler(92));

module.exports = DynamicGateway;
