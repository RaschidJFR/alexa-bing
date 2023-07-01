let bing;
let lastResponse = {};

async function init() {
  const { BingChat } = await import("bing-chat");
  bing = bing || new BingChat();
}

module.exports.ask = async function ask(prompt) {
  if (!bing) {
    await init();
  }
  lastResponse = await bing.sendMessage(prompt, lastResponse);
  const text = lastResponse?.spokenText || lastResponse?.text;
  if (!text) {
    throw new Error("Invalid response from Bing module");
  }
  return text;
};

module.exports.forgetConversation = function forgetConversation() {
  lastResponse = {};
};
