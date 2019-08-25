# WooJoo Market
> Express.js server for https://www.woojoo-market.com

- [Please click it to see the back-end repo](https://github.com/april9288/wjm-api)

This is a social commerce marketplace for geek items. Anyone can buy, sell or share their items. 

## Development

- React Hooks
- Styled Components
- React Router Dom
- Stripe

## Deployment

- AWS CloudFront 

## Performance Optimization
- [x] compressed bundle.js with Brotli ( Original 291 kb -> Brolit Compressed 72 kb)
- [x] resized media files to the actual size users see, and converted to webp format
- [x] pre-connected with the backend API server to reduce the DNS loopkup time
- [x] analyzed bundle.js with webpack-bundle-analyzer, and then totally replaced moment.js with my own code
- [ ] React Lazy / code-splitting
- [ ] Enabling caching

## Unit Test
> Performed unit testing with Jest & Enzyme

- [ ] working on it...

## Todo List
- [ ] Finish ... 

## Linting and Formatting
- ESLint
-  Prettier
- Airbnb Style Guide

## Related Projects
- [Express.js - Backend](https://github.com/april9288/wjm-api)

### How to Run
```
git clone https://github.com/april9288/woojoo-market.com.git
cd woojoo-market.com
npm install
npm start
```

### Requirements
You need to install Nodejs.

## Meta Data
Jong-Ho (James) Kim

- [Portfolio](https://april9288.github.io/) - It's my portfolio website
- [Github](https://github.com/april9288) - This is my Github page
- [Linkedin](https://www.linkedin.com/in/james-kim-teamplayer/) - This is my Linkedin page
- [Medium](https://medium.com/@april9288) - I'm a Medium blogger
- april9288@gmail.com
