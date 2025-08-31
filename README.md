# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location


### Links

- Solution URL: (https://www.frontendmentor.io/solutions/ip-address-tracker-using-reactjs-tailwindcss-and-react-leaflet-SWaRJWeZlo)
- Live Site URL: (https://darasimi-ip-address-tracker.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile Responsive Design
- Mobile-first workflow
- Tailwind CSS - For styles
- React (https://reactjs.org/) - JS library
- Vite (https://vitejs.dev/) - Build tool
- React Leaflet (https://react-leaflet.js.org/) - Interactive maps
- IP Geolocation API (https://geo.ipify.org)

### What I learned

- How to integrate the Leaflet map library with React using React Leaflet.
- Managing state and passing props between components for search and display functionality.
- Responsive design using Tailwind CSS and flexbox for both desktop and mobile layouts.
- Handling asynchronous API requests and updating UI based on the response.

```js
const fetchIpData = async (ip = "") => {
  const apiKey = import.meta.env.VITE_IPIFY_API_KEY;
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;
  const response = await fetch(url);
  const data = await response.json();
  setIpData(data);
};
```

### Continued development

- Improve error handling for invalid IP addresses or network issues.
- Enhance accessibility for keyboard and screen reader users.
- Refine mobile map interactions and UI transitions.

### Useful resources

- React Leaflet documentation (https://react-leaflet.js.org/) - For integrating maps in React.
- Tailwind CSS documentation (https://tailwindcss.com/docs) - For rapid styling and responsive layouts.
- Frontend Mentor community (https://www.frontendmentor.io/community) - For tips and feedback.

## Author

- Website - Oluwadarasimi (https://reactportfolio-project.netlify.app/)
- Frontend Mentor - @Darasimi010 (https://www.frontendmentor.io/profile/Darasimi010)
- LinkedIn - Oluwadarasimi Omojola (www.linkedin.com/in/darasimi-omojola)

## Acknowledgments

Thanks to the Frontend Mentor community for feedback and support. Special thanks to documentation authors for React Leaflet and Tailwind CSS.
