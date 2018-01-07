const path = require('path');

module.exports = {
  apps: [
    {
      name: 'tb6_dev',
      script: './bin/server.js',
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        DB_NAME: 'tb6_dev',
      },
      cwd: path.join('/usr/local/share/website/', 'dev.tb6.com',
        'tb6_dev'),
    },
  ],
};
