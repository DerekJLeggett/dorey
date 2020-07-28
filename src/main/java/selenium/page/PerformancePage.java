package selenium.page;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class PerformancePage {

    PageDriver pageDriver;

    /**
     * The constructor
     * 
     * @param pageDriver
     */
    public PerformancePage(PageDriver pageDriver) {
        this.pageDriver = pageDriver;
    }

    By industrySelect = By.id("makeSelect");

    /**
     * Selct a film
     */
    public void selectIndustry(String industry) {
        pageDriver.selectByVisibleText(industrySelect, industry);
    }

    /**
     * Get a list of available industries to choose from
     */
    public List<WebElement> getIndustries() {
        return pageDriver.getSelectOptions(industrySelect);
    }
}