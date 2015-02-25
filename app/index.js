'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var koudaiH5 = yeoman.generators.Base.extend({
    promptUser: function() {
        var done = this.async();
 
        // have Yeoman greet the user
        console.log(this.yeoman);
 
        var prompts = [{
            name: 'appName',
            message: '项目名称 ?'
        }];
 
        this.prompt(prompts, function (props) {
            this.appName = props.appName;

            done();
        }.bind(this));
    },
    scaffoldFolders: function(){
        this.mkdir(this.appName+"/src");
        this.mkdir(this.appName+"/src/pages");
        this.mkdir(this.appName+"/src/libs");
        this.mkdir(this.appName+"/src/images");
        this.mkdir(this.appName+"/src/widgets");
        this.mkdir(this.appName+"/build");
    }
});
 
module.exports = koudaiH5;