module.exports = function(grunt){
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/styles.css': 'assets/stylesheets/src/styles.scss'
          // 'assets/stylesheets/home.css': 'assets/stylesheets/src/home.scss',
          // 'assets/stylesheets/footer.css':'assets/stylesheets/src/footer.scss',
          // 'assets/stylesheets/common.css':'assets/stylesheets/src/common.scss',
          // 'assets/stylesheets/contribute.css':'assets/stylesheets/src/contribute.scss',
          // 'assets/stylesheets/activities.css': 'assets/stylesheets/src/activities.scss',
          // 'assets/stylesheets/contact.css': 'assets/stylesheets/src/contact.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', "cssmin"]
        
      }
    },
   
    cssmin: {
      
      target: {
        files: {
          'assets/stylesheets/app.min.css': 
          [
           'assets/stylesheets/styles.css'
          // 'assets/stylesheets/footer.css', 
          // 'assets/stylesheets/header.css',
          // 'assets/stylesheets/common.css',
          // 'assets/stylesheets/contribute.css',
          // 'assets/stylesheets/activities.css',
          // 'assets/stylesheets/contact.css'
          ]
        }
      }
    }
    
     
  });
  
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default',['sass','cssmin','watch']);
  
};
        