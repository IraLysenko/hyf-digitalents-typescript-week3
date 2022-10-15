const readline = require('readline');

import { game } from "./src/tictactoe";

let i: number = 0;
let user: string = 'X';

const message = (u:string) :string => {
    return `It is turn of User ${u} :  `
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

game.render();
console.log(message(user));
rl.prompt();

rl.on('line', (line: string) => {
    const value = line.trim();

    if (value.toLowerCase() === "exit") {
        process.exit(0);
    }

    i++
    if(i % 2 != 0 ) {
        user = 'X'
    } else {
        user = 'O'
    }

    game.command(value, user);
    game.render();
    console.log(message(user));
    rl.prompt();

}).on('close', () => {
    console.log('Bye!');
    process.exit(0);
});