"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.clickOnCSScontainingText = (string1, string2) => {
            protractor_1.element(protractor_1.by.cssContainingText('string1', 'string2'));
        };
        this.firstEditBox = protractor_1.element(protractor_1.by.model("first"));
        this.secondEditBox = protractor_1.element(protractor_1.by.model("second"));
        this.go = protractor_1.element(protractor_1.by.id("gobutton"));
        this.getResults = protractor_1.element(protractor_1.by.repeater("result in memory")).element(protractor_1.by.css("td:nth-child(3)"));
    }
}
exports.calculator = calculator;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wTmF2QmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvdG9wTmF2QmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsMkNBQXdEO0FBRXhELE1BQWEsVUFBVTtJQU9uQjtRQVFELDZCQUF3QixHQUFHLENBQUMsT0FBZSxFQUFFLE9BQWUsRUFBRSxFQUFFO1lBQy9ELG9CQUFPLENBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3JELENBQUMsQ0FBQTtRQVJJLElBQUksQ0FBQyxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDbEcsQ0FBQztDQU9KO0FBcEJELGdDQW9CQyJ9