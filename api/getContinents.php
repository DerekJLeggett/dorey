<?php
   require( '../../connect_db.php' );
   $q = "SELECT DISTINCT(Continent), SUM(SurfaceArea) AS Area FROM `country` GROUP BY Continent ORDER BY Area DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
