/**
 * Created by fed on 16/4/11.
 */
const generators = require('yeoman-generator');
module.exports = generators.Base.extend({
  constructor: function () {
    generators.Base.apply(this, arguments);

    // This makes `appname` a required argument.
    this.argument('appname', { type: String, required: true });
  },
  writing: function () {
    ['test', 'views'].forEach(name => this.bulkDirectory(name, this.appname + '/' + name));
    ['index.js', 'component.jsx', 'actions.js'].forEach(name => {
      this.fs.copyTpl(
        this.templatePath(name),
        this.destinationPath(this.appname+'/'+name),
        {
          appname: this.appname,
          appnameUpper: this.appname.toUpperCase()
        }
      );
    });
  }
});