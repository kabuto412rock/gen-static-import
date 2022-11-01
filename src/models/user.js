import { DataTypes } from 'sequelize';
import sequelize from "../instances/sequelize";
const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
});

export default User;

