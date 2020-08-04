package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class NpsPage {

    PageDriver pageDriver;

    /**
     * The constructor
     * 
     * @param pageDriver
     */
    public NpsPage(PageDriver pageDriver) {
        this.pageDriver = pageDriver;
    }

    By stateSelect = By.id("stateSelect");

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
        List<WebElement> states = pageDriver.getSelectOptions(stateSelect);
        return states.subList(1, states.size());
    }

    /**
     * Select a random state
     */
    public String selectRandomState() {
        return pageDriver.selectRandomOption(stateSelect);
    }

    /**
     * Get a the list of park names displayed
     */
    public List<WebElement> getParkNames() {
        return pageDriver.getElements(By.xpath("//h2//a[@target='_blank']"));
    }
}