import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ExportXLS = ({data, fileName}) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToXLS = (data, fileName) => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const xlsdata = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(xlsdata, fileName + fileExtension);
    }

    return (
        <button type="button" onClick={(e) => exportToXLS(data,fileName)}>Excel Report</button>
    )
}

export default ExportXLS
