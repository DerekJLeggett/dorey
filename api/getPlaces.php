<?php
   require( '../../connect_db.php' );
   
if ( !empty ( $_GET['lat'] ) )
{
	$lat= $_GET['lat'] ;
}
else
{
	$lat = NULL ;
	}

if ( !empty ( $_GET['long'] ) )
{
	$long= $_GET['long'] ;
}
else
{
	$long = NULL ;
	}


if ( ( $lat != NULL ) &&  ( $long != NULL ))
 {
	$q = "SELECT PT.name 'type', P.name, P.address, P.city, P.state, P.zip, P.country, P.phone, P.latitude, P.longitude,  
		( 3959 * acos( cos( radians($lat) ) * cos( radians( P.latitude ) ) * cos( radians( P.longitude ) - radians($long) ) + sin( radians($lat) )
		* sin( radians( P.latitude ) ) ) ) AS distance 
		FROM my_derek.places P
		JOIN my_derek.placeType PT ON P.placeTypeId = PT.id
		HAVING distance < 50 ORDER BY distance LIMIT 0 , 20;";
        $r = mysqli_query( $dbc , $q ) ;

       while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
		}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);	
 }

?>

