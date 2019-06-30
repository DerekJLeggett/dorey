<?php
   require( '../connect_db.php' );
   $q = "SELECT C.id, C.code, C.name AS company, C.url, I.name AS industry FROM `company` C JOIN industry I ON I.id = C.industryId;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
