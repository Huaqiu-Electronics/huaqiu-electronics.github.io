// build-all.js

const shell = require('shelljs');

// Run the main build
if (shell.exec('npm run build').code !== 0) {
  shell.echo('Error: Main build failed');
  shell.exit(1);
}

// Run the docs build
if (shell.exec('npm run docs:build').code !== 0) {
  shell.echo('Error: Docs build failed');
  shell.exit(1);
}

// Copy the built docs to the dist directory
shell.mkdir('-p', 'dist/docs'); // Create the directory if it doesn't exist
if (shell.cp('-r', 'docs/.vitepress/dist/*', 'dist/docs').code !== 0) {
  shell.echo('Error: Copy docs failed');
  shell.exit(1);
}

shell.echo('Build all completed successfully');
