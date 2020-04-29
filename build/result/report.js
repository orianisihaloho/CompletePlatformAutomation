$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/SearchWikipedia.feature");
formatter.feature({
  "name": "Search Wikipedia",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.scenario({
  "name": "Search article about Apple on wikipedia",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open wikipedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userOpenWikipediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Apple\" on home page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userInputSearchOnHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button search on home page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see article with title \"Apple\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search article about Pear on wikipedia",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Web"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User open wikipedia home page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userOpenWikipediaHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User input search \"Pear\" on home page",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userInputSearchOnHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click button search on home page",
  "keyword": "And "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userClickButtonSearchOnHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see article with title \"Pear\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.WikipediaStepsDefinition.userSeeArticleWithTitleOnArticlePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});