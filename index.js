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
            message: '页面名称 ?'
        }];
 
        this.prompt(prompts, function (props) {
            this.appName = props.pageName;

            done();
        }.bind(this));
    },
    scaffoldFolders: function(){
        this.mkdir("app");
        this.mkdir("app/css");
        this.mkdir("app/sections");
        this.mkdir("build");
    },
    copyMainFiles: function(){
        this.copy("_footer.html", "app/footer.html");
        this.copy("_gruntfile.js", "Gruntfile.js");
        this.copy("_package.json", "package.json");
        this.copy("_main.css", "app/css/main.css");    
     
        var context = { 
            site_name: this.appName 
        };
     
        this.template("_header.html", "app/header.html", context);
    },
    generateDemoSection: function() {
        if (this.addDemoSection) {
            var done = this.async();
            this.invoke("h5basic:section", {args: ["Demo Section"]}, function(){
                done();
          });
        } else {
            this.write( "app/menu.html", "");
        }
    },
    runNpm: function(){
        var done = this.async();
        this.npmInstall("", function(){
            console.log("\nEverything Setup !!!\n");
            done();
        });
    }
});
 
module.exports = koudaiH5;