<?php
   require( '../../connect_db.php' );
 if ( !empty ( $_GET['countryCode'] ) )
  {
        $countryCode = $_GET['countryCode'] ;
  }
  else
  {
        $countryCode = NULL ;
  }

   $q = "SELECT DISTINCT(District) AS 'State', Name AS 'City', Population FROM city WHERE CountryCode='$countryCode' ORDER BY District, Population DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
		$state = "$row[State]";
		if (!isset($json[$state])) {
    		    $json[$state] = ['State' => $state, 'Cities' => []];
         	}
    		$json[$state]['Cities'][] = ['City' => $row['City'], 'Population' => $row['Population']];
	}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode(array_values($json));
?>
