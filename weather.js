#!/usr/bin/env node
import { getArgs } from './helpers/args.js';
import { printHelp, printSuccess, printError } from './services/log.service.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
	try {
		await saveKeyValue("token", token);
    printSuccess('Токен успешно сохранен');
	} catch(e) {
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
    // Сохранить город
  }
	if (args.t) {
    // Сохранить токен
		return saveToken(args.t);
  }
	// Вывести погоду
};
initCli();
