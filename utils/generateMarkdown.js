function generateMarkdown(data) {
  return `
# ${data.project}

![license-badge](https://img.shields.io/badge/license-${encodeURI(data.license)}-blue)

## Description
${data.description}

## Table of Contents

* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Test)
* [Questions](#Questions)

## Installation

### To install dependencies, run:
\`\`\`
${data.install}
\`\`\`

## Usage
${data.useage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contribute}

## Tests
### To run tests, run this command:
\`\`\`
${data.test}
\`\`\`

## Questions?
<img src= "${data.avatar_url}" alt="profile picture" width= "45">
### For any questions regarding the repo, contact: 
${data.username} or you can email me at ${data.contact}.
`;
}

module.exports = generateMarkdown;
