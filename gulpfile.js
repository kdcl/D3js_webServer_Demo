var gulp = require('gulp'),
	webserver = require('gulp-webserver')

gulp.task('webserver', function() {
  gulp.src('app') //起始目錄
    .pipe(webserver({
    	
    	port: 2222, //設定一個沒在使用的port
       //auto refresh
       livereload: true,
      open: true //執行gulp時自動開啟browser
    }));
});

gulp.task('default', ['webserver']);

