var excel = require('excel4node');
const input =  require('./input/test1');

var workbook = new excel.Workbook();
var worksheet = workbook.addWorksheet('Sheet 1');
var colstyle1 = workbook.createStyle({
  font: {
    color: '#FF0800',
    size: 13
  },
  alignment: {
    horizontal: 'center'
}
});

var colstyle2 = workbook.createStyle({
    font: {
      color: '#000000',
      size: 13
    }
  });

// worksheet.column(1).setWidth(35);
// worksheet.column(2).setWidth(200);

for(let i= 0; i < input.JsonInput.start.length ; i++)
{
    var row =  input.JsonInput.start[i];
    worksheet.cell(i+1 ,1).string(row.name).style(colstyle1);
   
    if(typeof row.value === 'string')
        worksheet.cell(i +1 ,2).string(row.value).style(colstyle2);
    else
        worksheet.cell(i + 1,2).bool(row.value).style(colstyle2);
}

workbook.write('./Excel.xlsx');