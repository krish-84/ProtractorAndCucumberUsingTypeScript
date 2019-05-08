import { Given, When, Then } from 'cucumber';
import { browser, element, by, ElementFinder} from 'protractor';
import chai from 'chai';
import {ExpectedConditions} from 'protractor' ;
import { protractor } from 'protractor/built/ptor';
var EC = ExpectedConditions;
var expect = chai.expect;


Given('I am on the home page', async () => {

    await browser.get('https://www.getmygrades.co.uk');
    await browser.sleep(3000).then(
        function(){
           console.log("Waiting for the cookies to load");
        }
      )
       
});

  When('I click on on {string} link', async function (string) {
    // Write code here that turns the phrase above into concrete actions
   if (string==='STUDENTS'){
    var acceptCookies : ElementFinder = element(by.cssContainingText('button','Accept Cookies'));
    await acceptCookies.click();
    await browser.sleep(3000).then(
        function(){
           console.log("Waiting again for the cookies to be accepted");
        }
      )
   }
   
    await element(by.linkText(string)).click();
  });


  Then('I should see {string} on the title of the page', async function (string3) {
    // Write code here that turns the phrase above into concrete actions
    var title = await browser.getTitle();
    expect(title).to.include(string3);
  });

