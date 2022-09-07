// Bot Configuration


var mineflayer = require('mineflayer')
var express = require('./online.js')

var server = {
  host: "EdZxTuTu.aternos.me",
  port: 26382,
  username: "Enderdragon"
}

var bot = mineflayer.createBot(server)

function botMovement() {
  bot.setControlState('forward', true)
  bot.setControlState('back', true)
  bot.setControlState('left', true)
  bot.setControlState('right', true)
  bot.setControlState('jump', true)
}

// Execute bot's movement after spawn
bot.once('spawn', botMovement)
  