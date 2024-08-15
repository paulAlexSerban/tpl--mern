# The Funny Hat Shop: Requirement Overview
The company sells hats and is called The Funny Hat Online Shop. During COVID-19, the
company realized they can make an online presence by selling their hat products online.

They would like to start selling their hats online. They would like customers to register on their
web site before or after they add items to the basket.

The system should not sell items that are not in stock and the web site needs to check the stock
system for stock levels.

The system should be secure and let users log into their web site. They can either use their own
username and password, or they can log in using google or facebook login.

When new customers check out the basket, the website should connect to a secure payment
gateway for them to be able to pay for the items either using a credit card or Paypal. Provide
solution options which payment gateways are best to use for this website.

When the user completes the payments, an automatic email should be generated that includes
the order and sent to the customer’s email address. The same email should be forwarded to the
warehouse manager who will process the order.

The sales website should be integrated with the delivery company, called Funny Deliveries’ to
request a pick up and delivery of the items. Also provide the customer with a delivery tracking
number and show the delivery status of their order’s delivery on their order history on the web
site..

When a delivery is in the delivered status, the system should automatically send an invoice to
the customer’s email address and change the status of the order to close.

The company is expecting sales to start slowly, starting in the hundreds in the first month, but
have an aggressive sales strategy and estimate thousands of new sales by the second month.

The solution should cater for peek times during the evenings and weekends. The system should
be online 24/7.

## Technical details:
- The company already has a stock management system that is running on AWS as a web
application with a MySQL database on AWS RDS. The stock management application runs on a
single EC2 instance hosted as a web application using the Apache web server. However, there
is no way to access the stock items on the database. The solution should include the ability for
the sales website to access the stock levels and stock item image from the stock management
database.