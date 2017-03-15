#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import jsdoc2md from 'jsdoc-to-markdown';
import glob from 'glob';

const templates = glob.sync(path.join(__dirname, './templates/*.hbs'));

templates.forEach(template => {
  const filename = template.split('/').pop();

  jsdoc2md
    .render({
      configure: path.join(__dirname, './jsdoc.json'),
      files: path.join(__dirname, '../lib/**/*.js'),
      template: fs.readFileSync(template, 'utf8'),
      plugin: 'plugin-for-dmd'
    })
    .then(markdown => {
      const name = filename.split('.')[0];

      fs.writeFileSync(`./docs/${name}.md`, markdown);
    });
});
