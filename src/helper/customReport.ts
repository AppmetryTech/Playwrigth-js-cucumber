const  report  = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "test-results",
    reportPath: "test-results/reports/",
    reportName: "Playwright Cucumber Demo",
    pageTitle: "Automation Exercise Demo",
    displayDuration: false,
    metadata: {
        browser: {
            name: "chrome",
            version: "111.0.5563.147",
        },
        device: "Appmetry_PC",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
    customData: {
        title: "Test Info",
        data: [
            { label: "Project", value: "AutomationExercise" },
            { label: "Release", value: "1.0" },
            { label: "Cycle", value: "Smoke-Demo" }
        ],
    },
});