let mix = require('laravel-mix');

mix
  .sass('assets/sass/popup.scss', 'dist/css')
  .js('assets/js/background.js', 'dist/js')
  .js('assets/js/popup.js', 'dist/js').vue()
  .options({ processCssUrls: false });
