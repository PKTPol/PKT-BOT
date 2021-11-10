const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("Oliv Beta Bot en linea")
})

function keepAlive() {
  server.listen(3000, () => {
 console.log("El servidor esta listo")
  })
}

module.exports = keepAlive