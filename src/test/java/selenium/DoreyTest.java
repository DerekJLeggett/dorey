package selenium;

import java.util.List;

import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import selenium.page.AutoPage;
import selenium.page.DereksPage;
import selenium.page.HomePage;
import selenium.page.LorisPage;
import selenium.page.MarvelPage;
import selenium.page.NavyPage;
import selenium.page.NpsPage;
import selenium.page.PerformancePage;
import selenium.page.StarWarsPage;
import selenium.page.WorldPage;

public class DoreyTest extends StartUp {
    private HomePage homePage;
    private LorisPage lorisPage;
    private DereksPage dereksPage;
    private WorldPage worldPage;
    private StarWarsPage starWarsPage;
    private MarvelPage marvelPage;
    private NavyPage navyPage;
    private NpsPage npsPage;
    private AutoPage autoPage;
    private PerformancePage performancePage;
    private static Logger logger = LoggerFactory.getLogger(DoreyTest.class);

    @BeforeClass
    public void begin() {
        homePage = new HomePage(pageDriver);
        lorisPage = new LorisPage(pageDriver);
        dereksPage = new DereksPage(pageDriver);
        worldPage = new WorldPage(pageDriver);
        starWarsPage = new StarWarsPage(pageDriver);
        marvelPage = new MarvelPage(pageDriver);
        navyPage = new NavyPage(pageDriver);
        npsPage = new NpsPage(pageDriver);
        autoPage = new AutoPage(pageDriver);
        performancePage = new PerformancePage(pageDriver);
    }

    @Test(enabled = true)
    public void testHomePage() {
        homePage.clickHomeTab();
        Assert.assertTrue(pageDriver.webDriver.getTitle().equals("Dorey"));
        Assert.assertTrue(pageDriver.webDriver.getPageSource().contains("Derek and Lori Leggett"));
    }

    @Test(enabled = true)
    public void testLorisPage() {
        homePage.clickLorisTab();
        for (WebElement element : lorisPage.getLorisLinks()) {
            String linkText = element.getText();
            logger.info("Link text: {}", linkText);
            String originalHandle = pageDriver.webDriver.getWindowHandle();
            lorisPage.clickLink(linkText);
            pageDriver.closeNewTab(originalHandle);
        }
    }

    @Test(enabled = true)
    public void testWorld() {
        homePage.clickDereksTab();
        dereksPage.clickWorld();
        List<WebElement> countries = worldPage.getCountries();
        for (WebElement country : countries) {
            logger.info("Country: {}", country);
            worldPage.selectCountry(country.getText());
            Assert.assertEquals(worldPage.getCountry().trim(), country.getText().trim());
            // List<WebElement> states = worldPage.getStates();
            // for (WebElement state : states) {
            // logger.info("State name: {}", state.getText());
            // }
        }
    }

    @Test(enabled = true)
    public void testStarWars() {
        homePage.clickDereksTab();
        dereksPage.clickStarWars();
        List<WebElement> films = starWarsPage.getFilms();
        for (WebElement film : films) {
            starWarsPage.selectFilm(film.getText());
            logger.info("Film: {}", film);
            Assert.assertTrue(starWarsPage.getTitle().trim().contains(film.getText().trim()));
        }
    }

    @Test(enabled = true)
    public void testNavy() {
        homePage.clickDereksTab();
        dereksPage.clickNavy();
        List<WebElement> shipTypes = navyPage.getShipTypes();
        for (WebElement shipType : shipTypes) {
            logger.info("Ship type: {}", shipType);
            navyPage.selectShipType(shipType.getText());
        }
    }

    @Test(enabled = true)
    public void testPerformance() {
        homePage.clickDereksTab();
        dereksPage.clickPerformance();
        for (WebElement option : performancePage.getIndustries()) {
            performancePage.selectIndustry(option.getText());
        }
    }

    @Test(enabled = true)
    public void testAuto() {
        homePage.clickDereksTab();
        dereksPage.clickAuto();
        String vehicleType = autoPage.selectRandomVehicleType();
        String vehicleMake = autoPage.selectRandomVehicleMake();
        logger.info("Vehicle type: {}, Vehicle make: {} ", vehicleType, vehicleMake);
        List<WebElement> models = autoPage.getModels();
        Assert.assertNotNull(models.get(0).getText());
        for (WebElement model : models) {
            logger.info("Model name: {}", model.getText());
        }
    }

    @Test(enabled = true)
    public void testNPS() {
        homePage.clickDereksTab();
        dereksPage.clickNPS();
        String state = npsPage.selectRandomState();
        logger.info("State selected: {}", state);
        List<WebElement> parks = npsPage.getParkNames();
        WebElement park = parks.get(Utility.getRandomNumberInRange(0, parks.size() - 1));
        logger.info("Park name: {}", park.getText());
        String originalHandle = pageDriver.webDriver.getWindowHandle();
        park.click();
        pageDriver.closeNewTab(originalHandle);
    }

    @Test(enabled = true)
    public void testMarvel() {
        homePage.clickDereksTab();
        dereksPage.clickMarvel();
        List<WebElement> characters = marvelPage.getCharacters();
        for (WebElement character : characters) {
            logger.info("Character: {}", character.getText());
            marvelPage.selectCharacter(character.getText());
            List<WebElement> comics = marvelPage.getComics();
            for (WebElement comic : comics) {
                logger.info("Comic name: {}", comic.getText());
            }
        }
    }

    @Test(enabled = false)
    public void testCovid() {
        homePage.clickCovidTab();
        dereksPage.clickPlaces();
    }
}