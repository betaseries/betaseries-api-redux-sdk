#!/usr/bin/env node

const glob = require('glob');
const fs = require('fs');

if (fs.existsSync('./lib/modules/index.js')) {
  fs.unlinkSync('./lib/modules/index.js');
}

/**
 * Capitalize string
 *
 * @param {String} string   String to capitalize
 * @returns {String}
 */
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const filenames = glob.sync('./lib/modules/**/*.js');

const computedFile = filenames.reduce(
  (sum, filename) => {
    const newSum = sum;

    // find modules name
    const splitted = filename.split('/');

    if (!Object.prototype.hasOwnProperty.call(newSum, splitted[3])) {
      newSum[splitted[3]] = {
        files: []
      };
    }

    if (
      splitted[4].indexOf('.js') === -1 && !newSum[splitted[3]][splitted[4]]
    ) {
      newSum[splitted[3]][splitted[4]] = [];
    }

    if (splitted[4].indexOf('.js') !== -1) {
      newSum[splitted[3]].files.push(splitted[4].replace('.js', ''));
    }

    if (splitted[5] && splitted[5].indexOf('.js') !== -1) {
      newSum[splitted[3]][splitted[4]].push(splitted[5].replace('.js', ''));
    }

    return newSum;
  },
  {}
);

let importText = '';
let exportText = 'export default {\n';
Object.keys(computedFile).forEach(module => {
  exportText += `  ${module}: {\n`;

  if (Object.prototype.hasOwnProperty.call(computedFile[module], 'actions')) {
    exportText += '    actions: {\n';

    computedFile[module].actions.forEach(action => {
      const actionName = action + capitalize(module);
      importText += `import ${actionName} from './${module}/actions/${action}';\n`;
      exportText += `      ${action}: ${actionName},\n`;
    });

    exportText += '    },\n';
  }

  if (Object.prototype.hasOwnProperty.call(computedFile[module], 'reducers')) {
    exportText += '    reducers: {\n';

    computedFile[module].reducers.forEach(reducer => {
      const reducerName = reducer + capitalize(module);
      importText += `import ${reducerName} from './${module}/reducers/${reducer}';\n`;
      exportText += `      ${reducer}: ${reducerName},\n`;
    });

    exportText += '    },\n';
  }

  if (Object.prototype.hasOwnProperty.call(computedFile[module], 'selectors')) {
    exportText += '    selectors: {\n';

    computedFile[module].selectors.forEach(selector => {
      const selectorName = selector + capitalize(module);
      importText += `import ${selectorName} from './${module}/selectors/${selector}';\n`;
      exportText += `      ${selector}: ${selectorName},\n`;
    });

    exportText += '    },\n';
  }

  computedFile[module].files.forEach(file => {
    const aliasFileName = file + capitalize(module);
    importText += `import ${aliasFileName} from './${module}/${file}';\n`;
    exportText += `    ${file}: ${aliasFileName},\n`;
  });

  exportText += '  },\n';
});
exportText += '};\n';

fs.writeFileSync('./lib/modules/index.js', `${importText}\n${exportText}`);
