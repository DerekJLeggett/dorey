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
}