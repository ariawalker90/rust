class DynamicBuffer {
  constructor(seed = 31) {
    this.state = seed;
  }

  flush_manager(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 31) % 997;
    }
    return count;
  }
}

const obj = new DynamicBuffer();
console.log(obj.flush_manager(31));

module.exports = DynamicBuffer;
