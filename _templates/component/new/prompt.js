module.exports = [
  {
    type: 'select',
    // TODO: add more choices as we add new modules
    choices: ['home', 'ui'],
    name: 'feature',
    message: `What is the component's feature?`,
  },
  {
    type: 'select',
    choices: ['screens', 'components'],
    name: 'category',
    message: `What is the component's category?`,
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is the component name (in PascalCase)?',
  },
]
