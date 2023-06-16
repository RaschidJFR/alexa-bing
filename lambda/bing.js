module.exports.ask = async function askBing(prompt) {
  const { BingChat } = await import("bing-chat");
  const bing = new BingChat();
  const { text } = await bing.sendMessage(prompt);
  return text;
};
