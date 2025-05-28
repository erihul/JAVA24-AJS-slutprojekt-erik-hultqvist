###### JAVA24 - Avancerad JavaScript

###### Slutprojekt - Scrum board

###### Erik Hultqvist

# SCRUM-BOARD

### Table of Contents
1. <ins>[Description of Project](#1-description-of-project)<ins/>
2. <ins>[Architecture oversight](#2-architecture-oversight)<ins/>
3. <ins>[Links](#3-links)<ins/>

---

## 1. Description of Project
This project is a web based scrum board built with react.

**As a user, you can:**
- Add team members, by name and role (or multiple roles) UX, Backend and Frontend.

- Add tasks categorized by UX, Backend or Frontend.

- View all Tasks which are divided into New, In progress or Finished.

- New tasks: A team member can be assigned to the task, which makes the tasks "In progress".

- In progress: Can be marked as accomplished, which makes the tasks "Finished".

- All tasks can be filtered by Team-member and category.

- All tasks can be sorted by the date created and alphabetical.


## 2. Architecture oversight

#### __*app.jsx*__
Fetches task data using onValue() inside a useEffect.

Filters and sorts tasks based on selected member, category, and sorting option

Separates tasks by status (new, inprogress, finished) and renders them using the corresponding components (NewTask, InProgressTask, FinishedTask).


---
### Components

#### __*AddMember.jsx*__
Renders a form that collects a member's name and selected roles (UX, Backend, Frontend), and when submitted, 
generates a unique ID and updates the Firebase Realtime Database with the member's data.

#### __*AddTask.jsx*__
Renders a form that collects the task and category (UX, Backend, Frontend).
When the form is submitted, it generates a unique Firebase ID and saves the task, selected category, default status (new), current server timestamp, and empty member field to the Firebase Realtime Database. 

#### __*SortFilter.jsx*__
Renders dropdown menus to filter tasks by team member and category, and to sort tasks by time or name.

#### __*NewTask.jsx*__
Displays the tasks with status "new" and allows the user to assign it to a team member. When a member is selected from the dropdown, the task is updated in Firebase with the chosen member and its status is changed to "inprogress".

#### __*InProgressTask.js*__
Displays the tasks currently marked as "inprogress", with a button: "Accomplished". When clicked  the task's status is updated to "finished" in Firebase.

#### __*FinishedTask.js*__
Displays the details of the tasks marked as "finished". It includes a "Delete" button that, when clicked, removes the task from the Firebase.

### Firebase

#### __*config.js*__
Sets up a connetcion to the firebase realtime database

## 3. Links

webpage: https://erihul.github.io/JAVA24-AJS-slutprojekt-erik-hultqvist/

github: https://github.com/erihul/JAVA24-AJS-slutprojekt-erik-hultqvist