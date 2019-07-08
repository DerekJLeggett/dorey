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

import selenium.Browser.Location;

public class StartUp {
    public static String baseUrl;
    public String gridUrl;
    public WebDriver webDriver;
    public PageDriver pageDriver;
    public static OperatingSystem operatingSystem = new OperatingSystem();
    public static Browser browser = new Browser();
    public Utility utility;
    private static Logger logger = LoggerFactory.getLogger(StartUp.class);

    @Parameters({ "browserName", "location" })
    @BeforeSuite(alwaysRun = true)
    public void init(@Optional("Chrome") String browserName, @Optional("LOCALHOST") String location) {
        utility = new Utility();
        browser.setName(browserName);
        if (location.equalsIgnoreCase("LOCALHOST")) {
            browser.setLocation(Location.LOCALHOST);
        } else if (location.equalsIgnoreCase("GRID")) {
            browser.setLocation(Location.GRID);
        }
        Properties props = utility.loadProperties();
        baseUrl = props.getProperty("baseUrl");
        gridUrl = props.getProperty("gridUrl");
        logger.info("Base URL: {}, Grid URL: {}", baseUrl, gridUrl);
        webDriver = getWebDriver(browser);
        pageDriver = new PageDriver(webDriver);
        pageDriver.maximizeBrowser();
        pageDriver.navigateTo(baseUrl);
    }

    public WebDriver getWebDriver(Browser browser) {
        switch (browser.getName()) {
        case "Chrome":
            System.setProperty("webdriver.chrome.driver", System.getenv("webdriver.chrome.driver"));
            ChromeOptions chromeOptions = new ChromeOptions();
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
            EdgeOptions edgeOptions = new EdgeOptions();
            webDriver = new EdgeDriver(edgeOptions);
            break;
        case "Firefox":
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
            OperaOptions operaOptions = new OperaOptions();
            if (browser.getLocation() == Location.LOCALHOST) {
                operaOptions.setBinary("C:\\Users\\derek\\AppData\\Local\\Programs\\Opera\\60.0.3255.170\\opera.exe");
                webDriver = new OperaDriver(operaOptions);
            }
            break;
        }
        return webDriver;
    }

    @AfterSuite(alwaysRun = true)
    public void tearDown() {
        webDriver.quit();
    }
}