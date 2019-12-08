const data = {
  players: [
    ['Robert', 'Lewandowski', 'FC Bayern Munich'],
    ['Krzysztof', 'Piatek', 'AC Milan'],
    ['Arkadiusz', 'Milik', 'SSC Napoli']
  ],
  [Symbol.iterator]() {

    const players = this.players;
    let i = 0;

    return {
      next() {

        if (i < players.length) {
          const player = {
            value: {
              firstName: players[i][0],
              lastName: players[i][1],
              team: players[i][2]
            },
            done: false
          }
          i++;
          return player;
        }

        return {
          value: undefined,
          done: true
        }
      }
    }
  }
};

for (let el of data) {
  console.log(el);
}
