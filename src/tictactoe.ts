class Board {

}

class user {

}


class Game {
    board: Array<string> = [];

    public render() {
        console.log(this.board);
    }

    public command(command: string) {
        let value = command;
        this.board.push(value);
        console.log(this.board);
    }
}

const game = new Game();

export { game };