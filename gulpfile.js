var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var filter = require('gulp-filter');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var insert = require('gulp-insert');
var fileInsert = require("gulp-file-insert");
var ap = require("gulp-append-prepend");
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
    return gulp.src('css/common.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-frontjs', function() {
    return gulp.src('js/frontcontroller.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify JS
gulp.task('minify-backjs', function() {
    return gulp.src('js/backcontroller.js')
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('build-store',function(){
  return gulp.src(["backend/checklogin.php","template/2_store.html","template/Store/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("store.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-detail',function(){
  return gulp.src(["backend/checklogin.php","template/3_detail.html","template/Detail/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("detail.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-main',function(){
  return gulp.src(["backend/checklogin.php","template/1_main.html","template/Main/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("index.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-login',function(){
  return gulp.src(["backend/checklogin.php","template/4_login.html","template/Login/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("login.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-joincheck',function(){
  return gulp.src(["template/5_joincheck.html","template/JoinCheck/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("joincheck.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-join',function(){
  return gulp.src(["template/6_joinpage.html","template/Join/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("join.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-mypage',function(){
  return gulp.src(["template/7_mypage.html","template/Mypage/*.html","template/LeftMenu/*.html","template/include.html"])
        .pipe(concat("mypage.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build',['build-login','build-main','build-store','build-detail','build-joincheck','build-join','build-mypage'])

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

gulp.task('dist',['build'],function(){
  gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
      .pipe(gulp.dest('../dist/vendor/bootstrap'));

  gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
      .pipe(gulp.dest('../dist/vendor/jquery'));

  gulp.src([
          'node_modules/font-awesome/**',
          '!node_modules/font-awesome/**/*.map',
          '!node_modules/font-awesome/.npmignore',
          '!node_modules/font-awesome/*.txt',
          '!node_modules/font-awesome/*.md',
          '!node_modules/font-awesome/*.json'
      ])
      .pipe(gulp.dest('../dist/vendor/font-awesome'));
  gulp.src('img/*')
      .pipe(gulp.dest('../dist/img/'));
  gulp.src('img/**')
          .pipe(gulp.dest('../dist/img'));
  gulp.src('js/*.min.js')
      .pipe(gulp.dest('../dist/js/'));
  gulp.src('css/*.min.css')
      .pipe(gulp.dest('../dist/css/'));
})

// Run everything
gulp.task('default', ['less', 'minify-css', 'minify-frontjs','minify-backjs', 'copy','build','dist']);

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-frontjs','minify-backjs','build','dist'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-frontjs','minify-backjs']);
    gulp.watch('template/**/*.html', ['build']);
    gulp.watch('template/*.html', ['build']);
    gulp.watch('backend/*.php',['build'])
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('admin/**/*.json', browserSync.reload);
    gulp.watch('template/*.html', browserSync.reload);
    gulp.watch('template/**/*.html', browserSync.reload);
});
