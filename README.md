
### Site creation and running the site

Site is created using the create-react-app boiler template
run "npm start"  to run the web application on http://localhost:3000

### Site has 2 sections 

### main section loads blogs from a local blog_post_example.xml file

xmlparser is used to dynamically load the xml file and parse the blogs. used react set state to load blogs and bind them to the Blogposts component which has title,image,body,author and date

when a blog title  is clicked an event is added which will show the body of the selected blog only and hides the rest of the blogs.


aside/navigation section has link to home page and news articles. News component loads  dynamically  10 latest articles using the news api and refreshes every 60 seconds
home page  is used to refresh the site which will reset and loads blogs and news

### libraries used are fetch/axios for ajax calls  and an xml parser to parse blogs from the local xml file



