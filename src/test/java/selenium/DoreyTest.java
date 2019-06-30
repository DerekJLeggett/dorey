package selenium;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.UnknownHostException;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.WebElement;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Optional;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import selenium.Browser.Location;
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

    @Override
    @Parameters({ "browserId", "browserName", "location" })
    @BeforeClass
    public void init(@Optional("1") Integer browserId, @Optional("Chrome") String browserName,
            @Optional("LOCALHOST") Location location) throws MalformedURLException, UnknownHostException {
        utility = new Utility();
        Properties props = utility.loadProperties();
        baseURL = props.getProperty("baseUrl");
        gridUrl = props.getProperty("gridUrl");
        browser = new Browser();
        browser.setId(browserId);
        browser.setName(browserName);
        browser.setLocation(location);
        webDriver = getWebDriver(browser);
        pageDriver = new PageDriver(webDriver);
        homePage = new HomePage(webDriver);
        lorisPage = new LorisPage(webDriver);
        dereksPage = new DereksPage(webDriver);
        worldPage = new WorldPage(webDriver);
        starWarsPage = new StarWarsPage(webDriver);
        marvelPage = new MarvelPage(webDriver);
        navyPage = new NavyPage(webDriver);
        npsPage = new NpsPage(webDriver);
        autoPage = new AutoPage(webDriver);
        performancePage = new PerformancePage(webDriver);
        webDriver.manage().window().maximize();
        pageDriver.navigateTo(baseURL);
    }

    @Override
    @AfterClass
    public void tearDown() {
        webDriver.quit();
    }

    @Test(enabled = true)
    public void testHomePage() {
        homePage.clickHomeTab();
        Assert.assertTrue(webDriver.getTitle().equals("Dorey"));
        Assert.assertTrue(webDriver.getPageSource().contains("Derek and Lori Leggett"));
    }

    @Test(enabled = true)
    public void testLorisPage() {
        homePage.clickLorisTab();
        for (WebElement element : lorisPage.getLorisLinks()) {
            String linkText = element.getText();
            logger.info("Link text: {}", linkText);
            String originalHandle = webDriver.getWindowHandle();
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
        String film = starWarsPage.selectRandomFilm();
        logger.info("Film: {}", film);
        Assert.assertTrue(starWarsPage.getTitle().trim().contains(film.trim()));
        List<WebElement> characters = starWarsPage.getCharacters();
        for (WebElement character : characters) {
            character.click();
            logger.info("Element name: {}", character.getText());
            // Assert.assertEquals(character.getText(),
            // starWarsPage.getCharacterModalCharacterName());
            starWarsPage.clickCharacterModalClose();
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
            List<WebElement> ships = navyPage.getShips();
            for (WebElement ship : ships) {
                logger.info("Ship name: {}", ship.getText());
                // String originalHandle = webDriver.getWindowHandle();
                // ship.click();
                // pageDriver.closeNewTab(originalHandle);
            }
        }
    }

    @Test(enabled = false)
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
        List<WebElement> parks = npsPage.getParkNames();
        Assert.assertNotNull(parks.get(0).getText());
        logger.info("State selected: {}", state);
        for (WebElement park : parks) {
            logger.info("Park name: {}", park.getText());
            String originalHandle = webDriver.getWindowHandle();
            park.click();
            pageDriver.closeNewTab(originalHandle);
        }
    }

    @Test(enabled = true)
    public void testMarvel() {
        homePage.clickDereksTab();
        dereksPage.clickMarvel();
        String character = marvelPage.selectRandomCharacter();
        logger.info("Character: {}", character);
        List<WebElement> comics = marvelPage.getComics();
        for (WebElement comic : comics) {
            logger.info("Comic name: {}", comic.getText());
        }
    }
}