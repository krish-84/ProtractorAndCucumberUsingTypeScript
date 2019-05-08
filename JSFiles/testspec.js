"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe('Protractor Demo App', function () {
    it('should add one and two', function () {
        protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        protractor_1.element(protractor_1.by.model('first')).sendKeys(1);
        protractor_1.element(protractor_1.by.model('second')).sendKeys(2);
        protractor_1.element(protractor_1.by.id('gobutton')).click();
        expect(protractor_1.element(protractor_1.by.binding('latest')).getText()).
            toEqual('3'); // This is wrong!
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUFnRDtBQUVoRCxRQUFRLENBQUMscUJBQXFCLEVBQUU7SUFDNUIsRUFBRSxDQUFDLHdCQUF3QixFQUFFO1FBQzNCLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4QyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxNQUFNLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==