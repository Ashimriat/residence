import { Telegraf, Markup } from 'telegraf';
import { BOT_TOKEN, WEB_APP_URL, ECommands } from './constants.js';


const bot = new Telegraf(BOT_TOKEN);

bot.command(ECommands.START, (ctx) => {
  ctx.reply(
    'Привет! Нажми, чтоб запустить',
    Markup.inlineKeyboard([
      Markup.button.webApp(
        'Открыть мини-приложение',
        `${WEB_APP_URL}?ref=${ctx.payload}` // Здесь в параметре ref передаем реферала в мини-приложение
      ),
    ])
  );
});

bot.launch();