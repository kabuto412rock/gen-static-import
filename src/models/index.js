// 請勿手動更新此檔案，此檔案為compile-model.js生成的程式碼
import bank from './bank.js'
import user from './user.js'
import sequelize from "../instances/sequelize.js";
export const models = {
    bank,
    user,
}
export function modelSync() {
    sequelize.sync();
}