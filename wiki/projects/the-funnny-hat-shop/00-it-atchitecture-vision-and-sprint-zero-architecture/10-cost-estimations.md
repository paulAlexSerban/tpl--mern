# Cost Estimations
## T-Shirt Sizing Exercise
| Size | Estimate Work Rance |
| ---- | ------------------- |
| XS   | 1-2 days            |
| S    | 1-2 weeks           |
| M    | 2-4 weeks           |
| L    | 4-8 weeks           |
| XL   | 8-16 weeks          |

## Cost Estimation
| Building Block \ Epic     | Description                                                                                                                             | T-Shirt Size | Weeks    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------ | -------- |
| Web Application Front End | The front end of the website                                                                                                            | XL           | 10       |
| Database                  | Create a database that will store basket items, customer account data and web site sales data                                           | M            | 2        |
| Email Service             | Create an email service using Amazon SES to send order and invooce emails                                                               | M            | 2        |
| Orders                    | Integrate with Stock Management System to generate an order                                                                             | S            | 1        |
| Invoices                  | Integrate with Invoicing System to generate an invoice when the order is delivered                                                      | S            | 1        |
| Deliveries                | Integrate with the Vendor Devlivery API's to request pickup and delivery. Include API calls to get delivery status                      | L            | 4        |
| Security                  | Build authentication for customers to log into the website and create an account. Include the option to use Facebook and Google logins. | S            | 1        |
| Infrastructure            | Setup the AWS VPS, subnets, EC2 instances, and all other Cloud requirements, including the Dev, QA, UAT and Production environments     | M            | 3        |
| Payments                  | Integrate with a payment gateway to woolu customer to pay for the items in the basket                                                   | M            | 2        |
|                           | Total                                                                                                                                   |              | 24 weeks |

An estimate of 24 weeks is made by a collaborative session by the team. This is based on a team effort of 2 developers, 1 business analyst, the solution architect, QA tester and scrum master. This effort is not done by the architect but usually by the project manager or scrum master. The total team value per hour is $180 per hour. If the team works a 40 hour week for 24 weeks, the total amounts to 960 hours, and total amount to $172,800.00.

| Cost Category                                                                        | Qty | Money Value ($) |
| ------------------------------------------------------------------------------------ | --- | --------------- |
| Delivery Cost                                                                        | 960 | 172,800.00      |
| Vendor Software Integration                                                          | 1   | 1500.00         |
| Infrastructure (AWS Costs)                                                           | 1   | 50,000.00       |
|                                                                                      |     |                 |
| Any recurring costs for 12 months. Eg. Annual fees, software licenses, rentals, etc. | 1   | 50,000.00       |
|                                                              Totals                  |     | 274,300.00      |