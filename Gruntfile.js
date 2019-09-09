
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    var path = require('path');
  
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      pkgMeta: grunt.file.readJSON('config/meta.json'),
      dest: grunt.option('target') || 'dist',
      basePath: path.join('<%= dest %>', 'App_Plugins', '<%= pkgMeta.name %>'),
  
      watch: {
        options: {
          spawn: false,
          atBegin: true
        },
        dll: {
          files: ['BannerEditor/Umbraco/BannerEditor/**/*.dll'] ,
          tasks: ['copy:dll']
        },
        js: {
          files: ['BannerEditor/**/*.js'],
          tasks: ['concat:dist']
        },
        html: {
          files: ['BannerEditor/**/*.html'],
          tasks: ['copy:html']
        },
        sass: {
          files: ['BannerEditor/**/*.scss'],
          tasks: ['sass', 'copy:css']
        },
        css: {
          files: ['BannerEditor/**/*.css'],
          tasks: ['copy:css']
        },
        manifest: {
          files: ['BannerEditor/package.manifest'],
          tasks: ['copy:manifest']
        }
      },
  
      concat: {
        options: {
          stripBanners: false
        },
        dist: {
          src: [
              'BannerEditor/orc.banner.editor.namespaces.js',
              'BannerEditor/models/orc.banner.editor.models.js',
              'BannerEditor/directives/contenteditable.directive.js',
              'BannerEditor/controllers/confirmation.dialog.controller.js',
              'BannerEditor/controllers/orc.banner.editor.controller.js'
          ],
          dest: '<%= basePath %>/js/BannerEditor.js'
        }
      },
  
      copy: {
          dll: {
              cwd: 'BannerEditor/Orc.BannerEditor/bin/debug/',
              src: 'BannerEditor.dll',
              dest: '<%= dest %>/bin/',
              expand: true
          },
          html: {
              cwd: 'BannerEditor/views/',
              src: [
                  'BannerEditorView.html',
                  'ConfirmationDialogView.html'
              ],
              dest: '<%= basePath %>/views/',
              expand: true,
              rename: function(dest, src) {
                  return dest + src;
                }
          },
          css: {
              cwd: 'BannerEditor/css/',
              src: [
                  'style.css'
              ],
              dest: '<%= basePath %>/css/',
              expand: true,
              rename: function(dest, src) {
                  return dest + src;
              }
          },
          manifest: {
              cwd: 'BannerEditor/',
              src: [
                  'package.manifest'
              ],
              dest: '<%= basePath %>/',
              expand: true,
              rename: function(dest, src) {
                  return dest + src;
              }
          },
         umbraco: {
          cwd: '<%= dest %>',
          src: '**/*',
          dest: 'tmp/umbraco',
          expand: true
        }
      },
  
      umbracoPackage: {
          dist: {
              src: 'tmp/umbraco',
              dest: 'pkg',
              options: {
                  name: "<%= pkgMeta.name %>",
                  version: '<%= pkgMeta.version %>',
                  url: '<%= pkgMeta.url %>',
                  license: '<%= pkgMeta.license %>',
                  licenseUrl: '<%= pkgMeta.licenseUrl %>',
                  author: '<%= pkgMeta.author %>',
                  authorUrl: '<%= pkgMeta.authorUrl %>',
                  manifest: 'config/package.xml',
                  readme: '<%= grunt.file.read("config/readme.txt") %>',
              }
          }
      },
  
      jshint: {
        options: {
          jshintrc: '.jshintrc'
        },
        src: {
          src: ['app/**/*.js', 'lib/**/*.js']
        }
    },
  
    sass: {
          dist: {
              options: {
                  style: 'compressed'
              },
              files: {
                  'BannerEditor/css/style.css': 'BannerEditor/sass/style.scss'
              }
          }
      },
  
    clean: {
        build: '<%= grunt.config("basePath").substring(0, 4) == "dist" ? "dist/**/*" : "null" %>',
        tmp: ['tmp'],
        html: [
          'BannerEditor/views/*.html',
          '!BannerEditor/views/TextOverImageEditorView.html'
          ],
        js: [
          'BannerEditor/controllers/*.js',
          'BannerEditor/models/*.js',
          'BannerEditor/directives/*.js',
          '!BannerEditor/controllers/confirmation.dialog.controller.js',
          '!BannerEditor/controllers/orc.banner.editor.controller.js',
          '!BannerEditor/models/orc.banner.editor.models.js',
          '!BannerEditor/directives/contenteditable.directive.js'
        ],
        css: [
          'BannerEditor/css/*.css',
          '!BannerEditor/css/style.css'
        ],
        sass: [
          'BannerEditor/sass/*.scss',
          '!BannerEditor/sass/style.scss'
        ]
    }
    });
  
    grunt.registerTask('default', ['concat', 'sass:dist', 'copy:html', 'copy:manifest', 'copy:css', 'copy:dll', 'clean:html', 'clean:js', 'clean:sass', 'clean:css']);
    grunt.registerTask('umbraco', ['clean:tmp', 'default', 'copy:umbraco', 'umbracoPackage', 'clean:tmp']);
  };
  