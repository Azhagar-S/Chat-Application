import {registerUser , authUser, allUser} from '../controller/userController.js'
import express from 'express'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()


router.route('/').post(registerUser).get(protect,allUser)
router.post('/login',authUser)

export default router