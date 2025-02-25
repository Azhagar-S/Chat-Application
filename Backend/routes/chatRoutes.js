import express from 'express'
import { protect } from '../middleware/authMiddleware'

const Router = express.Router()

Router.route('/').post(protect , accessChat).get(protect,fetchChat)
Router.route('/group').post(protect , createGroupChat)
Router.route('/rename').post(protect , renameGroup)
Router.route('/removeGroup').post(protect , renameGroup)
Router.route('/groupAdd').post(protect , addToGroup)

export default Router

