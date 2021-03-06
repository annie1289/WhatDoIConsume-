# Project Overview

## Project Name

What Do I Consume?

## Project Description

My project is a tracker of your media habits. How many books did you read this year and what was your most popular genre of books? Forget what that tv show you watched 4 months ago and loved was called? The What Do I Consume app will track all of this. You can add entries for all these different types of media that you have consumed.

## Wireframes

Tablet Version -- https://www.canva.com/design/DAEKFXNjc0I/SN05RqNkEaTPtpyIplwDhA/view?utm_content=DAEKFXNjc0I&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

Mobile Version -- https://www.canva.com/design/DAEKFVcs5Ns/9imcfJyQsbLUHCwIVx2VQQ/view?utm_content=DAEKFVcs5Ns&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton


Web Version -- https://www.canva.com/design/DAEKFRDkAiQ/xwoEhZVbK3OH_lgRyZK16g/view?utm_content=DAEKFRDkAiQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton

## Component Hierarchy
 A visual tree of your components, depicting the parent/child relationships, as well as an indication of which will be class components, requiring state, and which will be functional components, taking props.
 ```
       App.js
      /        \
App.cs          Components
            /                  \
           Media Input        Dashboard
       /     /      \     \           \
  Book   Movie    TV Show Other      To-do List   

```
## API and Data Sample
I will be using Airtable to store information on the books, tv shows, movies, etc. that people have watched/read/listened to. This data will then be rendered on another page.
```
{
    "records": [
        {
            "id": "recqX2KUDyi2MYdEi",
            "fields": {
                "Created": "2020-10-09T06:48:12.000Z",
                "Name": "Are Prisons Obsolete?",
                "Author": "Angela Davis",
                "Rating": "5/5",
                "Review": "Brilliant, jarring, things have not changed regarding the prison industrial complex and the atrocities that the US continues to commit against black a...",
                "Genre": "Race"
            },
            "createdTime": "2020-10-09T06:48:12.000Z"
        },
        {
            "id": "rec9newhC6bWHWfBN",
            "fields": {
                "Created": "2020-10-09T06:48:12.000Z",
                "Name": "Trick Mirror",
                "Genre": "Essays",
                "Author": "Jia Tolentino",
                "Rating": "5/5",
                "Review": "Raw, brutally honest, Tolentino is a voice of our generation. "
            },
            "createdTime": "2020-10-09T06:48:12.000Z"
        },
        {
            "id": "recB1aA1U13V8vKEq",
            "fields": {
                "Created": "2020-10-09T06:48:12.000Z",
                "Name": "Hunger",
                "Author": "Roxane Gay",
                "Genre": "Memoir",
                "Rating": "5/5",
                "Review": "Made me want to cry,, taught me a lot,, was terribly honest and beautiful. Gay is a beautiful writer and an influential and controversial feminist who..."
            },
            "createdTime": "2020-10-09T06:48:12.000Z"
        }
    ],
    "offset": "recB1aA1U13V8vKEq"
}
```
### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
*These are examples only. Replace with your own MVP features.*

- Create clickable buttons for user to add a book, movie, tv show, etc.
- Create ability for user to review each of these individually and for this data to render to a second page
- Allow user to navigate between pages 

#### PostMVP  
*These are examples only. Replace with your own Post-MVP features.*
```
-Create a to-read/watch list
-Add images from APIs of the books/movies that will display
-Use animations somehow?
```
## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Oct 7-8| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|Oct 9| Project Approval | Complete
|Oct 11| Core Application Structure (HTML, CSS, etc.) | Complete
|Oct 13| Pseudocode / actual code | Complete
|Oct 14| Initial Clickable Model  | Complete
|Oct 15| MVP | Complete
|Oct 16| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Core application | H | 20 hrs| 15| |
| Working with Airtable | H | 4 hrs|5| |
| Styling with CSS/Flexbox | H | 12hrs|10  |  |
| Input Form | H | 3hrs|5 |  |
| Troubleshooting components | H | 3hrs| 0|  |

| Total | H | 42hrs|36 | |

## SWOT Analysis

### Strengths: Pretty excited about my project and have a pretty good understanding of the features I want to include.

### Weaknesses: Time Management, general feeling of uncertainty of understanding from the unit.

### Opportunities: Have a lot of learning/growth in terms of learning React as a whole and components. Excited to get more familiar with this! 

### Threats: Will need to stay focused + reach out for help when needed.
