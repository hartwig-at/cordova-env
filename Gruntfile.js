module.exports = function( grunt ) {

	// Project configuration.
	grunt.initConfig(
		{
			pkg   : grunt.file.readJSON( "package.json" ),
			clean : [ "dist/" ],

			jshint : {
				options  : {
					jshintrc : true
				},
				frontend : {
					src : [
						"src/*.js"
					]
				}
			},

			uglify : {
				js : {
					src  : "src/<%= pkg.name %>.js",
					dest : "dist/<%= pkg.name %>.min.js"
				}
			},

			watch : {
				src  : {
					files   : [ "Gruntfile.js", "src/*.js" ],
					tasks   : [ "clean", "jshint", "uglify" ],
					options : {
						reload : true
					}
				}
			}
		}
	);

	grunt.loadNpmTasks( "grunt-contrib-clean" );
	grunt.loadNpmTasks( "grunt-contrib-jshint" );
	grunt.loadNpmTasks( "grunt-contrib-uglify" );
	grunt.loadNpmTasks( "grunt-contrib-watch" );

	grunt.registerTask( "default", ["clean", "jshint", "uglify"] );
};
