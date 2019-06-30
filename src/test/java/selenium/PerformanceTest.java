package selenium;

import java.net.MalformedURLException;
import java.net.UnknownHostException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.google.gson.Gson;
import org.apache.http.NameValuePair;
import org.apache.http.message.BasicNameValuePair;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import selenium.Browser.Location;

/**
 * Unit test for simple App.
 */
public class PerformanceTest extends StartUp {
        Gson gson;
        Company[] companies;
        Timings timings;
        Utility utility = new Utility();
        Properties props = utility.loadProperties();
        private static Logger logger = LoggerFactory.getLogger(PerformanceTest.class);

        @Override
        @Parameters({ "browserId", "browserName", "location" })
        @BeforeClass
        public void init(@Optional("3") Integer browserId, @Optional("Firefox") String browserName,
                        @Optional("LOCALHOST") Location location) {
                browser = new Browser();
                browser.setId(browserId);
                browser.setName(browserName);
                browser.setLocation(location);
                baseURL = props.getProperty("baseUrl");
                gridUrl = props.getProperty("gridUrl");
                gson = new Gson();
                String company_json;
                try {
                        company_json = utility.sendGet(baseURL + "/api/getCompanies.php");
                        companies = gson.fromJson(company_json, Company[].class);
                } catch (Exception e) {
                        logger.error(e.getMessage());
                }
        }

        @DataProvider(parallel = false)
        public Object[][] companyList() throws Exception {
                Object[][] returnValue = new Object[companies.length][1];
                int index = 0;
                for (Object[] each : returnValue) {
                        each[0] = this.companies[index++];
                }
                return returnValue;
        }

        @Test(dataProvider = "companyList")
        public void testApp(Company company) {
                try {
                        webDriver = getWebDriver(browser);
                        pageDriver = new PageDriver(webDriver);
                        webDriver.manage().window().maximize();
                        logger.info(company.company);
                        pageDriver.navigateTo("https://" + company.url);
                        List<WebElement> links = webDriver.findElements(By.tagName("a"));
                        for (WebElement link : links) {
                                String linkHref = link.getAttribute("href");
                                if (linkHref.startsWith("http")) {
                                        pageDriver.navigateTo(linkHref);
                                }
                        }
                        // timings = pageDriver.getTimings();
                        // logger.info(company.url + " " + timings.completeTime);
                        // List<NameValuePair> urlParameters = new ArrayList<NameValuePair>();
                        // urlParameters.add(new BasicNameValuePair("companyId", company.id));
                        // urlParameters.add(new BasicNameValuePair("browserId",
                        // browser.id.toString()));
                        // urlParameters.add(new BasicNameValuePair("networkLatency",
                        // timings.networkLatency.toString()));
                        // urlParameters.add(new BasicNameValuePair("redirectTime",
                        // timings.redirectTime.toString()));
                        // urlParameters.add(new BasicNameValuePair("pageLoadTime",
                        // timings.pageLoadTime.toString()));
                        // urlParameters.add(new BasicNameValuePair("completeTime",
                        // timings.completeTime.toString()));
                        // utility.sendPost(baseURL + "/api/addTiming.php", urlParameters);
                        webDriver.quit();
                } catch (Exception e) {
                        logger.error(e.getMessage());
                        webDriver.quit();
                }

        }
}
