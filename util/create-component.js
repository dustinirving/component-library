const fs = require('fs');
const templates = require('./templates');

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please supply a valid component name'.red);
  process.exit(1);
}

console.log('Creating Component Templates with name: ' + componentName);

const componentDirectory = `./src/components/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map((template) => template(componentName));

generatedTemplates.forEach((template) => {
  const fileName = template.fileName
    ? `${template.fileName}${template.extension}`
    : `${componentName}${template.extension}`;
  fs.writeFileSync(`${componentDirectory}/${fileName}`, template.content);
});

fs.appendFileSync(
  './src/index.ts',
  `
export { ${componentName} } from './components/${componentName}';`,
);

console.log('Successfully created component');
