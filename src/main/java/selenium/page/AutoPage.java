package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class AutoPage {

    PageDriver pageDriver;
    By typeSelect = By.id("typeSelect");
    By makeSelect = By.id("makeSelect");

    /**
     * The Constructor
     * 
     * @param webDriver
     */
    public AutoPage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Select a vehicle type
     */
    public void selectVehicleType(String type) {
        pageDriver.selectByVisibleText(typeSelect, type);
    }

    /**
     * Get all vehicle types
     */
    public List<WebElement> getVehicleTypes() {
        return pageDriver.getSelectOptions(typeSelect);
    }

    /**
     * Select a vehicle make
     */
    public void selectManufacturer(String make) {
        pageDriver.selectByVisibleText(makeSelect, make);
    }

    /**
     * Get all vehicle makes
     */
    public List<WebElement> getManufacturers() {
        return pageDriver.getSelectOptions(makeSelect);
    }

    /**
     * Select a random vehicle type
     */
    public String selectRandomVehicleType() {
        return pageDriver.selectRandomOption(typeSelect);
    }

    /**
     * Select a random vehicle make
     */
    public String selectRandomVehicleMake() {
        return pageDriver.selectRandomOption(makeSelect);
    }

    /**
     * Get the first model displayed
     */
    public List<WebElement> getModels() {
        return pageDriver.getElements(By.xpath("//h4[text() = 'Models']/following-sibling::div"));
    }
}