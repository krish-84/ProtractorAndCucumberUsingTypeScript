"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Cucumber-html-report
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
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
                "App Version": "0.3.2",
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
        showColors: true,
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VjdW1iZXJjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jdWN1bWJlcmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSx1QkFBdUI7QUFDdkIsaUVBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLDRDQUE0QztJQUM1QyxrREFBa0Q7SUFDbEQsYUFBYSxFQUFFLElBQUk7SUFDbkIsU0FBUyxFQUFFLFFBQVE7SUFDbkIsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFDL0Qsd0JBQXdCLEVBQUUsS0FBSztJQUUvQix1REFBdUQ7SUFDdkQsWUFBWSxFQUFFO1FBQ1osV0FBVyxFQUFFLFFBQVE7S0FDdEI7SUFFRCxVQUFVLEVBQUUsR0FBRyxFQUFFO1FBQ2YsdUJBQXVCO1FBQ3ZCLElBQUksT0FBTyxHQUFHO1lBQ1osS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsd0JBQXdCO1lBQ2hDLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBQyxPQUFPO2dCQUNyQixrQkFBa0IsRUFBRSxLQUFLO2dCQUN6QixTQUFTLEVBQUUsc0JBQXNCO2dCQUNqQyxVQUFVLEVBQUUsUUFBUTtnQkFDcEIsVUFBVSxFQUFFLFdBQVc7Z0JBQ3ZCLFVBQVUsRUFBRSxRQUFRO2FBQ3ZCO1NBQ0osQ0FBQztRQUNGLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELHVFQUF1RTtJQUN2RSwyQ0FBMkM7SUFDM0Msa0NBQWtDO0lBQ2xDLEtBQUssRUFBRSxDQUFDLHVCQUF1QixDQUFDO0lBRWhDLFlBQVksRUFBRTtRQUNWLDJCQUEyQjtRQUMzQixJQUFJLEVBQUUsUUFBUTtRQUNkLE1BQU0sRUFBRSw0QkFBNEI7UUFDcEMsT0FBTyxFQUFFO1lBQ1Asd0JBQXdCLENBQUMsaUJBQWlCO1NBQzNDO0tBQ0Y7SUFFSCwwRUFBMEU7SUFDMUUsc0NBQXNDO0lBQ3RDLFNBQVMsRUFBRSxJQUFJO0lBRWYsd0NBQXdDO0lBQ3hDLGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxJQUFJO0tBQ2pCO0NBQ0YsQ0FBQyJ9