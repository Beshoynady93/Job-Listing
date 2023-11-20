# Frontend Mentor - Job listings with filtering solution

This is a solution to the [Job listings with filtering challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![](./src//assets//images/Screenshot%202023-11-20%20at%2013-44-12%20Vite%20React.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://beautiful-stardust-99ed52.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://vitejs.dev/) - React build tool

### What I learned

Learned how to filter an array created by users selecting from a list of filters they wish to search for jobs based on.

```js
useEffect(() => {
  filteredItems.length === 0
    ? setJobList(jobData)
    : setJobList(
        jobData.filter((job) => {
          for (let i = 0; i <= filteredItems.length; i++) {
            if (job.role === filteredItems[i]) return true;
            if (job.languages.includes(filteredItems[i])) return true;
          }
        })
      );
}, [filteredItems]);
```

## Author

- Frontend Mentor - [@Beshoynady93](https://www.frontendmentor.io/profile/Beshoynady93)
- Twitter - [@BeshoyNN](https://twitter.com/BeshoyNN)
