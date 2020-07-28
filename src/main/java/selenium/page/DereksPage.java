package selenium.page;

import org.openqa.selenium.By;

import selenium.PageDriver;
import selenium.StartUp;

public class DereksPage extends StartUp {

    PageDriver pageDriver;

    /**
     * The constructor
     * 
     * @param pageDriver
     */
    public DereksPage(PageDriver pageDriver) {
        this.pageDriver = pageDriver;
    }

    /**
     * Click the world icon
     */
    public void clickWorld() {
        pageDriver.clickElement(By.xpath("//a[@href='/world']"));
    }

    /**
     * CLick the Star Wars icon
     */
    public void clickStarWars() {
        pageDriver.clickElement(By.xpath("//a[@href='/starwars']"));
    }

    /**
     * Click the Marvel icon
     */
    public void clickMarvel() {
        pageDriver.clickElement(By.xpath("//a[@href='/marvel']"));
    }

    /**
     * CLick the Navy icon
     */
    public void clickNavy() {
        pageDriver.clickElement(By.xpath("//a[@href='/ships']"));
    }

    /**
     * Click the auto icon
     */
    public void clickAuto() {
        pageDriver.clickElement(By.xpath("//a[@href='/auto']"));
    }

    /**
     * CLick the NPS icon
     */
    public void clickNPS() {
        pageDriver.clickElement(By.xpath("//a[@href='/nps']"));
    }

    /**
     * CLick the Performance icon
     */
    public void clickPerformance() {
        pageDriver.clickElement(By.xpath("//a[@href='/performance']"));
    }
}