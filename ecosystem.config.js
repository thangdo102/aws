module.exports = {
  apps : [{
    script: 'npm start',
  }],

  deploy : {
    production : {
      key  : 'aws-week2.pem',
      user : 'ec2-user',
      host: '54.255.29.64',
      ref  : 'origin/main',
      repo : 'git@github.com:thangdo102/aws.git',
      path : '/home/ec2-user',
      'pre-deploy-local': '',
      'post-deploy' : 'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      'ssh_options': 'ForwardAgent=yes'
    }
  }
};
