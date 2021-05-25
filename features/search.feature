Feature: Validate search functionality on different platforms

Check google.com, yahoo.com, yandex.ru

Scenario: Verify google.com search
Given I am on the google page
When I search google for IT start
Then I see the results provided by google

Scenario: Verify yahoo.com search
Given I am on the yahoo page
When I search yahoo for IT start
Then I see the results provided by yahoo

Scenario: Verify yandex.ru search
Given I am on the yandex page
When I search yandex for IT start
Then I see the results provided by yandex

Scenario Outline: Verify search page
Given I am on the <name> page
When I search <name> for <phrase>
Then I see the results provided by <name>

Examples:
    | name | phrase |
    | google  | IT Start  |
    | yahoo  | Timur  |
    | yandex  | Barak  |