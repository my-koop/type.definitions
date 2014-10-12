// Type definitions for database v0.0.1
// Project: https://github.com/my-koop/service.website
// Definitions by: Michael Ferris <https://github.com/Cellule/>
// Definitions: https://github.com/my-koop/type.definitions

/// <reference path="../mysql/mysql.d.ts" />
/// <reference path="../mykoop/mykoop.d.ts" />

declare module "mykoop-database" {
  import mysql = require("mysql");
  import mykoop = require("mykoop");

  interface Module extends mykoop.IModule {
    connect(dbConfig: mysql.IConnectionConfig): mysql.IConnection;
    getConnection(): mysql.IConnection;
  }

  export = Module;
}

