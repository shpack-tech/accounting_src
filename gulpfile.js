const gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	rename = require('gulp-rename'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	uglify = require('gulp-uglify');

gulp.task('sass', () => {
	return (
		gulp
			.src('./scss/**/*.scss')
			.pipe(sass().on('error', sass.logError))
			// .pipe(rename({ suffix: '.chunk.' }))
			.pipe(autoprefixer({ overrideBrowserslist: ['last 8 version'] }))
			.pipe(gulp.dest('dist/css'))
			.pipe(browserSync.reload({ stream: true }))
	);
});

gulp.task('js', () => {
	return (
		gulp
			.src('./js/**/*.js')
			// .pipe(uglify())
			// .pipe(rename({ suffix: '.min' }))
			.pipe(gulp.dest('dist/js'))
			.pipe(browserSync.reload({ stream: true }))
	);
});

gulp.task('html', () => {
	return gulp
		.src('./*.html')
		.pipe(gulp.dest('dist/'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('images', () => {
	return gulp
		.src('./images/**.*')
		.pipe(gulp.dest('dist/images'))
		.pipe(browserSync.reload({ stream: true }));
});
gulp.task('icons', () => {
	return gulp
		.src('./images/icons/**.*')
		.pipe(gulp.dest('dist/images/icons'))
		.pipe(browserSync.reload({ stream: true }));
});
gulp.task('myimages', () => {
	return gulp
		.src('./myimages/**.*')
		.pipe(gulp.dest('dist/myimages'))
		.pipe(browserSync.reload({ stream: true }));
});
gulp.task('fonts', () => {
	return gulp
		.src('./fonts/**.*')
		.pipe(gulp.dest('dist/fonts'))
		.pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', () => {
	browserSync.init({
		server: {
			baseDir: 'dist/',
		},
		port: 9000,
		host: 'localhost',
		notify: false,
	});
});

gulp.task('watch', () => {
	gulp.watch('./scss/**/*.scss', gulp.parallel('sass'));
	gulp.watch('./*.html', gulp.parallel('html'));
	gulp.watch('./js/*.js', gulp.parallel('js'));
	gulp.watch('./images', gulp.parallel('images'));
	gulp.watch('./myimages', gulp.parallel('myimages'));
	gulp.watch('./images/icons', gulp.parallel('icons'));
	gulp.watch('./fonts', gulp.parallel('fonts'));
});

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync', 'html', 'js', 'images', 'myimages', 'icons', 'fonts'));
