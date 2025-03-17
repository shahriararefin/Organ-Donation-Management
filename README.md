# Organ Donation Web Application

# Overview

The Organ Donation Web Application is a platform designed to connect organ donors and recipients. The application provides a secure and user-friendly interface for users to register, browse organ availability, and manage their profiles. Currently, authentication is implemented, and additional features will be added in future updates.

# Technologies Used

Backend: PHP

Frontend: HTML, CSS, JavaScript

Authentication: Implemented (details below)

# Features (Current & Upcoming)

Implemented:

User Authentication: Secure login and registration system for users.

Session Management: Ensures secure handling of user sessions.

Upcoming:

Donor & Recipient Management: Users can register as donors or recipients.

Organ Listings: Donors can list available organs, and recipients can search for matches.

Search & Filtering: Advanced search for organ availability based on type, location, and urgency.

Admin Panel: Manage users, monitor activity, and maintain platform integrity.

Email Notifications: Alert users about organ availability and updates.

Secure Transactions: End-to-end encryption for handling sensitive data.

# Installation & Setup

Clone the repository:

git clone https://github.com/shahriararefin/Organ-Donation-Management


# Database SetUp

Import the provided .sql file into your database.

Update database credentials in config.php.

# Run the project:

Start a local server using Apache (XAMPP or LAMP recommended).

Access the application in your browser: http://localhost/organ-donation

# Folder Structure

organ-donation/
│-- index.php        # Homepage
│-- auth/
│   │-- login.php    # User login
│   │-- register.php # User registration
│   │-- logout.php   # User logout
│-- config/
│   │-- config.php   # Database connection
│-- assets/
│   │-- css/
│   │-- js/
│   │-- images/
│-- pages/
│   │-- dashboard.php # User dashboard (To be developed)
│   │-- profile.php   # User profile management

# Future Improvements

Integration with Healthcare APIs for real-time donor-recipient matching.

User Verification System to ensure authenticity.

Data Visualization for tracking organ donation trends.