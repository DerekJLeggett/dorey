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

public class PageDriver {
    WebDriver webDriver;
    NgWebDriver ngWebDriver;
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
        logger.info(url);
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
        WebElement myDynamicElement = (new WebDriverWait(webDriver, 20))
                .until(ExpectedConditions.presenceOfElementLocated(by));
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
        getCookies();
        getResources();
        getUserAgent();
        getTimings();
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
        String text = options.get(Utility.getRandomNumberInRange(1, options.size())).getText();
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
                waitForBrowser();
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
    public void getCookies() {
        Set<Cookie> cookies = webDriver.manage().getCookies();
        logger.info("Number of cookies: {}", cookies.size());
        for (Cookie cookie : cookies) {
            logger.info("Cookie: {}-{}-{}", cookie.getDomain(), cookie.getName(), cookie.getValue());
        }
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
        Double domComplete = Double.parseDouble(pagePerformance.get("domComplete").toString());
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
        Double timeToFirstByte = responseStart - fetchStart;
        Double timeToLastByte = responseEnd - fetchStart;
        Double timeToInteract = domInteractive - responseStart;
        Double docLoaded = domContentLoadedEventEnd - fetchStart;
        logger.info("Network: {}, Redirect: {}, Page Render: {}, Complete: {}", timings.getNetworkLatency(),
                timings.getRedirectTime(), timings.getPageLoadTime(), timings.getCompleteTime());
        logger.info("TTFB: {}, TTLB {}, TTI {}, DocLoad {}", timeToFirstByte, timeToLastByte, timeToInteract,
                docLoaded);
        return timings;
    }

    /**
     * Get artifacts like .css, .js, etc...
     * 
     * @param webDriver
     */
    public void getResources() {
        int numLink = 0;
        int numScript = 0;
        int numImage = 0;
        int numXmlHttp = 0;
        int numCss = 0;
        int numIframe = 0;
        int numOther = 0;
        int numUnknown = 0;
        @SuppressWarnings("unchecked")
        ArrayList<Object> pageResources = (ArrayList<Object>) ((JavascriptExecutor) webDriver)
                .executeScript("return window.performance.getEntriesByType('resource');");
        logger.info("Page Resources: {}", pageResources.size());
        for (Object resourceObj : pageResources) {
            @SuppressWarnings("unchecked")
            Map<String, Object> resource = (Map<String, Object>) resourceObj;
            switch (resource.get("initiatorType").toString()) {
            case "link":
                numLink += 1;
                break;
            case "script":
                numScript += 1;
                break;
            case "img":
                numImage += 1;
                break;
            case "xmlhttprequest":
                numXmlHttp += 1;
                break;
            case "css":
                numCss += 1;
                break;
            case "iframe":
                numIframe += 1;
                break;
            case "other":
                numOther += 1;
                break;
            default:
                numUnknown += 1;
            }
        }
        logger.info("Links: {}, Scripts: {}, Images: {}, XMLHttp: {}, CSS: {}, IFrame: {}, Other: {}, Unknown {}",
                numLink, numScript, numImage, numXmlHttp, numCss, numIframe, numOther, numUnknown);
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
        return userAgent.toString();
    }
}