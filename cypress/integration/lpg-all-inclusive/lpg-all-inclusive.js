import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../PageObjects/HomePage';


//test steps 
Given('I am at the all inclusive page in GoCity website', () => {
    cy.visit('https://gocity.com/boston/en-us/products/all-inclusive');
})