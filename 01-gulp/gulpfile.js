// Import required modules
const gulp = require('gulp');
const sass = require('gulp-sass');
const babel = require("gulp-babel");
const minify = require('gulp-minify');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

// Import and assign compiler type
sass.compiler = require('node-sass');

// Create task that will use the assigned compiler to perform the following actions
gulp.task('sass-compile', function () {
  // 1. Source the sass file
  return gulp.src('./css/_sass/site.scss')
    // 2. Compile the sass file to css and report errors
    .pipe(sass().on('error', sass.logError))
    // 3. Output the compiled file to the desired destination
    .pipe(gulp.dest('./css/_tmp/'));
});

// Create task that will scan your code to auto-prefix any property requiring cross-browser compatibility
// This can be integrated into the sass-compile but is being extracted for the sake of the demo.
gulp.task('autoprefix', function () {
  // 1. Source the compiled css file
  return gulp.src('./css/_tmp/site.css')
    .pipe(sourcemaps.init())
    .pipe(postcss([autoprefixer({ grid: true })]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('babel', function () {
  return gulp.src("js/dev/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("site.js"))
    .pipe(sourcemaps.write("."))
    .pipe(minify({
      ext: {
        src: '',
        min: '.min.js'
      },
      ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest("js"));
});

gulp.task('minify', function () {
  return gulp.src(['js/dev/*.js'])
    .pipe(minify({
      ext: {
        src: '',
        min: '.min.js'
      },
      ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest('js'));
});