const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name)
    // console.log(req.query)
    // console.log("sejal")
    // console.log("sejal")
    // console.log("sejal")
    // console.log("sejal")
    // console.log("sejal")
  res.send('Hello World!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us')
  })

  app.get('/about', (req, res) => {
    res.send('About Us')
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})