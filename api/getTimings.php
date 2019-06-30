<?php
   require( '../connect_db.php' );
   $q = "SELECT C.url, T.companyId, ROUND(AVG(T.networkLatency), 2) AS networkLatency, ROUND(AVG(T.redirectTime), 2) AS redirectTime, 
	ROUND(AVG(T.pageLoadTime), 2) AS pageLoadTime, ROUND(AVG(T.completeTime), 2) AS completeTime FROM `timings` T 
	JOIN `company` C ON T.companyId = C.id 
	GROUP BY T.companyId
	ORDER BY T.completeTime DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
                $json[]=$row;
}
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode($json);
?>
