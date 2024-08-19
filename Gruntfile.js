module.exports = function (grunt) {
    // Carrega as configurações do package.json
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        less: {
            development: {
                options: {
                    // Adicione aqui opções personalizadas para o desenvolvimento, se necessário
                },
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        }
    });

    // Carrega o plugin Grunt para compilar LESS
    grunt.loadNpmTasks('grunt-contrib-less');

    // Registra as tarefas
    grunt.registerTask('default', ['less:development']);
    grunt.registerTask('build', ['less:production']);
};