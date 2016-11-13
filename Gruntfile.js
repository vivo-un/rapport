"use strict";
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        shell: {
         

          tsc: {
            command: 'tsc'
          },

          serve: {
            command: 'lite-server'
          },

          electroncompile:{
            command: 'electron main.js'
          }
        },

        tsc: {
                options: {
                    // task options 
                },
                files: [{
                    expand : true,
                    dest   : "app",
                    cwd    : "src",
                    ext    : ".js",
                    src    : [
                        "*.ts",
                        "!*.d.ts"
                    ]
                }]
            
        },
        copy: {
          main: {
            expand: true,
            cwd: 'src',
            src: ['**/*.html', '**/*.css'],
            dest: 'app/',
          },
        },


        // make sure to call the 'browserSync:xxxx' task rather than just 'browserSync' so it doesn't try to serve multiple things
        browserSync: {
          dist: {
            options: {
              server: './',
              // background must be true in order for grunt watch task to run
              background: true,
              browser: 'google chrome'
            }
          }
        },

    });
   
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-ts');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-tsc');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default',['copy','shell:tsc', 'shell:serve']);
    
};
