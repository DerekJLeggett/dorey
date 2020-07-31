<?php
   require( '../../connect_db.php' );
   $q = "SELECT C.Code, C.Code2, C.Continent, C.Name, C.Population, C.SurfaceArea, L.Language, L.IsOfficial, L.Percentage FROM `country` C
	JOIN countrylanguage L ON L.CountryCode = C.Code
   	ORDER BY C.Name, L.Percentage DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
		$country = "$row[Code]";
		if (!isset($json[$country])) {
    		    $json[$country] = ['Code' => $country, 'Code2' => $row['Code2'], 'Continent' => $row['Continent'], 'Name' => $row['Name'], 'Population' => $row['Population'], 'SurfaceArea' => $row['SurfaceArea'], 'Languages' => []];
         	}
    		$json[$country]['Languages'][] = ['Language' => $row['Language'], 'IsOfficial' => $row['IsOfficial'], 'Percentage' => $row['Percentage']];
	}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode(array_values($json));
?>
