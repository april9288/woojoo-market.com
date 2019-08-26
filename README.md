# WooJoo Market
> Front-end React.js app for https://www.woojoo-market.com

- [Please click it to see the back-end repo](https://github.com/april9288/wjm-api)

This is a social commerce marketplace for geek items. Anyone can buy, sell or share their items. 

## Development
- React Hooks
- React Context API
- Styled Components
- React Router Dom

## Deployment
- Registred a domain name on AWS Route 53 ( bought 'woojoo.com' domain )
- SSL Certified by AWS Certificate Manager ( enabled https to provide stronger security )
- Stored build files in an AWS S3 bucket
- Served the static files by AWS CloudFront ( reduced the latency by caching in AWS Edge Locations )

## Performance Optimization
- [x] compressed bundle.js with Brotli ( Original 291 kb -> Brotli Compressed 72 kb )
- [x] resized media files to the actual size users see, and converted to WEBP format ( reduced up to 20 times less in size for each photo )
- [x] pre-connected with the backend API server to reduce the DNS loopkup time 
- [x] analyzed bundle.js with webpack-bundle-analyzer, and then totally replaced moment.js with my own code ( reduced up to 50 kb in bundle.js )
- [ ] code splitting by React Lazy

## Unit Test
> Performed unit testing with Jest & Enzyme

- [ ] working on it...

## Todo List
- [ ] Allow users to edit their post 
- [ ] Allow users to search by name of items or other users
- [ ] Allow users to filter the feeds by category, popularity, or price
- [ ] Allow users to add items to their cart when they click on 'Add to Cart'
- [ ] Allow users to leave a comment or like a post
- [ ] Redirect users to 'Sales' page when they make a payment with Stripe
- [ ] Refactor styled components for reusability. For now, there are many duplicate styled components on their own folder
- [ ] Allow users to see what's hot now or who's top influencers on 'Feed' page
- [ ] Allow users chat each other in real time

## Linting and Formatting
- ESLint
- Prettier
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
