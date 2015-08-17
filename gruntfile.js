module.exports = function (grunt) {
    var jscript = 'app/**/*.js',
        styles = 'app/**/*.less';


    grunt.initConfig({
        concat: {
            options: {
                separator: ';',
                sourceMap: true
            },
            basic: {
                files: {
                    'build/build.js': [jscript]
                }
            }
        },
        less: {
            development: {
                options: {
                    sourceMap: true
                },
                files: {
                    "build/AllStyles.css": [styles]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8889,
                    hostname: '*',
                    keepalive: true,
                    base: '.'
                }
            }
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                options: {
                    files: ['tests/**/*.js']
                }
            }
        },
        watch: {
            files: [jscript, styles],
            tasks: ['concat', 'less']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less')

    grunt.registerTask('default', [
        'concat',
        'watch',
        'less'
    ]);

    grunt.registerTask('server', ['connect:server']);
};