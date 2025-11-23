"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Department {
    name;
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department", this.name);
    }
}
const accounting = new Department("Accounting");
accounting.describe();
const accountingCopy = {
    describe: accounting.describe,
};
console.log(accountingCopy);
//# sourceMappingURL=classes.js.map