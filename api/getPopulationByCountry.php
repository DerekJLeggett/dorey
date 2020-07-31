<?php
   require( '../../connect_db.php' );
   $q = "SELECT country.Name Country, SUM(city.Population) Population FROM my_derek.city city
                        JOIN my_derek.country country on city.CountryCode = country.Code
                        GROUP BY CountryCode
                        ORDER BY Population;";
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
