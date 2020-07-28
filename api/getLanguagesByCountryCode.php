<?php
   require( '../connect_db.php' );
  if ( !empty ( $_GET['countryCode'] ) )
  {
	$countryCode = $_GET['countryCode'] ;
  }
  else
  {
	$countryCode = NULL ;
  }  
   $q = "SELECT * FROM countrylanguage where CountryCode='$countryCode' ORDER BY Percentage DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
   }
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
