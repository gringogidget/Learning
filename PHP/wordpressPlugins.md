<h1>WordPress Plugin Notes</h1>

<h2>Header</h3>

A header comment is what tells WordPress that a file is a plugin. The following is what is required in this file:

```
<?php
/*
Plugin Name:  WordPress.org Plugin
Plugin URI:   https://developer.wordpress.org/plugins/the-basics/
Description:  Basic WordPress Plugin Header Comment
Version:      20171222
Author:       Kristina Groeger
Author URI:   https://developer.wordpress.org/
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  myWorkAddress
Domain Path:  /languages
*/
```
_Ensure the Version is greater than the previous iteration as it will mess up the WP PHP_

It's good to add a software license comment after the header comment:

```
/*
{Plugin Name} is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

{Plugin Name} is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with {Plugin Name}. If not, see {URI to Plugin License}.
*/
```
