# simple-ad

This simple ad shop application is a single page shop where the user can select which customer it acts on behalf of, add the desired advertisement items, and calculate the final total price according to the promotions applicable for the particular customer. 
User can freely add and remove the advertisement items from the shopping cart.

This simple Ad Shop Shows the uses the following:
1. Typescript with Angular 11.2.3
2. Uses Strategy Pattern for different promotion 

# Running the app
1. npm install
2. npm start
3. (optional) ng test

# To extend the app
1. To add a new customer - go to the data/mock-customer.ts and add a new customer
2. To add existing promotion to the customer - go to the model/checkoutCalculator.ts and extend the CheckoutConfig variable. 
3. To add a new promotion type - go to the model/promotion.ts, add a new class for the new promotion type, and remember to add the new class in the poor man's DI (at the bottom of the file)
