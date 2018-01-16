module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Admin', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    _username: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    _password: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    }
  }, {
    tableName: 'admin',
    paranoid: true // 软删除
  })
}