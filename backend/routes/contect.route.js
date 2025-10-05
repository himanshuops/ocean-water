import express from 'express'
import { contect } from '../controler/user.controller.js'

const router = express.Router()

router.post('/contect', contect)

export default router