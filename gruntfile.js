module.exports = function(grunt) {

  //displays the execution time of grunt tasks
  require("time-grunt")(grunt);

  //dynamically load grunt tasks
  require("load-grunt-tasks")(grunt, ["grunt-*"]);

  grunt.initConfig({

    //pull in package.json data so it can be referenced if necessary
    pkg: grunt.file.readJSON("package.json"),

    browserify: {
      dist: {
        files: {
          "public/js/bundle.js": ["app/main.js"]
        },
        options: {
          transform: ["debowerify"]
        }
      }
    },

    clean: ["bower_components", "node_modules"],

    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ['watch', 'nodemon:dev']
      }
    },

    jshint: {
      files: ["gruntfile.js", "app/**/*.js", "server/app.js"],
      options: {
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "browser": true,
        "multistr": true,
        "newcap": false,
        "node": true,
        "globals": {
          "console": true,
          "$": true,
          "jQuery": true,
          "EventEmitter": true,
          "Backbone": true
        }
      }
    },

    nodemon: {
      dev: {
        options: {
          file: 'server/app.js',
          watchedFolders: ['server'],
          watchedExtensions: ['js', 'json'],
          nodeArgs: ['--debug']
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      app: {
        files: ["app/**/*.js"],
        tasks: ["jshint", "browserify"]
      },
      server: {
        files: ["server/app.js"],
        tasks: ["jshint"]
      }
    }

  });

  grunt.registerTask("default", ["jshint", "bower_install", "browserify"]);
  grunt.registerTask("dev", ["default", "concurrent:dev"]);
  grunt.registerTask("release", []);
  grunt.registerTask("test", []);


};
