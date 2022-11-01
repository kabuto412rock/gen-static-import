import path from "path";
import { readdir, writeFile } from "fs/promises";


async function main() {
    const currentFileDirPath = path.dirname(import.meta.url);
    const modelsDirPath = path.join(currentFileDirPath, '..', 'models')

    // 取得models資料夾內所有檔案名稱(含副檔名.js)
    let modelFiles = await readdir(modelsDirPath.replace('file:', ''));
    let fileNames = modelFiles.filter((name) => !name.includes('index.js')).map((name) => name.replace('.js', ''))
    let modelsCodeStr = '// 請勿手動更新此檔案，此檔案為compile-model.js生成的程式碼\n'
    for (const file of fileNames) {
        modelsCodeStr += `import ${file} from './${file}.js'\n`
    }
    modelsCodeStr += `import sequelize from "../instances/sequelize.js";\n`;
    modelsCodeStr += 'export const models = {\n'
    for (const file of fileNames) {
        modelsCodeStr += `    ${file},\n`
    }

    modelsCodeStr += '}\n'
    modelsCodeStr += `export function modelSync() {
    sequelize.sync();\n}`
    // console.log(modelsCodeStr);

    const newFilePath = path.join(modelsDirPath, 'index.js').replace('file:', '');
    await writeFile(newFilePath, modelsCodeStr, {
        flag: 'w'
    })
    console.log(`成功生成程式碼${newFilePath}`);
}

main();