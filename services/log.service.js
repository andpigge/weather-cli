import chalk from "chalk";
import dedent from 'dedent-js';
const { bgRed, bgCyan, yellowBright, blueBright, black, yellow } = chalk;

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
		${yellowBright("-s [CITY]:")} для установки городы;
		${yellowBright("-h:")} для вывода помощи;
		${yellowBright("-t [API_KEY]:")} для сохранения токена;
	`;
  console.log(str);
};

const printWeather = (res, icon) => {
  const str = dedent`
		\n${black.bgYellow(" Weather: ")} ${blueBright("Погода в городе:")} ${yellow(
    res.name
  )}
		${icon}  ${yellow(res.weather[0].description)}
		${blueBright("Температура:")} ${yellow(res.main.temp + " °C.")} ${blueBright(
    "Ощущается как:"
  )} ${yellow(res.main.feels_like + " °C")}
		${blueBright("Влажность воздуха:")} ${yellow(res.main.humidity + " %")}
		${blueBright("Скорость ветра:")} ${yellow(res.wind.speed + " км.ч")}
	`;
  console.log(str);
};

export { printError, printSuccess, printHelp, printWeather };
