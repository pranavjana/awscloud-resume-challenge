# Cloud Resume Challenge

Welcome to my Cloud Resume Challenge project! This project is part of the **AWS Cloud Resume Challenge**, designed to showcase my skills in cloud architecture, serverless applications, and modern web development.

## Table of Contents
1. [Introduction](#introduction)
2. [Architecture](#architecture)
3. [Technologies Used](#technologies-used)
4. [Deployment Steps](#deployment-steps)
5. [Challenges and Learnings](#challenges-and-learnings)
6. [Future Enhancements](#future-enhancements)
7. [Acknowledgments](#acknowledgments)

---

## Introduction

The **Cloud Resume Challenge** involves creating and deploying a personal resume website hosted in the cloud, utilizing best practices in serverless technologies, CI/CD pipelines, and Infrastructure as Code (IaC). The project also incorporates a visitor counter powered by an API and a NoSQL database.

Check out my live project here: https://pranav-portfolio.com

---

## Architecture

The project follows a serverless architecture, which includes:
- A static website hosted in an S3 bucket.
- CloudFront for secure and scalable content delivery.
- A DynamoDB table to store visitor count.
- An API Gateway and AWS Lambda function to interact with DynamoDB.
- CI/CD pipelines for automatic deployment using GitHub Actions.

### Architecture Diagram

*(Include a diagram of your architecture here or describe it in detail)*

---

## Technologies Used

- **Frontend**:
  - HTML/CSS/JavaScript
  - Deployed to Amazon S3
  - Distributed via AWS CloudFront

- **Backend**:
  - AWS API Gateway
  - AWS Lambda (Node.js/Python)
  - Amazon DynamoDB

- **Infrastructure**:
  - Terraform/CloudFormation for IaC
  - GitHub Actions for CI/CD

- **Others**:
  - AWS Certificate Manager (SSL/TLS)
  - AWS Route 53 (Custom Domain)

---

## Deployment Steps

### Steps
1. **Frontend Deployment**:
   - Upload HTML/CSS/JavaScript files to an S3 bucket.
   - Configure S3 bucket for static website hosting.
   - Set up CloudFront distribution.

2. **Backend Setup**:
   - Create a DynamoDB table for visitor count.
   - Develop a Lambda function to interact with DynamoDB.
   - Set up API Gateway to trigger the Lambda function.

3. **Infrastructure as Code**:
   - Write IaC templates (Terraform/CloudFormation).
   - Deploy the stack using IaC tools.

4. **CI/CD Pipeline**:
   - Configure GitHub Actions for automatic deployment.
   - Set up build/test/deploy workflows for both frontend and backend.

---

## Challenges and Learnings

- Gained hands-on experience with serverless technologies.
- Learned how to design and implement CI/CD pipelines.
- Improved my understanding of IaC principles.
- Troubleshooted common issues with S3 and CloudFront.

---

## Future Enhancements

- Add a contact form integrated with an email service like SES.
- Include analytics for tracking user interactions.
- Explore multi-region deployment for higher availability.

---

## Acknowledgments

Special thanks to [Forrest Brazeal](https://forrestbrazeal.com/) for creating the Cloud Resume Challenge and inspiring cloud enthusiasts to level up their skills.

---

Feel free to reach out if you have any questions or feedback on this project!
