<?php
   require( '../../connect_db.php' );
   $browserId = $_POST['browserId'];
   $browserVersion = $_POST['browserVersion'];
   $operatingSystem = $_POST['operatingSystem'];
   $operatingSystemVersion = $_POST['operatingSystemVersion'];
   $testSuiteId = $_POST['testSuiteId'];
   $name = $_POST['name'];
   $didPass = $_POST['didPass'];
   $error = $_POST['error'];
   $q = "INSERT INTO `testCases`(`browserId`, `browserVersion`, `operatingSystem`, `operatingSystemVersion`, `testSuiteId`, `name`, `didPass`, `error`, `dateTime`) VALUES
                             ('$browserId', '$browserVersion', '$operatingSystem', '$operatingSystemVersion', '$testSuiteId', '$name', '$didPass', '$error', NOW());"; 
   if (mysqli_query($dbc, $q)) {
        $last_id = mysqli_insert_id($dbc);
        echo $last_id;
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($dbc);
    }
        mysqli_close($dbc);
?>
