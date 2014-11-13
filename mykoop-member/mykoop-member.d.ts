// Type definitions for module v0.0.0
// Project: https://github.com/my-koop/service.website
// Definitions by: Michael Ferris <https://github.com/Cellule/>
// Definitions: https://github.com/my-koop/type.definitions

/// <reference path="../mykoop/mykoop.d.ts" />
declare module mkmember {

  export interface MemberInfo {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    isActive: string;
    isVolunteer: string;
    activeUntil : Date;
    feeTransactionId: number;
    subTransactionId: number;
  }
  export interface Module extends mykoop.IModule {
    getMembersList(
      callback: (err: Error, res : MemberInfo[]) => void
    ): void;
  }

}

