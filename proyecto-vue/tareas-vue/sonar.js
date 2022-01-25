const scanner = require('sonarqube-scanner');
scanner( 
        {
        serverUrl : 'http://sonarjason22.eastus.cloudapp.azure.com:9000/',
        token : "180f50452f04092ffa56f722c918df4434e9973d",
        options: {
                'sonar.projectKey': 'vue-jonatan',
                'sonar.projectName': 'vue-jonatan',
                'sonar.projectVersion': '1.0',
                //'sonar.sources': '.',
                //'sonar.tests': 'tests/unit',
                //'sonar.inclusions': '**', // Entry point of your code
                //'sonar.test.inclusions': 'tests/**/*.spec.js,src/**/*.spec.jsx,src/**/*.test.js,src/**/*.test.jsx',
                'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info'
                //'sonar.testExecutionReportPaths': 'coverage/test-reporter.xml'
                }
        },
        () => process.exit());