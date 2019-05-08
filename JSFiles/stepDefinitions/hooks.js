"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
cucumber_1.Before({ tags: '@Smoke' }, function () {
    protractor_1.browser.ignoreSynchronization = true;
    protractor_1.browser.manage().window().maximize();
});
cucumber_1.After(function () {
    console.log('Successfully run the test!!!');
});
// Screenshot
cucumber_1.After(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenshot = yield protractor_1.browser.takeScreenshot();
            this.attach(screenshot, 'image/png');
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvaG9va3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHVDQUFpRDtBQUNqRCwyQ0FBcUM7QUFHckMsaUJBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRTtJQUNyQixvQkFBTyxDQUFDLHFCQUFxQixHQUFDLElBQUksQ0FBQztJQUNuQyxvQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0FBQ3pDLENBQUMsQ0FBQyxDQUFDO0FBR0gsZ0JBQUssQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLENBQUMsQ0FBQTtBQUMvQyxDQUFDLENBQUMsQ0FBQztBQUVILGFBQWE7QUFDYixnQkFBSyxDQUFFLFVBQWUsUUFBUTs7UUFDMUIsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBRTtZQUN6QyxNQUFNLFVBQVUsR0FBRyxNQUFNLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0NBQUEsQ0FBQyxDQUFDIn0=