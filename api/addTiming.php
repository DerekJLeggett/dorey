<?php
   require( '../connect_db.php' );
   $url = $_POST['url'];
   $networkLatency = $_POST['networkLatency'];
   $redirectTime = $_POST['redirectTime'];
   $pageLoadTime = $_POST['pageLoadTime'];
   $completeTime = $_POST['completeTime'];
   $q = "INSERT INTO `timings`(`url`, `networkLatency`, `redirectTime`, `pageLoadTime`, `completeTime`, `lastUpdate`) VALUES 
                             ('$url', '$networkLatency', '$redirectTime', '$pageLoadTime', '$completeTime', NOW());"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
   }
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
