package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class LorisPage {

    PageDriver pageDriver;

    /**
     * The Constructor
     * 
     * @param webDriver
     */
    public LorisPage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Get a list of links from the page
     */
    public List<WebElement> getLorisLinks() {
        return pageDriver.getElements(By.className("list-group-item"));
    }

    /**
     * Click link by text
     * 
     * @param linkText
     */
    public void clickLink(String linkText) {
        pageDriver.clickElement(By.linkText(linkText));
    }
}