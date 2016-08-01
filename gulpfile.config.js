'use strict';
var GulpConfig = (function () {
    function gulpConfig() {
        this.src = "./src";
        this.allTypeScript = this.src + "/app/**/*.ts";
        this.allTypeScriptJSX = this.src + '/app/**/*.tsx';
        this.allLibraries = this.src + '/libs/*.js';
        this.allLibraryTypeScriptDefinitions = './typings/**/*.ts';
        this.sourceJS = this.src + '/js/';
        this.rootJS = this.sourceJS + 'app.js'

        this.dist = './dist';
        this.librariesOutputPath = this.dist + '/libs';
        this.distOutputPath = this.dist + '/js';
        this.libsAndFilesToUpload = [this.librariesOutputPath + '/*.css',this.librariesOutputPath + '/*.js'];        

        this.bundleFile = 'bundle-spgetdataforjsdev.js';
        this.distFilePaths = [this.distOutputPath + '/' + this.bundleFile, this.distOutputPath + '/' + this.bundleFile + '.map', this.dist + '/html/*.html'];

        this.devserve = {
            protocol: 'http',
            host: 'localhost',
            port: '9090',
            proxy: {
                port: '7777'
            }
        };

    }
    return gulpConfig;
})();
module.exports = GulpConfig;
