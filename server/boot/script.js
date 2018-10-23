'use strict';

var path = require('path');
var fs = require('fs');
var app = require(path.resolve(__dirname, '../server'));

var outputPath = path.resolve(__dirname, '../../common/models');

var ds = app.dataSources.begira_mysql;

function schemaCB(err, schema) {

  if (schema) {
    console.log("Auto discovery: " + schema.name);

    var outputName = outputPath + '/' + schema.name + '.json';


    fs.writeFile(outputName, JSON.stringify(schema, null, 2), function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log("JSON guardado en: " + outputName);
      }
    });
  }

  if (err) {
    console.error(err);
    return;
  }
  return;
};

// SCRIPT PARA DESCUBRIR TABLAS y GUARDAR MODELO
/*   ds.discoverSchema('Actual_Estacion23', {
  schema: 'iline'
}, schemaCB);
 */

