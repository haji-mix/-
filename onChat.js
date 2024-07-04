
const text = require("fontstyles");
const { rainbow } = require("gradient-string");
const { red } = require("chalk");

const font = {
  italic: msg => text.italic(msg),
  bold: msg => text.bold(msg),
  underline: msg => text.underline(msg),
  strike: msg => text.strike(msg),
  monospace: msg => text.monospace(msg),
  roman: msg => text.roman(msg),
  bubble: msg => text.bubble(msg),
  squarebox: msg => text.squarebox(msg),
  origin: msg => text.origin(msg)
};

const mono = txt => font.monospace(txt);

const global = {
  api: {
    "1secmail": "https://www.1secmail.com/api/v1",
    "chatbox": "https://www.blackbox.ai/api/chat",
    "august": "https://openapi-idk8.onrender.com",
    "deku": "https://joshweb.click",
    "kenlie": "https://api.kenliejugarap.com",
    "openai": "https://api.openai.com",
    "hashier": "https://ai-1stclass-nemory-project.vercel.app",
    "jarif": "https://www.api.vyturex.com",
    "atomic": "soon",
    "local": "http://localhost:8216",
    "nhentai": "http://nhentai.net",
    "nhgal": "http://i.nhentai.net",
    "nhcover": "http://t.nhentai.net",
    "workers": {
      "key": "j5HlKoy0z5YowYhgFNvMAma7kGN1S6k85GFH92lW",
      "url": "https://api.cloudflare.com/client/v4/accounts/dc32e1808c6ae177089f5701fb1697f0/ai/run/",
      "models": {
          "llama": [
            "@cf/meta/llama-2-7b-chat-fp16",
            "@cf/meta/llama-2-7b-chat-int8",
            "@hf/thebloke/llama-2-13b-chat-awq",
            "@cf/meta-llama/llama-2-7b-chat-hf-lora",
            "@cf/meta/llama-3-8b-instruct",
            "@cf/meta/llama-3-8b-instruct-awq",
            "@hf/thebloke/llamaguard-7b-awq",
            "@cf/tinyllama/tinyllama-1.1b-chat-v1.0",
            ],
            "mistral": [
              "@cf/mistral/mistral-7b-instruct-v0.1",
              "@cf/thebloke/discolm-german-7b-v1-awq",
              "@hf/nousresearch/hermes-2-pro-mistral-7b",
              "@hf/thebloke/mistral-7b-instruct-v0.1-awq",
              "@hf/mistral/mistral-7b-instruct-v0.2",
              "@cf/mistral/mistral-7b-instruct-v0.2-lora",
              "@hf/thebloke/neural-chat-7b-v3-1-awq",
              "@hf/thebloke/openhermes-2.5-mistral-7b-awq",
              "@cf/fblgit/una-cybertron-7b-v2-bf16",
              ],
              "deepseek": [
                "@hf/thebloke/deepseek-coder-6.7b-base-awq",
                "@hf/thebloke/deepseek-coder-6.7b-instruct-awq",
                "@cf/deepseek-ai/deepseek-math-7b-base",
                "@cf/deepseek-ai/deepseek-math-7b-instruct",
                ],
                "falcon": [
                  "@cf/tiiuae/falcon-7b-instruct",
                  ],
                  "gemma": [
                    "@cf/google/gemma-2b-it-lora",
                    "@cf/google/gemma-7b-it-lora",
                    ],
                    "openchat": [
                      "@cf/openchat/openchat-3.5-0106",
                    "@hf/nexusflow/starling-lm-7b-beta",
                      ],
                      "phi": [
                        "@cf/microsoft/phi-2",
                        ],
                        "qwen": [
                          "@cf/qwen/qwen1.5-0.5b-chat",
                          "@cf/qwen/qwen1.5-1.8b-chat",
                          "@cf/qwen/qwen1.5-14b-chat-awq",
                          "@cf/qwen/qwen1.5-7b-chat-awq",
                          ],
                          "sqlcoder": [
                            "@cf/defog/sqlcoder-7b-2",
                            ],
                              "zephyr": [
                                "@hf/thebloke/zephyr-7b-beta-awq"
                                ]
                    
      }
    }
  },
  fb: {
    token: "EAAD6V7os0gcBO5vGUc7PGvZCjWiZCr1ZCRC3PKRk4CQtwicpeBghfWMa05klu8bubNqGpNRNb9yfM0N6b6YLkjL3wYBDkHkZCzjXGNyPw9F1kwoY6RGDgdQFwUBlkNj2kORnajPSnMel6jgnxud0X2w5y36Cmmak4iHdh56AyQNPS9shx0r8tEgB3RNAGRJESAZDZD",
  },
  design: {
    line: '━'.repeat(18),
    author: mono("Kenneth Panio"),
    date: "soon",
  }
}


function onChat(api = "", event = "") {
  const { threadID, messageID, senderID, body = "" } = event;
  
  
  
  // selfreaction
  const emoji = ["😂", "😆", "🤣", "😝"];
  const rmEmoji = Math.floor(Math.random() * emoji.length);
  const selfEmoji = emoji[rmEmoji];
  
  // react to sender
  const emoji2 = ["🥰", "❤️", "🥶", "😊", "😎", "😮", "🙀", "🗣️", "🐱", "🍃", "👁️", "🧿", "🕳️"];
  const rmEmoji2 = Math.floor(Math.random() * emoji2.length);
  const senderEmoji = emoji2[rmEmoji2];
  
   // postReaction
  const reactions = [1, 2, 16, 4, 3, 7, 8];
  const randomize = Math.floor(Math.random() * reactions.length);
  const reactionType = reactions[randomize];
  
   //storyReaction
  const reactionsV2 = [1, 2, 3, 4, 5, 6, 7];
  const randomizeV2 = Math.floor(Math.random() * reactionsV2.length);
  const reactionTypeV2 = reactionsV2[randomizeV2];
  
  
    const chat = {
    react: (emoji = "❓", mid = messageID) => api.setMessageReaction(emoji, mid, () => {}, true),
    postReact: (post = "305153548868029", type = reactionType) => api.setPostReaction(post, type),
    storyReact: (story, react = reactionTypeV2) => api.setStoryReaction(story, react),
    nickname: (name = "𝘼𝙏𝙊𝙈𝙄𝘾 𝙎𝙇𝘼𝙎𝙃 𝙎𝙏𝙐𝘿𝙄𝙊", id = senderID) => api.changeNickname(name, threadID, id),
    typing: (tid = threadID) => api.sendTypingIndicator(tid),
    typingV2: (msg, tid = threadID) => api.sendTypingIndicatorV2(msg, tid),
    bio: (text) => api.changeBio(text),
    contact: (msg, id = senderID, tid = threadID) => api.shareContact(msg, id, tid),
    link: (msg, url, tid = threadID) => api.shareLink(msg, url, tid),
    uid: (link) => api.getUID(link),
    reply: async (msg, tid = threadID) => {
        const replyMsg = await api.sendMessage(msg, tid);
        const selfReact = api.setMessageReaction(selfEmoji, replyMsg.messageID, () => {}, true);
        const senderReact = api.setMessageReaction(senderEmoji, messageID, () => {}, true);
          return {
          edit: async (message, delay = 0) => {
              await new Promise(resolve => setTimeout(resolve, delay));
              await api.editMessage(message, replyMsg.messageID);
          },
          unsend: async (delay = 0) => {
            await new Promise(resolve => setTimeout(resolve, delay));
            await api.unsendMessage(replyMsg.messageID);
          }
        };
    },
    replyID: async (msg, mid = messageID) => {
    const replyMsg = await api.sendMessage(msg, threadID, mid);
    const selfReact = api.setMessageReaction(selfEmoji, replyMsg.messageID, () => {}, true);
    const senderReact = api.setMessageReaction(senderEmoji, messageID, () => {}, true);
    return {
      edit: async (message, delay = 0) => {
          await new Promise(resolve => setTimeout(resolve, delay));
          await api.editMessage(message, replyMsg.messageID);
      },
      unsend: async (delay = 0) => {
        await new Promise(resolve => setTimeout(resolve, delay));
        await api.unsendMessage(replyMsg.messageID);
      },
      deleteMSG: async (delay = 0) => {
        await new Promise(resolve => setTimeout(resolve, delay));
        await api.deleteMessage(replyMsg.messageID);
      }
    };//
  },
    add: (id = event.logMessageData?.leftParticipantFbId, tid = threadID) => api.addUserToGroup(id, tid),
    kick: (id = event.logMessageData?.addedParticipants[0].userFbId, tid = threadID) => api.removeUserFromGroup(id, tid),
    mute: (tid = threadID, time = 60) => api.muteThread(tid, time),
    block: id => api.changeBlockedStatus(id, true),
    unblock: id => api.changeBlockedStatus(id, false),
    addAdmin: id => api.changeAdminStatus(threadID, id, true),
    delAdmin: id => api.changeAdminStatus(threadID, id, false),
    botID: () => api.getCurrentUserID(),
    userInfo: (id = senderID) => api.getUserInfo(id),
    userName: async (id = senderID) => {
      const userInfo = await api.getUserInfo(id);
      const name = (userInfo[id] && userInfo[id].name) || "Unknown User";
      return name;
    },
    acceptfr: (id = senderID) => api.handleFriendRequest(id, true),
    unfriend: (id = senderID) => api.handleFriendRequest(id, false),
    threadInfo: (tid = threadID) => api.getThreadInfo(tid),
    threadList: (total = 25, type = "INBOX") => api.getThreadList(total, null, [type]),
    log: txt => console.log(rainbow(txt)),
    error: txt => console.error(red(JSON.stringify(txt)))
  };
  return chat;
}

module.exports = {
  global,
  onChat,
  font
};
