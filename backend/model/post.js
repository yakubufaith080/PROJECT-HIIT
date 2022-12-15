

module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        text:DataTypes.TEXT,
        author:DataTypes.STRING
    },{
        timestamps:true,sequelize,freezeTableName:true
    });

    return Post;
}