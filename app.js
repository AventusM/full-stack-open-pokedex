const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('Okay')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // Alternative could be to set no-console to 'off' in eslintrc
  // The 11.6 task image hints at removing the console.log in PokemonPage.jsx and just disabling the rule
  // in this specific function

  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
