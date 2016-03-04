/*jslint node: true */

'use strict';

var gulp              = require('gulp'),
    del               = require('del'),
    devTargetFolder   = 'temp',
    prodTargetFolder  = 'prod',
    expendableFolders = [devTargetFolder, prodTargetFolder];

gulp.task('clean', function () {
    var fs = require('fs');

    for (var i = 0; i < expendableFolders.length; i++ ) {
        try {
            fs.accessSync(expendableFolders[i], fs.F_OK);
            process.stdout.write('\n\tThe ' + expendableFolders[i] +
                ' directory was found and will be deleted.\n');
            del(expendableFolders[i]);
        } catch (e) {
            process.stdout.write('\n\tThe ' + expendableFolders[i] +
                ' directory does NOT exist or is NOT accessible.\n');
        }
    }

    process.stdout.write('\n');
});
