const scanner = require('sonarqube-scanner');
sonarqubeScanner( 
        {
        serverUrl : 'http://sonarjason22.eastus.cloudapp.azure.com:9000/',
        token : "180f50452f04092ffa56f722c918df4434e9973d",
        options: {
                'sonar.projectKey': 'Juan-vue-Jenkins',
                'sonar.projectName': 'Juan-vue-Jenkins',
                'sonar.projectVersion': '1.0',
                'sonar.sources': 'src',
                'sonar.tests': 'tests/unit',
                'sonar.test.inclusions': 'tests/unit/**/*.spec.js,tests/unit/**/*.spec.jsx', // Entry point of your code
                'sonar.typescript.lcov.reportPaths': 'coverage/lcov.info',
                'sonar.testExecutionReportPaths': 'test-report.xml'
                }
        },
        () => process.exit());