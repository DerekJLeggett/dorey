<?php
   require( '../connect_db.php' );
   $q = "SELECT DISTINCT(Continent) AS 'Continent', Name AS 'Country', Population FROM country WHERE Continent='Oceania' ORDER BY Continent;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
		$continent = "$row[Continent]";
		if (!isset($json[$continent])) {
    		    $json[$continent] = ['Continent' => $continent, 'Countries' => []];
         	}
    		$json[$continent]['Countries'][] = ['Country' => $row['Country'], 'Population' => $row['Population']];
	}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode(array_values($json));
?>
