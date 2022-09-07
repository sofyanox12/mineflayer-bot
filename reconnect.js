// If the server read kicks the Bot

function reconnect() {
  bot = mineflayer.createBot(server)
  bot.on('kicked', () => {
    reconnect()
  })
  bot.on('error', () => {
    reconnect()
    bot = mineflayer.createBot(server)
  })
}

// It will reconnect again
reconnect()