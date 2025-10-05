import { randomInt } from "node:crypto";

export function generator(count) {
  if (isNaN(count)) {
    console.error("Укажите количество символов в аргументе");
    process.exit(1);
  }
  const l = count; // длина пароля
  const set =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?"; // все символы

  let finalStr = ""; // финальный пароль

  for (let i = 0; i < l; i++) {
    let x = randomInt(set.length);
    let y = set[x];
    finalStr = finalStr + y;
  }

  console.log(`Что получилось в генераторе: ${finalStr}`);
  return finalStr;
}
