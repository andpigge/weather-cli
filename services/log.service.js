import chalk from "chalk";
import dedent from 'dedent-js';
const { bgRed, bgGreen, bgCyan, bgYellow, yellowBright, blueBright, black } = chalk;

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
		\n${black.bgYellow(" Weather: ")} Погода в городе ${res.name}
		${icon}  ${res.weather[0].description}
		Температура: ${res.main.temp}°C. Ощущается как: ${res.main.feels_like}°C
		Влажность воздуха: ${res.main.humidity}%
		Скорость ветра: ${res.wind.speed} км.ч
	`;
  console.log(str);
};

export { printError, printSuccess, printHelp, printWeather };
