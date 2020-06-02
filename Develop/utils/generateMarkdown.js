function generateMarkdown(data) {
  return `
# ${data.name}

## Description -
${data.description}

## Installation = 
${data.installation}

## Usage -
${data.usage}

## License -
${data.license}

## Author -
${data.author}

`;
}

module.exports = generateMarkdown;
