'use strict';
module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.initConfig({
    'babel': {
      options: {
        sourceMap: false
      },
      dist: {
        files: [{
          "expand": true,
          "cwd": "src/",
          "src": ["**/*.js"],
          "dest": "lib/",
          "ext": ".js"
        }]
      }
    },
    'watch': {
      files: ['src/**/*.js'],
      tasks: ['babel']
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['babel', 'watch']);
  grunt.registerTask('heroku', ['babel']);
};
