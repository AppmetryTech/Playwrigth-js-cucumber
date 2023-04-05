Feature: User Authentication tests
  
 Background:
   Given User Navigate to the application
   When User click on login link 


 Scenario:Login with Valide credentials.   
   And User Enter the UserName as "test_chetan@gmail.com"
   And User Enter the password as "Test@1234"
   When User Clickon the login button
   Then Login should be success. 

 Scenario:Login with Valide credentials.   
   And User Enter the UserName as "test_cheta@gmail.com"
   And User Enter the password as "Test@123"
   When User Clickon the login button
   Then Login should fail. 