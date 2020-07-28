<?php
   require( '../connect_db.php' );
  if ( !empty ( $_GET['industryId'] ) )
  {
	$industryId = $_GET['industryId'] ;
  }
  else
  {
	$industryId = NULL ;
  }  
   $q = "SELECT C.name AS Company, C.url, B.name AS browserName, ROUND(AVG(T.networkLatency), 2) AS networkLatency
   , ROUND(AVG(T.redirectTime), 2) AS redirectTime, ROUND(AVG(T.pageLoadTime), 2) AS pageLoadTime
   , ROUND(AVG(T.completeTime), 2) AS completeTime 
     FROM `timings` T 
     JOIN `company` C ON T.companyId = C.id 
     JOIN `industry` I ON C.industryId = I.id 
     JOIN `browsers` B ON B.id = T.browserId
     WHERE C.industryId='$industryId'
     GROUP BY T.companyId, browserId
     ORDER BY T.companyId, T.completeTime DESC;"; 
   $r = mysqli_query( $dbc , $q ) ;
   while($row = mysqli_fetch_array($r, MYSQLI_ASSOC ))
        {
          $company = "$row[Company]";
		      if (!isset($json[$company])) {
    		    $json[$company] = ['Company' => $row['Company'], 'url' => $row['url'], 'Timings' => []];
         	}
        $json[$company]['Timings'][] = ['browserName' => $row['browserName'], 'networkLatency' => $row['networkLatency']
          , 'redirectTime' => $row['redirectTime'], 'pageLoadTime' => $row['pageLoadTime'], 'completeTime' => $row['completeTime']];
   }
        mysqli_free_result($r);
        mysqli_close($dbc);
        echo json_encode(array_values($json));
?>
