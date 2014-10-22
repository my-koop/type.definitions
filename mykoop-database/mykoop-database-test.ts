
/// <reference path="./mykoop-database.d.ts" />
/// <reference path="../mysql/mysql.d.ts" />

import mysql = require("mysql");

class Module implements mkdatabase.Module {
  connect(dbConfig: mysql.IConnectionConfig): mysql.IConnection{
    return null;
  }
  getConnection(): mysql.IConnection{
    return null;
  }
}

function test(moduleManager: mykoop.ModuleManager) {
  var db = <mkdatabase.Module>moduleManager.get("database");
  db.connect({host:'', user:'', password:'', port:1856});
  db.getConnection(function(err,connection){
    if(err) return;
    connection.end();
  });
}

