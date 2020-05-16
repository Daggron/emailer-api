# Emailer api
A simple service to send contact or form data in a form of email to the site admin.


### Description 
 As the name suggests emailer API is used to send email from your static site to your chosen email address
 This is the simplest way to make your contact or support form send an email to your address for supporting user queries.

### How does it work
The API accepts parameters listed below

- `name` `{String}` `{required}` The Name of the user is used to add details of the user in the email for contacting purpose. **(To be filled by user from frontend)**

- `userEmail` `{String}` `{Optional}` The userEmail accepts an email provided by user to  contact him back for his issue.
**(To be filled by user from frontend)**

- `phoneNumber` `{String}` `{Optional}` The Phone Number is used as a contact number of the user in case the company wants to connect to the user. **(To be filled by user from frontend)**

- `message` `{String}` `{required}` Message accepts the user's message or query which is then sent via email to the company's support email.
**(To be filled by user from frontend)**

- `subject` `{String}` `{required}` This excepts a string which is used as the subject of the email. **(To be filled by user from frontend)**

- `supportmail` `{String}` `{required}`. This is the email address which needs to be provided inside the request body by the company while they are making the request to the service via frontend using Axios or fetch API or other https request client. All the emails from the frontend that user is trying to send by the contact or support form will be sent to the address provided by the company in this parameter.

**(To be added by the company additionally while making request)**.

Documentation of this api can be viewd here [View Docs](https://documenter.getpostman.com/view/10588168/SzmmTDio?version=latest)

Feel free to add any changes 

Happy Hacking :zap:
