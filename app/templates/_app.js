var couchapp = require('couchapp'),
    path = require('path');

ddoc = {
  _id: '_design/<%= _.slugify(title) %>',
  rewrites: [{
    from: '',
    to: '/index.html'
  },{
    from: '*',
    to: '/*'
  }],
  views: {},
  lists: {},
  shows: {}
};

couchapp.loadAttachments(ddoc, path.join(__dirname, 'dist'));

module.exports = ddoc;