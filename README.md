
### Site creation and running the site

Site is created using the create-react-app boiler template
run npm start to run the web application

### Site has 2 sections 

### main section loads blogs from a local blog_post_example.xml file

xmlparser is used to dynamically load the xml file and parse the blogs. used react set state to load blogs and bind them to the Blogposts component which has title,image,body,author and date

when a link is blog is clicked an event is added which will show the body of the selected blog



aside/navigation section has link to home page and dynamically loads 10 latest articles using the news api

### libraries used are fetch/axios for ajax calls  and an xml parser to parse blogs from the local xml file


### api key : 97a52a31c6d64af6ae3ba0813409cda
