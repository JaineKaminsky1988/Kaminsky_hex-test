var gulp = require("gulp")
var scss = require("gulp-sass")
var minCss = require("gulp-cssmin")
var rename = require("gulp-rename")
var concat = require("gulp-concat")
var del = require("gulp-clean")
var cssLint = require("gulp-csslint")
const { series, parallel } = require("gulp")

gulp.task("scss", function () {
	return gulp
		.src("./styles/scss/index.scss")
		.pipe(scss())
		.pipe(gulp.dest("./styles"))
})

gulp.task("css", function () {
	return gulp
		.src("./styles/index.css")
		.pipe(concat("all.css"))
		.pipe(minCss())
		.pipe(
			rename({
				suffix: ".min",
			})
		)
		.pipe(gulp.dest("./styles"))
})

function watch() {
	gulp.watch("./styles/scss/*.scss", scss)
}

gulp.task("watch", function () {
	gulp.watch("./styles/scss/*.scss", gulp.parallel("scss", "css"))
})
