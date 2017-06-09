import { Router } from 'express'
import * as UserController from './user.controller'

const routes = new Router()

routes.post('/users', UserController.createUser)
routes.get('/users', UserController.getUser)

export default routes