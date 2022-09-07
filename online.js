var express = require('express')
var run = express()

run.get('/', function(req, res) {
  res.send('Running...')
})

run.listen(3000)

var fetch = require('node-fetch')

function online() { // State the Function
  var url = [
    "https://MC-Bot.sofyanox12.repl.co"
  ]
  // If there's an error, it will connect again.
  try {
    fetch(url)
  } catch (e) {
    online()
  }
}

online()