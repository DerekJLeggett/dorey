<?php
   require( '../connect_db.php' );
   $browserName = $_POST['browserName'];
   $browserVersion = $_POST['browserVersion'];
   $operatingSystem = $_POST['operatingSystem'];
   $operatingSystemVersion = $_POST['operatingSystemVersion'];
   $testSuiteId = $_POST['testSuiteId'];
   $name = $_POST['name'];
   $didPass = $_POST['didPass'];
   $error = $_POST['error'];
   $q = "INSERT INTO `testCases`(`browserName`, `browserVersion`, `operatingSystem`, `operatingSystemVersion`, `testSuiteId`, `name`, `didPass`, `error`, `dateTime`) VALUES 
                             ('$browserName', '$browserVersion', '$operatingSystem', '$operatingSystemVersion', '$testSuiteId', '$name', '$didPass', '$error', NOW());"; 
   if (mysqli_query($dbc, $q)) {
        $last_id = mysqli_insert_id($dbc);
        echo $last_id;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($dbc);
    }
        mysqli_close($dbc);
?>