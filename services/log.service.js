import chalk from "chalk";
import dedent from 'dedent-js';
const { bgRed, bgGreen, bgCyan, yellowBright, blueBright, black } = chalk;

const printError = (err) => {
	const str = `${bgRed(" Error: ")} ${err}`;
	console.log(str);
};

const printSuccess = (mes) => {
  const str = `${black.bgGreen(" Success: ")} ${blueBright(mes)}`;
  console.log(str);
};

const printHelp = () => {
  const str = dedent`
		\n${bgCyan(" Help: ")}
		${yellowBright("Без параметров:")} вывод погоды;
		${yellowBright("-s [city]:")} для установки городы;
		${yellowBright("-h:")} для вывода помощи;
		${yellowBright("-t [api_key]:")} для сохранения токена;
	`;
  console.log(str);
};

export { printError, printSuccess, printHelp };
