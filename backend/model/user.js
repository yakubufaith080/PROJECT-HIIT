

module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('User',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        username:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
    },{
        sequelize,freezeTableName:true,timestamps:true
    });

    return User;
}