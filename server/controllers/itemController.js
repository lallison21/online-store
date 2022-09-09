const uuid = require('uuid')
const path = require('path')
const {Item, ItemInfo} = require('../models/models')
const ApiError = require('../error/ApiError')

class ItemController {
    async create(req, res, next) {
        try {
            let {name, price, brandId, typeId, sizeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const item = await Item.create({name, price, brandId, typeId, sizeId, img: fileName})

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    ItemInfo.create({
                        title: i.title,
                        description: i.description,
                        itemId: item.id
                    })
                )
            }

            return res.json(item)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) {
        let {brandId, typeId, sizeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let item;
        if (!brandId && !typeId && !sizeId) {
            item = await Item.findAndCountAll({limit, offset})
        } else if (brandId && !typeId && !sizeId) {
            item = await Item.findAndCountAll({where: {brandId}, limit, offset})
        } else if (!brandId && typeId && !sizeId) {
            item = await Item.findAndCountAll({where: {typeId}, limit, offset})
        } else if (!brandId && !typeId && sizeId) {
            item = await Item.findAndCountAll({where: {sizeId}, limit, offset})
        } else if (brandId && typeId && !sizeId) {
            item = await Item.findAndCountAll({where:{brandId, typeId}, limit, offset})
        } else if (brandId && !typeId && sizeId) {
            item = await Item.findAndCountAll({where:{brandId, sizeId}, limit, offset})
        } else if (!brandId && typeId && sizeId) {
            item = await Item.findAndCountAll({where:{typeId, sizeId}, limit, offset})
        } else if (brandId && typeId && sizeId) {
            item = await Item.findAndCountAll({where:{brandId, typeId, sizeId}, limit, offset})
        }
        return res.json(item)
    }

    async getOne(req, res) {
        const {id} = req.params
        const item = await Item.findOne(
            {
                where: {id},
                include: [{model: ItemInfo, as: 'info'}]
            },
        )
        return res.json(item)
    }
}

module.exports = new ItemController()