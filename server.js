import express from "express";
import { Telegraf } from "telegraf";
import { getResponse } from "./messages.js";

const app = express();
const bot = new Telegraf(process.env.BOT_TOKEN);

// شروع ربات
bot.start(async (ctx) => {
  const name = ctx.from.first_name || "دوست عزیز";
  const text = `🚀 *سلام ${name}!* خوش اومدی به ربات مشاور محمدزاده 📈\n${name} جان، *چطور کمکت کنم؟*\n👇 /plans | /help | "شروع" | یا سؤالت رو بپرس!`;
  await ctx.replyWithMarkdown(text);
});

// پاسخ به پیام‌ها
bot.on("text", async (ctx) => {
  const name = ctx.from.first_name || "دوست عزیز";
  const userMsg = ctx.message.text.trim();
  const reply = getResponse(name, userMsg);
  await ctx.replyWithMarkdown(reply);
});

bot.launch();
app.listen(10000, () => console.log("✅ Bot server running..."));

