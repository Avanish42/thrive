var gulp = require('gulp');
var csso = require('gulp-csso');
var js_obfuscator = require('gulp-js-obfuscator');
var pump = require('pump');
var uglify = require('gulp-uglify');


gulp.task('css', function() {
  // place code for your default task here
   return gulp.src('./css/*.css')
        .pipe(csso())
        .pipe(gulp.dest('./build/css'));
});


// gulp.task('html', function() {
//   // place code for your default task here
//    return gulp.src('./*.html')
//         .pipe(csso())
//         .pipe(gulp.dest('./build'));
// });


gulp.task('jsminify', function(cb) {
    pump([
        gulp.src('js/*.js'),
        uglify(),
        gulp.dest('./build/js')
    ],
    cb
  );
});

gulp.task('jsobfuscate', function(){
gulp.src('./js/*.js')
    .pipe(js_obfuscator({}, ["**/jquery-*.js"]))
    .pipe(gulp.dest('./build/js'));
});

gulp.task('jsminify', function(cb) {
    pump([
        gulp.src('build/js/*.js'),
        uglify(),
        gulp.dest('./build/js/min')
    ],
    cb
  );
});

 
gulp.task('default', [ 'css','jsobfuscate', 'jsminify' ]);
