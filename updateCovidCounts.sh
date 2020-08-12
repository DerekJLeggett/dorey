#!/bin/bash
echo "Delete local data file"
rm WHO-COVID-19-global-data.csv
echo "Get new file"
wget https://covid19.who.int/WHO-COVID-19-global-data.csv
echo "Truncate(empty) local database table"
`mysql -e "truncate table my_derek.covid;"`
echo `mysql -e "SELECT COUNT(*) FROM my_derek.covid;"`
echo "Load new data"
`mysql -e "LOAD DATA LOCAL INFILE '/home/pi/WHO-COVID-19-global-data.csv' INTO TABLE my_derek.covid FIELDS TERMINATED BY ',' IGNORE 1 LINES;"`
echo `mysql -e "SELECT COUNT(*) FROM my_derek.covid;"`
