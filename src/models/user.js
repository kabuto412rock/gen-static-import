import { DataTypes } from 'sequelize';
import sequelize from "../instances/sequelize.js";
const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});

export default User;

