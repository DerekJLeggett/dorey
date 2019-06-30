package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class NpsPage {

    PageDriver pageDriver;
    By stateSelect = By.id("stateSelect");

    /**
     * The Constructor
     * 
     * @param webDriver
     */
    public NpsPage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Selct a state
     */
    public void selectState(String state) {
        pageDriver.selectByVisibleText(stateSelect, state);
    }

    /**
     * Get all states in the select drop down
     * 
     * @return states List<WebElement>
     */
    public List<WebElement> getStates() {
        return pageDriver.getSelectOptions(stateSelect);
    }

    /**
     * Select a random state
     */
    public String selectRandomState() {
        return pageDriver.selectRandomOption(stateSelect);
    }

    public List<WebElement> getParkNames() {
        return pageDriver.getElements(By.xpath("//h2//a[@target='_blank']"));
    }
}