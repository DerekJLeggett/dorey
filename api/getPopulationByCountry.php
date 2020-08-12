<?php
   require( '../../connect_db.php' );
   $q = "SELECT Code2, Population FROM country ORDER BY Population DESC;";
   $r = mysqli_query( $dbc , $q ) ;

   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
        	settype($row['Population'], 'integer'); 
                #echo '<br>'.$row['item_id'];
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
