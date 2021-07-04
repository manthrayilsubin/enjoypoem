<?php

 $output = shell_exec('sqlite3 test.db');
  
// Display the list of all file
// and directory
echo "<pre>$output</pre>";
?>