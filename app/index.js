'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var RemarkGenerator = module.exports = function RemarkGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(RemarkGenerator, yeoman.generators.Base);

RemarkGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    name: 'title',
    message: 'Would is your presentation about?'
  }];

  this.prompt(prompts, function (props) {
    this.title = props.title;

    cb();
  }.bind(this));
};

RemarkGenerator.prototype.app = function app() {
  this.template('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

RemarkGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
  this.copy('travis.yml', '.travis.yml');
};

RemarkGenerator.prototype.assets = function assets() {
  this.mkdir('dist');

  this.mkdir('src');
  this.mkdir('src/js');
  this.mkdir('src/css');

  this.copy('remark.js', 'src/js/remark.js');
  this.copy('remark.language.js', 'src/js/remark.language.js');
  this.copy('style.css', 'src/css/style.css');

  this.copy('slides.md', 'src/slides.md');
  this.copy('layout.html', 'src/layout.html');
};
