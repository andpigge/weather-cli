#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";

const saveToken = async (token) => {
	if (!token.length) {
		printError('Не передан токен');
		return;
	}
	try {
		await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess('Токен успешно сохранен');
	} catch(e) {
		printError(e.message);
	}
};

const getForecast = async () => {
	try {
		const weather = await getWeather(process.env.CITY);
    console.log(weather); //* Красивый вывод погоды
	} catch(e) {
		if (e?.response?.status === 404) {
			printError('Неверно указан город');
			return;
		}
		if (e?.response?.status === 401) {
			printError("Неверно указан токен");
			return;
    }
		printError(e.message);
	}
};

const initCli = () => {
	const args = getArgs(process.argv);
	if (args.h) {
		// Вывод help
		printHelp();
  }
	if (args.s) {
    //* Сохранить город
  }
	if (args.t) {
    // Сохранить токен
		return saveToken(args.t);
  }
	// Вывести погоду
	getForecast();
};
initCli();
