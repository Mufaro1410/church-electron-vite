const ChurchSchema = require("../../api/schemas/churchSchema")

const createChurchTable = async () => {
    return await ChurchSchema.sync()
}

const dropChurchTable = async () => {
    return await ChurchSchema.drop()
}

const addChurch = async (data) => {
    try {
        const church = await ChurchSchema.create(data)
        return church.toJSON()
    } catch (error) {
        console.error(error)
        return error
    }
}

const getChurch = async (id) => {
    try {
        const church = await ChurchSchema.findByPk(id)
        if (!church) {
            return { message: 'Register' };
        }
        return church.toJSON()
    } catch (error) {
        console.error(error)
        return error
    }
}

const updateChurch = async (id, data) => {
    try {
        const church = await ChurchSchema.findByPk(id)
        if (!church) {
            return {message: 'Register'}
        }
        const res = await church.update(data)
        return res.toJSON()
    } catch (error) {
        console.error(error);
        return error
    }
}

const deleteChurch = async (id) => {
    try {
        const church = await ChurchSchema.findByPk(id)
        if (!church) {
            return { message: 'Not found'}
        }
        const res = await church.destroy()
        return res.toJSON()
    } catch (error) {
        console.error(error);
    }
}


export {
    createChurchTable,
    dropChurchTable,
    addChurch,
    getChurch,
    updateChurch,
    deleteChurch
}