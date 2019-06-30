package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class PerformancePage {

    PageDriver pageDriver;
    By industrySelect = By.id("makeSelect");

    /**
     * The Constructor
     * 
     * @param webDriver
     */
    public PerformancePage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Selct a film
     */
    public void selectIndustry(String industry) {
        pageDriver.selectByVisibleText(industrySelect, industry);
    }

    public List<WebElement> getIndustries() {
        return pageDriver.getSelectOptions(industrySelect);
    }
}