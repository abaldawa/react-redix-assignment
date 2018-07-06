# Author: Abhijit Baldawa
## React-redux-assignment
As mentioned this assignment has two tabs, 'Home' tab is show user paginated list of photos with infinite update on scroll (fetching 10 records per scroll to bottom) and 'Post' can be used to create a post and also show list of all the posts (along with any post which the user will create).

I have used "material-ui" as much as I can as mentioned in the assignment. I have handled all the errors/pending state as well.

## How to run
```bash
1] Git clone the repo
2] Go to the repo
3] npm i 
4] npm run start -> to start the webpack dev server and go to "http://localhost:8080/"
5] npm run build --> will create a production build in dist folder
```

## Known Issue
While the application works perfectly fine there is just one catch and that to with the UI presentation.
I have used "Tabs" component from "material-ui" and it seems to have issues to MARK ACTIVE TAB ON UI WITH BLUE LINE whenever we switch the tab from HOME to Post tab. The tab changes to "Post" tab but just the active tab is still marked to "Home". I have used "href" property inside the tab component. When we remove "href" then it works fine but with href (which is needed in my cases to change the URL) it is having a issue (a bug probably) that it is not able to set active tab to blue. 
