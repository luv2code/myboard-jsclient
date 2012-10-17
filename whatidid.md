installed grunt

    npm install -g grunt 
initialized grunt

    grunt init:gruntfile
initialzed npm

    npm init
accepted defaults for both these init tasks

installed mochajs

    npm install -g mocha
installed bower

    npm install -g bower

bootstrapped mocha by adding a test/test.js file

installed requirejs and jquery via bower.

added src/component.json for bower

installed node http-server to use as a file server

    npm install -g http-server

installed html5 boilerplate via bower

    src/>bower install html5-boilerplate --save

then I copied all the h5bp files in docs/usage.md to the root of my web project.

I installed modernizr from bower

    src/>bower install modernizr --save
And I modified the html5 boilerplate to match my dir structure

I added a main.js and an app.js and the code in index.html to bootstrap the application

I added jshintignore file to the components directory

installed jshint in an effort to get it to ignore the components dir.  my assumption is that the grunt
task does not mind the .jshintignore file.

    npm install jshint -g
apparently I got it wrong. the .jshintignore file works like .gitignore. IOW, you're supposed to put
file paths in it with wild cards.

it turns out that it's a tobe implemented feature of gruntjs to allow you to exclude paths in the files
array. until then, the workaround is to add the ignore file to the src dir and run jshint from there.

I had to disable cache in the web inspector to get the alert I had put in to turn off

I added the text plugin for require, and started making the ko binding for finding and marrying views
to viewmodels.

added bootstrap code to app.js.  then I created the viewmodels and views folders so that the
ko bind binding could locate things.  I added the bind binding to the body of the page.

looking at making mocha a local dependency along with npm requirejs so that I can run my tests
from a tests/runner.js file.