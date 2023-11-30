import LoginPage from '../pageobjects/loginPage.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')
        await LoginPage.open()
        await LoginPage.errorMessage('locked_out_user', 'secret_sauce')
        await LoginPage.login('problem_user', 'secret_sauce')
        await LoginPage.open()
        await LoginPage.login('performance_glitch_user', 'secret_sauce')
        await LoginPage.open()
        await LoginPage.login('error_user', 'secret_sauce')
        await LoginPage.open()
        await LoginPage.login('visual_user', 'secret_sauce')
        await LoginPage.open()
        await LoginPage.errorMessage('samiscool', 'secret_sauce')
    })
})