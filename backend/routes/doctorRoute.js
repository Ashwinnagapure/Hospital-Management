import e from "express";

import {doctorList} from '../controllers/doctorController.js'

const doctorRouter=e.Router()

doctorRouter.get('/list',doctorList)

export default doctorRouter