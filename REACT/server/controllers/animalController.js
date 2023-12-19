const {Animal} = require('../models/models')
const ApiError = require('../error/ApiError')

class AnimalController {
    async getAll(req, res) {
        try {
            var {informationId, placementId, limit, page, search} = req.query

            page = page || 1
            limit = limit || 6
            let offset = page * limit - limit

            let animals = []

            if (!informationId && !placementId) {
                animals = await Animal.findAndCountAll({limit, offset})
            }
            else if (informationId && !placementId) {
                animals = await Animal.findAndCountAll({where:{informationId}, limit, offset})
            }
            else if (!informationId && placementId) {
                animals = await Animal.findAndCountAll({where:{placementId}, limit, offset})
            }
            else if (informationId && placementId) {
                animals = await Animal.findAndCountAll({where:{informationId, placementId}, limit, offset})
            }
            
            if (search) {
                var filtered = animals.rows.filter(function(element) {
                    return element.name.toLowerCase().startsWith(search.toLowerCase());
                })
                return res.json({rows: filtered, count: filtered.length})
            }
            else {
                return res.json(animals)
            }  
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        } 
    }

    async get(req, res) {
        try {
            const {id} = req.params
            const animal = await Animal.findOne({where: {id}})
            return res.json(animal)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }  
    }

    async getByName(req, res) {
        try {
            const {name} = req.query
            console.log(name)
            const animal = await Animal.findOne({where: {name}})
            return res.json(animal)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }  
    }

    async create(req, res) {
        try {
            const {name, admission, birth, image, description, informationId, placementId} = req.body
            const animal = await Animal.create({name, admission, birth, image, description, informationId, placementId})
            return res.json(animal)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }  
    }

    async edit(req, res) {
        try {
            const {id} = req.params
            const {name, admission, birth, image, description, informationId, placementId} = req.body
            const animal = await Animal.update({name, admission, birth, image, description, informationId, placementId},
                {where: {id}})
            return res.json(animal)
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }  
    }

    async delete(req, res) {
        try {
            const {id} = req.params
            await Animal.destroy({where: {id}})
            return res.json("Success!")
        } catch (e) {
            return res.json(ApiError.badRequest(e.message))
        }
    }

    async getTime(req, res) {
        let animals = await Animal.findAll();

        res.json([
            new Date(Math.max(...animals.map(u => u.updatedAt))).toLocaleString(),
            new Date(Math.max(...animals.map(u => u.updatedAt))).toUTCString() 
        ]);
    }
}

module.exports = new AnimalController()