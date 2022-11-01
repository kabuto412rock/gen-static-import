import { DataTypes } from 'sequelize';
import sequelize from "../instances/sequelize";
const Bank = sequelize.define('Bank', {
    name: DataTypes.STRING,
    money: DataTypes.INTEGER,
});

export default Bank;

