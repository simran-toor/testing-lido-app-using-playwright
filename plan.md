# Plan

## Contents 
1. Setup 
2. Log in
3. Log out  
4. Incorrect Log in 
5. Create and delete a file 
6. Order files in decending order
7. Order files by date  

## Setup 
1. sign up to Lido ✔️
    - email: qa-st-test@maildrop.cc
    - password: Test-123-!
2. install playwright ✔️
    - `npm init playwright@latest`
3. install dotenv ✔️
    - `npm install dotenv --save`
    - create `.env` file in the root of project to store email and password 
    - add to `.gitignore`
    - set up in config
4. set up folder and file structure ✔️
    - LidoApp\Tests
        - fixtures
            - basePage.js
        - support\pageobjectmodel
            - helpers
                - login.helper.js
            - pages 
                - login.page.js
                - files.page.js
                - spreadsheet.page.js
            - sections 
                - login-page
                    - loginHeader.section.js
                    - loginForm.section.js
                - files-page
                    - contentsBody.section.js
                    - topNavbar.section.js
                - spreadsheet-page
        - login.test.js
        - incorrect-login.test.js
        - logout.test.js
        - create-and-delete-file.test.js
        - file-order-decending.test.js
        - file-order-date.test.js
5. comment out `webkit` and `firefox` in projects section of playwright.config.js ✔️
    - lido does not run on these


## 1. Log in 
### **in tests>support>pageobjectmodel>sections>login-page>loginHeader.section.js**
1. import `test` and `expect` from `@playwright/test`✔️
2. set up `export default class LoginHeader`✔️
4. in constructor assign `page` to `this.page`✔️
5. use codegen to find locator for Login in header✔️
6. write method that returns locator✔️
7. write `async` function to use locator to assert the login header is visible ✔️
### **in tests>support>pageobjectmodel>sections>login-page>loginForm.section.js**
8. set up `export default class LoginForm`✔️
9. in constructor assign `page` to `this.page` ✔️
10. use codegen to find locators for email input, password input and login button ✔️
11. write methods that return locators ✔️
12. write `async` function to use locators to `fill` email and password✔️
13. write `async` function to use locators to `click` login button✔️
### **in tests>support>pageobjectmodel>sections>files-page>topNavbar.section.js**
14. import `expect` from `@playwright/test`✔️
15. set up `export default class TopNavbar`✔️
16. in constructor assign `page` to `this.page`✔️
27. use codegen to find locator for `topNavbarUserMenuButton`✔️
18. write method that returns locator✔️
19. write `async` function to use locator to assert the `topNavbarUserMenuButton` is visible ✔️
### **in tests>support>pageobjectmodel>pages>login.page.js**
20. import `LoginForm` and `LoginHeader` ✔️
21. set up `export default class LoginPage`✔️
22. in constructor initalise properties:✔️
    - `loginForm` of type `LoginForm`
    - `loginHeader` of type `LoginHeader`
23. create `async goto()` to navigate to login page✔️
24. create `async loginPageLoaded` method to call `assertLoginHeaderVisible()` function✔️
25. create `async loginWithEmail` method to call `fillLoginDetails` and `clickLoginButton` functions ✔️
### **in tests>support>pageobjectmodel>pages>files.page.js**
26. import `TopNavbar` class✔️
27. set up `export default class FilesPage`✔️
28. in constructor initalise properties properties:✔️
    - `topNavbar`
29. create `async filesPageLoaded` method to call `assertNavbarUserMenuButtonVisible()` function✔️
### **in tests>fixtures>basePage.js**
30. import `base` from playwright✔️
31. import `LoginPage` and `FilesPage`✔️
32. declare variable `test` and that extends base✔️
33. define fixtures using `async` and `use`✔️
    - `loginPage` 
    - `filesPage`
### **in tests>login.test.js**
34. import `test` from `./fixtures/basePage`✔️
35. create test skeleton✔️
36. provide `loginPage` and `filesPage` as params to `test`✔️
37. navigate to login page✔️
38. call function that asserts login page loaded✔️
39. call function to input form details✔️
40. call function that asserts files page has loaded✔️

## 2. Log out
### **in tests>support>pageobjectmodel>sections>files-page>topNavbar.section.js**
41. create `async` function `clickNavbarUserMenuButton`✔️ 
42. use codegen to find locator for logout button✔️ 
43. write methods that returns locator under✔️ 
44. write `async` function that `uses `click` on `navbarUserMenuButton`✔️
45. write `async` function that `uses `click` on `logOutButton`✔️
### **in tests>support>pageobjectmodel>pages>files.page.js**
46. write `async` function that calls `clickLogoutButton`
### **in tests>logout.test.js**
47. import `test` from `./fixtures/basePage`✔️
48. create test skeleton✔️
49. provide `loginPage` and `filesPage` as params to `test`✔️
50. navigate to login page✔️
51. call function that asserts login page loaded✔️
52. call function to input form details✔️
53. call function that asserts files page has loaded✔️ 
54. call function to click logout button✔️
55. call function to assert login page is visible✔️ 
## create `login()` helper 
### **in tests>support>pageobjectmodel>helpers>login.helper.js **
56. import `LoginPage` and `FilesPage` classes✔️
57. set up `export default class LoginHelper`✔️
58. in constructor initalise properties:✔️
    - `loginPage` 
    - `filesPage`   
59. create `async login()` method to call:✔️
    - `this.loginPage.goto()`
    - `this.loginPage.loginPageLoaded()`
    - `this.loginPage.loginWithEmail()`
    - `this.filesPage.filesPageLoaded()`
### **in tests>fixtures>basePage.js **
60. import `LoginHelper`✔️
61. define new `loginHelper` fixture✔️
## logout v2
### **in tests>logout.test.js**
62. in test call functions: ✔️
    - `loginHelper.login()`
    - `filesPage.logout()`
    - `loginPage.loginPageLoaded()`

## 3. Incorrect Log in
### Decision Table  
|  **Conditions**  |   TC0   |    TC1    |    TC2    |    TC3    |  TC4  |   TC5   |    TC6    |   TC7   |    TC8    |
|:----------------:|:-------:|:---------:|:---------:|:---------:|:-----:|:-------:|:---------:|:-------:|:---------:|
| Email (input)    | correct | correct   | incorrect | incorrect | empty | correct | incorrect | empty   | empty     |
| Password (input) | correct | incorrect | correct   | incorrect | empty | empty   | empty     | correct | incorrect |
|    **Actions**   |         |           |           |           |       |         |           |         |           |
| Login            |    ✓    |     x     |     x     |     x     |   x   |    x    |     x     |    x    |     x     |
| Error Message    |    x    |     ✓     |     ✓     |     ✓     |   ✓   |    ✓    |     ✓     |    ✓    |     ✓     | 

63. use codegen to find locators for error messages for each test scenario 
email and password combinations:✔️
    - correct email: `qa-st-test@maildrop.cc`
    - correct password: `Test-123-!`
    - incorrect email: `incorrect@email.com`
    - incorrect password: `incorrectPassword`
    - TC1: `getByText('Email or password incorrect.')`
    - TC2: `getByText('Email or password incorrect.')`
    - TC3: `getByText('Email or password incorrect.')`
    - TC4: `getByText('Please enter a valid email')`
    - TC5: `getByText('Incorrect password')`
    - TC6: `getByText('Incorrect password')`
    - TC7: `getByText('Please enter a valid email')`
    - TC8: `getByText('Please enter a valid email')`
### **in tests>support>pageobjectmodel>sections>login-page>loginForm.section.js **
64. add error message locators✔️
65. write `async` method to assert error messages are visible ✔️
### **in tests>support>pageobjectmodel>pages>login.page.js **
66. create `async` methods for all error messages✔️
67. add `INCORRECT_EMAIL` AND `INCORRECT_PASSWORD` variables to `.env` file
68. create `async` methods for test cases tc2 - tc9 that:✔️
    - call `fillLoginDetails` and input with corresponding values according to test
    - call `clickLoginButton`
    - call `assert-----Visible` - corresponding alert to test
### **in tests>incorrect-login.test.js**
69. import `test` from `basePage.js`✔️
70. use `describe` to group tests✔️
71. write `beforeEach` hook to navigate to login page before each test✔️
72. write tests for each test case and import corresponding action from `login.page.js`✔️
        
## 4. Create and Delete a File
### User Flow of creating and deleting a test 
step 1: enter username 
step 2: enter password
step 3: click `log in with email`
step 4: click `+ New file` button 
step 5: click `X` on popup "Features may be limited for small screens and mobile devices" - check for popup and if appears click x
step 6: click "untitled" - when hovering text popup says "rename"
step 7: rename 
step 8: click logo
step 9: see new file in Files page
step 10: click ... next to file you want to delete 
step 11: click delete from drop down menu
### **in tests>support>pageobjectmodel>sections>files-page>contentBody.section.js **
73. import `expect` from `@playwright/test`✔️
74. create `export default class ContentsBodys✔️
75. in constructor assign `page` to `this.page`✔️
76. use codegen and dev tools to find locators for:
    - number of files visible when first logging in✔️ 
    - `+ New file` button✔️ 
    - popup about screen sizes✔️
    - X popup about screen sizes✔️
    - renaming file✔️
    - lido logo (that takes you back to Files page)
    - new file created
    - number of files after new file created
    - `...` next to new file created
    - `delete` button in drop down menu after `...` clicked
77. write method that returns locators 
78. write `async` function to assert spreadsheet page visible ✔️
79. write `async` function to rename file: ✔️
    - locate using `text` then `click()` first
    - then using same locator use `pressSequentially()` to manunally fill input b/c using `fill()` was not working as it couldn't locate textbox



## 5. Order Files in decending order name and date


