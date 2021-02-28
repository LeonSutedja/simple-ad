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
3. To add a new promotion type - go to the model/promotion.ts, add a new class for the new promotion type, and remember to add the new class in the poor man's DI (at the bottom of the file).
4. Add unit tests as per require. 
5. Make sure to FIX broken unit test as well!

# About the app

## Simple ad shop
Simple ad shop section is where the main page for this app lives. It contain a single page for the user to:

1. Select user
2. Add advertisement to the cart
3. Remove advertisement to the cart
4. Calculate the total price for the shopping cart

The promotion price will apply depending on the who the user is selected.

## Checkout Service
checkout.service.ts helps to act as a service layer to uses the CheckoutCalculator. This service is a layer where we could extend functionality to error handling, reporting, and other concerns that may not be of a concern to the user directly in general.

## Customer Service
customer.service.ts is the layer where it would grab and search users from the repository or from website. It helps the application to bridge the data. 

## Advertisement Service
advertisement.service.ts is the place where it would grab and search the list of advertisements available to be purchase for the user. 
