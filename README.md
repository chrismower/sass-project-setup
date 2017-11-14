# How to Use

_@requires_ : Ruby
_@requires_ : sass (gem)
_@requires_ : compass (gem)
_@requires_ : node.js
_@requires_ : npm
_@requires_ : grunt-cli

## Requirements Setup

If you don't have the above installed, do so now. I would recommend using [Homebrew](https://brew.sh). These are installed in your home (not project) directory.

	$ brew install ruby
	$ gem install sass
	$ gem install compass
	$ brew install node
	$ brew install grunt

The `gem install compass` command should also install the `compass-import-once` and `compass-core` gems.

Installing node via brew also installs npm.

Installing grunt through brew installs grunt-cli. You still have to install grunt as a node package in your project (later).

## This Repository

The configuration files are already set up as needed in this repository. All the .scss, .js, and .css files are blank.

All `_/scss` files import to the `_/scss/style.scss` file which then compiles to `style.css`.

All `_/js` files compile to `js/scripts.js`

The `package.json`, `config.rb`, and `gruntfile.js` are already populated to run with this setup and the commands provided below.

You will still need to initialize the project for compass and grunt.

## Initialize Project with Compass

You need to initialize your project for compass:

	$ cd <project directory>
	$ compass init

This also installs some Compass files that you don't need, that you can delete. It also creates a .sass-cache folder for you, which compass requires when watching.

Compass uses the `config.rb` file.

## Initialize Project with Grunt

	$ npm install grunt

This installs grunt on the project-level. Grunt uses the package.json file when running it's script.

## Download Grunt Script Dependencies

These are npm packages we use when running our grunt script.

	$ npm install grunt-contrib-watch --save-dev
	$ npm install grunt-contrib-uglify --save-dev
	$ npm install grunt-contrib-compass --save-dev
	$ npm install matchdep --save-dev

The `--save-dev` adds it as a development dependency.

All of these will download itself and also all of their dependencies and their dependencies... and so on.

## Reload

Make sure to add this to the bottom of every page of your project if you want to use the Live Reload portion of the Grunt script:

	<script src="http://localhost:35729/livereload.js"></script>

## Now what?

Run the grunt script in terminal:

	$ cd <project directory>
	$ grunt

This will run the grunt script, compiling your JavaScript and Scss files.

Depending on your development environment setup, you may have to trouble shoot a couple things, but this should do it otherwise.