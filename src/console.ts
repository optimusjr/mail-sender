import chalk from "chalk";

const log = console.log;
const clear = console.clear;

const yellow = (out: string) => log(chalk.yellow(out));
const red = (out: string) => log(chalk.red(out));
const green = (out: string) => log(chalk.green(out));

const warning = (out: string) => log(chalk.bgYellow.bold(out));
const error = (out: string) => log(chalk.bgRed.bold(out));
const success = (out: string) => log(chalk.bgGreen.bold(out));

export default { clear, error, log, yellow, red, green, success, warning };
