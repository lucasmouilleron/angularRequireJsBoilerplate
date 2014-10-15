angularRequireJsBoilerplate
===========================

Features
--------
- A nice angular requirejs boilerplate
- Stack : requirejs, angular, scss, bootstrap, fontawesome
- Build : install, build, watch, grunt, bower

Install
-------
- Install NodeJS : http://nodejs.org/download
- `sudo npm install bower -g`
- `sudo npm install grunt -g`
- `sudo gem install sass`
- `sudo gem install --pre sass-css-importer`

Build
-----
- modify ```_build/config.json``` if needed
- ```cd _build```
- ```npm install && grunt build```

RequireJS
---------
- Debug mode : 
    - Launch `ndex-debug.html` instead
    - `index-debug.html` loads the non compiled version
- Add a requirejs module from bower :
    - `cd _build && bower install the_module --save`
    - Then, add path to `_dev/js/libs/vendor/the_module/path/to/jsFile` in `_dev/main.js` in path section and include module name in the `requirejs` call
