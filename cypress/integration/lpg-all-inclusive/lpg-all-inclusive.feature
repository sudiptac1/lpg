Feature: Choose your all inclusive pass

    I want to test choose your all inclusive pass feature in the website

    Scenario: Book a pass for 1 day 1 adult and 1 child

        Given I am at the all inclusive page in GoCity website
        When  I select I day pass from product-stack drop down
        And   I click  to add 1 adult
        And   I click to add 1 child
        Then  I see amount 109 in order total
        And   I click checkout
        Then I should see review order page
        And  I see corect amount that is 109 in Your Cart
    Scenario Outline: Check correct order total amount  for Booking  a pass

        Given I am at the all inclusive page in GoCity website
        When  I select   <daypass> from product-stack drop down
        And   I click  to add  <adult_no>
        And   I click to add   <child_no>
        Then  I should see  correct amount   in the <order_total>

        Examples:

            | daypass | adult_no | child_no | order_total |
            | 1       | 1        | 1        | 109         |
            | 2       | 1        | 1        | 155         |
            | 3       | 2        | 0        | 262         |


    Scenario: Check payment confirmation to Book a pass for 1 day 1 adult and 1 child

        Given I am at the all inclusive page in GoCity website
        When  I select I day pass from product-stack drop down
        And   I click  to add 1 adult
        And   I click to add 1 child
        Then  I see amount 109 in order total
        And   I click checkout
        Then I should see review order page
        And  I see corect amount that is 109 in Your Cart
        When I click continue to payment
        Then I should be in payment page
        And  I should get same anount 109 in Your cart


