'use strict';

import gulp from "gulp";
import browserify from 'browserify';
import debug from "gulp-debug";
import exorcist from 'exorcist';
import fs from 'fs';
import print from "gulp-print";
import source from 'vinyl-source-stream';
import sourcemaps from'gulp-sourcemaps';
import spsave from 'gulp-spsave';
import tsc from 'gulp-typescript';
import tslint from 'gulp-tslint';

import Config  from'./gulpfile.config';
let config = new Config();

gulp.task("test", function () {
    console.log("Yes");
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('lint', () => {
    return gulp.src([config.allTypeScript])
            //.pipe(print(function(filepath) { return `  ..linting ${filepath}`; }))
            .pipe(tslint())
            .pipe(tslint.report('prose'));
});

/*
 * Get the vendor JS polyfills to be uploaded 
 * (also any unbundled vendor libraries) 
 */
gulp.task('includeLibs', () => {
    return gulp.src([
            config.allLibraries,
            'node_modules/d3/build/d3.js',
            'node_modules/office-ui-fabric/dist/css/fabric.css',
            'node_modules/office-ui-fabric/dist/css/fabric.components.css',
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js',
            'node_modules/react-router/umd/ReactRouter.js',
            'node_modules/spscript/dist/v2/spscript.js',
            'node_modules/whatwg-fetch/fetch.js'])
        //.pipe(print()) //Use to write names of all included files to the console during running of this task
        .pipe(gulp.dest(config.librariesOutputPath));
});

/**
 * Compile TypeScript and include references to library and app .d.ts files.
 */
gulp.task('compile', ['lint'], () => {
    const tscProject = tsc.createProject('tsconfig.json');
    let tsResult = gulp.src([config.allTypeScript,
                            config.allTypeScriptJSX,
                            config.allLibraryTypeScriptDefinitions])
                       .pipe(sourcemaps.init())
                       .pipe(tsc(tscProject));

    tsResult.dts.pipe(gulp.dest(config.sourceJS));
    
    return tsResult.js
                    .pipe(sourcemaps.write('.'))
                    .pipe(gulp.dest(config.sourceJS));
});

/*
 *
 * */
gulp.task('package', ['compile'], () => {

    let bundler =  browserify({
            entries: config.rootJS,
            debug: true //This provides sourcemapping
        })  //Initialising browserify
        .external(['d3', 'react', 'react-dom', 'react-router', 'SPScript']); //Removing the external libraries which will be available as <script> tags in the client page  

    bundler.bundle() //start buindling
        .on('error', console.error.bind(console))
        .pipe(exorcist(config.distOutputPath + '/' + config.bundleFile + '.map')) //Extract the sourcemap to a seprate file
        .pipe(source(config.bundleFile)) // Pass desired output file name to vinyl-source-stream
        .pipe(gulp.dest(config.distOutputPath)); // Destination for the bundle
})

/*
 * Upload the libraries to the SharePoint site
 * NOTE - the username and password must be XML encoded, otherwise the spsave() call will fail with "invalid STS request"
 */
gulp.task('uploadLibs', ['includeLibs'], function () {
    const settings = JSON.parse(fs.readFileSync("../settings.json"));    
    return gulp.src(config.libsAndFilesToUpload)
        .pipe(print())
        .pipe(spsave({
            username: settings.username,
            password: settings.password,
            siteUrl: settings.siteUrl,
            folder: "SiteAssets",
            notification: true
        }));
})

/*
 * Upload ONLY the bundled file to the SharePoint site!
 * NOTE - the username and password must be XML encoded, otherwise the spsave() call will fail with "invalid STS request"
 */
gulp.task('upload', ['package'], () => {
    const settings = JSON.parse(fs.readFileSync("../settings.json"));    
    return gulp.src(config.distFilePaths)
        .pipe(print((filepath) => { return `Uploading ${filepath}...` }))
        .pipe(spsave({
            username: settings.username,
            password: settings.password,
            siteUrl: settings.siteUrl,
            folder: "SiteAssets",
            notification: true
        }));
})
