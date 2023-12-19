const {Placement} = require('../models/models')
const ApiError = require('../error/ApiError')

class PlacementController {
    async getAll(req, res) {
        try {
            const placements = await Placement.findAll()
            return res.json(placements)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }  
    }

    async get(req, res) {
        try {
            const {id} = req.params
            const placement = await Placement.findOne({where: {id}})
            return res.json(placement)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }   
    }
}

module.exports = new PlacementController()