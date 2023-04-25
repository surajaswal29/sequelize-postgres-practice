import {Sequelize} from "sequelize";

export const sequelize = new Sequelize('practice_db','postgres','Kyojin@123',{
    host:'Localhost',
    dialect:'postgres'
});

export const connectDB = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully");
    }catch(error){
        console.error("Unable to connect to database", error);
    }   
}