# Software Architecture Document

## Project Description
The purpose of this project is to develop an e-commerce web application for The Funny Hat Shop. The project includes building a solution architecture according to the IT architecture vision and business requirements.

The business outcome is to drive additional sales by implementing an e-commerce web site to sell its products online The web site should be easy to use, but fast and friendly to use on any channel, such as mobile phones, tablets and personal computers.

The Funny Hat Shop made an agreement with an external Vendor for deliveries of the products to the customers. The solution needs to integrate with the delivery companies API’s.

## In-Scope
The following architecture building blocks are in scope of this project:
● Create an e-commerce web application hosting on the AWS platform
● Integration with the stock management and invoicing systems
● Stand up a e-mail service to communicate to customer
● Work with a new Delivery Vendor to pick up and deliver products sold on the web site
● Integrate with the Delivery Vendor API to automate status updates anddelivery requests
● Add images to the stock management system for each product

## Out of Scope
Upgrading the stock management system is not in scope of this project. The stock management system will be hosted on Amazon AWS with an API capability to access and update stock levels.

## Business Architecture: Capability Map
![](../00-it-atchitecture-vision-and-sprint-zero-architecture/fig-1--business-objectoves-capability-impact.png)

## Application Impacted
| Business capability | Application/System               | N=Buy/Build/Reuse | Application Roadmap |
| ------------------- | -------------------------------- | ----------------- | ------------------- |
| online sales        | e-commerce web application       | build             | new                 |
| customer accounts   | crm database                     | build             | new                 |
| customer insights   | BI reporting system              | build             | new                 |
| order management    | stock management system          | reuse             | change              |
| product management  | stock management system          | reuse             | change              |
| delivery service    | external vendor - funny delivery | buy               | new                 |
| invoicing           | stock management system          | reuse             | change              |
| communication       | AWS SES service                  | build             | new                 |
| it support          | AWS CloudWatch                   | build             | new                 |

## AS-IS Context Diagram
No As-Is context diagram is available.

## TO-BE Context Diagram
![](../00-it-atchitecture-vision-and-sprint-zero-architecture/fig-2-system-contect-diagram.png)

## Use Case View