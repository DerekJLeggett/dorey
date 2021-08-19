package selenium;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.Random;
import java.util.Set;

import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.ITestResult;
import net.sf.uadetector.ReadableUserAgent;
import net.sf.uadetector.UserAgentStringParser;
import net.sf.uadetector.service.UADetectorServiceFactory;

public class Utility {

    private final String USER_AGENT = "Mozilla/5.0";
    private static Logger logger = LoggerFactory.getLogger(Utility.class);

    /**
     * Get random number within a given range
     * https://www.mkyong.com/java/java-generate-random-integers-in-a-range/
     * 
     * @param min
     * @param max
     * @return
     */
    public static int getRandomNumberInRange(int min, int max) {

        if (min >= max) {
            throw new IllegalArgumentException("max must be greater than min");
        }

        Random r = new Random();
        return r.nextInt((max - min) + 1) + min;
    }

    /**
     * Load configuration options from local properties file
     * 
     * @return
     * @throws FileNotFoundException
     * @throws IOException
     */
    public Properties loadProperties() {
        String rootPath = Thread.currentThread().getContextClassLoader().getResource("").getPath();
        String appConfigPath = rootPath + "app.properties";
        Properties appProps = new Properties();
        try {
            appProps.load(new FileInputStream(appConfigPath));
        } catch (FileNotFoundException e) {
            logger.error(e.getMessage());
        } catch (IOException e) {
            logger.error(e.getMessage());
        }
        // Check Environment Variables for overrides
        // Iterating properties using For-Each
        Set<String> keys = appProps.stringPropertyNames();
        for (String key : keys) {
            if (System.getProperty(key) != null) {
                appProps.setProperty(key, System.getProperty(key));
            }
            System.out.println(key + " : " + appProps.getProperty(key));
        }

        return appProps;
    }

    public String readUrl(String urlString) throws Exception {
        BufferedReader reader = null;
        try {
            URL url = new URL(urlString);
            reader = new BufferedReader(new InputStreamReader(url.openStream()));
            StringBuffer buffer = new StringBuffer();
            int read;
            char[] chars = new char[1024];
            while ((read = reader.read(chars)) != -1)
                buffer.append(chars, 0, read);

            return buffer.toString();
        } finally {
            if (reader != null)
                reader.close();
        }
    }

    // HTTP GET request
    public String sendGet(String url) {
        URL obj;
        StringBuffer response = null;
        try {
            obj = new URL(url);
            HttpURLConnection con = (HttpURLConnection) obj.openConnection();
            // optional default is GET
            con.setRequestMethod("GET");
            // add request header
            con.setRequestProperty("User-Agent", USER_AGENT);
            int responseCode = con.getResponseCode();
            logger.info("\nSending 'GET' request to URL : {}", url);
            logger.info("Response Code : {}", responseCode);
            BufferedReader in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            response = new StringBuffer();
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return response.toString();
    }

    // HTTP POST request
    public String sendPost(String url, List<NameValuePair> urlParameters) {
        String resultString = "";
        CloseableHttpResponse response = null;
        CloseableHttpClient client = null;
        try {
            client = HttpClients.createDefault();
            HttpPost post = new HttpPost(url);
            // add header
            final String USER_AGENT = "Mozilla/5.0";
            post.setHeader("User-Agent", USER_AGENT);
            post.setEntity(new UrlEncodedFormEntity(urlParameters));
            response = client.execute(post);
            logger.info("\nSending 'POST' request to URL : {}", url);
            logger.info("Post parameters : {}", post.getEntity());
            logger.info("Response Code : {}", response.getStatusLine().getStatusCode());
            BufferedReader rd = new BufferedReader(new InputStreamReader(response.getEntity().getContent()));
            StringBuffer result = new StringBuffer();
            String line = "";
            while ((line = rd.readLine()) != null) {
                result.append(line);
            }
            logger.info(result.toString());
            resultString = result.toString();
            response.close();
            client.close();
        } catch (Exception e) {
            logger.error(e.getMessage());
        } finally {
            try {
                response.close();
                client.close();
            } catch (IOException e) {
                logger.error(e.getMessage());
            }
        }
        return resultString;
    }

    /**
     * Log a test case return the String - testCaseId
     */
    public String logTestCase(ITestResult testResult, String testSuiteId, String didPass, Browser browser,
            OperatingSystem operatingSystem, String baseUrl) {
        List<NameValuePair> urlParameters = new ArrayList<NameValuePair>();
        urlParameters.add(new BasicNameValuePair("browserId", browser.id));
        urlParameters.add(new BasicNameValuePair("browserVersion", browser.getVersion()));
        urlParameters.add(new BasicNameValuePair("operatingSystem", operatingSystem.getName()));
        urlParameters.add(new BasicNameValuePair("operatingSystemVersion", operatingSystem.getVersion()));
        urlParameters.add(new BasicNameValuePair("testSuiteId", testSuiteId));
        urlParameters.add(new BasicNameValuePair("name", testResult.getName()));
        urlParameters.add(new BasicNameValuePair("didPass", didPass));
        urlParameters.add(new BasicNameValuePair("error", ""));
        return sendPost(StartUp.props.getProperty("baseUrl") + "/api/addTestCase.php", urlParameters);
    }

    /**
     * Log web page timings/statistics
     * 
     * @param timings
     */
    public void logTimings(Timings timings, Company company, Browser browser) {
        List<NameValuePair> urlParameters = new ArrayList<NameValuePair>();
        urlParameters.add(new BasicNameValuePair("companyId", company.id));
        urlParameters.add(new BasicNameValuePair("browserId", browser.id));
        urlParameters.add(new BasicNameValuePair("networkLatency", timings.networkLatency.toString()));
        urlParameters.add(new BasicNameValuePair("redirectTime", timings.redirectTime.toString()));
        urlParameters.add(new BasicNameValuePair("pageLoadTime", timings.pageLoadTime.toString()));
        urlParameters.add(new BasicNameValuePair("completeTime", timings.completeTime.toString()));
        sendPost(StartUp.props.getProperty("baseUrl") + "/api/addTiming.php", urlParameters);
    }

    /**
     * Get cookies for the current domain
     */
    public Set<Cookie> getCookies(WebDriver webDriver) {
        Set<Cookie> cookies = webDriver.manage().getCookies();
        logger.info("Number of cookies: {}", cookies.size());
        for (Cookie cookie : cookies) {
            logger.info("Cookie: {}-{}-{}", cookie.getDomain(), cookie.getName(), cookie.getValue());
        }
        return cookies;
    }

    /**
     * Collect browser statistics from the current page
     * 
     * @param webDriver
     * @return
     */
    public Timings getTimings(WebDriver webDriver) {
        Timings timings = new Timings();
        @SuppressWarnings("unchecked")
        Map<String, Object> pagePerformance = (Map<String, Object>) ((JavascriptExecutor) webDriver)
                .executeScript("return performance.timing;");
        Double navigationStart = Double.parseDouble(pagePerformance.get("navigationStart").toString());
        Double fetchStart = Double.parseDouble(pagePerformance.get("fetchStart").toString());
        Double loadEventEnd = Double.parseDouble(pagePerformance.get("loadEventEnd").toString());
        Double responseEnd = Double.parseDouble(pagePerformance.get("responseEnd").toString());
        Double responseStart = Double.parseDouble(pagePerformance.get("responseStart").toString());
        Double domInteractive = Double.parseDouble(pagePerformance.get("domInteractive").toString());
        Double domContentLoadedEventEnd = Double
                .parseDouble(pagePerformance.get("domContentLoadedEventEnd").toString());
        Double redirectStart = Double.parseDouble(pagePerformance.get("redirectStart").toString());
        Double redirectEnd = Double.parseDouble(pagePerformance.get("redirectEnd").toString());
        // Calculate the performance'''
        timings.setNetworkLatency(responseEnd - fetchStart);
        timings.setPageLoadTime(loadEventEnd - responseEnd);
        timings.setCompleteTime(loadEventEnd - navigationStart);
        timings.setRedirectTime(redirectEnd - redirectStart);
        timings.setTimeToFirstByte(responseStart - fetchStart);
        timings.setTimeToLastByte(responseEnd - fetchStart);
        timings.setTimeToInteract(domInteractive - responseStart);
        timings.setDocLoaded(domContentLoadedEventEnd - fetchStart);
        return timings;
    }

    /**
     * Get artifact counts like .css, .js, etc...
     * 
     * @param webDriver
     */
    public Resources getResources(WebDriver webDriver) {
        Resources resources = new Resources();
        @SuppressWarnings("unchecked")
        ArrayList<Object> pageResources = (ArrayList<Object>) ((JavascriptExecutor) webDriver)
                .executeScript("return window.performance.getEntriesByType('resource');");
        for (Object resourceObj : pageResources) {
            @SuppressWarnings("unchecked")
            Map<String, Object> resource = (Map<String, Object>) resourceObj;
            switch (resource.get("initiatorType").toString()) {
                case "link":
                    resources.setNumLink(resources.getNumLink() + 1);
                    break;
                case "script":
                    resources.setNumScript(resources.getNumScript() + 1);
                    break;
                case "img":
                    resources.setNumImage(resources.getNumImage() + 1);
                    break;
                case "xmlhttprequest":
                    resources.setNumXmlHttp(resources.getNumXmlHttp() + 1);
                    break;
                case "css":
                    resources.setNumCss(resources.getNumCss() + 1);
                    break;
                case "iframe":
                    resources.setNumIframe(resources.getNumIframe() + 1);
                    break;
                case "other":
                    resources.setNumOther(resources.getNumOther() + 1);
                    break;
                default:
                    resources.setNumUnknown(resources.getNumUnknown() + 1);
            }
        }
        return resources;
    }

    /**
     * Get the user agent reported by the browser
     * 
     * @param webDriver
     * @return
     */
    public String getUserAgent(WebDriver webDriver) {
        String userAgent = (String) ((JavascriptExecutor) webDriver).executeScript("return navigator.userAgent;");
        logger.info("User agent: {}", userAgent);
        UserAgentStringParser parser = UADetectorServiceFactory.getResourceModuleParser();
        ReadableUserAgent agent = parser.parse(userAgent);
        StartUp.browser.setVersion(agent.getVersionNumber().getMajor() + "." + agent.getVersionNumber().getMinor());
        StartUp.operatingSystem.setName(agent.getOperatingSystem().getName());
        StartUp.operatingSystem.setVersion(agent.getOperatingSystem().getVersionNumber().toString());
        return userAgent;
    }
}