const path = require('path');

module.exports = {
  apps: [
    {
      name: 'tb6',
      script: './bin/server.js',
      instances: 2,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DB_NAME: 'tb6',
      },
      cwd: path.join('/usr/local/share/website/', 'www.tb6.com',
        'tb6'),
    },
  ],
};
