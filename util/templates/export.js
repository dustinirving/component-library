module.exports = (componentName) => ({
  content: `import ${componentName} from "./${componentName}";
export { ${componentName} };
`,
  extension: `.ts`,
  fileName: 'index',
});
