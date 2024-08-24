const { spawn } = require('child_process');
const path = require('path');

// The shell: true parameter is required to package the theme, so don't mess with it if you want to create your own theme.
const webpack = spawn('npx.cmd', ['webpack', '--mode=development', '--watch'], { shell: true, cwd: path.resolve(__dirname, '../') });

webpack.on('error', (webpackError) => {
  if (webpackError) {
    console.error(webpackError);
    process.exit(1);
  }
});

webpack.stdout.on('data', (chunk) => {
  const stdout = chunk.toString();
  console.log(stdout);
  process.send(stdout);
});

webpack.stdout.on('error', (error) => {
  console.log(error);
});

webpack.stderr.on('data', (chunk) => {
  const stderr = chunk.toString();
  console.log(stderr);
});