# High-Level Non-Functional Requirements
## Availability
- solution should be available 24/7 with a 99.99% uptime
- batches are expected to run to check delivery status
- planned downtime for Monday mornings 1 to 2 hours only at 1am
## Performance
- the solution should be allowed for auto scalability on evenings and weekends
- the web site response time should be less than 2 seconds
- allow for a thousand concurrent users
## Volumes
- product images are stored on AWS S3 Buckets for the stock management - images are about 50Kb average
- The Funny Hat Shop has 200 different products
## User Interactions
- the company expects 500 customer for the first 3 months, and 2000 after 12 months
- allow at least 10 concurrent users accessing the website
- users locations should only be from America, Europe and SouthAfrica
## Business Continuity
- include backups with replication of the database
- use multi availability zones in each region
- customer data from that each country should be only available in availability zones within those countries
## Security
- authorize and authenticate users by using OAuth, using either Google or Facebook logins
- secure data at rest and in transit on all services
- implement audit controls on data changes
- use x509 certificate one the Web Application Containers
## Operations and Monitoring
- implement monitoring for both the health of the website and database
- the solution should include exception and alert on any errors
## Networking
- create VPC on AWS for all the regions of the solution
- create a public subnet for the web front end and a private subnet for the backend database and other services
- use a laod balancer to balance the incoming traffic to the web application
- create firewall rules for traffic to the Delivery Vendor API
## User Interface Requirements
- implement a responsive web design that will be accessed via mobile, tablet or web browsers
## Architectural Requirements
- use AWS Cloud platform for hosting the solution
- Implement a Dev, QA, UAT and Production VPC on AWS
- detail of the development stack will be in the solution options
- solution should follow a Microservices architecture by implementing the solution components as containers
- use DevOps pipelines to cater for automated deployments for CI/CD pipelines
