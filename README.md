<h1 align="center"> 🕯 Welcome to Scholars' Haven! 🕯</h1>

<p align="center">
  <a href="https://github.com/your-username/scholars-haven">
    <img src="https://img.shields.io/badge/GitHub-View_on_GitHub-blue?logo=github&style=flat-square" alt="GitHub Repository" />
  </a>
</p>

---

Welcome to **Scholars' Haven**, a dynamic scholarly platform powered by **Permit.io** for role-based access control and MongoDB for flexible data management.

## 🕯️ Project Description

Scholars' Haven is designed to facilitate seamless collaboration and knowledge sharing among students, professors, and researchers. It provides a secure environment where users can manage scholarly papers, provide feedback, and ensure compliance with dynamic access controls.

## 🛡️ Usage of Permit.io

Scholars' Haven utilizes Permit.io for fine-grained access control based on roles and actions. Each user role (student, professor, researcher) has specific permissions:

- **Student**: Can upload research papers and view their own submissions.
- **Professor**: Can perfom actions similar to that of students and additionally, review student papers, provides feedback, and manages submissions.
- **Researcher**: Perform all actions as above and additionally explores published papers, reports inappropriate content, and moderates submissions.
- **Admin**: Mangaes the whole dashboard
- **Moderator**: Manages the community of scholars in the join community forum [ on hold for now ]

Permit.io ensures that access rights are dynamically adjusted based on real-time policies, enhancing security and compliance.

## 🗝️ Features

### Student 🎓

- **Upload Paper**: Upload research papers for review.
- **View Uploads**: Access and manage their own uploaded papers.

### Professor 👨‍🏫

- **Upload Paper**: Upload research papers for review.
- **View Uploads**: Access and manage their own uploaded papers.
- **Review Papers**: Evaluate student submissions and provide feedback.
- **Manage Submissions**: Monitor and manage all student papers.

### Researcher 🔬

- **Upload Paper**: Upload research papers for review.
- **View Uploads**: Access and manage their own uploaded papers.
- **Review Papers**: Evaluate student submissions and provide feedback.
- **Manage Submissions**: Monitor and manage all student papers.
- **Explore Papers**: Browse and search through published papers.
- **Flag Content**: Report inappropriate content and manage moderation.

## Screen shots (dashboard)

![image](https://github.com/JuanitaCathy/Scholarly-Discourse-Platform/assets/114871036/a85917f3-a4ea-451d-ad2d-5873072bfa17)
![image](https://github.com/JuanitaCathy/Scholarly-Discourse-Platform/assets/114871036/d620743e-4ad0-4981-a12b-83a16b331dba)
![image](https://github.com/JuanitaCathy/Scholarly-Discourse-Platform/assets/114871036/bcf7f225-057c-4c5f-b792-19706ac858ec)


### Checkout the demo here: https://youtu.be/kvuBSblGXJ4


## 🛠️ Technologies Used

- **Frontend**: Next.js and React for responsive UI/UX.
- **Backend**: Node.js.
- **Database**: MongoDB for scalable data storage.
- **Authorization**: Permit.io for dynamic access control.
- **Authentication**: Firebase Authentication for secure user login.


## 📜 Installation

To run Scholars' Haven locally, follow these steps:

### Clone the repository:

```bash
   git clone https://github.com/your-username/scholars-haven.git
   cd scholars-haven
```

### Install dependencies:

```bash
npm install
```

### Set up environment variables:

Create a .env file in the root directory.

Add the following environment variables:
```
PERMIT_API_KEY=your_permit_api_key
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
MONGODB_URI=your_mongodb_uri
```

### Start the development server:

```bash
npm run dev
```

### Access the application:

Open your browser and navigate to http://localhost:3000.

## 🖋️ Thank you!

