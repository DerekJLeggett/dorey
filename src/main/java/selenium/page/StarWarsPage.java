package selenium.page;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import selenium.PageDriver;

public class StarWarsPage {

    PageDriver pageDriver;
    By filmSelect = By.id("filmSelect");

    /**
     * The Constructor
     * 
     * @param webDriver
     */
    public StarWarsPage(WebDriver webDriver) {
        pageDriver = new PageDriver(webDriver);
    }

    /**
     * Selct a film
     */
    public void selectFilm(String film) {
        pageDriver.selectByVisibleText(filmSelect, film);
    }

    /**
     * Get all film names
     */
    public List<WebElement> getFilms() {
        return pageDriver.getSelectOptions(filmSelect);
    }

    /**
     * Select a random film
     */
    public String selectRandomFilm() {
        return pageDriver.selectRandomOption(filmSelect);
    }

    /**
     * Get the current title
     * 
     * @return String title
     */
    public String getTitle() {
        return pageDriver.getText(By.id("title"));
    }

    /**
     * Get a list of all displayed film elements(characters, ships, planets,
     * vehicles, species)
     * 
     * @return List<WebElement> elements
     */
    public List<WebElement> getFilmElements() {
        return pageDriver.getElements(By.xpath("//h4[text() = 'Characters']/following::div[@data-toggle='modal']"));
    }

    /**
     * Get a list of the displayed characters
     * 
     * @return List<WebElement> elements
     */
    public List<WebElement> getCharacters() {
        return pageDriver.getElements(By.xpath("//div[@data-target='#characterModal']"));
    }

    /**
     * Get the character name from the character modal
     * 
     * @return String characterName
     */
    public String getCharacterModalCharacterName() {
        List<WebElement> elements = pageDriver.getElements(By.xpath("//*[@id='characterModal']/following::td"));
        return elements.get(0).getText();
    }

    /**
     * Click close on the modal pop up
     */
    public void clickCharacterModalClose() {
        pageDriver.clickElement(By.id("characterModalClose"));
    }
}
