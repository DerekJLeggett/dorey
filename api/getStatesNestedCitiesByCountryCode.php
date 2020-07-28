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

   $q = "SELECT DISTINCT(C.District) AS 'State', S.abv, C.Name AS 'City', C.Population FROM city C
	LEFT JOIN geo_states S ON S.name = C.District
	WHERE C.CountryCode='$countryCode'
	ORDER BY C.District, C.Population DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
		$state = "$row[State]";
		if (!isset($json[$state])) {
    		    $json[$state] = ['State' => $state, 'StateCode' => $row['abv'], 'Cities' => []];
         	}
    		$json[$state]['Cities'][] = ['City' => $row['City'], 'Population' => $row['Population']];
	}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode(array_values($json));
?>
