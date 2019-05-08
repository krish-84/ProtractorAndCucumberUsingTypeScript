"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
const protractor_2 = require("protractor");
var EC = protractor_2.ExpectedConditions;
var expect = chai_1.default.expect;
cucumber_1.Given('I am on the home page', () => __awaiter(this, void 0, void 0, function* () {
    yield protractor_1.browser.get('https://www.getmygrades.co.uk');
    yield protractor_1.browser.sleep(3000).then(function () {
        console.log("Waiting for the cookies to load");
    });
}));
cucumber_1.When('I click on on {string} link', function (string) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        if (string === 'STUDENTS') {
            var acceptCookies = protractor_1.element(protractor_1.by.cssContainingText('button', 'Accept Cookies'));
            yield acceptCookies.click();
            yield protractor_1.browser.sleep(3000).then(function () {
                console.log("Waiting again for the cookies to be accepted");
            });
        }
        yield protractor_1.element(protractor_1.by.linkText(string)).click();
    });
});
cucumber_1.Then('I should see {string} on the title of the page', function (string3) {
    return __awaiter(this, void 0, void 0, function* () {
        // Write code here that turns the phrase above into concrete actions
        var title = yield protractor_1.browser.getTitle();
        expect(title).to.include(string3);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wTmF2QmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3RlcERlZmluaXRpb25zL3RvcE5hdkJhci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDJDQUFnRTtBQUNoRSxnREFBd0I7QUFDeEIsMkNBQStDO0FBRS9DLElBQUksRUFBRSxHQUFHLCtCQUFrQixDQUFDO0FBQzVCLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFHekIsZ0JBQUssQ0FBQyx1QkFBdUIsRUFBRSxHQUFTLEVBQUU7SUFFdEMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUMxQjtRQUNHLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztJQUNsRCxDQUFDLENBQ0YsQ0FBQTtBQUVQLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFRCxlQUFJLENBQUMsNkJBQTZCLEVBQUUsVUFBZ0IsTUFBTTs7UUFDeEQsb0VBQW9FO1FBQ3JFLElBQUksTUFBTSxLQUFHLFVBQVUsRUFBQztZQUN2QixJQUFJLGFBQWEsR0FBbUIsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztZQUM3RixNQUFNLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1QixNQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FDMUI7Z0JBQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1lBQy9ELENBQUMsQ0FDRixDQUFBO1NBQ0g7UUFFQSxNQUFNLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzdDLENBQUM7Q0FBQSxDQUFDLENBQUM7QUFHSCxlQUFJLENBQUMsZ0RBQWdELEVBQUUsVUFBZ0IsT0FBTzs7UUFDNUUsb0VBQW9FO1FBQ3BFLElBQUksS0FBSyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwQyxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=