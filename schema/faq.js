module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Faq', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false// 是否允许为NULL
    },
    frequency: {
      type: DataTypes.INTEGER,
      allowNull: false// 是否允许为NULL
    }
  }, {
    tableName: 'faq',
    paranoid: true // 软删除
  })
}