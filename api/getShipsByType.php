<?php
   require( '../connect_db.php' );
  if ( !empty ( $_GET['shipType'] ) )
  {
	$shipType = $_GET['shipType'] ;
  }
  else
  {
	$shipType = NULL ;
  }  
   $q = "SELECT * FROM `navy_ships` WHERE LEFT(Type, POSITION(' ' IN Type)) = '$shipType';"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
   }
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
