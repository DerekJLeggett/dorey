<?php
   require( '../connect_db.php' );
   
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
	$q = "SELECT biz_name name, biz_phone phone, e_address address, loc_LAT_centroid lat, loc_LONG_centroid ,  
		( 3959 * acos( cos( radians($lat) ) * cos( radians( loc_LAT_centroid ) ) * cos( radians( loc_LONG_centroid ) - radians($long) ) + sin( radians($lat) )
		* sin( radians( loc_LAT_centroid ) ) ) ) AS distance 
		FROM my_derek.dunkin_donuts HAVING distance < 50 ORDER BY distance LIMIT 0 , 20;";
        $r = mysqli_query( $dbc , $q ) ;

       while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                #settype($row['Population'], 'integer'); 
		#echo '<br />'.$row['Country'].$row['Population'];
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);	
 }

?>

