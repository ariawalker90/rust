class FastClient {
  constructor(seed = 11) {
    this.state = seed;
  }

  fetch_provider(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 11) % 997;
    }
    return result;
  }
}

const obj = new FastClient();
console.log(obj.fetch_provider(11));

module.exports = FastClient;
