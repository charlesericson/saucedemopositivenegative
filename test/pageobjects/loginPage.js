import { $ } from '@wdio/globals'
import Page from './pageUrl.js';
import homePage from '../pageobjects/homePage.js'


class LoginPage extends Page {
   
    get loginUsername () {
        return $('#user-name');
    }

    get loginPassword () {
        return $('#password');
    }
    
    get messageError () {
        return $('//h3[@data-test="error"]');
    }

    get loginButton () {
        return $('//input[@value="Login"]');
    }
   
    async login (username, password) {
        await this.loginUsername.setValue(username);
        await this.loginPassword.setValue(password);
        await this.loginButton.click();
        await expect(homePage.productsPage).toBeExisting()
    }

    async errorMessage (lockedOutUsername, correctPassword) {
        await this.loginUsername.setValue(lockedOutUsername);
        await this.loginPassword.setValue(correctPassword);
        await this.loginButton.click();
        await expect(this.messageError).toBeDisplayed();
    }
   
    open () {
        return super.open('');
    }
}

export default new LoginPage();
