module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Picture', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false, // 是否允许为NULL
      primaryKey: true, // 主键
      autoIncrement: true // 是否自增
    },
    _path: {
      type: DataTypes.TEXT,
      allowNull: false// 是否允许为NULL
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false// 是否允许为NULL
    },
    is_top: {
      type: DataTypes.INTEGER,
      allowNull: false// 是否允许为NULL
    },
    department_id: {
      type: DataTypes.INTEGER
    },
    is_carousel: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    tableName: 'picture',
    paranoid: true // 软删除
  })
}