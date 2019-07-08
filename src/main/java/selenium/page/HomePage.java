package selenium.page;

import org.openqa.selenium.By;

import selenium.PageDriver;

public class HomePage {

    PageDriver pageDriver;

    /**
     * The constructor
     * 
     * @param pageDriver
     */
    public HomePage(PageDriver pageDriver) {
        this.pageDriver = pageDriver;
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