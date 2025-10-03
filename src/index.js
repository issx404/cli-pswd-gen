import chalk from "chalk";
import fs from "fs";
import clipboard from "clipboardy";
import { generator } from "./generator.js";
function errors() {
  if (process.argv.length < 3) {
    console.log(chalk.white.bgRed("Ошибка: Укажите хотябы один аргумент"));
    process.exit(1);
  }

  if (process.argv[2] === undefined || isNaN(process.argv[2])) {
    console.log(chalk.white.bgRed("Ошибка: Укажите корректно длину пароля"));
    process.exit(1);
  }
  if (process.argv[2] > 100) {
    console.log(
      chalk.white.bgRed("Ошибка: Пароль не может быть длинее 100 символов")
    );
    process.exit(1);
  }
}
errors();
const resultValue = generator(process.argv[2]);
function save() {
  const date = new Date().toLocaleString();
  fs.appendFileSync(
    "./passwords/list.txt",
    `${date} - Пароль: ${resultValue}` + "\n"
  );
  console.log(chalk.white.bgGreenBright("Сохранен в файле list.txt"));
}

function copy() {
  clipboard.writeSync(resultValue);
  console.log(chalk.white.bgGreenBright("Скопирован в буфер обмена Ctrl+V"));
}

function yourPass() {
  console.log(
    chalk.white.bgBlueBright(`Твой пароль:`),
    chalk.white.bgGreenBright(resultValue)
  );
}

if (process.argv.includes("save") && process.argv.includes("copy")) {
  yourPass();
  save();
  copy();
} else if (process.argv.includes("save")) {
  yourPass();
  save();
} else if (process.argv.includes("copy")) {
  yourPass();
  copy();
} else {
  yourPass();
}
