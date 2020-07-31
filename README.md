# Dorey
mvn test -DsuiteXmlFile=testsuite.xml
mvn test -Dtest=DoreyTest
mvn test -Dtest=PerformanceTest
mvn -U clean install -Dmaven.test.skip=true
mvn versions:use-latest-releases
mysqldump -u root -p my_derek > my_derek.sql

sudo docker-compose up --scale chrome=5 --scale firefox=5 --scale opera=5 -d

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

curl -X GET "https://developer.nps.gov/api/v1/parks?limit=500&fields=images&api_key=" -H "accept: application/json"
