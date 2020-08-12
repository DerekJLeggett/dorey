package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class NavyPage {

    PageDriver pageDriver;

    /**
     * The constructor
     * 
     * @param pageDriver
     */
    public NavyPage(PageDriver pageDriver) {
        this.pageDriver = pageDriver;
    }

    By shipTypeSelect = By.id("shipTypeSelect");

    /**
     * Selct a country
     */
    public void selectShipType(String shipType) {
        pageDriver.selectByVisibleText(shipTypeSelect, shipType);
    }

    /**
     * Get ship types
     * 
     * @return List<WebElement> shipTypes
     */
    public List<WebElement> getShipTypes() {
        List<WebElement> shipTypes = pageDriver.getSelectOptions(shipTypeSelect);
        return shipTypes.subList(1, shipTypes.size());
    }

    /**
     * Select a random ship type
     */
    public String selectRandomShipType() {
        return pageDriver.selectRandomOption(shipTypeSelect);
    }

    /**
     * return a list of displayed ships for the selected type
     */
    public List<WebElement> getShips() {
        return pageDriver
                .getElements(By.xpath("//h2[text() = 'Active Ships in the U.S. Navy']/following-sibling::div"));
    }
}