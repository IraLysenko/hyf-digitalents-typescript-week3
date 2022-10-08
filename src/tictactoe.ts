class Board {

}

class user {

}


class Game {
    public render() {
        const gameBord = () => {
            let numbersArray = [[1,2,3], [4,5,6],[7,8,9]];

            numbersArray.forEach((row, i) => {

                console.log(row);
            });
        };

        console.log(gameBord)
    }

    public command(command: string) {
        console.log(command)
    }
}

const game = new Game();

export { game };