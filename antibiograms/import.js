// Import antibiogram from BWH.xlsx

var XLSX = require('xlsx')
var workbook = XLSX.readFile('./antibiograms/BWH.xlsx');
var sheet_name_list = workbook.SheetNames;
var _ = require('lodash');
var fs = require('fs');

var drugSet = {};
sheet_name_list.map(function(name) {
  if (['Implied Coverage', 'Drug Info'].indexOf(name) == -1) {
    var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[name]);
    // console.log(name, xlData);

    xlData.map(function(row) {
      var bug = row['__EMPTY'];
      for (var drug in row) {
        if (drug == '__EMPTY') continue;
        drugSet[drug] = drugSet[drug] || { coverage: {} };
        drugSet[drug].coverage[bug] = row[drug]/100;
      }
    });
  }
});

// console.log(drugSet);

// Implied coverage applications
var implCov = XLSX.utils.sheet_to_json(workbook.Sheets['Implied Coverage']);
implCov.map(function(row) {
  var bug = row['__EMPTY'];
  for (var drug in row) {
    if (drug == '__EMPTY') continue;
    var coverageList = row[drug].split(', ');
    if (drugSet[drug] == null || drugSet[drug].coverage[bug] == null) {
      console.log('missing source', drug, bug);
      continue;
    }
    var sourceCov = drugSet[drug].coverage[bug];
    coverageList.map(function(coverageDrug) {
      drugSet[coverageDrug] = drugSet[coverageDrug] || { coverage: {} };
      var destCov = drugSet[coverageDrug].coverage[bug];
      if (destCov == null || sourceCov > destCov) {
        drugSet[coverageDrug].coverage[bug] = sourceCov;
        console.log('Implying ' + coverageDrug + ' covers ' + bug +' ('+sourceCov+' from '+drug+')')
      }
    });
  }
});

// Other Info
var drugInfo = XLSX.utils.sheet_to_json(workbook.Sheets['Drug Info']);
drugInfo.map(function(row) {
  var drug = row['__EMPTY'];
  drugSet[drug] = drugSet[drug] || { coverage: {} };

  if (row['Admin Routes'] != null) drugSet[drug].admin = row['Admin Routes'];
  if (row['Cost'] != null) drugSet[drug].cost = row['Cost'];
  if (row['Contraindications'] != null) drugSet[drug].contra = row['Contraindications'].split(', ');

});


var drugList = _.sortBy(_.toPairs(drugSet).map(function(pair) {
  pair[1].name = pair[0];
  return pair[1];
}), function(obj) {
  return obj.name;
});

fs.writeFileSync('./data/importAbxList.js', 'var abxList = ' + JSON.stringify(drugList, null, 2) + '; if (typeof window === \'undefined\') { module.exports = abxList;}');

// var mergedAbxList = require('./data/mergedAbxList.js');
// mergedAbxList = _.sortBy(mergedAbxList, function(n) {
//   return n.name;
// });
// // console.log(mergedAbxList);
// fs.writeFileSync('./data/mergedAbxList2.js', 'var abxList = ' + JSON.stringify(mergedAbxList, null, 2) + '; if (typeof window === \'undefined\') { module.exports = abxList;}');


