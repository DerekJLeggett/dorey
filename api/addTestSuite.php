<?php
   require( '../../connect_db.php' );
   $name = $_POST['name'];
   $q = "INSERT INTO `testSuites`(`name`, `dateTime`) VALUES 
                             ('$name', NOW());"; 
   if (mysqli_query($dbc, $q)) {
        $last_id = mysqli_insert_id($dbc);
        echo $last_id;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($dbc);
    }
        mysqli_close($dbc);
?>
