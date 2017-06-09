import express from 'express'
import dbConfig from './config/db'
import middlewaresConfig from './config/middlewares'
import {
  SeshRoutes,
  UserRoutes,
  GroupRoutes
} from './api'

const app = express()

/**
* Database
*/
dbConfig()
/**
* Middlewares
*/
middlewaresConfig(app)

app.use('/api', [ SeshRoutes, UserRoutes, GroupRoutes ])

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
  if (err) { console.error(err) }
  { console.log(`API listening on port: ${PORT}`) }
})