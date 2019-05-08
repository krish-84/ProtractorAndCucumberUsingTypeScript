Feature: Validate all the TOP NAV links
    Check if all the top nav links redirect to the target page


    Background:
        Given I am on the home page

    @Smoke
    Scenario Outline: Validate all the TOP NAV links

        When I click on on '<nav_link>' link
        Then I should see '<title_name>' on the title of the page


        Examples:
            | nav_link     | title_name    |
            | STUDENTS     | Student       |
            | PARENTS      | Family        |
            | TEACHERS     | Teacher       |
            | TUTORS       | Tutor         |
            | SUBJECTS     | Subjects      |
            | BLOG         | Blog          |
            | PRICING      | Pricing       |
            | SIGNUP/LOGIN | Get My Grades |

           
           
# report link: file:///C:/Users/abc/Desktop/Krish_Testing/TypeScript/ProtractorWithTypeScript/Typescript/Protractor_TS/cucumber_report.html