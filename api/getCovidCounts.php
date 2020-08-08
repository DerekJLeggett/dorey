<?php
   require( '../../connect_db.php' );
   $q = "SELECT Date_reported, Country_code, Cumulative_cases, Cumulative_deaths 
   FROM covid
   WHERE Date_reported = (SELECT MAX(Date_reported) FROM covid)
   ORDER BY Cumulative_cases DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>