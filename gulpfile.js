var gulp = require('gulp');
var stylus = require('gulp-stylus');
var jade = require('gulp-jade');
var nib = require('nib');


gulp.task('jade', function(){

	gulp.src(['./jade/*.jade'])
		.pipe(jade())
		.pipe(gulp.dest('./html'))


});

gulp.task('stylus', function(){

	gulp.src(['./css/*.styl'])
		.pipe(stylus({
			use: nib(),
			import: ["nib"]
		}))
		.pipe(gulp.dest('./css'))

});

gulp.task('watch', function(){

	gulp.watch('./jade/*.jade',['jade']);
	gulp.watch('./css/*.styl',['stylus']);

});


gulp.task('default', ['jade','stylus','watch']);