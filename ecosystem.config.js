module.exports = {
    apps: [
        {
            name: 'homepage',
            script: './server.js',
            watch: true,
            interpreter: '/usr/bin/node',
            instances: 0,
            exec_mode: 'cluster',
            wait_ready: true,
            kill_timeout: 5000,
            env_production: {
                NODE_ENV: 'production',
                NODE_TLS_REJECT_UNAUTHORIZED : 0
            }
        }
    ]
}