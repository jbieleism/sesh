import { Router } from 'express'
import * as SeshController from './sesh.controller'

const routes = new Router()

routes.post('/seshes', SeshController.createSesh)
routes.get('/seshes', SeshController.getAllSeshes)

export default routes