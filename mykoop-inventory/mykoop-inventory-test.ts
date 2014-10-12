
/// <reference path="./mykoop-inventory.d.ts" />

import mkinventory = require("mykoop-inventory");
import mykoop = require("mykoop");

class Module implements mkinventory.Module {
  get() {
    return "";
  }
}

function test(moduleManager: mykoop.ModuleManager) {
  var inv = <mkinventory.Module>moduleManager.get("inventory");
  inv.get();
}

