var gulp = require("gulp");
//单独任务

// gulp.task("copy-html", () => {
// 	return new Promise(function (resolve, reject) {
// 		gulp.src("*.html")
// 			.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\gulptest1"));
// 		//gulp.watch("*.html","copy-html");
// 		resolve();
// 	})
// })
// gulp.task("js", () => {
// 	return new Promise(function (resolve, reject) {
// 		gulp.src("js/**/*")
// 			.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\gulptest1\\js"));
// 		//gulp.watch("js/**/*","js");
// 		resolve();
// 	})
// })
// gulp.task("css", () => {
// 	return new Promise(function (resolve, reject) {
// 		gulp.src("css/**/*")
// 			.pipe(gulp.dest("C:\\phpStudy\\PHPTutorial\\WWW\\gulptest1\\css"))
// 		resolve();
// 	})
// })








gulp.task("copy-html",function(){
	return gulp.src("html/**/*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb"));
});
gulp.task("copy-img",function(){
	return gulp.src("imgs/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\imgs"));
});
gulp.task("copy-css",function(){
	return gulp.src("css/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\css"));
});
// gulp.task("sass",function(){
// 	gulp.src("sass/**/*.scss").pipe(sass())
// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\miya\\css"));
// });
gulp.task("copy-font",function(){
	return gulp.src("fonts/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\fonts"));
});
gulp.task("copy-js",function(){
	return gulp.src("js/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\js"));
});
gulp.task("copy-php",function(){
	return gulp.src("php/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\php"));
});
gulp.task("copy-json",function(){
	return gulp.src("json/**/*")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\json"));
});
gulp.task("data",function(){
	return gulp.src(["xml/*.xml","json/*.json","!json/test.json"])
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\ccb\\data"));
});
//gulp.task('default', gulp.parallel('copy-html', 'js', 'css'));//并行执行
gulp.task("default", gulp.parallel("copy-html","copy-img","copy-css","copy-font","copy-js","copy-php","copy-json","data"));
//监听，自动复制

// gulp.task("watch", function () {
// 	gulp.watch("*.html", gulp.parallel("copy-html"));
// 	gulp.watch("js/**/*", gulp.parallel("js"));
// 	gulp.watch("css/**/*", gulp.parallel("css"));
// })

gulp.task("watch",function(){
	gulp.watch("html/**/*.html", gulp.parallel("copy-html"));
	gulp.watch("imgs/**/*", gulp.parallel("copy-img"));
	gulp.watch("css/**/*", gulp.parallel("copy-css"));
	// gulp.width("sass/**/*.scss",["sass"]);
	gulp.watch("fonts/**/*", gulp.parallel("copy-font"));
	gulp.watch("js/**/*", gulp.parallel("copy-js"));
	gulp.watch("php/**/*", gulp.parallel("copy-php"));
	gulp.watch("json/**/*", gulp.parallel("copy-json"));
});