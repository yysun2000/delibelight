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


var CommonImport = ["backend/checklogin.php","template/Common/TopMenu/*.html","template/Common/LeftMenu/*.html"];
var NologinCommonImport = ["template/Common/TopMenu/*.html","template/Common/LeftMenu/*.html"];
var LastImport = ["template/include.html"];


gulp.task('build-main',function(){
  var InputLib = ["template/1_main.html","template/Main/*.html","template/Common/ProductList/*.html"];
  var ImportLib = CommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("index.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-store',function(){
  var InputLib = ["template/2_store.html","template/Store/*.html"];
  var ImportLib = CommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("store.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-detail',function(){
  var InputLib = ["template/3_detail.html","template/Detail/*.html"];
  var ImportLib = CommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("detail.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})


gulp.task('build-login',function(){
  var InputLib = ["template/4_login.html","template/Login/*.html"];
  var ImportLib = CommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("login.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-joincheck',function(){
  var InputLib = ["template/5_joincheck.html","template/JoinCheck/*.html"];
  var ImportLib = NologinCommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("joincheck.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-join',function(){
  var InputLib = ["template/6_joinpage.html","template/Join/*.html"];
  var ImportLib = NologinCommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("join.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-mypage',function(){
  var InputLib = ["template/7_mypage.html","template/Mypage/*.html"];
  var ImportLib = CommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("mypage.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build-new',function(){
  var InputLib = ["template/8_new.html","template/New/*.html"];
  var ImportLib = CommonImport.concat(InputLib).concat(LastImport);
  return gulp.src(ImportLib)
        .pipe(concat("new.html"))
        .pipe(insert.wrap("<body>\n","\n</body>"))
        .pipe(ap.prependFile("template/head.html"))
        .pipe(insert.wrap("<!DOCTYPE html><html>\n","\n</html>"))
        .pipe(ap.prependFile("backend/common.php"))
        .pipe(gulp.dest("."))
})

gulp.task('build',['build-login','build-main','build-store','build-detail','build-joincheck','build-join','build-mypage','build-new'])

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

  gulp.src('*.html')
      .pipe(gulp.dest('../dist/'));
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
    gulp.watch('less/*.less', ['less','dist']);
    gulp.watch('css/*.css', ['minify-css','dist']);
    gulp.watch('js/*.js', ['minify-frontjs','minify-backjs','dist']);
    gulp.watch('template/**/*.html', ['build','dist']);
    gulp.watch('template/*.html', ['build','dist']);
    gulp.watch('backend/*.php',['build','dist'])
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
    gulp.watch('admin/**/*.json', browserSync.reload);
    gulp.watch('template/*.html', browserSync.reload);
    gulp.watch('template/**/*.html', browserSync.reload);
});
