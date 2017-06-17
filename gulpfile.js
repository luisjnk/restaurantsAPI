/**
 * Created by junqu on 19/09/2015.
 */
var gulp =  require('gulp'),
    gulpMocha = require('gulp-mocha');

gulp.task('test', function(){
    gulp.src('tests/*.js', {read: false})
        .pipe(gulpMocha({reporter: 'nyan'}))

})