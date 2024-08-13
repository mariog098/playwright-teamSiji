

export class DashboardPage {
    private page: any
    header_menu_users: any
    header_menu_inventory: any
    header_menu_stores: any
    header_ask_btn: any
    profile_btn: any
    profile: any
    logout_btn: any
    constructor({ page }) {
        this.header_menu_users = page.getByRole('link', { name: 'Users' })
        this.header_menu_inventory = page.getByRole('link', { name: 'Inventory' })
        this.header_menu_stores = page.getByRole('link', { name: 'Stores' })
        this.header_ask_btn = page.locator('.inline-flex').first()
        this.profile_btn = page.getByRole('menubar')
        this.profile = page.getByRole('menuitem')
        this.logout_btn = page.getByRole('logout-button')
    }

    async clickUsersMenu() {
        await this.header_menu_users.click()
    }

    async clickInventoryMenu() {
        await this.header_menu_inventory.click()
    }

    async clickStoresMenu() {
        await this.header_menu_stores.click()
    }

    async clickAskBtn() {
        await this.header_ask_btn.click()
    }

    async clickProfileBtn() {
        await this.profile_btn.click()
    }

    async clickLogoutBtn() {
        await this.logout_btn.click()
    }

    async clickProfile() {
        await this.profile.click()
    }
}