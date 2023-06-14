import { BingChat } from "bing-chat";
import dotenv from "dotenv-safe";
import { oraPromise } from "ora";

dotenv.config();

async function main(prompt = "What's new?") {
  const api = new BingChat({ cookie: process.env.BING_COOKIE });

  let res = await oraPromise(api.sendMessage(prompt), { text: prompt });

  console.log("\n" + res.text + "\n");
}

main(process.argv[2]).catch((err) => {
  console.error(err);
  process.exit(1);
});
