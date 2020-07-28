package selenium;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import com.paulhammant.ngwebdriver.NgWebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.Cookie;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory; 
import net.sf.uadetector.ReadableUserAgent;
import net.sf.uadetector.UserAgentStringParser;
import net.sf.uadetector.service.UADetectorServiceFactory;

public class PageDriver {
    WebDriver webDriver;
    NgWebDriver ngWebDriver;
    Utility utility = new Utility();
    private static Logger logger = LoggerFactory.getLogger(PageDriver.class);

    /**
     * The Constructor
     */
    public PageDriver(WebDriver webDriver) {
        this.webDriver = webDriver;
        ngWebDriver = new NgWebDriver((JavascriptExecutor) webDriver);
    }

    /**
     * Visit the specified url
     */
    public void navigateTo(String url) {
        logger.info("Navigate to: {}", url);
        webDriver.navigate().to(url);
        waitForBrowser();
    }

    /**
     * Click element by
     * 
     * @param by
     */
    public void clickElement(By by) {
        logger.info("Click element {}", by);
        waitForElement(by);
        webDriver.findElement(by).click();
    }

    /**
     * Click element by element
     */
    public void clickElement(WebElement element) {
        logger.info("Click element {}", element);
        element.click();
    }

    /**
     * Returns a list of type webelement
     */
    public List<WebElement> getElements(By by) {
        logger.info("Get elements {}", by);
        waitForElement(by);
        return webDriver.findElements(by);
    }

    /**
     * Wait for element by
     * 
     * @param by
     */
    public void waitForElement(By by) {
        logger.info("Wait for element {}", by);
        new WebDriverWait(webDriver, 20).until(ExpectedConditions.presenceOfElementLocated(by));
        waitForBrowser();
    }

    /**
     * Wait for the browser to completley load the page.
     */
    public void waitForBrowser() {
        ExpectedCondition<Boolean> pageLoadCondition = new ExpectedCondition<Boolean>() {
            public Boolean apply(WebDriver webDriver) {
                return ((JavascriptExecutor) webDriver).executeScript("return document.readyState").equals("complete");
            }
        };
        WebDriverWait wait = new WebDriverWait(webDriver, 30);
        wait.until(pageLoadCondition);
        ngWebDriver.waitForAngularRequestsToFinish();
    }

    /**
     * Maximize the browser window
     */
    public void maximizeBrowser() {
        webDriver.manage().window().maximize();
    }

    /**
     * Get the visible text of an element
     */
    public void selectByVisibleText(By by, String visibleText) {
        logger.info("Select visible text {} {}", by, visibleText);
        waitForElement(by);
        Select select = new Select(webDriver.findElement(by));
        select.selectByVisibleText(visibleText);
    }

    /**
     * Select a random option from a drop down.
     * 
     * @param by
     * @return
     */
    public String selectRandomOption(By by) {
        List<WebElement> options = getSelectOptions(by);
        String text = options.get(Utility.getRandomNumberInRange(1, options.size() - 1)).getText();
        selectByVisibleText(by, text);
        return text;
    }

    /**
     * Get select options
     * 
     * @param by
     * @return
     */
    public List<WebElement> getSelectOptions(By by) {
        logger.info("Get select options {}", by);
        waitForElement(by);
        Select select = new Select(webDriver.findElement(by));
        while (select.getOptions().size() < 2) {
        }
        logger.info("Select Options: {}", select.getOptions().size());
        return select.getOptions();
    }

    /**
     * Close any new tabs/windows other than the original
     * 
     * @param originalHandle
     */
    public void closeNewTab(String originalHandle) {
        for (String handle : webDriver.getWindowHandles()) {
            if (!handle.equals(originalHandle)) {
                webDriver.switchTo().window(handle);
                webDriver.close();
            }
        }
        webDriver.switchTo().window(originalHandle);
    }

    /**
     * Get element text
     * 
     * @param by
     * @return
     */
    public String getText(By by) {
        logger.info("Get text {}", by);
        waitForElement(by);
        return webDriver.findElement(by).getText();
    }

    /**
     * Get cookies for the current domain
     */
    public Set<Cookie> getCookies() {
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
    public Timings getTimings() {
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
    public Resources getResources() {
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
    public String getUserAgent() {
        String userAgent = (String) ((JavascriptExecutor) webDriver).executeScript("return navigator.userAgent;");
        logger.info("User agent: {}", userAgent);
        UserAgentStringParser parser = UADetectorServiceFactory.getResourceModuleParser();
        ReadableUserAgent agent = parser.parse(userAgent);
        StartUp.browser.setName(agent.getName());
        StartUp.browser.setVersion(agent.getVersionNumber().getMajor() + "." + agent.getVersionNumber().getMinor());
        StartUp.operatingSystem.setName(agent.getOperatingSystem().getName());
        StartUp.operatingSystem.setVersion(agent.getOperatingSystem().getVersionNumber().toString());
        return userAgent;
    }
}