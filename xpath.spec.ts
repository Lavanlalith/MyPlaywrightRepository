import {test} from "@playwright/test";

test ('Xpath', async({page}) => {
    await page.goto('https://login.salesforce.com/')
    await page.locator('[id="username"]').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('//input[@id="username"]/following::input[@id="Login"]').click()
    await page.waitForTimeout(2000)
    //following-sibling
    await page.locator('//label[contains(text(),"Pass")]/following-sibling::input[1]').fill('TestLeaf@2025')
    //Attribute based xpath
    await page.locator('//input[@id="Login"]').click()
    await page.waitForTimeout(2000)   
})