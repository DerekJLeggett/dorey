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
import org.openqa.selenium.safari.SafariDriver;
import org.openqa.selenium.safari.SafariOptions;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;
import selenium.Browser.Location;
import selenium.Browser.Name;

public class StartUp {
    public WebDriver webDriver;
    public PageDriver pageDriver;
    public static OperatingSystem operatingSystem = new OperatingSystem();
    public static Browser browser = new Browser();
    public static Utility utility = new Utility();
    private static Logger logger = LoggerFactory.getLogger(StartUp.class);
    static Properties props = utility.loadProperties();

    @BeforeSuite(alwaysRun = true)
    public void init() {
        logger.info("browserParam: {}, location: {}", props.getProperty("browser"), props.getProperty("location"));
        // Set Name
        if (props.getProperty("browser").equalsIgnoreCase("chrome")) {
            browser.setName(Name.CHROME);
        } else if (props.getProperty("browser").equalsIgnoreCase("Firefox")) {
            browser.setName(Name.FIREFOX);
        } else if (props.getProperty("browser").equalsIgnoreCase("Edge")) {
            browser.setName(Name.EDGE);
        } else if (props.getProperty("browser").equalsIgnoreCase("Opera")) {
            browser.setName(Name.OPERA);
        } else if (props.getProperty("browser").equalsIgnoreCase("Safari")) {
            browser.setName(Name.SAFARI);
        }
        // Set Location
        if (props.getProperty("location").equalsIgnoreCase("LOCALHOST")) {
            browser.setLocation(Location.LOCALHOST);
        } else {
            browser.setLocation(Location.GRID);
        }
        logger.info("Base URL: {}, Grid URL: {}", props.getProperty("baseUrl"), props.getProperty("gridUrl"));
        webDriver = getWebDriver(browser);
        pageDriver = new PageDriver(webDriver);
        pageDriver.maximizeBrowser();
        pageDriver.navigateTo(props.getProperty("baseUrl"));
    }

    @AfterSuite(alwaysRun = true)
    public void tearDown() {
        webDriver.quit();
    }

    public WebDriver getWebDriver(Browser browser) {
        switch (browser.name) {
            case CHROME:
                browser.setId("1");
                ChromeOptions chromeOptions = new ChromeOptions();
                if (browser.getLocation() == Location.LOCALHOST) {
                    chromeOptions.setHeadless(Boolean.parseBoolean(props.getProperty("headless")));
                    webDriver = new ChromeDriver(chromeOptions);
                } else if (browser.getLocation() == Location.GRID) {
                    try {
                        webDriver = new RemoteWebDriver(new URL(props.getProperty("gridUrl")), chromeOptions);
                    } catch (MalformedURLException e) {
                        logger.error(e.getMessage());
                    }
                }
                break;
            case EDGE:
                browser.setId("2");
                EdgeOptions edgeOptions = new EdgeOptions();
                if (browser.getLocation() == Location.LOCALHOST) {
                    edgeOptions.setHeadless(true);
                    webDriver = new EdgeDriver(edgeOptions);
                } else if (browser.getLocation() == Location.GRID) {
                    try {
                        webDriver = new RemoteWebDriver(new URL(props.getProperty("gridUrl")), edgeOptions);
                    } catch (MalformedURLException e) {
                        logger.error(e.getMessage());
                    }
                }
                break;
            case FIREFOX:
                browser.setId("3");
                FirefoxOptions firefoxOptions = new FirefoxOptions();
                if (browser.getLocation() == Location.LOCALHOST) {
                    firefoxOptions.setHeadless(true);
                    webDriver = new FirefoxDriver(firefoxOptions);
                } else if (browser.getLocation() == Location.GRID) {
                    try {
                        webDriver = new RemoteWebDriver(new URL(props.getProperty("gridUrl")), firefoxOptions);
                    } catch (MalformedURLException e) {
                        logger.error(e.getMessage());
                    }
                }
                break;
            case SAFARI:
                SafariOptions safariOptions = new SafariOptions();
                if (browser.getLocation() == Location.LOCALHOST) {
                    webDriver = new SafariDriver(safariOptions);
                } else if (browser.getLocation() == Location.GRID) {
                    try {
                        webDriver = new RemoteWebDriver(new URL(props.getProperty("gridUrl")), safariOptions);
                    } catch (MalformedURLException e) {
                        logger.error(e.getMessage());
                    }
                }
                break;
            case OPERA:
                browser.setId("4");
                OperaOptions operaOptions = new OperaOptions();
                if (browser.getLocation() == Location.LOCALHOST) {
                    webDriver = new OperaDriver(operaOptions);
                } else if (browser.getLocation() == Location.GRID) {
                    try {
                        webDriver = new RemoteWebDriver(new URL(props.getProperty("gridUrl")), operaOptions);
                    } catch (MalformedURLException e) {
                        logger.error(e.getMessage());
                    }
                }
        }
        return webDriver;
    }
}
