<?php
   require( '../../connect_db.php' );
  if ( !empty ( $_GET['continent'] ) )
  {
	$continent = $_GET['continent'] ;
  }
  else
  {
	$continent = NULL ;
  }  
   $q = "SELECT * FROM country where Continent='$continent';"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
   }
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
