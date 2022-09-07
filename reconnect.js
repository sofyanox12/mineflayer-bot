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
reconnect()