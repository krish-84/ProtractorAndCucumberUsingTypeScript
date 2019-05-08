import {Config} from 'protractor';

// Cucumber-html-report
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: false,
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome'
    },

    onComplete: () => {
      // Cucumber-html-report
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberReport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "UAT",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "mac os",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/*.feature'],

    cucumberOpts: {
        // require step definitions
        tags: '@Smoke',
        format: 'json:./cucumberReport.json',
        require: [
          './stepDefinitions/*.js' // accepts a glob
        ]
      },

    // You could set no globals to true to avoid jQuery '$' and protractor '$'
    // collisions on the global namespace.
    noGlobals: true,
  
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
      showColors: true, // Use colors in the command line report.
    }
  };
  