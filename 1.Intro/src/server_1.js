const express = require('express')

// console.log('1 ',express)
console.log('2 ',typeof(express))

const expressServer = express()

// console.log('3 ',expressServer)
console.log('4 ',typeof(expressServer))

const port = 3000

expressServer.get('/', (req, res) => {
  res.send('Index')
})

expressServer.listen(port, () => {
  console.log(`Example expressServer listening on http://localhost:${port}`)
})