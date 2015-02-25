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
            name: 'pageName',
            message: '页面名称?'
        }];
 
        this.prompt(prompts, function (props) {
            this.pageName = props.pageName;

            done();
        }.bind(this));
    },

    scaffoldFolders: function(){
        this.mkdir(this.pageName);
        /*this.mkdir(this.appName+"/src/pages");
        this.mkdir(this.appName+"/src/libs");
        this.mkdir(this.appName+"/src/images");
        this.mkdir(this.appName+"/src/widgets");
        this.mkdir(this.appName+"/build");*/
    },


    copyMainFiles: function(){
        this.copy("index.html", "./"+this.pageName+"/index.html");
        this.copy("index.js",  "./"+this.pageName+"/index.js");
        this.copy("index.scss",  "./"+this.pageName+"/index.scss");

    }
});
 
module.exports = koudaiH5;