<?php
   require( '../../connect_db.php' );
   $q = "SELECT Code2, Name FROM `country`;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
