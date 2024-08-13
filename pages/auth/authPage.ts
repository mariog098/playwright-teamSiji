import { chromium, expect } from "@playwright/test";
import { ConstantData } from "../../constant/data";

export class AuthPage {
  private page: any; // Use private modifier for better encapsulation
  private baseURL: string;

  constructor({ page }) {
    this.page = page;
    this.baseURL = ConstantData.baseUrl;
  }

  async navigateToLogin() { // Descriptive method name
    await this.page.goto(`${this.baseURL}/login`); // Template literal for string concatenation
    // await expect(this.page.locator('.login-title')).toBeVisible({ timeout: 5000 }); // More specific locator and timeout for robustness
  }

  async isLoginPageVisible() { // New method for reusability
    // return await expect(this.page.locator('.login-title')).toBeVisible({ timeout: 5000 });
  }
}
