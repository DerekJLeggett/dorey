<?php
   require( '../connect_db.php' );
   $count = $_POST['count'];
   $q = "INSERT INTO `mcalisters`(`count`, `lastUpdate`) VALUES 
                             ('$count', NOW());"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
   }
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>