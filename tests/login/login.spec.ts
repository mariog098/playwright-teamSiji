import { expect, test } from "@playwright/test";
import { Assertion, LoginPage } from "../../pages/login_page/loginPage";
import { AuthPage } from "../../pages/auth/authPage";
import { ConstantData } from "../../constant/data";

test.describe('Login', () => {

    test.beforeEach(async ({ page }) => {
        const Auth = new AuthPage({page});
        await Auth.navigateToLogin();
        await Auth.isLoginPageVisible();
    });
    
    test.only('Login with correct credentials', async ({ page }) => {
        const Login = new LoginPage({page});
        await Login.login(ConstantData.username, ConstantData.password);
        await page.pause();
        await expect(page.getByTestId("user-name")).toBeVisible({ timeout: 5000 });
    })

    test('Login with incorrect credentials username', async ({ page }) => {
        const Login = new LoginPage({page});
        await Login.login('username', ConstantData.password);
        await expect(page.getByText('Username or Password is')).toBeVisible({ timeout: 5000 });
    })

    test('Login with incorrect credentials password', async ({ page }) => {
        const Login = new LoginPage({page});
        await Login.login(ConstantData.username, 'password');
        await expect(page.getByText('Username or Password is')).toBeVisible({ timeout: 5000 });
    })

})