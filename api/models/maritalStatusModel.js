// import { MaritalStatusSchema } from '../schemas/memberSchema'
const MaritalStatusSchema = require('../../api/schemas/memberSchema').MaritalStatusSchema

const createMaritalStatusTable = async () => {
    const res = await MaritalStatusSchema.sync()
    return res
}

// Dropping table
const dropMaritalStatusTable = async () => {
    const res = await MaritalStatusSchema.drop()
    return res
}


// Table manipulations
const addMaritalStatus = async (data) => {
    try {
        // const { firstname, lastname, username, password } = data
        const res = await MaritalStatusSchema.create(data)
        return res.toJSON()
    } catch (error) {
        return error.toJSON()
    }
}

const getMaritalStatuses = async () => {
    try {
        const res = await MaritalStatusSchema.findAll()
        const data = res.map(status => status.dataValues)
        return data
    } catch (error) {
        return error
    }
}

const getMaritalStatus = async (id) => {
    try {
        const status = await MaritalStatusSchema.findByPk(id)
        // console.log(status);
        if (!status) {
            return {message: 'Status not found'}
        }
        return status.toJSON()
    } catch (error) {
        return error
    }
}

const updateMaritalStatus = async (id, data) => {
    try {
        const status = await MaritalStatusSchema.findByPk(id)
        if (!status) {
            return {message: 'Status not found'}
        }
        const res = await status.update(data)
        res.save()
        return res.toJSON()
    } catch (error) {
        return error
    }
}

const removeMaritalStatus = async (id) => {
    try {
        const status = await MaritalStatusSchema.findByPk(id)
        if (!status) {
            return {message: 'Status not found'}
        }
        await status.destroy()
        return
    } catch (error) {
        return error
    }
}

export {
    createMaritalStatusTable,
    dropMaritalStatusTable,
    getMaritalStatuses,
    getMaritalStatus,
    addMaritalStatus,
    updateMaritalStatus,
    removeMaritalStatus
}

// createMaritalStatusTable()
// dropMaritalStatusTable()