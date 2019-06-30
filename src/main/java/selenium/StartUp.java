package selenium;

import java.net.MalformedURLException;
import java.net.URL;
import java.net.UnknownHostException;
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
    public String baseURL;
    public String gridUrl;
    public WebDriver webDriver;
    public PageDriver pageDriver;
    public Browser browser;
    public Utility utility;
    private static Logger logger = LoggerFactory.getLogger(StartUp.class);

    @Parameters({ "browserId", "browserName", "location" })
    @BeforeSuite(alwaysRun = true)
    public void init(@Optional("3") Integer browserId, @Optional("Firefox") String browserName,
            @Optional("LOCALHOST") Location location) throws UnknownHostException, MalformedURLException {
        browser = new Browser();
        browser.setId(browserId);
        browser.setName(browserName);
        browser.setLocation(location);
        utility = new Utility();
        Properties props = utility.loadProperties();
        baseURL = props.getProperty("baseUrl");
        gridUrl = props.getProperty("gridUrl");
        webDriver = getWebDriver(browser);
        pageDriver = new PageDriver(webDriver);
        pageDriver.maximizeBrowser();
    }

    public WebDriver getWebDriver(Browser browser) throws MalformedURLException, UnknownHostException {
        switch (browser.name) {
        case "Chrome":
            System.setProperty("webdriver.chrome.driver", System.getenv("webdriver.chrome.driver"));
            ChromeOptions chromeOptions = new ChromeOptions();
            // chromeOptions.addArguments("headless");
            if (browser.location == Browser.Location.LOCALHOST) {
                webDriver = new ChromeDriver(chromeOptions);
            } else if (browser.location == Browser.Location.GRID) {
                webDriver = new RemoteWebDriver(new URL(gridUrl), chromeOptions);
            }
            break;
        case "Edge":
            EdgeOptions edgeOptions = new EdgeOptions();
            webDriver = new EdgeDriver(edgeOptions);
            break;
        case "Firefox":
            System.setProperty("webdriver.gecko.driver", System.getenv("webdriver.gecko.driver"));
            FirefoxOptions firefoxOptions = new FirefoxOptions();
            // firefoxOptions.addArguments("-headless");
            if (browser.location == Browser.Location.LOCALHOST) {
                webDriver = new FirefoxDriver(firefoxOptions);
            } else if (browser.location == Browser.Location.GRID) {
                webDriver = new RemoteWebDriver(new URL(gridUrl), firefoxOptions);
            }
            break;
        case "Safari":
            SafariOptions safariOptions = new SafariOptions();
            webDriver = new RemoteWebDriver(new URL("http://ondemand.saucelabs.com:80/wd/hub"), safariOptions);
            break;
        case "Opera":
            OperaOptions operaOptions = new OperaOptions();
            if (browser.location == Browser.Location.LOCALHOST) {
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