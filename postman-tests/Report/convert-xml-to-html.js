const newman = require('newman');
const fs = require('fs');
const path = require('path');

const inputXmlFilePath = 'postman-tests/Report/postman-report.xml'; // path to the XML report
const outputHtmlFilePath = 'postman-tests/Report/postman-html-report.html'; // path with the desired HTML output path

newman.run(
  {
    collection: 'postman-tests/Users.postman_collection.json', // path to the Postman collection JSON file
    environment: 'postman-tests/api-test-json-server.postman_environment.json', // path to the Postman environment JSON file
    reporters: 'htmlextra',
    reporter: {
      htmlextra: {
        export: outputHtmlFilePath,
      },
    },
  },
  (err) => {
    if (err) {
      console.error('Error running Newman:', err);
    } else {
      console.log('Newman completed successfully.');
    }
  }
);
