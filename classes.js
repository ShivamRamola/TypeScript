//! Basic Class
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
    name: "Dummy",
    describe: accounting.describe,
};
accountingCopy.describe();
export {};
//# sourceMappingURL=classes.js.map