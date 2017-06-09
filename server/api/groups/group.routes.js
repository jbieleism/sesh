import { Router } from 'express'
import * as GroupController from './group.controller'

const routes = new Router()

routes.post('/group/new', GroupController.createGroup)

export default routes