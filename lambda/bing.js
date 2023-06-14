require("dotenv-safe").config({
  example: `${__dirname}/.env.example`,
  path: `${__dirname}/.env`,
});

module.exports.ask = async function askBing(prompt) {
  const { BingChat } = await import("bing-chat");
  const bing = new BingChat({ cookie: process.env.BING_COOKIE });
  const { text } = await bing.sendMessage(prompt);
  return text;
};
