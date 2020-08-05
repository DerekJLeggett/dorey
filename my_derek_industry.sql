-- MySQL dump 10.17  Distrib 10.3.22-MariaDB, for debian-linux-gnueabihf (armv8l)
--
-- Host: localhost    Database: my_derek
-- ------------------------------------------------------
-- Server version	10.3.22-MariaDB-0+deb10u1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `industry`
--

DROP TABLE IF EXISTS `industry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `industry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` int(11) NOT NULL,
  `name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`)
) ENGINE=MyISAM AUTO_INCREMENT=452 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industry`
--

LOCK TABLES `industry` WRITE;
/*!40000 ALTER TABLE `industry` DISABLE KEYS */;
INSERT INTO `industry` VALUES (1,874242,'Health Care Management'),(2,671201,'Holding Companies (Bank)'),(3,295103,'Paving Materials-Manufacturers'),(4,421309,'Trucking-Motor Freight'),(5,531102,'Department Stores'),(6,291101,'Oil Refiners (Mfrs)'),(7,541103,'Convenience Stores'),(8,201501,'Poultry Processing Plants (Mfrs)'),(9,481304,'Telephone Companies'),(10,367401,'Semiconductor Devices (Mfrs)'),(11,506519,'Electronic Equipment & Supplies-Whls'),(12,367901,'Electronic Equipment & Supplies-Mfrs'),(13,306917,'Rubber-Mfrs Supplies (Mfrs)'),(14,551103,'Automobile Dealers-Used Cars'),(15,343305,'Solar Energy Equipment-Manufacturers'),(16,149901,'Mining Companies'),(17,737206,'Computer Software'),(18,806398,'Psychiatric Hospitals'),(19,152112,'Home Builders'),(20,737201,'Computer Software-Manufacturers'),(21,491101,'Electric Companies'),(22,495310,'Refuse Systems'),(23,541105,'Grocers-Retail'),(24,509404,'Gold Silver & Platinum-Buyers (Whls)'),(25,365202,'Video Games-Manufacturers'),(26,274121,'Publishers-Computer Software (Mfrs)'),(27,871111,'Engineers-Consulting'),(28,382505,'Instruments-Measuring (Mfrs)'),(29,384301,'Dental Equipment-Manufacturers'),(30,737419,'Internet Search Engines'),(31,283602,'Biological Specimens-Manufacturers'),(32,357101,'Computers-Electronic-Manufacturers'),(33,355934,'Semiconductor Manufacturing Equip (Mfrs)'),(34,736103,'Employment Agencies & Opportunities'),(35,737102,'Computer Programming Services'),(36,366198,'Telephone & Telegraph Apparatus (Mfrs)'),(37,267201,'Labels-Paper (Mfrs)'),(38,384104,'Physicians & Surgeons Equip & Supls-Mfrs'),(39,367498,'Semiconductors & Related Devices (Mfrs)'),(40,737108,'Computer-Software Developers'),(41,138203,'Oil & Gas Exploration & Development'),(42,653108,'Real Estate Management'),(43,519932,'Pet Supplies-Wholesale'),(44,628203,'Financial Advisory Services'),(45,581220,'Restaurant Management'),(46,357702,'Computer Peripherals (Mfrs)'),(47,284101,'Soaps & Detergents-Manufacturers'),(48,679801,'Real Estate Investment Trusts'),(49,596102,'Internet & Catalog Shopping'),(50,671904,'Utilities-Holding Companies'),(51,873126,'Biotechnology Products & Services'),(52,399965,'Game Designers (Mfrs)'),(53,805101,'Nursing & Convalescent Homes'),(54,737415,'Internet Service'),(55,274130,'Social Media'),(56,641112,'Insurance'),(57,654102,'Title Companies'),(58,602101,'Banks'),(59,521126,'Building Materials'),(60,628217,'Asset Management'),(61,565101,'Clothing-Retail'),(62,283601,'Biological Products (Mfrs)'),(63,152130,'Construction-Building Contractors'),(64,737103,'Computers-System Designers & Consultants'),(65,737314,'Internet Svcs-Network Designers/Conslnt'),(66,792905,'Entertainment Bureaus'),(67,412101,'Taxicabs & Transportation Service'),(68,394402,'Toys-Manufacturers'),(69,367201,'Printed & Etched Circuits-Mfrs'),(70,632404,'Health Plans'),(71,208604,'Beverages-Manufacturers'),(72,357298,'Computer Storage Devices (Mfrs)'),(73,784102,'Video Tapes & Discs-Renting & Leasing'),(74,729984,'Bill Paying Service'),(75,531110,'Wholesale Clubs'),(76,422503,'Storage-Household & Commercial'),(77,366302,'Communication Equipment-Manufacturers'),(78,505106,'Steel-Distributors & Warehouses (Whls)'),(79,571216,'Furniture-Dealers-Retail'),(80,736304,'Employment Contractors-Temporary Help'),(81,367202,'Circuit Boards-Manufacturers'),(82,492501,'Gas Companies'),(83,738401,'Photo Finishing-Retail'),(84,566101,'Shoes-Retail'),(85,737109,'Information Technology Services'),(86,359915,'Manufacturers Distrs & Indl Products'),(87,737401,'Data Processing Service'),(88,371198,'Motor Vhcls/Passenger Car Bodies (Mfrs)'),(89,871120,'Engineers-Environmental'),(90,508214,'Surveying Instruments (Whls)'),(91,874222,'Human Resource Consultants'),(92,162977,'Construction-Heavy Projects'),(93,384598,'Electromedical/Therapeutic Apprts (Mfrs)'),(94,615302,'Credit Card & Other Credit Plans'),(95,799602,'Water Parks'),(96,571928,'Kitchen Accessories'),(97,341198,'Metal Cans (Mfrs)'),(98,153198,'Operative Builders'),(99,809203,'Dialysis'),(100,484101,'Television-Cable & Catv'),(101,366305,'Satellite Equipment & Systems-Mfrs'),(102,138905,'Oil Field Service'),(103,737104,'Data Systems Consultants & Designers'),(104,655202,'Real Estate Developers'),(105,208201,'Brewers (Mfrs)'),(106,503250,'Aggregates-Construction Materials (Whls)'),(107,701111,'Resorts'),(108,569913,'Sportswear-Retail'),(109,609910,'Money Transfer Service'),(110,508206,'Contractors-Equip/Supls-Dlrs/Svc (Whls)'),(111,481302,'Telecommunications Services'),(112,367898,'Electronic Connectors (Mfrs)'),(113,472402,'Travel Agencies & Bureaus'),(114,632401,'Medical Insurance Plans'),(115,349403,'Valves-Manufacturers'),(116,531108,'Home & Personal Care Products'),(117,171114,'Mechanical Contractors'),(118,874201,'Business Management Consultants'),(119,401101,'Railroads'),(120,287502,'Composites (Mfrs)'),(121,364501,'Lighting Equipment-Manufacturers'),(122,621105,'Investment Securities'),(123,864108,'Clubs'),(124,504403,'Copying & Duplicating Machines & Supls'),(125,341101,'Can-Manufacturers'),(126,342902,'Hardware-Manufacturers'),(127,353104,'Construction Equipment-Manufacturers'),(128,735910,'Rental Service-Stores & Yards'),(129,641133,'Insurance-Holding Companies'),(130,357908,'Copying Machines & Supplies-Mfrs'),(131,473104,'Freight-Forwarding'),(132,679902,'Private Equity Companies'),(133,362505,'Industrial Instrumentation (Mfrs)'),(134,616201,'Real Estate Loans'),(135,289905,'Chemicals-Manufacturers'),(136,614101,'Loans'),(137,738198,'Detective Guard & Armored Car Services'),(138,628202,'Investment Management'),(139,551102,'Automobile Dealers-New Cars'),(140,671902,'Restaurant Holding Companies'),(141,162308,'Utility Contractors'),(142,516916,'Chemicals (Whls)'),(143,737404,'Credit Card-Merchant Services'),(144,874499,'Correctional Institutions-Private'),(145,735949,'Contractors-Equipment & Supls-Renting'),(146,751401,'Automobile Renting'),(147,729985,'Vacation Time Sharing Plans'),(148,381201,'Aerospace Industries (Mfrs)'),(149,381298,'Search Detection/Nav Systs/Instr (Mfrs)'),(150,411914,'Transportation Services'),(151,701101,'Hotels & Motels'),(152,801101,'Physicians & Surgeons'),(153,287301,'Fertilizers-Manufacturers'),(154,594301,'Office Supplies'),(155,873416,'Plastics-Research & Consulting'),(156,382309,'Production Control Systems (Mfrs)'),(157,751303,'Truck Renting & Leasing'),(158,451201,'Airline Companies'),(159,504502,'Computers-Supplies & Parts-Wholesale'),(160,174205,'Insulation Contractors-Cold & Heat'),(161,596304,'Home Demonstration-Merchandise'),(162,507505,'Air Conditioning Supplies & Parts (Whls)'),(163,517201,'Petroleum Products (Whls)'),(164,701103,'Hotel & Motel Management'),(165,735930,'Furniture-Renting & Leasing'),(166,364504,'Lighting Fixtures-Manufacturers'),(167,352304,'Farm Equipment-Manufacturers'),(168,503114,'Building Materials-Wholesale'),(169,564103,'Childrens & Infants Wear-Retail'),(170,732301,'Credit Reporting Agencies'),(171,506388,'Gas-Card Lock (Whls)'),(172,205198,'Bread/Other Bakery Prod-Ex Cookies'),(173,501313,'Automobile Parts & Supplies-Wholesale'),(174,263102,'Paperboard Mills (Mfrs)'),(175,521138,'Home Centers'),(176,623102,'Stock Exchanges'),(177,227303,'Carpet & Rug-Manufacturers'),(178,357898,'Calculating & Accounting Machines (Mfrs)'),(179,308902,'Plastics & Plastic Products (Mfrs)'),(180,508325,'Landscaping Equipment & Supplies-Whls'),(181,421205,'Delivery Service'),(182,511101,'Paper Products (Whls)'),(183,265201,'Boxes-Paper (Mfrs)'),(184,449999,'Water Transportation Services NEC'),(185,252204,'Office Furniture & Equip-Mfrs'),(186,272101,'Publishers-Magazine (Mfrs)'),(187,517231,'Biofuel (Whls)'),(188,371101,'Recreational Vehicles & Campers-Mfrs'),(189,512203,'Pharmaceutical Products-Wholesale'),(190,873108,'Pharmaceutical Research Laboratories'),(191,573416,'Medical Software'),(192,506312,'Wire & Cable-Electric (Whls)'),(193,358601,'Dispensing Devices-Manufacturers'),(194,204102,'Milling (Mfrs)'),(195,372101,'Aircraft-Manufacturers'),(196,373201,'Boats-Manufacturers'),(197,556103,'Recreational Vehicles'),(198,353198,'Construction Machinery & Equip (Mfrs)'),(199,623101,'Barter & Trade Exchange'),(200,623105,'Futures-Exchanges'),(201,209903,'Food Products & Manufacturers'),(202,473111,'Freight Brokers & Agents'),(203,651303,'Apartments'),(204,243401,'Cabinets-Manufacturers'),(205,384103,'Hospital Equipment & Supplies-Mfrs'),(206,478977,'Transportation'),(207,356198,'Pumps & Pumping Equipment (Mfrs)'),(208,356998,'General Ind Machinery/Equip NEC (Mfrs)'),(209,204106,'Corn Mills (Mfrs)'),(210,633101,'Insurance-Property & Casualty'),(211,501501,'Automobile Parts-Used & Rebuilt (Whls)'),(212,733403,'Copying & Duplicating Service'),(213,369908,'Food Processing Equipment & Supls-Mfrs'),(214,371398,'Truck & Bus Bodies (Mfrs)'),(215,265301,'Corrugated & Solid Fiber Boxes (Mfrs)'),(216,275202,'Printers (Mfrs)'),(217,505115,'Metals-Base (Whls)'),(218,495315,'Waste Removal-Medical'),(219,371401,'Automobile Parts & Supplies-Mfrs'),(220,483301,'Television Stations & Broadcasting Co'),(221,599992,'Cosmetics & Perfumes-Retail'),(222,514939,'Food Service-Distributors (Whls)'),(223,327501,'Gypsum & Gypsum Products (Mfrs)'),(224,653104,'Real Estate Investments'),(225,591205,'Pharmacies'),(226,508522,'Industrial Equipment & Supplies (Whls)'),(227,737412,'Bar Coding'),(228,371413,'Transmissions-Parts & Supplies-Mfrs'),(229,632498,'Hospital & Medical Service Plans'),(230,308901,'Plastics-Mold-Manufacturers'),(231,351903,'Engines-Diesel-Manufacturers'),(232,283404,'Drug Millers (Mfrs)'),(233,501204,'Automobile Auctions (Whls)'),(234,527103,'Mobile Homes-Equipment & Parts'),(235,614102,'Financing'),(236,331201,'Steel Mills (Mfrs)'),(237,371502,'Trailers-Truck-Manufacturers'),(238,384298,'Orthopedic Prosthetic/Srgcl Appl (Mfrs)'),(239,504437,'Atm Sales & Service (Whls)'),(240,517208,'Gas-Liquefied Petro-Bttld/Bulk (Whls)'),(241,201305,'Pork Products (Mfrs)'),(242,372802,'Aircraft Equipment Parts & Supls-Mfrs'),(243,208501,'Distillers (Mfrs)'),(244,509118,'Swimming Pool Equipment & Supls (Whls)'),(245,283407,'Laboratories-Pharmaceutical (Mfrs)'),(246,506539,'Semiconductor Devices-Wholesale'),(247,533101,'Variety Stores'),(248,504704,'Physicians & Surgeons Equip & Supls-Whls'),(249,289501,'Carbon Black-Manufacturers'),(250,873104,'Laboratories'),(251,873111,'Environmental & Ecological Services'),(252,738923,'Business Records & Documents-Storage'),(253,514937,'Beverages (Whls)'),(254,382398,'Industrial Measuring/Controlling Instr ('),(255,382698,'Laboratory Analytical Instruments (Mfrs)'),(256,506341,'Electronic Testing Equipment (Whls)'),(257,504906,'Laboratory Equipment & Supplies (Whls)'),(258,366998,'Communications Equipment NEC (Mfrs)'),(259,356101,'Pumps-Manufacturers'),(260,781205,'Motion Picture Producers & Studios'),(261,822101,'Schools-Universities & Colleges Academic'),(262,376198,'Guided Missile & Space Vehicle (Mfrs)'),(263,209916,'Spices-Manufacturers'),(264,621104,'Mutual Funds'),(265,873411,'Laboratories-Veterinary'),(266,371102,'Automobile-Manufacturers'),(267,204301,'Cereals (Mfrs)'),(268,243103,'Building Materials-Manufacturers'),(269,514105,'Grocers-Wholesale'),(270,502112,'Office Furniture & Equip-Dealers (Whls)'),(271,346598,'Automotive Stampings (Mfrs)'),(272,242101,'Lumber-Manufacturers'),(273,363901,'Appliances-Household-Major-Manufacturers'),(274,314402,'Shoes-Manufacturers'),(275,573117,'Electronic Equipment & Supplies-Retail'),(276,473101,'Transportation Consultants'),(277,515301,'Grain-Dealers (Whls)'),(278,278202,'Checks-Printing (Mfrs)'),(279,356408,'Filtration Equipment-Manufacturers'),(280,284203,'Cleaning Compounds-Manufacturers'),(281,289198,'Adhesives & Sealants (Mfrs)'),(282,514303,'Dairy Products-Wholesale'),(283,379909,'All Terrain Vehicles-Manufacturers'),(284,352405,'Lawn Mowers-Manufacturers'),(285,594166,'Outdoor Equipment Accessories'),(286,331209,'Wire Products-Manufacturers'),(287,737398,'Computer Integrated Systems Design'),(288,369905,'Electrical Products-Manufacturers'),(289,506330,'Electric Equipment & Supplies-Wholesale'),(290,729101,'Tax Return Preparation & Filing'),(291,259901,'Furniture-Manufacturers'),(292,553111,'Automobile Parts & Supplies-Retail-New'),(293,122102,'Coal Mining & Shipping'),(294,621101,'Stock & Bond Brokers'),(295,208601,'Bottlers (Mfrs)'),(296,384398,'Dental Equipment & Supplies-Mfrs'),(297,222101,'Textile Mills (Mfrs)'),(298,873206,'Research Service'),(299,344214,'Door & Window Components Manufacturing'),(300,807101,'Laboratories-Medical'),(301,144202,'Construction-Sand & Gravel'),(302,344801,'Buildings-Metal-Manufacturers'),(303,873101,'Laboratories-Research & Development'),(304,267101,'Packaging Materials-Manufacturers'),(305,354998,'Metalworking Machinery NEC (Mfrs)'),(306,503999,'Construction Materials NEC (Whls)'),(307,286998,'Industrial Organic Chemicals NEC (Mfrs)'),(308,352310,'Irrigation Systems & Equipment-Mfrs'),(309,737101,'Computer Services'),(310,494102,'Water & Sewage Companies-Utility'),(311,594201,'Book Dealers-Retail'),(312,571929,'Housewares-Retail'),(313,283498,'Pharmaceutical Preparation (Mfrs)'),(314,283401,'Drug-Manufacturers'),(315,653118,'Real Estate'),(316,874232,'Risk Management Consultants'),(317,799302,'Casinos'),(318,594509,'Games & Game Supplies'),(319,734902,'Janitor Service'),(320,451202,'Air Cargo Service'),(321,284406,'Health & Beauty Aids-Manufacturers'),(322,208401,'Wineries (Mfrs)'),(323,321101,'Glass-Manufacturers'),(324,738959,'Information & Referral Svcs'),(325,513628,'Clothing-Wholesale'),(326,621109,'Investment Bankers'),(327,344203,'Doors-Metal-Manufacturers'),(328,514101,'Food Products (Whls)'),(329,504719,'Dental Equipment & Supplies-Wholesale'),(330,737417,'Website Hosting'),(331,286901,'Flavoring Extracts-Mfrs Supls (Mfrs)'),(332,731101,'Advertising-Agencies & Counselors'),(333,382204,'Controls Control Systems/Regulators-Mfrs'),(334,271101,'Newspapers (Publishers/Mfrs)'),(335,594716,'Party Supplies'),(336,872106,'Payroll Preparation Service'),(337,208603,'Soft Drink Products-Manufacturers'),(338,212101,'Cigar Cigarette & Tobacco-Manufacturers'),(339,737304,'Data Communications Systems-Networks'),(340,622104,'Commodity Brokers'),(341,563207,'Handbags'),(342,594409,'Jewelers-Retail'),(343,738947,'Recording Studios'),(344,335501,'Aluminum Fabricators (Mfrs)'),(345,508314,'Grain Elevators-Equip & Supplies (Whls)'),(346,282101,'Plastics-Raw Mtrls/Powder/Resin-Mfrs'),(347,721803,'Uniform Rental Service'),(348,301101,'Tire-Manufacturers'),(349,357801,'Bank Equipment & Supplies-Manufacturers'),(350,341201,'Barrels & Drums (Mfrs)'),(351,508426,'Material Handling Equipment (Whls)'),(352,203301,'Preserves/Jams & Jellies (Mfrs)'),(353,562101,'Women\'s Apparel-Retail'),(354,354801,'Welding Equipment & Supplies-Mfrs'),(355,357902,'Adhesives & Gluing Equipment-Mfrs'),(356,322198,'Glass Containers (Mfrs)'),(357,329603,'Insulation-Manufacturers'),(358,356907,'Automation Systems & Equipment-Mfrs'),(359,285103,'Paint-Manufacturers'),(360,523107,'Paint-Retail'),(361,356201,'Bearings-Manufacturers'),(362,372801,'Aircraft Components-Manufacturers'),(363,554103,'Truck Stops & Plazas'),(364,262101,'Paper-Manufacturers'),(365,641109,'Insurance-Life (Agents)'),(366,331204,'Steel Processing (Mfrs)'),(367,131101,'Oil & Gas Producers'),(368,492298,'Natural Gas Transmission'),(369,138102,'Oil Well Drilling'),(370,421229,'Petroleum Products-Transporting'),(371,492401,'Gas-Natural'),(372,461201,'Pipe Line Companies'),(373,374301,'Railroad Cars-Manufacturers'),(374,302198,'Rubber & Plastics-Footwear (Mfrs)'),(375,509314,'Scrap Metals-Processing/Recycling (Whls)'),(376,281301,'Gas-Ind & Medical-Cylinder & Bulk-Mfrs'),(377,505113,'Metal Specialties (Whls)'),(378,362102,'Electric Motors-Manufacturers'),(379,596305,'Food Service-Management'),(380,78204,'Landscape Contractors'),(381,332502,'Foundries-Steel (Mfrs)'),(382,594113,'Sporting Goods-Retail'),(383,369298,'Primary Batteries-Dry & Wet (Mfrs)'),(384,549904,'Vitamin & Food Supplements'),(385,206401,'Candy & Confectionery-Manufacturers'),(386,354598,'Cutting Tools/Acces/Measuring Dvcs (Mfr)'),(387,631198,'Life Insurance (Underwriters)'),(388,384198,'Surgical/Med Instruments/Apparatus (Mfr)'),(389,374304,'Railroad Equipment (Mfrs)'),(390,509312,'Recycling Centers (Whls)'),(391,504503,'Computers-Wholesale'),(392,265503,'Packaging Containers (Mfrs)'),(393,805904,'Retirement Communities & Homes'),(394,171131,'Energy Management Systems & Products'),(395,581208,'Restaurants'),(396,335698,'Rolling Drawing Extruding-Nonferrous Mtl'),(397,519102,'Farm Supplies (Whls)'),(398,291105,'Petroleum Products-Manufacturers'),(399,492398,'Natural Gas Transmission & Distribution'),(400,783201,'Theatres-Movie'),(401,171117,'Air Conditioning Contractors & Systems'),(402,344106,'Steel-Structural (Mfrs)'),(403,489901,'Communications Services-Common Carriers'),(404,207702,'Rendering Companies (Mfrs)'),(405,202698,'Fluid Milk (Mfrs)'),(406,357105,'Computers & Computer Equipment Whls/Mfrs'),(407,492201,'Gas Transmission Companies'),(408,871112,'Engineers-Construction'),(409,131106,'Oil Crude'),(410,483201,'Radio Stations & Broadcasting Companies'),(411,874203,'Personnel Consultants'),(412,267602,'Sanitary Paper Products (Mfrs)'),(413,162903,'Marine Contractors & Designers'),(414,507503,'Air Conditioning Equip & Systems-Whls'),(415,594501,'Craft Supplies'),(416,505107,'Pipe-Wholesale'),(417,353301,'Oil Field Equipment-Manufacturers'),(418,282103,'Plastics-Manufacturers'),(419,508429,'Oil Field Supplies (Whls)'),(420,461298,'Crude Petroleum Pipelines'),(421,152103,'General Contractors'),(422,173101,'Electric Contractors'),(423,551105,'Truck-Dealers'),(424,738977,'Motels & Hotels Reservations'),(425,726105,'Funeral Plans (Pre-Arranged)'),(426,561101,'Men\'s Clothing & Furnishings-Retail'),(427,493902,'Utilities'),(428,495302,'Garbage Collection'),(429,308101,'Polyethylene Materials & Prods (Mfrs)'),(430,213101,'Tobacco Products-Manufacturers'),(431,503303,'Roofing Materials-Wholesale'),(432,738103,'Armored Car Service'),(433,458104,'Aircraft Servicing & Maintenance'),(434,611101,'Federal/Federally Sponsored Credit Agncs'),(435,621111,'Investments'),(436,628205,'Financial Planning Consultants'),(437,829929,'Educational Service-Business'),(438,373101,'Ship Builders & Repairers (Mfrs)'),(439,874842,'Medical Management Consultants'),(440,731113,'Digital Media Production'),(441,515902,'Tobacco Leaf-Wholesale'),(442,504506,'Data Communications Equip/Systems (Whls)'),(443,371109,'Truck-Manufacturers'),(444,581228,'Coffee Shops'),(445,507402,'Water Heaters-Wholesale'),(446,362104,'Generators-Electric-Manufacturers'),(447,375103,'Motorcycles-Supls & Parts-Manufacturers'),(448,344314,'Heat Transfer Materials (Mfrs)'),(449,371105,'Ambulances & Hearses-Manufacturers'),(450,507213,'Tools (Whls)'),(451,506352,'Batteries Wholesale & Mfrs');
/*!40000 ALTER TABLE `industry` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-08-04  5:13:08
