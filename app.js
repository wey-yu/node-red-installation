"use strict";

require('shelljs/global');

exec(`node ./node_modules/node-red/red.js --userDir ./node-red-storage`, (code, stdout, stderr) => {
  if(code !== 0) {
    console.error(`😡 👎`);
    console.error(stderr)

  } else {
    console.info('😀 👍')
    console.info(stdout)
  }
});

exec(`ls node-red-storage`, (code, stdout, stderr) => {
  if(code !== 0) {
    console.error(`😡 👎`);
    console.error(stderr)

  } else {
    console.info('😀 👍')
    console.info(stdout)
  }
});
