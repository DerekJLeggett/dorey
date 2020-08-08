(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n    <a class=\"nav-item nav-link active h4\" id=\"nav-home-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\"\n      aria-controls=\"nav-home\" aria-selected=\"true\" routerLink=\"home\">Home</a>\n    <a class=\"nav-item nav-link h4\" id=\"nav-lori-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\" aria-controls=\"nav-profile\"\n      aria-selected=\"false\" routerLink=\"lori\">Lori</a>\n    <a class=\"nav-item nav-link h4\" id=\"nav-lindsey-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\"\n      aria-controls=\"nav-contact\" aria-selected=\"false\" routerLink=\"lindsey\">Lindsey</a>\n    <a class=\"nav-item nav-link h4\" id=\"nav-derek-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\" aria-controls=\"nav-profile\"\n      aria-selected=\"false\" routerLink=\"derek\">Derek</a>\n    <a class=\"nav-item nav-link h4\" id=\"nav-covid-tab\" data-toggle=\"tab\" href=\"#\" role=\"tab\" aria-controls=\"nav-profile\"\n      aria-selected=\"false\" routerLink=\"covid\">Covid-19</a>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n<footer class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <a href=\"#\">\n        <img src=\"/assets/images/mailbox.gif\" alt=\"mailbox\" />\n      </a>\n      <br>\n      <a href=\"#\">\n        <img src=\"/assets/images/0342.gif\" alt=\"mailbox\" />\n      </a>\n      <h3 class=\"text-center\">Created by Lori Leggett - 1/13/01</h3>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/auto/auto.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/auto/auto.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"typeSelect\" class=\"sr-only\">Select a vehicle type</label>\n          <select class=\"custom-select\" id=\"typeSelect\" (change)=\"getMakesByType($event.target.value)\">\n            <option selected class=\"text-center\">Select a vehicle type</option>\n            <option *ngFor=\"let type of types\" class=\"text-center\" value=\"{{type.type}}\">\n              {{type.type}}\n            </option>\n          </select>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <form>\n        <div class=\"form-group\">\n          <label for=\"makeSelect\" class=\"sr-only\">Select a manufacturer</label>\n          <select class=\"custom-select\" id=\"makeSelect\" (change)=\"getModelsByMakeId($event.target.value)\">\n            <option selected class=\"text-center\">Select a manufacturer</option>\n            <option *ngFor=\"let make of makesByType\" class=\"text-center\" value=\"{{make.MakeId}}\">\n              {{make.MakeName}}\n            </option>\n          </select>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col text-center\">\n      <h4 class=\"text-center\">Models</h4>\n      <div *ngFor=\"let model of models\">\n        {{model.Model_Name}}\n      </div>\n    </div>\n  </div>\n  <a href=\"https://vpic.nhtsa.dot.gov/api/Home\" target=\"_blank\">Data Provided by Vehicle API</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/covid/covid.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/covid/covid.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <a href=\"https://covid19.who.int\" target=\"_blank\">Data provided by the World Health Organization, Data current as of\n        {{covidCounts[0].Date_reported}}</a>\n    <div class=\"row no-gutters\" *ngFor=\"let covidCount of covidCounts\">\n        <div class=\"col-1\">\n            <img class=\"img-fluid svg\" title=\"{{covidCount.Country_code}}\"\n                src=\"assets/images/flags/svg/{{covidCount.Country_code | lowercase}}.svg\">\n        </div>\n        <div class=\"col-11\">\n            <div class=\"progress\" style=\"height: 50px\">\n                <div class=\" progress-bar bg-danger\" role=\"progressbar\"\n                    [style.width.%]=\"((covidCount.Cumulative_deaths/covidCounts[0].Cumulative_cases)*100)\"\n                    aria-valuenow=\"((covidCount.Cumulative_deaths/covidCounts[0].Cumulative_cases)*100)\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    {{covidCount.Cumulative_deaths | number}}</div>\n                <div class=\"progress-bar bg-warning\" role=\"progressbar\"\n                    [style.width.%]=\"(((covidCount.Cumulative_cases - covidCount.Cumulative_deaths)/covidCounts[0].Cumulative_cases)*100)\"\n                    aria-valuenow=\"(((covidCount.Cumulative_cases - covidCount.Cumulative_deaths)/covidCounts[0].Cumulative_cases)*100)\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\">\n                    {{covidCount.Cumulative_cases | number}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/derek/derek.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/derek/derek.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"text-center\">Derek's Project Page!</h1>\n      <h2 class=\"text-center\">Serving up delicious, byte size chunks of functionality!</h2>\n      <div class=\"list-group\">\n        <a routerLink=\"{{link.url}}\" href=\"#\"\n          class=\"list-group-item list-group-item-action list-group-item-primary text-center\"\n          *ngFor=\"let link of dereksLinks\">\n          <img class=\"img-fluid svg\" src=\"{{link.imagePath}}\" />\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/dunkin/dunkin.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/dunkin/dunkin.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <label for=\"stateSelect\" class=\"sr-only\">Select a State</label>\n            <select class=\"custom-select\" id=\"stateSelect\" (change)=\"getDunkinByState($event.target.value)\">\n                <option selected class=\"text-center\">Select a State</option>\n                <option class=\"text-center\" *ngFor=\"let state of states\" class=\"text-center\" value=\"{{state.code}}\">\n                    {{state.name}}\n                </option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <ul class=\"list-unstyled\">\n                <li>\n                    <ul>\n                        <li *ngFor=\"let dunkin of dunkins\">{{dunkin.address}}\n\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-4\">\n      <img class=\"img-fluid\" src=\"/assets/images/dlwedding.jpg\"\n        alt=\"Derek and Lori Leggett's wedding picture from June 6th, 1998\">\n    </div>\n    <div class=\"col-lg-8 story\">\n      <p class=\"h1\">\n        Hi, our names are Derek and Lori Leggett. We were married on June 6, 1998 and live in Peoria, Arizona.\n        Lori is a 5th grade teacher. Derek is the computer guy! We are expecting our first child around May 5,\n        2002. Thank you for visting our web page. We\n        hope you enjoy it!\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/library/library.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/library/library.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  library works!\n</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lindsey/lindsey.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lindsey/lindsey.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/lori/lori.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/lori/lori.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <h1 class=\"text-center\">Lori's Teacher Resource Page</h1>\n      <h2 class=\"text-center\">Looking for new ideas and lessons? Visit...</h2>\n      <div class=\"list-group\">\n\n        <a target=\"_blank\" href=\"{{link.url}}\" class=\"list-group-item list-group-item-action list-group-item-primary\"\n          *ngFor=\"let link of lorisLinks\">\n\n          <h4 class=\"text-center\"><img src=\"/assets/images/nn0518.gif\" />{{link.linkText}}</h4>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/marvel/marvel.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/marvel/marvel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <label for=\"characterSelect\" class=\"sr-only\">Select a Character</label>\n            <select class=\"custom-select\" id=\"characterSelect\" (change)=\"getCharacterById($event.target.value)\">\n                <option selected class=\"text-center\">Select a Character</option>\n                <option class=\"text-center\" *ngFor=\"let character of characters\" class=\"text-center\"\n                    value=\"{{character.id}}\">\n                    {{character.name}}\n                </option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div *ngFor=\"let characterBy of characterById\" class=\"text-center\">\n                <h3>{{characterBy.name}}</h3>\n                <h4>{{characterBy.description}}</h4>\n                <img class=\"img-fluid\" title=\"{{characterBy.name}}\"\n                    src=\"{{characterBy.thumbnail.path}}.{{characterBy.thumbnail.extension}}\">\n                <h4><u>Comics</u></h4>\n                <div *ngFor=\"let comic of characterBy.comics.items\">\n                    {{comic.name}}\n                </div>\n                <h4><u>Stories</u></h4>\n                <div *ngFor=\"let story of characterBy.stories.items\">\n                    {{story.name}}\n                </div>\n            </div>\n            <a class=\"text-center\" href=\"http://marvel.com\">Data provided by Marvel. © 2019 MARVEL</a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/nps/nps.component.html":
/*!******************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/nps/nps.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <label for=\"stateSelect\" class=\"sr-only\">Select a State</label>\n            <select class=\"custom-select\" id=\"stateSelect\" (change)=\"getParks($event.target.value)\">\n                <option selected class=\"text-center\">Select a State</option>\n                <option class=\"text-center\" *ngFor=\"let state of states\" class=\"text-center\" value=\"{{state.code}}\">\n                    {{state.name}}\n                </option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <div class=\"text-center\" *ngFor=\"let park of parks\">\n                <h2><a target=\"_blank\" href=\"{{park.url}}\">{{park.fullName}}</a></h2><br>\n                <img *ngFor=\"let image of park.images\" class=\"img-fluid img-thumbnail\" src=\"{{image.url}}\"\n                    alt=\"{{image.altText}}\"><br>\n                <h3>{{park.description}}</h3><br>\n                <h4><a target=\"_blank\" href=\"{{park.directionsUrl}}\">Get Directions</a></h4><br>\n                <h3>Weather Info: </h3><br>\n                <h4>{{park.weatherInfo}}</h4>\n            </div>\n        </div>\n    </div>\n    <a href=\"https://www.nps.gov/subjects/developer/index.htm\" target=\"_blank\">Data provided by the US National Park\n        Service</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/performance/performance.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/performance/performance.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <h2 class=\"text-center\">SUPER(Single User Performance)</h2>\n      <p class=\"text-center\">Performance metrics were obtained by opening clean(no cache) browser, navigating to the\n        specified url\n        , waiting for the page to load, then collecting metrics reported by the browser.\n        Blue bar is Network + Server Processing time.\n        Red bar is Redirect time.\n        Yellow bar is Page Load/Browser Rendering time.\n        All values are in milliseconds.\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-12\">\n      <label for=\"industrySelect\" class=\"sr-only\">Select an Industry</label>\n      <select class=\"custom-select\" id=\"makeSelect\" (change)=\"getTimingsByIndustryCode($event.target.value)\">\n        <option selected class=\"text-center\">Select an Industry</option>\n        <option *ngFor=\"let industry of industries\" class=\"text-center\" value=\"{{industry.id}}\">\n          {{industry.name}}\n        </option>\n      </select>\n    </div>\n  </div>\n  <div class=\"row\" *ngFor=\"let timing of timings\">\n    <div class=\"col-12\">\n      <div class=\"progress\" style=\"height: 30px;\">\n        <div class=\"progress-bar\" role=\"progressbar\"\n          [style.width.%]=\"((timing.networkLatency/timings[0].completeTime)*100)\"\n          aria-valuenow=\"((timing.networkLatency/timings[0].completeTime)*100)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          {{timing.networkLatency}}</div>\n        <div class=\"progress-bar bg-danger\" role=\"progressbar\"\n          [style.width.%]=\"((timing.redirectTime/timings[0].completeTime)*100)\"\n          aria-valuenow=\"((timing.redirectTime/timings[0].completeTime)*100)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          {{timing.redirectTime}}</div>\n        <div class=\"progress-bar bg-warning\" role=\"progressbar\"\n          [style.width.%]=\"((timing.pageLoadTime/timings[0].completeTime)*100)\"\n          aria-valuenow=\"((timing.pageLoadTime/timings[0].completeTime)*100)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          <a class=\"h4\" href=\"https://{{timing.url}}\" target=\"_blank\">{{timing.pageLoadTime}} - {{timing.url}}</a>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/places/places.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/places/places.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row text-center\" *ngFor=\"let place of places\">\n        <div class=\"col\">\n            <ul class=\"list-unstyled\">\n                <a target=\"_blank\"\n                    href=\"https://www.google.com/maps/search/?api=1&query={{place.latitude}},{{place.longitude}}\">\n                    <li><strong>{{place.name | titlecase}}</strong></li>\n                </a>\n                <li>Distance: {{place.distance | number}}mi.</li>\n                <li>{{place.address | titlecase}}</li>\n                <li>{{place.city | titlecase}},\n                    {{place.state}} {{place.zip}}</li>\n                <li>{{place.country}}</li>\n                <li>Phone: {{place.phone}}</li>\n            </ul>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/recreation/recreation.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/recreation/recreation.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <label for=\"stateSelect\" class=\"sr-only\">Select a State</label>\n            <select class=\"custom-select\" id=\"stateSelect\" (change)=\"getRecreationalAreas($event.target.value)\">\n                <option selected class=\"text-center\">Select a State</option>\n                <option class=\"text-center\" *ngFor=\"let state of states\" class=\"text-center\" value=\"{{state.code}}\">\n                    {{state.name}}\n                </option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\">\n            <ul class=\"list-unstyled\">\n                <li>\n                    <ul class=\"list-unstyled\">\n                        <li *ngFor=\"let recArea of recreationalAreas\">\n                            <h2><a target=\"_blank\" href=\"{{recArea.RecAreaMapURL}}\">{{recArea.RecAreaName}}</a></h2><br>\n                            <h3>{{recArea.RecAreaDescription}}</h3><br>\n                        </li>\n                    </ul>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <a target=\"_blank\" href=\"http://ridb.recreation.gov/\">Data Source</a>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/ships/ships.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/ships/ships.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <label for=\"shipTypeSelect\" class=\"sr-only\">Select a Ship Type</label>\n            <select class=\"custom-select\" id=\"shipTypeSelect\" (change)=\"getShipsByType($event.target.value)\">\n                <option selected class=\"text-center\">Select a Ship Type</option>\n                <option class=\"text-center\" *ngFor=\"let type of shipTypes\" class=\"text-center\" value=\"{{type.Code}}\">\n                    {{type.Code}} - {{type.Name}}\n                </option>\n            </select>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>Active Ships in the U.S. Navy</h2>\n            <div *ngFor=\"let ship of ships\" (click)=\"selectShip(ship)\">\n                <a target=\"_blank\" href=\"{{ship.DANFSLink}}\">{{ship.Name}}</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/snap/snap.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/snap/snap.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      Aw' Snap!\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/swapi/swapi.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/swapi/swapi.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"filmSelect\" class=\"sr-only\">Select a Film</label>\n                    <select class=\"custom-select\" id=\"filmSelect\" (change)=\"getDetails($event.target.value)\">\n                        <option selected class=\"text-center\">Select a Film</option>\n                        <option *ngFor=\"let film of films\" class=\"text-center\" value=\"{{film.episode_id}}\">\n                            {{film.title}}\n                        </option>\n                    </select>\n                </div>\n            </form>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\" *ngIf=\"selectedFilm\">\n            <div>\n                <h2 id=\"title\">Episode: {{selectedFilm.episode_id}} - {{selectedFilm.title}} - Directed by:\n                    {{selectedFilm.director}} - Produced by: {{selectedFilm.producer}} Released:\n                    {{selectedFilm.release_date | date}}\n                </h2>\n                <p>{{selectedFilm.opening_crawl}}</p>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col\" *ngIf=\"selectedFilm\">\n            <h4 class=\"text-center\">Characters</h4>\n            <div class=\"text-center\" *ngFor=\"let character of characters\" data-toggle=\"modal\"\n                data-target=\"#characterModal\" (click)=\"characterSelected(character)\">{{character.name}}</div>\n            <h4 class=\"text-center\">Planets</h4>\n            <div class=\"text-center\" *ngFor=\"let planet of planets\" data-toggle=\"modal\" data-target=\"#planetModal\"\n                (click)=\"planetSelected(planet)\">{{planet.name}}</div>\n            <h4 class=\"text-center\">StarShips</h4>\n            <div class=\"text-center\" *ngFor=\"let starship of starShips\" data-toggle=\"modal\" data-target=\"#starshipModal\"\n                (click)=\"starShipSelected(starship)\">{{starship.name}}</div>\n            <h4 class=\"text-center\">Vehicles</h4>\n            <div class=\"text-center\" *ngFor=\"let vehicle of vehicles\" data-toggle=\"modal\" data-target=\"#vehicleModal\"\n                (click)=\"vehicleSelected(vehicle)\">{{vehicle.name}}</div>\n            <h4 class=\"text-center\">Species</h4>\n            <div class=\"text-center\" *ngFor=\"let specie of species\" data-toggle=\"modal\" data-target=\"#specieModal\"\n                (click)=\"specieSelected(specie)\">{{specie.name}}</div>\n        </div>\n    </div>\n    <a href=\"https://swapi.dev/\" target=\"_blank\">Data provided by StarWars API</a>\n</div>\n\n\n<div class=\"container-fluid\">\n\n    <div class=\"modal\" id=\"characterModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal-label\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\" id=\"characterModalClose\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\" id=\"myModal-label\" *ngIf=\"selectedCharacter\">Character Details -\n                        {{selectedCharacter.name}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <table class=\"table table-striped table-bordered table-hover table-condensed table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Height</th>\n                                        <th>Weight</th>\n                                        <th>Hair</th>\n                                        <th>Skin</th>\n                                        <th>Eye</th>\n                                        <th>Birth</th>\n                                        <th>Gender</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"selectedCharacter\">\n                                        <td>{{selectedCharacter.name | titlecase}}</td>\n                                        <td>{{selectedCharacter.height}}</td>\n                                        <td>{{selectedCharacter.mass}}</td>\n                                        <td>{{selectedCharacter.hair_color | titlecase}}</td>\n                                        <td>{{selectedCharacter.skin_color | titlecase}}</td>\n                                        <td>{{selectedCharacter.eye_color | titlecase}}</td>\n                                        <td>{{selectedCharacter.birth_year}}</td>\n                                        <td>{{selectedCharacter.gender | titlecase}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                        id=\"characterModalClose\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"planetModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal-label\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\" id=\"planetModalClose\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\" id=\"myModal-label\" *ngIf=\"selectedPlanet\">Planet Details -\n                        {{selectedPlanet.name}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <table class=\"table table-striped table-bordered table-hover table-condensed table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Rotation Period</th>\n                                        <th>Orbital Period</th>\n                                        <th>Diameter</th>\n                                        <th>Climate</th>\n                                        <th>Gravity</th>\n                                        <th>Terrain</th>\n                                        <th>Surface Water</th>\n                                        <th>Population</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"selectedPlanet\">\n                                        <td>{{selectedPlanet.name}}</td>\n                                        <td>{{selectedPlanet.rotation_period | number}}</td>\n                                        <td>{{selectedPlanet.orbital_period | number}}</td>\n                                        <td>{{selectedPlanet.diameter | number}}</td>\n                                        <td>{{selectedPlanet.climate | titlecase}}</td>\n                                        <td>{{selectedPlanet.gravity | titlecase}}</td>\n                                        <td>{{selectedPlanet.terrain | titlecase}}</td>\n                                        <td>{{selectedPlanet.surface_water | number}}</td>\n                                        <td>{{selectedPlanet.population | number}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                        id=\"planetModalClose\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"starshipModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal-label\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\" id=\"starshipModalClose\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\" id=\"myModal-label\" *ngIf=\"selectedStarShip\">StarShip Details -\n                        {{selectedStarShip.name}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <table class=\"table table-striped table-bordered table-hover table-condensed table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Model</th>\n                                        <th>Manufacturer</th>\n                                        <th>Cost</th>\n                                        <th>Length</th>\n                                        <th>Speed</th>\n                                        <th>Crew</th>\n                                        <th>Passengers</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"selectedStarShip\">\n                                        <td>{{selectedStarShip.name}}</td>\n                                        <td>{{selectedStarShip.model | titlecase}}</td>\n                                        <td>{{selectedStarShip.manufacturer | titlecase}}</td>\n                                        <td>{{selectedStarShip.cost_in_credits | number}}</td>\n                                        <td>{{selectedStarShip.length | number}}</td>\n                                        <td>{{selectedStarShip.max_atmosphering_speed | number}}</td>\n                                        <td>{{selectedStarShip.crew | number}}</td>\n                                        <td>{{selectedStarShip.passengers | number}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                        id=\"starshipModalClose\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"vehicleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal-label\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\" id=\"vehicleModalClose\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\" id=\"myModal-label\" *ngIf=\"selectedVehicle\">Vehicle Details -\n                        {{selectedVehicle.name}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <table class=\"table table-striped table-bordered table-hover table-condensed table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Model</th>\n                                        <th>Manufacturer</th>\n                                        <th>Cost</th>\n                                        <th>Length</th>\n                                        <th>Speed</th>\n                                        <th>Crew</th>\n                                        <th>Passengers</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"selectedVehicle\">\n                                        <td>{{selectedVehicle.name}}</td>\n                                        <td>{{selectedVehicle.model | titlecase}}</td>\n                                        <td>{{selectedVehicle.manufacturer | titlecase}}</td>\n                                        <td>{{selectedVehicle.cost_in_credits | number}}</td>\n                                        <td>{{selectedVehicle.length | number}}</td>\n                                        <td>{{selectedVehicle.max_atmosphering_speed | number}}</td>\n                                        <td>{{selectedVehicle.crew | number}}</td>\n                                        <td>{{selectedVehicle.passengers | number}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                        id=\"vehicleModalClose\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"modal\" id=\"specieModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModal-label\">\n        <div class=\"modal-dialog\" role=\"document\">\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <span aria-hidden=\"true\" id=\"specieModalClose\">&times;</span>\n                    </button>\n                    <h4 class=\"modal-title\" id=\"myModal-label\" *ngIf=\"selectedSpecie\">Specie Details -\n                        {{selectedSpecie.name}}</h4>\n                </div>\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <table class=\"table table-striped table-bordered table-hover table-condensed table-sm\">\n                                <thead class=\"thead-dark\">\n                                    <tr>\n                                        <th>Name</th>\n                                        <th>Classification</th>\n                                        <th>Designation</th>\n                                        <th>Average Height</th>\n                                        <th>Average Life Span</th>\n                                        <th>Homeworld</th>\n                                        <th>Language</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngIf=\"selectedSpecie\">\n                                        <td>{{selectedSpecie.name}}</td>\n                                        <td>{{selectedSpecie.classification | titlecase}}</td>\n                                        <td>{{selectedSpecie.designation | titlecase}}</td>\n                                        <td>{{selectedSpecie.average_height | number}}</td>\n                                        <td>{{selectedSpecie.average_lifespan | number}}</td>\n                                        <td>{{selectedSpecie.homeworld | titlecase}}</td>\n                                        <td>{{selectedSpecie.language | titlecase}}</td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\"\n                        id=\"vehicleModalClose\">Close</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/world/world.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/world/world.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <form>\n        <div class=\"form-group text-center\">\n          <label for=\"countrySelect\" class=\"sr-only\">Select a Country</label>\n          <select class=\"custom-select text-center\" id=\"countrySelect\"\n            (change)=\"getStatesNestedCitiesByCountryCode($event.target.value)\">\n            <option selected class=\"text-center\">Select a Country</option>\n            <option *ngFor=\"let country of countries\" class=\"text-center\" value=\"{{country.Code}}\">\n              {{country.Name}}\n            </option>\n          </select>\n        </div>\n      </form>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col text-center\" *ngIf=\"country\">\n      <h3 id=\"countryName\" class=\"text-center\">{{country.Name}}</h3>\n      <img class=\"img-fluid svg\" title=\"{{country.Name}}\"\n        src=\"assets/images/flags/svg/{{country.Code2 | lowercase}}.svg\">\n      <h4 class=\"text-center\"><u>Languages Spoken</u></h4>\n      <div class=\"progress\" *ngFor=\"let language of country.Languages\">\n        <div class=\"progress-bar bg-warning text-dark\" role=\"progressbar\" [style.width.%]=\"language.Percentage\"\n          aria-valuenow=\"language.Percentage\" aria-valuemin=\"0\" aria-valuemax=\"100\"><strong>{{language.Language}} -\n            {{language.Percentage}}%</strong></div>\n      </div>\n    </div>\n  </div>\n  <h4 *ngIf=\"country\" class=\"text-center\"><u>States</u></h4>\n  <div class=\"row\" *ngFor=\"let state of states\">\n    <div class=\"col text-center\">\n      <h3 class=\"text-center\">{{state.State}}</h3>\n      <img class=\"img-fluid text-center svg\" title=\"{{state.State}}\"\n        src=\"assets/images/flags/svg/{{country.Code2 | lowercase}}/{{state.StateCode | lowercase}}.svg\">\n      <h4 class=\"text-center\"><u>Population by City</u></h4>\n      <div class=\"progress\" *ngFor=\"let city of state.Cities\">\n        <div class=\"progress-bar bg-warning text-dark\" role=\"progressbar\"\n          [style.width.%]=\"((city.Population/state.Cities[0].Population)*100)\"\n          aria-valuenow=\"((city.Population/state.Cities[0].Population)*100)\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          <strong>{{city.City}} -\n            {{city.Population | number}}</strong></div>\n      </div>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _lori_lori_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lori/lori.component */ "./src/app/lori/lori.component.ts");
/* harmony import */ var _lindsey_lindsey_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lindsey/lindsey.component */ "./src/app/lindsey/lindsey.component.ts");
/* harmony import */ var _derek_derek_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./derek/derek.component */ "./src/app/derek/derek.component.ts");
/* harmony import */ var _world_world_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./world/world.component */ "./src/app/world/world.component.ts");
/* harmony import */ var _swapi_swapi_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./swapi/swapi.component */ "./src/app/swapi/swapi.component.ts");
/* harmony import */ var _marvel_marvel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./marvel/marvel.component */ "./src/app/marvel/marvel.component.ts");
/* harmony import */ var _ships_ships_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ships/ships.component */ "./src/app/ships/ships.component.ts");
/* harmony import */ var _auto_auto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auto/auto.component */ "./src/app/auto/auto.component.ts");
/* harmony import */ var _dunkin_dunkin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dunkin/dunkin.component */ "./src/app/dunkin/dunkin.component.ts");
/* harmony import */ var _nps_nps_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nps/nps.component */ "./src/app/nps/nps.component.ts");
/* harmony import */ var _recreation_recreation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./recreation/recreation.component */ "./src/app/recreation/recreation.component.ts");
/* harmony import */ var _snap_snap_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./snap/snap.component */ "./src/app/snap/snap.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./performance/performance.component */ "./src/app/performance/performance.component.ts");
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./covid/covid.component */ "./src/app/covid/covid.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./places/places.component */ "./src/app/places/places.component.ts");




















var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'lori', component: _lori_lori_component__WEBPACK_IMPORTED_MODULE_4__["LoriComponent"] },
    { path: 'lindsey', component: _lindsey_lindsey_component__WEBPACK_IMPORTED_MODULE_5__["LindseyComponent"] },
    { path: 'derek', component: _derek_derek_component__WEBPACK_IMPORTED_MODULE_6__["DerekComponent"] },
    { path: 'world', component: _world_world_component__WEBPACK_IMPORTED_MODULE_7__["WorldComponent"] },
    { path: 'starwars', component: _swapi_swapi_component__WEBPACK_IMPORTED_MODULE_8__["SwapiComponent"] },
    { path: 'marvel', component: _marvel_marvel_component__WEBPACK_IMPORTED_MODULE_9__["MarvelComponent"] },
    { path: 'ships', component: _ships_ships_component__WEBPACK_IMPORTED_MODULE_10__["ShipsComponent"] },
    { path: 'auto', component: _auto_auto_component__WEBPACK_IMPORTED_MODULE_11__["AutoComponent"] },
    { path: 'dunkin', component: _dunkin_dunkin_component__WEBPACK_IMPORTED_MODULE_12__["DunkinComponent"] },
    { path: 'nps', component: _nps_nps_component__WEBPACK_IMPORTED_MODULE_13__["NpsComponent"] },
    { path: 'recreation', component: _recreation_recreation_component__WEBPACK_IMPORTED_MODULE_14__["RecreationComponent"] },
    { path: 'snap', component: _snap_snap_component__WEBPACK_IMPORTED_MODULE_15__["SnapComponent"] },
    { path: 'library', component: _library_library_component__WEBPACK_IMPORTED_MODULE_16__["LibraryComponent"] },
    { path: 'performance', component: _performance_performance_component__WEBPACK_IMPORTED_MODULE_17__["PerformanceComponent"] },
    { path: 'covid', component: _covid_covid_component__WEBPACK_IMPORTED_MODULE_18__["CovidComponent"] },
    { path: 'places', component: _places_places_component__WEBPACK_IMPORTED_MODULE_19__["PlacesComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'dorey';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _lori_lori_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lori/lori.component */ "./src/app/lori/lori.component.ts");
/* harmony import */ var _lindsey_lindsey_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lindsey/lindsey.component */ "./src/app/lindsey/lindsey.component.ts");
/* harmony import */ var _derek_derek_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./derek/derek.component */ "./src/app/derek/derek.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _world_world_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./world/world.component */ "./src/app/world/world.component.ts");
/* harmony import */ var _swapi_swapi_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./swapi/swapi.component */ "./src/app/swapi/swapi.component.ts");
/* harmony import */ var _marvel_marvel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./marvel/marvel.component */ "./src/app/marvel/marvel.component.ts");
/* harmony import */ var _ships_ships_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ships/ships.component */ "./src/app/ships/ships.component.ts");
/* harmony import */ var _auto_auto_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auto/auto.component */ "./src/app/auto/auto.component.ts");
/* harmony import */ var _dunkin_dunkin_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dunkin/dunkin.component */ "./src/app/dunkin/dunkin.component.ts");
/* harmony import */ var _nps_nps_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./nps/nps.component */ "./src/app/nps/nps.component.ts");
/* harmony import */ var _recreation_recreation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./recreation/recreation.component */ "./src/app/recreation/recreation.component.ts");
/* harmony import */ var _snap_snap_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./snap/snap.component */ "./src/app/snap/snap.component.ts");
/* harmony import */ var _library_library_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./library/library.component */ "./src/app/library/library.component.ts");
/* harmony import */ var _performance_performance_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./performance/performance.component */ "./src/app/performance/performance.component.ts");
/* harmony import */ var _covid_covid_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./covid/covid.component */ "./src/app/covid/covid.component.ts");
/* harmony import */ var _places_places_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./places/places.component */ "./src/app/places/places.component.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _lori_lori_component__WEBPACK_IMPORTED_MODULE_9__["LoriComponent"],
                _lindsey_lindsey_component__WEBPACK_IMPORTED_MODULE_10__["LindseyComponent"],
                _derek_derek_component__WEBPACK_IMPORTED_MODULE_11__["DerekComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _world_world_component__WEBPACK_IMPORTED_MODULE_13__["WorldComponent"],
                _swapi_swapi_component__WEBPACK_IMPORTED_MODULE_14__["SwapiComponent"],
                _marvel_marvel_component__WEBPACK_IMPORTED_MODULE_15__["MarvelComponent"],
                _ships_ships_component__WEBPACK_IMPORTED_MODULE_16__["ShipsComponent"],
                _auto_auto_component__WEBPACK_IMPORTED_MODULE_17__["AutoComponent"],
                _dunkin_dunkin_component__WEBPACK_IMPORTED_MODULE_18__["DunkinComponent"],
                _nps_nps_component__WEBPACK_IMPORTED_MODULE_19__["NpsComponent"],
                _recreation_recreation_component__WEBPACK_IMPORTED_MODULE_20__["RecreationComponent"],
                _snap_snap_component__WEBPACK_IMPORTED_MODULE_21__["SnapComponent"],
                _library_library_component__WEBPACK_IMPORTED_MODULE_22__["LibraryComponent"],
                _performance_performance_component__WEBPACK_IMPORTED_MODULE_23__["PerformanceComponent"],
                _covid_covid_component__WEBPACK_IMPORTED_MODULE_24__["CovidComponent"],
                _places_places_component__WEBPACK_IMPORTED_MODULE_25__["PlacesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_7__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].production })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auto/auto.component.css":
/*!*****************************************!*\
  !*** ./src/app/auto/auto.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dG8vYXV0by5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/auto/auto.component.ts":
/*!****************************************!*\
  !*** ./src/app/auto/auto.component.ts ***!
  \****************************************/
/*! exports provided: AutoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoComponent", function() { return AutoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auto_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auto.service */ "./src/app/auto/auto.service.ts");



var AutoComponent = /** @class */ (function () {
    function AutoComponent(autoService) {
        this.autoService = autoService;
    }
    AutoComponent.prototype.ngOnInit = function () {
        this.getVehicleTypes();
    };
    AutoComponent.prototype.getVehicleTypes = function () {
        var _this = this;
        this.autoService.getVehicleTypes()
            .subscribe(function (response) { return _this.types = response; });
    };
    AutoComponent.prototype.getMakesByType = function (type) {
        var _this = this;
        this.autoService.getMakesByType(type)
            .subscribe(function (response) { return _this.makesByType = response; });
    };
    AutoComponent.prototype.getModelsByMakeId = function (makeId) {
        var _this = this;
        this.autoService.getModelsByMakeId(makeId)
            .subscribe(function (response) { return _this.models = response; });
    };
    AutoComponent.prototype.getAutoManufacturers = function () {
        var _this = this;
        this.autoService.getAllManufacturers()
            .subscribe(function (autoManufacturer) { return _this.autoManufacturers = autoManufacturer; });
    };
    AutoComponent.prototype.getManufacturerDetails = function (name) {
        var _this = this;
        this.autoService.getManufacturerDetails(name)
            .subscribe(function (details) { return _this.manufacturerDetails = details; });
    };
    AutoComponent.prototype.getMakesByManufacturer = function (name) {
        var _this = this;
        this.autoService.getMakesByManufacturer(name)
            .subscribe(function (details) { return _this.makes = details; });
    };
    AutoComponent.ctorParameters = function () { return [
        { type: _auto_service__WEBPACK_IMPORTED_MODULE_2__["AutoService"] }
    ]; };
    AutoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auto',
            template: __webpack_require__(/*! raw-loader!./auto.component.html */ "./node_modules/raw-loader/index.js!./src/app/auto/auto.component.html"),
            styles: [__webpack_require__(/*! ./auto.component.css */ "./src/app/auto/auto.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auto_service__WEBPACK_IMPORTED_MODULE_2__["AutoService"]])
    ], AutoComponent);
    return AutoComponent;
}());



/***/ }),

/***/ "./src/app/auto/auto.service.ts":
/*!**************************************!*\
  !*** ./src/app/auto/auto.service.ts ***!
  \**************************************/
/*! exports provided: AutoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoService", function() { return AutoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AutoService = /** @class */ (function () {
    function AutoService(http) {
        this.http = http;
        this.getManufacturersURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
        this.getManufacturerDetailsURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmanufacturerdetails/';
        this.getMakeForManufacturerURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/getmakeformanufacturer/';
        this.getMakeByTypeURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/';
        this.getModelsByMakeIdURL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/';
    }
    AutoService.prototype.getAllManufacturers = function () {
        return this.http.get(this.getManufacturersURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['Results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getAllManufacturers', [])));
    };
    AutoService.prototype.getVehicleTypes = function () {
        return this.http.get('assets/data/autoTypes.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getVehicleTypes', [])));
    };
    AutoService.prototype.getMakesByType = function (type) {
        return this.http.get(this.getMakeByTypeURL + type + '?format=json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['Results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMakesByType', [])));
    };
    AutoService.prototype.getModelsByMakeId = function (makeId) {
        return this.http.get(this.getModelsByMakeIdURL + makeId + '?format=json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['Results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getModelsByMakeId', [])));
    };
    AutoService.prototype.getManufacturerDetails = function (name) {
        return this.http.get(this.getManufacturerDetailsURL + name + '?format=json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['Results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getManufacturerDetails', [])));
    };
    AutoService.prototype.getMakesByManufacturer = function (name) {
        return this.http.get(this.getMakeForManufacturerURL + name + '?format=json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['Results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getMakesByManufacturer', [])));
    };
    AutoService.prototype.decodeVIN = function () {
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    AutoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AutoService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AutoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AutoService);
    return AutoService;
}());



/***/ }),

/***/ "./src/app/covid/covid.component.css":
/*!*******************************************!*\
  !*** ./src/app/covid/covid.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY292aWQvY292aWQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY292aWQvY292aWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/covid/covid.component.ts":
/*!******************************************!*\
  !*** ./src/app/covid/covid.component.ts ***!
  \******************************************/
/*! exports provided: CovidComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidComponent", function() { return CovidComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./covid.service */ "./src/app/covid/covid.service.ts");



var CovidComponent = /** @class */ (function () {
    function CovidComponent(covidService) {
        this.covidService = covidService;
        this.covidCounts = [];
    }
    CovidComponent.prototype.ngOnInit = function () {
        this.getCovidCounts();
    };
    CovidComponent.prototype.getCovidCounts = function () {
        var _this = this;
        this.covidService.getCovidCounts()
            .subscribe(function (response) { return _this.covidCounts = response; });
    };
    CovidComponent.ctorParameters = function () { return [
        { type: _covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"] }
    ]; };
    CovidComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-covid',
            template: __webpack_require__(/*! raw-loader!./covid.component.html */ "./node_modules/raw-loader/index.js!./src/app/covid/covid.component.html"),
            styles: [__webpack_require__(/*! ./covid.component.css */ "./src/app/covid/covid.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"]])
    ], CovidComponent);
    return CovidComponent;
}());



/***/ }),

/***/ "./src/app/covid/covid.service.ts":
/*!****************************************!*\
  !*** ./src/app/covid/covid.service.ts ***!
  \****************************************/
/*! exports provided: CovidService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CovidService", function() { return CovidService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var CovidService = /** @class */ (function () {
    function CovidService(http) {
        this.http = http;
    }
    CovidService.prototype.getCovidCounts = function () {
        return this.http.get('/api/getCovidCounts.php')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    CovidService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    CovidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CovidService);
    return CovidService;
}());



/***/ }),

/***/ "./src/app/derek/derek.component.css":
/*!*******************************************!*\
  !*** ./src/app/derek/derek.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\r\n    width: 50%;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVyZWsvZGVyZWsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZGVyZWsvZGVyZWsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/derek/derek.component.ts":
/*!******************************************!*\
  !*** ./src/app/derek/derek.component.ts ***!
  \******************************************/
/*! exports provided: DerekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DerekComponent", function() { return DerekComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _derek_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./derek.service */ "./src/app/derek/derek.service.ts");



var DerekComponent = /** @class */ (function () {
    function DerekComponent(derekService) {
        this.derekService = derekService;
        this.dereksLinks = [];
    }
    DerekComponent.prototype.ngOnInit = function () {
        this.getLinks();
    };
    DerekComponent.prototype.getLinks = function () {
        var _this = this;
        this.derekService.getLinks()
            .subscribe(function (response) { return _this.dereksLinks = response; });
    };
    DerekComponent.ctorParameters = function () { return [
        { type: _derek_service__WEBPACK_IMPORTED_MODULE_2__["DerekService"] }
    ]; };
    DerekComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-derek',
            template: __webpack_require__(/*! raw-loader!./derek.component.html */ "./node_modules/raw-loader/index.js!./src/app/derek/derek.component.html"),
            styles: [__webpack_require__(/*! ./derek.component.css */ "./src/app/derek/derek.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_derek_service__WEBPACK_IMPORTED_MODULE_2__["DerekService"]])
    ], DerekComponent);
    return DerekComponent;
}());



/***/ }),

/***/ "./src/app/derek/derek.service.ts":
/*!****************************************!*\
  !*** ./src/app/derek/derek.service.ts ***!
  \****************************************/
/*! exports provided: DerekService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DerekService", function() { return DerekService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DerekService = /** @class */ (function () {
    function DerekService(http) {
        this.http = http;
    }
    DerekService.prototype.getLinks = function () {
        return this.http.get('assets/data/derekslinks.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLinks', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DerekService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DerekService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DerekService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DerekService);
    return DerekService;
}());



/***/ }),

/***/ "./src/app/dunkin/dunkin.component.css":
/*!*********************************************!*\
  !*** ./src/app/dunkin/dunkin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R1bmtpbi9kdW5raW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/dunkin/dunkin.component.ts":
/*!********************************************!*\
  !*** ./src/app/dunkin/dunkin.component.ts ***!
  \********************************************/
/*! exports provided: DunkinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DunkinComponent", function() { return DunkinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dunkin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dunkin.service */ "./src/app/dunkin/dunkin.service.ts");
/* harmony import */ var _shared_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/state.service */ "./src/app/shared/state.service.ts");




var DunkinComponent = /** @class */ (function () {
    function DunkinComponent(dunkinService, stateService) {
        this.dunkinService = dunkinService;
        this.stateService = stateService;
        this.states = [];
    }
    DunkinComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    DunkinComponent.prototype.getStates = function () {
        var _this = this;
        this.stateService.getStates()
            .subscribe(function (response) { return _this.states = response; });
    };
    DunkinComponent.prototype.getDunkinByState = function (state) {
        var _this = this;
        this.dunkinService.getDunkinByState(state)
            .subscribe(function (dunkin) { return _this.dunkins = dunkin; });
    };
    DunkinComponent.ctorParameters = function () { return [
        { type: _dunkin_service__WEBPACK_IMPORTED_MODULE_2__["DunkinService"] },
        { type: _shared_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }
    ]; };
    DunkinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dunkin',
            template: __webpack_require__(/*! raw-loader!./dunkin.component.html */ "./node_modules/raw-loader/index.js!./src/app/dunkin/dunkin.component.html"),
            styles: [__webpack_require__(/*! ./dunkin.component.css */ "./src/app/dunkin/dunkin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dunkin_service__WEBPACK_IMPORTED_MODULE_2__["DunkinService"], _shared_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], DunkinComponent);
    return DunkinComponent;
}());



/***/ }),

/***/ "./src/app/dunkin/dunkin.service.ts":
/*!******************************************!*\
  !*** ./src/app/dunkin/dunkin.service.ts ***!
  \******************************************/
/*! exports provided: DunkinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DunkinService", function() { return DunkinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var DunkinService = /** @class */ (function () {
    function DunkinService(http) {
        this.http = http;
    }
    DunkinService.prototype.getDunkin = function () {
        return this.http.get('api/dunkin')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDunkin', [])));
    };
    DunkinService.prototype.getDunkinByState = function (state) {
        return this.http.get('api/dunkin/byState?state=' + state)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDunkin', [])));
    };
    DunkinService.prototype.getDunkinNearGeo = function (latitude, longitude) {
        return this.http.get('api/getDunkinDonutLocations.php?lat=' + latitude + "&long=" + longitude)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getDunkin', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    DunkinService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    DunkinService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DunkinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DunkinService);
    return DunkinService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/library/library.component.css":
/*!***********************************************!*\
  !*** ./src/app/library/library.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpYnJhcnkvbGlicmFyeS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/library/library.component.ts":
/*!**********************************************!*\
  !*** ./src/app/library/library.component.ts ***!
  \**********************************************/
/*! exports provided: LibraryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LibraryComponent", function() { return LibraryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LibraryComponent = /** @class */ (function () {
    function LibraryComponent() {
    }
    LibraryComponent.prototype.ngOnInit = function () {
    };
    LibraryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-library',
            template: __webpack_require__(/*! raw-loader!./library.component.html */ "./node_modules/raw-loader/index.js!./src/app/library/library.component.html"),
            styles: [__webpack_require__(/*! ./library.component.css */ "./src/app/library/library.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LibraryComponent);
    return LibraryComponent;
}());



/***/ }),

/***/ "./src/app/lindsey/lindsey.component.css":
/*!***********************************************!*\
  !*** ./src/app/lindsey/lindsey.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmRzZXkvbGluZHNleS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lindsey/lindsey.component.ts":
/*!**********************************************!*\
  !*** ./src/app/lindsey/lindsey.component.ts ***!
  \**********************************************/
/*! exports provided: LindseyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LindseyComponent", function() { return LindseyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LindseyComponent = /** @class */ (function () {
    function LindseyComponent() {
    }
    LindseyComponent.prototype.ngOnInit = function () {
    };
    LindseyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lindsey',
            template: __webpack_require__(/*! raw-loader!./lindsey.component.html */ "./node_modules/raw-loader/index.js!./src/app/lindsey/lindsey.component.html"),
            styles: [__webpack_require__(/*! ./lindsey.component.css */ "./src/app/lindsey/lindsey.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LindseyComponent);
    return LindseyComponent;
}());



/***/ }),

/***/ "./src/app/lori/lori.component.css":
/*!*****************************************!*\
  !*** ./src/app/lori/lori.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvcmkvbG9yaS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lori/lori.component.ts":
/*!****************************************!*\
  !*** ./src/app/lori/lori.component.ts ***!
  \****************************************/
/*! exports provided: LoriComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoriComponent", function() { return LoriComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _lori_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lori.service */ "./src/app/lori/lori.service.ts");



var LoriComponent = /** @class */ (function () {
    function LoriComponent(loriService) {
        this.loriService = loriService;
        this.lorisLinks = [];
    }
    LoriComponent.prototype.ngOnInit = function () {
        this.getLinks();
    };
    LoriComponent.prototype.getLinks = function () {
        var _this = this;
        this.loriService.getLinks()
            .subscribe(function (response) { return _this.lorisLinks = response; });
    };
    LoriComponent.ctorParameters = function () { return [
        { type: _lori_service__WEBPACK_IMPORTED_MODULE_2__["LoriService"] }
    ]; };
    LoriComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lori',
            template: __webpack_require__(/*! raw-loader!./lori.component.html */ "./node_modules/raw-loader/index.js!./src/app/lori/lori.component.html"),
            styles: [__webpack_require__(/*! ./lori.component.css */ "./src/app/lori/lori.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_lori_service__WEBPACK_IMPORTED_MODULE_2__["LoriService"]])
    ], LoriComponent);
    return LoriComponent;
}());



/***/ }),

/***/ "./src/app/lori/lori.service.ts":
/*!**************************************!*\
  !*** ./src/app/lori/lori.service.ts ***!
  \**************************************/
/*! exports provided: LoriService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoriService", function() { return LoriService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var LoriService = /** @class */ (function () {
    function LoriService(http) {
        this.http = http;
    }
    LoriService.prototype.getLinks = function () {
        return this.http.get('assets/data/lorislinks.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getLinks', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    LoriService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    LoriService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoriService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoriService);
    return LoriService;
}());



/***/ }),

/***/ "./src/app/marvel/marvel.component.css":
/*!*********************************************!*\
  !*** ./src/app/marvel/marvel.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcnZlbC9tYXJ2ZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/marvel/marvel.component.ts":
/*!********************************************!*\
  !*** ./src/app/marvel/marvel.component.ts ***!
  \********************************************/
/*! exports provided: MarvelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelComponent", function() { return MarvelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _marvel_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marvel.service */ "./src/app/marvel/marvel.service.ts");



var MarvelComponent = /** @class */ (function () {
    function MarvelComponent(marvelService) {
        this.marvelService = marvelService;
        this.series = [];
        this.characters = [];
        this.characterById = [];
    }
    MarvelComponent.prototype.ngOnInit = function () {
        this.getCharacters();
    };
    MarvelComponent.prototype.getCharacters = function () {
        var _this = this;
        this.marvelService.getCharacters()
            .subscribe(function (response) { return _this.characters = response; });
    };
    MarvelComponent.prototype.getCharacterById = function (id) {
        var _this = this;
        this.marvelService.getCharacterById(id)
            .subscribe(function (response) { return _this.characterById = response; });
    };
    MarvelComponent.prototype.getSeries = function () {
        var _this = this;
        this.marvelService.getSeries()
            .subscribe(function (response) { return _this.series = response; });
    };
    MarvelComponent.prototype.getDetails = function (serie) {
    };
    MarvelComponent.ctorParameters = function () { return [
        { type: _marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"] }
    ]; };
    MarvelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-marvel',
            template: __webpack_require__(/*! raw-loader!./marvel.component.html */ "./node_modules/raw-loader/index.js!./src/app/marvel/marvel.component.html"),
            styles: [__webpack_require__(/*! ./marvel.component.css */ "./src/app/marvel/marvel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_marvel_service__WEBPACK_IMPORTED_MODULE_2__["MarvelService"]])
    ], MarvelComponent);
    return MarvelComponent;
}());



/***/ }),

/***/ "./src/app/marvel/marvel.service.ts":
/*!******************************************!*\
  !*** ./src/app/marvel/marvel.service.ts ***!
  \******************************************/
/*! exports provided: MarvelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarvelService", function() { return MarvelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var MarvelService = /** @class */ (function () {
    function MarvelService(http) {
        this.http = http;
        this.baseUrl = "https://gateway.marvel.com:443/v1/public/";
        this.apiKey = "1acc0272c26b58f06f418cf285aaf60c";
    }
    MarvelService.prototype.getCharacters = function () {
        return this.http.get('assets/data/superHeroes.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCharacters', [])));
    };
    MarvelService.prototype.getCharacterById = function (id) {
        return this.http.get(this.baseUrl + "characters/" + id + "?apikey=" + this.apiKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) { return console.log(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getCharacterById', [])));
    };
    MarvelService.prototype.getSeries = function () {
        return this.http.get(this.baseUrl + "series?apikey=" + this.apiKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (response) { return console.log(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getSeries', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    MarvelService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    MarvelService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MarvelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MarvelService);
    return MarvelService;
}());



/***/ }),

/***/ "./src/app/nps/nps.component.css":
/*!***************************************!*\
  !*** ./src/app/nps/nps.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flag {\n    width: 200px;\n    height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbnBzL25wcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ucHMvbnBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxhZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/nps/nps.component.ts":
/*!**************************************!*\
  !*** ./src/app/nps/nps.component.ts ***!
  \**************************************/
/*! exports provided: NpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpsComponent", function() { return NpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nps.service */ "./src/app/nps/nps.service.ts");
/* harmony import */ var _shared_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/state.service */ "./src/app/shared/state.service.ts");




var NpsComponent = /** @class */ (function () {
    function NpsComponent(npsService, stateService) {
        this.npsService = npsService;
        this.stateService = stateService;
        this.parks = [];
        this.states = [];
    }
    NpsComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    NpsComponent.prototype.getParks = function (stateCode) {
        var _this = this;
        this.npsService.getParks(stateCode)
            .subscribe(function (response) { return _this.parks = response; });
    };
    NpsComponent.prototype.getStates = function () {
        var _this = this;
        this.stateService.getStates()
            .subscribe(function (response) { return _this.states = response; });
    };
    NpsComponent.ctorParameters = function () { return [
        { type: _nps_service__WEBPACK_IMPORTED_MODULE_2__["NpsService"] },
        { type: _shared_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }
    ]; };
    NpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nps',
            template: __webpack_require__(/*! raw-loader!./nps.component.html */ "./node_modules/raw-loader/index.js!./src/app/nps/nps.component.html"),
            styles: [__webpack_require__(/*! ./nps.component.css */ "./src/app/nps/nps.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_nps_service__WEBPACK_IMPORTED_MODULE_2__["NpsService"], _shared_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], NpsComponent);
    return NpsComponent;
}());



/***/ }),

/***/ "./src/app/nps/nps.service.ts":
/*!************************************!*\
  !*** ./src/app/nps/nps.service.ts ***!
  \************************************/
/*! exports provided: NpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NpsService", function() { return NpsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var NpsService = /** @class */ (function () {
    function NpsService(http) {
        this.http = http;
        this.baseUrl = "https://developer.nps.gov/api/v1/parks?fields=images&limit=50&api_key=8sBuYXBQNGxwSU3ER3S6Xjd4Ys3COHuINh3KX9hn";
    }
    NpsService.prototype.getParks = function (stateCode) {
        return this.http.get(this.baseUrl + "&stateCode=" + stateCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['data']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getParks', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    NpsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    NpsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    NpsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], NpsService);
    return NpsService;
}());



/***/ }),

/***/ "./src/app/performance/performance.component.css":
/*!*******************************************************!*\
  !*** ./src/app/performance/performance.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlcmZvcm1hbmNlL3BlcmZvcm1hbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/performance/performance.component.ts":
/*!******************************************************!*\
  !*** ./src/app/performance/performance.component.ts ***!
  \******************************************************/
/*! exports provided: PerformanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceComponent", function() { return PerformanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _performance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./performance.service */ "./src/app/performance/performance.service.ts");



var PerformanceComponent = /** @class */ (function () {
    function PerformanceComponent(performanceService) {
        this.performanceService = performanceService;
        this.timings = [];
        this.industries = [];
    }
    PerformanceComponent.prototype.ngOnInit = function () {
        this.getIndustries();
    };
    PerformanceComponent.prototype.getTimingsByIndustryCode = function (industryId) {
        var _this = this;
        this.performanceService.getTimingsByIndustryId(industryId)
            .subscribe(function (response) { return _this.timings = response; });
    };
    PerformanceComponent.prototype.getIndustries = function () {
        var _this = this;
        this.performanceService.getIndustries()
            .subscribe(function (response) { return _this.industries = response; });
    };
    PerformanceComponent.ctorParameters = function () { return [
        { type: _performance_service__WEBPACK_IMPORTED_MODULE_2__["PerformanceService"] }
    ]; };
    PerformanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-performance',
            template: __webpack_require__(/*! raw-loader!./performance.component.html */ "./node_modules/raw-loader/index.js!./src/app/performance/performance.component.html"),
            styles: [__webpack_require__(/*! ./performance.component.css */ "./src/app/performance/performance.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_performance_service__WEBPACK_IMPORTED_MODULE_2__["PerformanceService"]])
    ], PerformanceComponent);
    return PerformanceComponent;
}());



/***/ }),

/***/ "./src/app/performance/performance.service.ts":
/*!****************************************************!*\
  !*** ./src/app/performance/performance.service.ts ***!
  \****************************************************/
/*! exports provided: PerformanceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformanceService", function() { return PerformanceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PerformanceService = /** @class */ (function () {
    function PerformanceService(http) {
        this.http = http;
    }
    PerformanceService.prototype.getTimingsByIndustryId = function (industryId) {
        return this.http.get('/api/getTimingsByIndustryId.php?industryId=' + industryId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getTimingsByIndustryId', [])));
    };
    PerformanceService.prototype.getIndustries = function () {
        return this.http.get('/api/getIndustries.php')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getIndustries', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    PerformanceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    PerformanceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PerformanceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PerformanceService);
    return PerformanceService;
}());



/***/ }),

/***/ "./src/app/places/places.component.css":
/*!*********************************************!*\
  !*** ./src/app/places/places.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\r\n    width: 25%;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGxhY2VzL3BsYWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wbGFjZXMvcGxhY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ZnIHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/places/places.component.ts":
/*!********************************************!*\
  !*** ./src/app/places/places.component.ts ***!
  \********************************************/
/*! exports provided: PlacesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesComponent", function() { return PlacesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _places_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./places.service */ "./src/app/places/places.service.ts");



var PlacesComponent = /** @class */ (function () {
    function PlacesComponent(placesService) {
        var _this = this;
        this.placesService = placesService;
        this.places = [];
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (pos) {
                _this.long = +pos.coords.longitude;
                _this.lat = +pos.coords.latitude;
                _this.getPlaces();
            });
        }
    }
    PlacesComponent.prototype.ngOnInit = function () { };
    PlacesComponent.prototype.getPlaces = function () {
        var _this = this;
        this.placesService.getPlaces(this.lat, this.long)
            .subscribe(function (response) { return _this.places = response; });
    };
    PlacesComponent.ctorParameters = function () { return [
        { type: _places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"] }
    ]; };
    PlacesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-places',
            template: __webpack_require__(/*! raw-loader!./places.component.html */ "./node_modules/raw-loader/index.js!./src/app/places/places.component.html"),
            styles: [__webpack_require__(/*! ./places.component.css */ "./src/app/places/places.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_places_service__WEBPACK_IMPORTED_MODULE_2__["PlacesService"]])
    ], PlacesComponent);
    return PlacesComponent;
}());



/***/ }),

/***/ "./src/app/places/places.service.ts":
/*!******************************************!*\
  !*** ./src/app/places/places.service.ts ***!
  \******************************************/
/*! exports provided: PlacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlacesService", function() { return PlacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var PlacesService = /** @class */ (function () {
    function PlacesService(http) {
        this.http = http;
    }
    PlacesService.prototype.getPlaces = function (lat, long) {
        return this.http.get('/api/getPlaces.php?lat=' + lat + '&long=' + long)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    PlacesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    PlacesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PlacesService);
    return PlacesService;
}());



/***/ }),

/***/ "./src/app/recreation/recreation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/recreation/recreation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flag {\n    width: 200px;\n    height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjcmVhdGlvbi9yZWNyZWF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3JlY3JlYXRpb24vcmVjcmVhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsYWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/recreation/recreation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recreation/recreation.component.ts ***!
  \****************************************************/
/*! exports provided: RecreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecreationComponent", function() { return RecreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _recreation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recreation.service */ "./src/app/recreation/recreation.service.ts");
/* harmony import */ var _shared_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/state.service */ "./src/app/shared/state.service.ts");




var RecreationComponent = /** @class */ (function () {
    function RecreationComponent(recreationService, stateService) {
        this.recreationService = recreationService;
        this.stateService = stateService;
        this.organizations = [];
        this.recreationalAreas = [];
        this.states = [];
    }
    RecreationComponent.prototype.ngOnInit = function () {
        this.getStates();
    };
    RecreationComponent.prototype.getOrganizations = function () {
        var _this = this;
        this.recreationService.getOrganizations()
            .subscribe(function (response) { return _this.organizations = response; });
    };
    RecreationComponent.prototype.getRecreationalAreas = function (stateCode) {
        var _this = this;
        this.recreationService.getRecreationalAreasByState(stateCode)
            .subscribe(function (response) { return _this.recreationalAreas = response; });
    };
    RecreationComponent.prototype.getStates = function () {
        var _this = this;
        this.stateService.getStates()
            .subscribe(function (response) { return _this.states = response; });
    };
    RecreationComponent.ctorParameters = function () { return [
        { type: _recreation_service__WEBPACK_IMPORTED_MODULE_2__["RecreationService"] },
        { type: _shared_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }
    ]; };
    RecreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recreation',
            template: __webpack_require__(/*! raw-loader!./recreation.component.html */ "./node_modules/raw-loader/index.js!./src/app/recreation/recreation.component.html"),
            styles: [__webpack_require__(/*! ./recreation.component.css */ "./src/app/recreation/recreation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_recreation_service__WEBPACK_IMPORTED_MODULE_2__["RecreationService"], _shared_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]])
    ], RecreationComponent);
    return RecreationComponent;
}());



/***/ }),

/***/ "./src/app/recreation/recreation.service.ts":
/*!**************************************************!*\
  !*** ./src/app/recreation/recreation.service.ts ***!
  \**************************************************/
/*! exports provided: RecreationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecreationService", function() { return RecreationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var RecreationService = /** @class */ (function () {
    //http://usda.github.io/RIDB/
    function RecreationService(http) {
        this.http = http;
        this.apiKey = '3C9D95801FC943DEA870FB27310E8761';
    }
    RecreationService.prototype.getOrganizations = function () {
        return this.http.get('https://ridb.recreation.gov/api/v1/organizations/?apiKey=' + this.apiKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['RECDATA']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getOrganizations', [])));
    };
    RecreationService.prototype.getRecreationalAreasByState = function (stateCode) {
        return this.http.get('https://ridb.recreation.gov/api/v1/recareas?state=' + stateCode + '&apiKey=' + this.apiKey)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['RECDATA']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getRecreationalAreasByState', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    RecreationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    RecreationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    RecreationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RecreationService);
    return RecreationService;
}());



/***/ }),

/***/ "./src/app/shared/state.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/state.service.ts ***!
  \*****************************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var StateService = /** @class */ (function () {
    function StateService(http) {
        this.http = http;
    }
    StateService.prototype.getStates = function () {
        return this.http.get('assets/data/states.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getStates', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    StateService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    StateService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    StateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], StateService);
    return StateService;
}());



/***/ }),

/***/ "./src/app/ships/ships.component.css":
/*!*******************************************!*\
  !*** ./src/app/ships/ships.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .container-fluid {\n    background-image: url('/assets/images/Emblem_of_the_United_States_Navy.svg');\n    background-repeat: no-repeat;\n    background-attachment: fixed;\n    background-position: center;\n} */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hpcHMvc2hpcHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7R0FLRyIsImZpbGUiOiJzcmMvYXBwL3NoaXBzL3NoaXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0VtYmxlbV9vZl90aGVfVW5pdGVkX1N0YXRlc19OYXZ5LnN2ZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59ICovIl19 */"

/***/ }),

/***/ "./src/app/ships/ships.component.ts":
/*!******************************************!*\
  !*** ./src/app/ships/ships.component.ts ***!
  \******************************************/
/*! exports provided: ShipsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsComponent", function() { return ShipsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ships_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ships.service */ "./src/app/ships/ships.service.ts");



var ShipsComponent = /** @class */ (function () {
    function ShipsComponent(shipsService) {
        this.shipsService = shipsService;
        this.ships = [];
        this.shipTypes = [];
    }
    ShipsComponent.prototype.ngOnInit = function () {
        this.getShipTypes();
    };
    ShipsComponent.prototype.getShipTypes = function () {
        var _this = this;
        this.shipsService.getShipTypes()
            .subscribe(function (response) { return _this.shipTypes = response; });
    };
    ShipsComponent.prototype.getShipsByType = function (shipType) {
        var _this = this;
        this.shipsService.getShipsByType(shipType)
            .subscribe(function (response) { return _this.ships = response; });
    };
    ShipsComponent.prototype.selectShip = function (ship) {
        this.selectedShip = ship;
    };
    ShipsComponent.ctorParameters = function () { return [
        { type: _ships_service__WEBPACK_IMPORTED_MODULE_2__["ShipsService"] }
    ]; };
    ShipsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ships',
            template: __webpack_require__(/*! raw-loader!./ships.component.html */ "./node_modules/raw-loader/index.js!./src/app/ships/ships.component.html"),
            styles: [__webpack_require__(/*! ./ships.component.css */ "./src/app/ships/ships.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ships_service__WEBPACK_IMPORTED_MODULE_2__["ShipsService"]])
    ], ShipsComponent);
    return ShipsComponent;
}());



/***/ }),

/***/ "./src/app/ships/ships.service.ts":
/*!****************************************!*\
  !*** ./src/app/ships/ships.service.ts ***!
  \****************************************/
/*! exports provided: ShipsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShipsService", function() { return ShipsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var ShipsService = /** @class */ (function () {
    function ShipsService(http) {
        this.http = http;
    }
    ShipsService.prototype.getShipTypes = function () {
        return this.http.get('api/getShipTypes.php')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getShipTypes', [])));
    };
    ShipsService.prototype.getShipsByType = function (shipType) {
        return this.http.get('api/getShipsByType.php?shipType=' + shipType)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getShipsByType', [])));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ShipsService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ShipsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ShipsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShipsService);
    return ShipsService;
}());



/***/ }),

/***/ "./src/app/snap/snap.component.css":
/*!*****************************************!*\
  !*** ./src/app/snap/snap.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NuYXAvc25hcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/snap/snap.component.ts":
/*!****************************************!*\
  !*** ./src/app/snap/snap.component.ts ***!
  \****************************************/
/*! exports provided: SnapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnapComponent", function() { return SnapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SnapComponent = /** @class */ (function () {
    function SnapComponent() {
    }
    SnapComponent.prototype.ngOnInit = function () {
    };
    SnapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snap',
            template: __webpack_require__(/*! raw-loader!./snap.component.html */ "./node_modules/raw-loader/index.js!./src/app/snap/snap.component.html"),
            styles: [__webpack_require__(/*! ./snap.component.css */ "./src/app/snap/snap.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SnapComponent);
    return SnapComponent;
}());



/***/ }),

/***/ "./src/app/swapi/swapi.component.css":
/*!*******************************************!*\
  !*** ./src/app/swapi/swapi.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3YXBpL3N3YXBpLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/swapi/swapi.component.ts":
/*!******************************************!*\
  !*** ./src/app/swapi/swapi.component.ts ***!
  \******************************************/
/*! exports provided: SwapiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiComponent", function() { return SwapiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swapi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swapi.service */ "./src/app/swapi/swapi.service.ts");



var SwapiComponent = /** @class */ (function () {
    function SwapiComponent(swapiService) {
        this.swapiService = swapiService;
        this.characters = [];
    }
    SwapiComponent.prototype.ngOnInit = function () {
        this.getFilms();
    };
    SwapiComponent.prototype.getFilms = function () {
        var _this = this;
        this.swapiService.getFilms()
            .subscribe(function (response) { return _this.films = response.sort(); });
    };
    SwapiComponent.prototype.getDetails = function (episode_id) {
        this.selectedFilm = this.films.find(function (film) { return film.episode_id == episode_id; });
        this.getCharacters(this.selectedFilm);
        this.getPlanets(this.selectedFilm);
        this.getStarships(this.selectedFilm);
        this.getSpecies(this.selectedFilm);
        this.getVehicles(this.selectedFilm);
    };
    SwapiComponent.prototype.getCharacters = function (film) {
        var _this = this;
        var e_1, _a;
        this.characters = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](film.characters), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                this.swapiService.getCharacter(entry)
                    .subscribe(function (response) { return _this.characters.push(response); });
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SwapiComponent.prototype.characterSelected = function (character) {
        this.selectedCharacter = character;
    };
    SwapiComponent.prototype.getPlanets = function (film) {
        var _this = this;
        var e_2, _a;
        this.planets = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](film.planets), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                this.swapiService.getPlanet(entry)
                    .subscribe(function (response) { return _this.planets.push(response); });
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    SwapiComponent.prototype.planetSelected = function (planet) {
        this.selectedPlanet = planet;
    };
    SwapiComponent.prototype.getStarships = function (film) {
        var _this = this;
        var e_3, _a;
        this.starShips = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](film.starships), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                this.swapiService.getStarship(entry)
                    .subscribe(function (response) { return _this.starShips.push(response); });
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    SwapiComponent.prototype.starShipSelected = function (starShip) {
        this.selectedStarShip = starShip;
    };
    SwapiComponent.prototype.getVehicles = function (film) {
        var _this = this;
        var e_4, _a;
        this.vehicles = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](film.vehicles), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                this.swapiService.getVehicle(entry)
                    .subscribe(function (response) { return _this.vehicles.push(response); });
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
    };
    SwapiComponent.prototype.vehicleSelected = function (vehicle) {
        this.selectedVehicle = vehicle;
    };
    SwapiComponent.prototype.getSpecies = function (film) {
        var _this = this;
        var e_5, _a;
        this.species = [];
        try {
            for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](film.species), _c = _b.next(); !_c.done; _c = _b.next()) {
                var entry = _c.value;
                this.swapiService.getSpecies(entry)
                    .subscribe(function (response) { return _this.species.push(response); });
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
    };
    SwapiComponent.prototype.specieSelected = function (specie) {
        this.selectedSpecie = specie;
    };
    SwapiComponent.ctorParameters = function () { return [
        { type: _swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"] }
    ]; };
    SwapiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swapi',
            template: __webpack_require__(/*! raw-loader!./swapi.component.html */ "./node_modules/raw-loader/index.js!./src/app/swapi/swapi.component.html"),
            styles: [__webpack_require__(/*! ./swapi.component.css */ "./src/app/swapi/swapi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_swapi_service__WEBPACK_IMPORTED_MODULE_2__["SwapiService"]])
    ], SwapiComponent);
    return SwapiComponent;
}());



/***/ }),

/***/ "./src/app/swapi/swapi.service.ts":
/*!****************************************!*\
  !*** ./src/app/swapi/swapi.service.ts ***!
  \****************************************/
/*! exports provided: SwapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapiService", function() { return SwapiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var SwapiService = /** @class */ (function () {
    function SwapiService(http) {
        this.http = http;
        this.baseUrl = 'https://swapi.dev/api/';
    }
    SwapiService.prototype.getFilms = function () {
        return this.http.get(this.baseUrl + 'films/')
            .pipe(
        //tap(response => this.log(`fetched films`)),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response['results']; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getFilms', [])));
    };
    SwapiService.prototype.getCharacter = function (url) {
        return this.http.get(url);
    };
    SwapiService.prototype.getPlanet = function (url) {
        return this.http.get(url);
    };
    SwapiService.prototype.getSpecies = function (url) {
        return this.http.get(url);
    };
    SwapiService.prototype.getStarship = function (url) {
        return this.http.get(url);
    };
    SwapiService.prototype.getVehicle = function (url) {
        return this.http.get(url);
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SwapiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            //this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    SwapiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SwapiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SwapiService);
    return SwapiService;
}());



/***/ }),

/***/ "./src/app/world/world.component.css":
/*!*******************************************!*\
  !*** ./src/app/world/world.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".svg {\r\n    width: 50%;\r\n    height: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ybGQvd29ybGQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvd29ybGQvd29ybGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdmcge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/world/world.component.ts":
/*!******************************************!*\
  !*** ./src/app/world/world.component.ts ***!
  \******************************************/
/*! exports provided: WorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldComponent", function() { return WorldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _world_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./world.service */ "./src/app/world/world.service.ts");



var WorldComponent = /** @class */ (function () {
    function WorldComponent(worldService) {
        this.worldService = worldService;
        this.title = 'World';
        this.countries = [];
        this.states = [];
    }
    WorldComponent.prototype.ngOnInit = function () {
        this.getCountriesNestedLanguages();
    };
    WorldComponent.prototype.getCountriesNestedLanguages = function () {
        var _this = this;
        this.worldService.getCountriesNestedLanguages()
            .subscribe(function (response) { return _this.countries = response; });
    };
    WorldComponent.prototype.getStatesNestedCitiesByCountryCode = function (countryCode) {
        var _this = this;
        this.country = this.countries.find(function (country) { return country.Code === countryCode; });
        this.worldService.getStatesNestedCitiesByCountryCode(countryCode)
            .subscribe(function (response) { return _this.states = response; });
    };
    WorldComponent.ctorParameters = function () { return [
        { type: _world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"] }
    ]; };
    WorldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-world',
            template: __webpack_require__(/*! raw-loader!./world.component.html */ "./node_modules/raw-loader/index.js!./src/app/world/world.component.html"),
            styles: [__webpack_require__(/*! ./world.component.css */ "./src/app/world/world.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_world_service__WEBPACK_IMPORTED_MODULE_2__["WorldService"]])
    ], WorldComponent);
    return WorldComponent;
}());



/***/ }),

/***/ "./src/app/world/world.service.ts":
/*!****************************************!*\
  !*** ./src/app/world/world.service.ts ***!
  \****************************************/
/*! exports provided: WorldService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorldService", function() { return WorldService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var WorldService = /** @class */ (function () {
    function WorldService(http) {
        this.http = http;
    }
    WorldService.prototype.getCountriesNestedLanguages = function () {
        return this.http.get('/api/getCountriesNestedLanguages.php')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    WorldService.prototype.getStatesNestedCitiesByCountryCode = function (countryCode) {
        return this.http.get('/api/getStatesNestedCitiesByCountryCode.php?countryCode=' + countryCode)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    WorldService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    WorldService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], WorldService);
    return WorldService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/media/git/dorey/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map