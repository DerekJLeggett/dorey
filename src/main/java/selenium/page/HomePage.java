package selenium.page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import selenium.PageDriver;

public class HomePage {

    PageDriver pageDriver;

    public HomePage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Click Home tab from the main menu
     */
    public void clickHomeTab() {
        pageDriver.clickElement(By.id("nav-home-tab"));
    }

    /**
     * Click Lori's tab from the main menu
     */
    public void clickLorisTab() {
        pageDriver.clickElement(By.id("nav-lori-tab"));
    }

    /**
     * Click Derek's tab from the main menu
     */
    public void clickDereksTab() {
        pageDriver.clickElement(By.id("nav-derek-tab"));
    }
}