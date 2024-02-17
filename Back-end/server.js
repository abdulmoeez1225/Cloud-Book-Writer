const jsonServer = require('json-server')
const auth = require('json-server-auth')

const app = jsonServer.create()
const router = jsonServer.router('db.json')

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', 'GET POST PUT')

    next()
  })

// /!\ Bind the router db to the app
app.db = router.db

// You must apply the auth middleware before the router
app.use(auth)
app.use(router)
app.listen(3001)