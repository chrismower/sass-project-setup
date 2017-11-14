module.exports = function(grunt) {
	var os = require('os'); os.tmpDir = os.tmpdir; // update variable in Node to not throw deprecation warning
	grunt.loadNpmTasks('grunt-contrib-uglify'); // JS compiler
	grunt.loadNpmTasks('grunt-contrib-watch'); // Workflow automator
	grunt.loadNpmTasks('grunt-contrib-compass'); // Compass (Sass/Scss) Compiler
	grunt.initConfig({ // tell grunt WTF to do
		uglify: {
			my_target: {
				files: {
					// destination of finished doc : array of original files (could use *.js)
					'js/script.js' : ['_/js/*.js']
				} // files
			} // my_target
		}, // uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb' // use this file to let compass know what to do
				} // options
			}, // dev
		}, // compass
		watch: {
			options: { livereload: true }, // automatically reload the browser window
			scripts: {
				files: ['_/js/*.js'], // watch these files
				tasks: ['uglify'] // and do this command
			}, // scripts
			sass: {
				files: ['_/scss/**/*.scss'], // any .scss files in any folder after /scss/
				tasks: ['compass:dev'] // execute compass task and dev subtask
			}, // sass
			html: {
				files: ['*.html'] // add this so that when .html files change, triggers watch
			}, // html
			php: {
				files: ['**/*.php'] // watch these .php files, basically all .php files in the project
			} // php
		} // watch
	}) // initConfig
	grunt.registerTask('default', 'watch'); // runs a default task from initConfig when Grunt runs
} // exports