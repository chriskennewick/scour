module.exports = function(grunt) {

  //displays the execution time of grunt tasks
  require("time-grunt")(grunt);

  //dynamically load grunt tasks
  require("load-grunt-tasks")(grunt, {
    scope: ['devDependencies', 'dependencies']
  });

  grunt.initConfig({

    //pull in package.json data so it can be referenced if necessary
    pkg: grunt.file.readJSON("package.json"),

    browserify: {
      dist: {
        src: ["app/main.js"],
        dest: "_build/js/bundle.js",
        options: {
          transform: ["debowerify", "hbsfy"],
          shim: {
            jquery: {
              path: "bower_components/jquery/jquery.js",
              exports: "$"
            },
            underscore: {
              path: "bower_components/underscore/underscore.js",
              exports: "_"
            },
            backbone: {
              path: "bower_components/backbone/backbone.js",
              exports: "Backbone",
              depends: {
                underscore: "underscore"
              }
            },
            "backbone.marionette": {
              path: "bower_components/backbone.marionette/lib/backbone.marionette.js",
              exports: "Marionette",
              depends: {
                jquery: "$",
                backbone: "Backbone",
                underscore: "_"
              }
            }
          }
        }
      }
    },

    clean: ["bower_components", "node_modules"],

    concat: {
      css: {
        src: ["bower_components/bootstrap/dist/css/bootstrap.css", "bower_components/bootstrap-modal/bootstrap-modal.css", "app/assets/stylesheets/style.css"],
        dest: "public/css/scour.css"
      }
    },

    concurrent: {
      dev: {
        options: {
          logConcurrentOutput: true
        },
        tasks: ["watch", "nodemon:dev"]
      }
    },

    copy: {
      index: {
        expand: true,
        flatten: true,
        src: "index.html",
        dest: "public"
      },
      images: {
        expand: true,
        flatten: true,
        src: "app/assets/images/*",
        dest: "public/images/"
      },
      fonts: {
        expand: true,
        flatten: true,
        src: "bower_components/bootstrap/dist/fonts/*",
        dest: "public/fonts"
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
          "Scour": true,
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
          file: "server/app.js",
          watchedFolders: ["server"],
          watchedExtensions: ["js", "json"],
          nodeArgs: ["--debug"]
        }
      }
    },

    uglify: {
      release: {
        files: {
          "public/js/scour.min.js": ["_build/js/bundle.js",
            "bower_components/jquery/jquery.js",
            "bower_components/bootstrap/dist/js/bootstrap.js",
            "bower_components/bootstrap-modal/js/bootstrap-modalmanager.js",
            "bower_components/bootstrap-modal/js/bootstrap-modal.js"
          ]
        }
      }
    },

    watch: {
      options: {
        livereload: true
      },
      app: {
        files: ["app/**/*.js", "app/**/*.hbs"],
        tasks: ["jshint", "browserify"]
      },
      server: {
        files: ["server/app.js"],
        tasks: ["jshint"]
      }
    }

  });


  grunt.loadNpmTasks("grunt-bower-install-task");
  grunt.loadNpmTasks("grunt-browserify");

  grunt.registerTask("default", ["bower_install", "browserify", "concat:css", "copy", "uglify"]);
  grunt.registerTask("debug", ["default", "concurrent:dev"]);
  grunt.registerTask("dev", ["jshint", "bower_install", "browserify", "concat", "copy"]);
  grunt.registerTask("release", ["bower_install", "browserify", "concat:css", "copy", "uglify"]);
  grunt.registerTask("test", []);


};
