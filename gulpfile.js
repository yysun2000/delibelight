var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var insert = require('gulp-insert');
var fileInsert = require("gulp-file-insert");
var ap = require("gulp-append-prepend");
var del = require('del');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * 제작자 : 유영선 \n',
    ' * Copyright 2017-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    var f = filter(['**', '!mixins.less', '!variables.less'], {'restore': true});
    return gulp.src('less/*.less')
        .pipe(f)
        .pipe(less())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {
    return gulp.src('css/freelancer.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/freelancer.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('build-store',function(){
  return gulp.src(["template/2_store.html","template/Store/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("store.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<html>\n","\n</html>"))
        .pipe(gulp.dest("."))
})

gulp.task('build-detail',function(){
  return gulp.src(["template/3_detail.html","template/Detail/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("detail.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<html>\n","\n</html>"))
        .pipe(gulp.dest("."))
})

gulp.task('build-main',function(){
  return gulp.src(["template/1_main.html","template/Main/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("index.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<html>\n","\n</html>"))
        .pipe(gulp.dest("."))
})

gulp.task('build',['build-main','build-store','build-detail'])

/*
gulp.task('unified-all',['unified-body'],function(){
//    return gulp.src(["template/head.html","temp/body.html"])
//          .pipe(concat("index.html"))
//          .pipe(insert.wrap("<html>\n","\n</html>"))
//          .pipe(gulp.dest("."));
})*/

// Copy vendor libraries from /node_modules into /vendor
gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('vendor/bootstrap'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('vendor/jquery'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('vendor/font-awesome'))
})

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-js', 'copy','build']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js','build'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    gulp.watch('template/**/*.html', ['build']);
    gulp.watch('template/*.html', ['build']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('admin/**/*.json', browserSync.reload);
    gulp.watch('template/*.html', browserSync.reload);
    gulp.watch('template/**/*.html', browserSync.reload);
});
