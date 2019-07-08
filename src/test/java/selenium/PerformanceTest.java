package selenium;

import com.google.gson.Gson;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

/**
 * Visit various websites and record performance metrics.
 */
public class PerformanceTest extends StartUp {

        private static Logger logger = LoggerFactory.getLogger(PerformanceTest.class);

        @DataProvider(parallel = false)
        public Object[][] companyList() throws Exception {
                Company[] companies;
                Gson gson = new Gson();
                String company_json;
                Object[][] returnValue = null;
                try {
                        company_json = utility.sendGet(baseUrl + "/api/getCompanies.php");
                        companies = gson.fromJson(company_json, Company[].class);
                        returnValue = new Object[companies.length][1];
                        int index = 0;
                        for (Object[] each : returnValue) {
                                each[0] = companies[index++].url;
                        }
                } catch (Exception e) {
                        logger.error(e.getMessage());
                }
                return returnValue;
        }

        @Test(dataProvider = "companyList")
        public void testPagePerformance(String url) {
                pageDriver.navigateTo("https://" + url);
        }
}
