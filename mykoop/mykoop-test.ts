
/// <reference path="./mykoop.d.ts" />
import mykoop = require("mykoop");

class Module implements mykoop.IModule {

}

class ModuleBridge implements mykoop.IModuleBridge {
  onAllModulesLoaded(moduleManager: mykoop.ModuleManager){
    moduleManager.get("Module");
  }
  getModule(): mykoop.IModule {
    return new Module();
  }
}



