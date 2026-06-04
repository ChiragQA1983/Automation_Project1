import xlsx from 'xlsx';

export default class ExcelUtils
{
    static getTestData(filepath, sheetname)
    {
        const workbook = xlsx.readFile(filepath);

        const worksheet = workbook.Sheets[sheetname];

        const data = xlsx.utils.sheet_to_json(worksheet);

        return data;
    }
}