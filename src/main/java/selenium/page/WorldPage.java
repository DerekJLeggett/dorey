package selenium.page;

import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class WorldPage {

    PageDriver pageDriver;

    /**
     * The constructor
     * 
     * @param pageDriver
     */
    public WorldPage(PageDriver pageDriver) {
        this.pageDriver = pageDriver;
    }

    By countrySelect = By.id("countrySelect");

    /**
     * Select a country
     */
    public void selectCountry(String country) {
        pageDriver.selectByVisibleText(countrySelect, country);
    }

    /**
     * Select a random country
     */
    public String selectRandomCountry() {
        return pageDriver.selectRandomOption(countrySelect);
    }

    /**
     * Get all countries
     */
    public List<WebElement> getCountries() {
        List<WebElement> countries = pageDriver.getSelectOptions(countrySelect);
        return countries.subList(1, countries.size());
    }

    /**
     * Get the name of the currently displayed country
     * 
     * @return String country name
     */
    public String getCountry() {
        return pageDriver.getText(By.id("countryName"));
    }

    /**
     * Get states displayed
     * 
     * @return List of States
     */
    public List<WebElement> getStates() {
        List<WebElement> states = pageDriver.getElements(By.xpath("//u[text() = 'States']/following::h3"));
        return states.subList(0, states.size() - 2);
    }
}
