import {test} from "@playwright/test"

test ('cssSelectors Basics', async({page})=> 

{
    await page.goto('http://leaftaps.com/opentaps/control/main')
    //idValue - Enter the username
    await page.locator('#username').fill('democsr2')
    //Immediate Siblings - Enter the password
    await page.locator('label + input').nth(1).fill('crmsfa')
    await page.waitForTimeout(2000)
    //classValue - click on the login button
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(2000)
    //By Attribute - Click on CRM/SFA
    await page.locator('div[id="button"]').click()
    
    //Child Combinator - click on Leads
    await page.locator('div > a').nth(6).click()
   
    //descendant combinator - Click Create lead
    await page.locator('ul li').nth(17).click()
   
   //By Attribute - Fill the company name
     await page.locator('input[name="companyName"]').last().fill('Tata Consultancy')
      
    
   //By Attribute - Fill First Name
   await page.locator('input[name="firstNameLocal"]').fill('Lavanya')

   //By Attribute - Fill Last Name
   await page.locator('input[name="lastNameLocal"]').fill('Lalith')
   
   //By Attribute - Fill Salutation
   await page.locator('input[name="personalTitle"]').fill('Miss')

   //By Attribute - Fill Title
   await page.locator('input[name="generalProfTitle"]').fill('Testing')
   
   //By Attribute - Fill Annual Review
   await page.locator('input[name="annualRevenue"]').fill('30000000')

   //By Attribute - Fill Department
   await page.locator('input[name="departmentName"]').fill('Testing Team')

   //Locate the source dropdown

   const srcDropdown = page.locator('#createLeadForm_dataSourceId')

   //get all options
   const options = await srcDropdown.locator('option')

   //Get the count of the dropdown values
   const count = await options.count()
   console.log(`Total number of options: ${count}`)

   //iterate through all the options and print each text value

   for(let i = 0; i < count; i++)
   {
    const text = (await options.nth(i).innerText()).trim()
    const value = await options.nth(i).getAttribute('value')
    console.log(`Index ${i} -> Text: "${text}", Value: "${value}"`)

   }

   await page.locator('#createLeadForm_primaryPhoneNumber').fill('8122080919')
   await page.locator('.smallSubmit').click()








   


}
)