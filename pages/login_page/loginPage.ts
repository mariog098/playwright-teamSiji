import { expect } from "@playwright/test";

export class LoginPage {
    page: any;
    username_field: any;
    password_field: any;
    login_btn: any;

    constructor({ page }) {
        this.page = page
        this.username_field = page.getByPlaceholder('Your Username')
        this.password_field = page.getByPlaceholder('Your password')
        this.login_btn = page.getByRole('button', { name: 'Login' })
    }

    async inputUsername(username) {
        await this.username_field.fill(username)
    }

    async inputPassword(password) {
        await this.password_field.fill(password)
    }

    async clickLoginBtn() {
        await this.login_btn.click()
    }

    async login(username, password) {
        await this.inputUsername(username)
        await this.inputPassword(password)
        await this.clickLoginBtn()
    }
}

export class Assertion {
    page: any
    error_usernameOrPassword: any;
    constructor({ page }){
        this.page = page
        this.error_usernameOrPassword = page.getByText('Username or Password is')
    }

    async assertError() {
        await expect(this.error_usernameOrPassword).toBeVisible()
    }
}

