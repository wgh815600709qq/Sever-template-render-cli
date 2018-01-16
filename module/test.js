var { connection, Sequelize } = require('../db/connect.js')
const adminModel = require('../schema/admin.js')
var Admin = adminModel(connection, Sequelize)

async function queryAll () { // 查所有
  let res = await Admin.findAll({
    attributes: ['name', '_username', 'id']
  })
  return res
}

async function queryByOne (data) { // 根据单条数据查询
  let res = await Admin.findOne({
    where: data
  })
  return res
}

async function add (data) { // 新增
  let res = await Admin.create(data)
  return res
}

async function deleteByOne (data) { // 根据单条数据删除(软)
  let res = await Admin.destroy({
    where: data
  })
  return res
}

async function editById (id, data) { // 根据id改
  let res = await Admin.update(data, {
    where: {id: id}
  })
  return res
}

module.exports = {
  queryAll,
  add,
  queryByOne,
  deleteByOne,
  editById
}
