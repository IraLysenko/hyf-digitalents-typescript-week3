import {log} from "util";

class Board {

}

class user {

}

type arrayOfStrings = string[][]

class Game {
    board: arrayOfStrings = [['1', '2', '3'],['4', '5', '6'],['7', '8', '9']];

    public render() {
        this.board.forEach( (row, index) => {
            console.log(row.join(' | '));
            console.log('---------');
        });
    }

    public command(command: string, user: string) {
        const commandNumber = Number(command);

        if(command && commandNumber <= this.board.flat().length) {
            this.board.forEach(nestedArray => {
                nestedArray.forEach( value => {
                    if(value === command) {
                        let valIndex = nestedArray.indexOf(command);
                        nestedArray[valIndex] = user;
                    }
                })
            })
        }
        //console.log(this.board);
    }
}

const game = new Game();

export { game };