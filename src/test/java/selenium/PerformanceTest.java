package selenium;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;

/**
 * Visit various websites and record performance metrics.
 */
public class PerformanceTest extends StartUp {

        private static Logger logger = LoggerFactory.getLogger(PerformanceTest.class);
        Timings timings;
        Company[] companies;
        Gson gson;
        String company_json;
        Utility utility;

        @BeforeClass
        public void initializeAll() {
                gson = new Gson();
                utility = new Utility();
                company_json = utility.sendGet(baseUrl + "/api/getCompanies.php");
                companies = gson.fromJson(company_json, Company[].class);
        }

        @DataProvider(parallel = false)
        public Object[][] companyList() throws Exception {
                Object[][] returnValue = null;
                try {
                        returnValue = new Object[companies.length][1];
                        int index = 0;
                        for (Object[] each : returnValue) {
                                each[0] = companies[index++];
                        }
                } catch (Exception e) {
                        logger.error(e.getMessage());
                }
                return returnValue;
        }

        @Test(dataProvider = "companyList")
        public void testPagePerformance(Company company) {
                logger.info("Url: {}", company.url);
                pageDriver.navigateTo("https://www." + company.url);
                utility.logTimings(pageDriver.getTimings(), company);
        }
}
