
/// <reference path="./mykoop-database.d.ts" />

import mkdatabase = require("mykoop-database");
import mykoop = require("mykoop");

function test(moduleManager: mykoop.ModuleManager) {
  var db = <mkdatabase>moduleManager.get("database");
  db.connect({host:'', user:'', password:'', port:1856});
  db.getConnection();
}

