"use strict";

require('shelljs/global');

exec(`node ./node_modules/node-red/red.js --userDir ./`, (code, stdout, stderr) => {
  if(code !== 0) {
    console.error(`😡 👎`);
    console.error(stderr)

  } else {
    console.info('😀 👍')
    console.info(stdout)
  }
});
