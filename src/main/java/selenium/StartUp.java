package selenium;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.edge.EdgeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.opera.OperaDriver;
import org.openqa.selenium.opera.OperaOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;

import io.github.bonigarcia.wdm.WebDriverManager;
import selenium.Browser.Location;

public class StartUp {
    public static String baseUrl;
    public String gridUrl;
    public WebDriver webDriver;
    public PageDriver pageDriver;
    public static OperatingSystem operatingSystem = new OperatingSystem();
    public static Browser browser = new Browser();
    public Utility utility = new Utility();
    private static Logger logger = LoggerFactory.getLogger(StartUp.class);
    Properties props = utility.loadProperties();

    //@Parameters({ "browserName", "locationParam" })
    @BeforeSuite(alwaysRun = true)
    public void init() {
        String locationString;
        // if (browserParam != "") {
        //     browser.setName(browserParam);
        //     locationString = locationParam;
        // } else {
        browser.setName(props.getProperty("browser"));
        locationString = props.getProperty("location");
        // }
        // if (locationString.equalsIgnoreCase("LOCALHOST")) {
        browser.setLocation(Location.LOCALHOST);
        // } else if (locationString.equalsIgnoreCase("GRID")) {
        //     browser.setLocation(Location.GRID);
        // }
        baseUrl = props.getProperty("baseUrl");
        gridUrl = props.getProperty("gridUrl");
        logger.info("Base URL: {}, Grid URL: {}", baseUrl, gridUrl);
        webDriver = getWebDriver(browser);
        pageDriver = new PageDriver(webDriver);
        pageDriver.maximizeBrowser();
        pageDriver.navigateTo(baseUrl);
    }

    @AfterSuite(alwaysRun = true)
    public void tearDown() {
        webDriver.quit();
    }

    public WebDriver getWebDriver(Browser browser) {
        switch (browser.getName()) {
        case "Chrome":
            browser.setId("1");
            //System.setProperty("webdriver.chrome.driver", System.getenv("webdriver.chrome.driver"));
            WebDriverManager.chromedriver().setup();
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.setHeadless(true);
            if (browser.getLocation() == Location.LOCALHOST) {
                webDriver = new ChromeDriver(chromeOptions);
            } else if (browser.getLocation() == Location.GRID) {
                try {
                    webDriver = new RemoteWebDriver(new URL(gridUrl), chromeOptions);
                } catch (MalformedURLException e) {
                    logger.error(e.getMessage());
                }
            }
            break;
        case "Edge":
            browser.setId("2");
            EdgeOptions edgeOptions = new EdgeOptions();
            webDriver = new EdgeDriver(edgeOptions);
            break;
        case "Firefox":
            browser.setId("3");
            System.setProperty("webdriver.gecko.driver", System.getenv("webdriver.gecko.driver"));
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            if (browser.getLocation() == Location.LOCALHOST) {
                webDriver = new FirefoxDriver(firefoxOptions);
            } else if (browser.getLocation() == Location.GRID) {
                try {
                    webDriver = new RemoteWebDriver(new URL(gridUrl), firefoxOptions);
                } catch (MalformedURLException e) {
                    logger.error(e.getMessage());
                }
            }
            break;
        case "Safari":
            SafariOptions safariOptions = new SafariOptions();
            try {
                webDriver = new RemoteWebDriver(new URL("http://ondemand.saucelabs.com:80/wd/hub"), safariOptions);
            } catch (MalformedURLException e) {
                logger.error(e.getMessage());
            }
            break;
        case "Opera":
            browser.setId("4");
            OperaOptions operaOptions = new OperaOptions();
            if (browser.getLocation() == Location.LOCALHOST) {
                operaOptions.setBinary("C:\\Users\\derek\\AppData\\Local\\Programs\\Opera\\60.0.3255.170\\opera.exe");
                webDriver = new OperaDriver(operaOptions);
            }
            break;
        }
        return webDriver;
    }

}