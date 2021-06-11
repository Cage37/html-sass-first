// webpack.mix.js

let mix = require('laravel-mix');

mix
.sass('src/app.scss', 'css')
.js('src/app.js', 'js')
.setPublicPath('dist');
