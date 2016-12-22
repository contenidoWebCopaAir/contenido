var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    precss = require('precss'),
    image = require('gulp-image'),
    htmlmin = require('gulp-htmlmin'),
    minify = require('gulp-minify'),
    cssnano = require('cssnano'),

    source = 'desarrollo/alianzas/',
    dest = 'produccion/alianzas/';


// HTML
gulp.task('html', function() {
    gulp.src([source + '*.html', source + '**/*.html'])
    .pipe(htmlmin({
        collapseWhitespace: true,
        minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true
    }))
    .pipe(gulp.dest(dest));
});

// JavaScript
gulp.task('javascript', function() {
    gulp.src(source + '*.js')
    .pipe(minify())
    .pipe(gulp.dest(dest));

    // gulp.src(source + 'JS/libs/*.js')
    // .pipe(gulp.dest(dest + 'JS/libs/'));
});

// CSS
gulp.task('css', function() {
    gulp.src(source + '*.css')
    .pipe(postcss([
        precss(),
        autoprefixer(),
        cssnano()
    ]))
    .pipe(gulp.dest(dest));
});

gulp.task('image', function(){
    gulp.src(source + 'img/*')
        .pipe(image({
          pngquant: true,
          optipng: false,
          zopflipng: true,
          jpegRecompress: false,
          jpegoptim: true,
          mozjpeg: true,
          gifsicle: true,
          svgo: true,
          concurrent: 10
        }))
        .pipe(gulp.dest(dest + 'img/'));
});

// Watch everything
gulp.task('watch', function() {
    gulp.watch(source + '**/*.html', ['html']);
    gulp.watch(source + 'JS/**/*.js', ['javascript']);
    gulp.watch(source + '**/*.css', ['css']);
});

// Run a livereload web server because lazy
// gulp.task('webserver', function() {
//     gulp.src(dest)
//     .pipe(webserver({
//         livereload: true,
//         open: true
//     }));
// });

// Default task (runs at initiation: gulp --verbose)
gulp.task('default', ['html', 'javascript', 'css', 'watch', 'webserver']);
