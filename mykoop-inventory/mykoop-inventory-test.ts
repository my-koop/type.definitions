
/// <reference path="./mykoop-inventory.d.ts" />
export var t: any;

class InventoryModule implements mkinventory.Module {
  get() {
    return "";
  }
}

function test(moduleManager: mykoop.ModuleManager) {
  var inv = <mkinventory.Module>moduleManager.get("inventory");
  inv.get();
}

