
const taskLaoder = require("load-grunt-tasks");

module.exports = (grunt)=>{

    // Import and run Grunt task loader.
    taskLaoder(grunt);
    grunt.initConfig({
        
        // Configure plugin location.
        pkg: grunt.file.readJSON('package.json'),

        // Configure grunt Tasks.
        // Autoprefixer
        autoprefixer:{
            options:{
                browsers:['ie 8', 'ie 9']
            },
            target:{
                files:{'css/prefixed.css':'css/style.css'}
            }
        },
        // grunt-contrib-cssmin
        cssmin:{
            target:{
                files:{'css/style.min.css':['css/style.css','css/prefixed.css']}
            }
        },

        uglify:{
            target:{
                files:{
                    'js/script.min.js': ['js/*.js']
                }
            }
        },
        
        // Run tasks on change in file.
        watch:{
            files:['css/style.css', 'js/*.js'],
            tasks:['autoprefixer', 'cssmin', 'uglify']
        },

        copy:{
            main:{
                files:[
                    {src:'css/style.min.css', dest: 'js/style.min.css'}
                ]
            }
            
        }

        // Configure CSS Minifier.

    });

    grunt.registerTask('default', ['copy']);
}