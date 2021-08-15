# bench-test using React v17.0.2 with TypeScript

![bench2](https://user-images.githubusercontent.com/4116258/129486545-dcff10b9-60e6-45aa-986d-65b32f35e4cf.jpg)

![image](https://user-images.githubusercontent.com/4116258/129486594-912cb07c-0a12-4adc-97d2-1c84d66e6f8b.png)




## Notes about - Bench Test App

### Location of deployed application
```sh
https://bench-rest-test.web.app/
```

### Assumptions made
1. Each page of transaction api will return max 10 records
2. API data is sorted


### Stretch goals attempted

1. Created a responsive version.
2. Made the application a PWA.
3. Used Styled component for styling
4. Made sure application is performant. Attached screenshot of Lighthouse with 100% performance.
5. Deployed the assignment at firebase and here is the link - https://bench-rest-test.web.app/
6. ErrorBoundary Component used for error handling of Async request also
7. Unit Testing Done.

### Instructions to run application locally

### Take git clone of the repository
```sh
git clone https://github.com/Sameerg/bench-test.git
```
### Change Directory to bench-test
```sh
cd bench-test
```

### Install dependencies
```sh
yarn install
```

### Serve application at localHost
```sh
yarn start
```

# Packages used in this application
```sh
axios
styled-components
react-error-boundary
date-fns
```

### Feedback of this technical challenge
1. Total should come from backend as all data need to be parsed to calculate it
2. React window can be used to improve the performance of the application with large data
