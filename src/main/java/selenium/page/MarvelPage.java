package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class MarvelPage {

    PageDriver pageDriver;
    By characterSelect = By.id("characterSelect");

    /**
     * The Constructor
     * 
     * @param webDriver
     */
    public MarvelPage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Selct a character
     */
    public void selectCharacter(String character) {
        pageDriver.selectByVisibleText(characterSelect, character);
    }

    /**
     * Get all characters
     */
    public List<WebElement> getCharacters() {
        return pageDriver.getSelectOptions(characterSelect);
    }

    /**
     * Select a random character
     */
    public String selectRandomCharacter() {
        return pageDriver.selectRandomOption(characterSelect);
    }

    public List<WebElement> getComics() {
        List<WebElement> elements = pageDriver.getElements(By.xpath("//u[text() = 'Comics']/following::div"));
        return elements.subList(0, elements.size() - 2);
    }
}