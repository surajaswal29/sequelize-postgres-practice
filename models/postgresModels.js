import {sequelize} from "../config/connectDB.js";
import { DataTypes } from "sequelize";

const userSchema = sequelize.define("Employee", {
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        primaryKey:true
    },
    fName:{
        type:DataTypes.STRING,
    },
    age:{
        type:DataTypes.INTEGER
    },
    married:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
});

userSchema.sync().then(()=>{
    console.log('User Model Synced');
})


export default userSchema