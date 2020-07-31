<?php
   require( '../../connect_db.php' );
   $q = "SELECT DISTINCT(Code), Name FROM 
	 (SELECT LEFT(Type, POSITION(' ' IN Type)) AS Code, 
	 Right(Type, (LENGTH(Type) - POSITION(' ' IN Type))) AS Name
	 FROM `navy_ships`) AS T;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
