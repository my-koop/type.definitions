
/// <reference path="./mykoop-database.d.ts" />
/// <reference path="../mysql/mysql.d.ts" />

import mkdatabase = require("mykoop-database");
import mykoop = require("mykoop");
import mysql = require("mysql");

class Module implements mkdatabase{
  connect(dbConfig: mysql.IConnectionConfig): mysql.IConnection{
    return null;
  }
  getConnection(): mysql.IConnection{
    return null;
  }
}

function test(moduleManager: mykoop.ModuleManager) {
  var db = <mkdatabase>moduleManager.get("database");
  db.connect({host:'', user:'', password:'', port:1856});
  db.getConnection();
}

