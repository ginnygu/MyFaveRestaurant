# My Favorite Restaurant

## What is My Favorite Restaurant?
A simple site for foodies to write down their favorite restaurants to share with others! You can, add, edit, delete and view your favorite restaurants!

## Screenshot
![alt text](https://github.com/ginnygu/MyFaveRestaurant/blob/master/wireframe%20and%20ERD/screenshot.png)

## Technical discussion

### Express
Building of the server, obtaining the data from the database
### Ejs
Help with the view of the app. Used Model View Controller style

## Note of app structure
As a foodie, the app is made for others who like to share their favorite places to eat. People can like other suggestions or dislike it based on their preference. 

## The making of My Favorite Restaurant

### Author: Ginny Gu Tang

### CRUD:
For a website that is fully functional from the database to the front, the basic of CREATE, READ, UPDATE and DELETE had to be working. In this website there were several tables in the database, one was a table that connected a many to many relation. A struggle was getting the create and update to pass through two tables. Through help of Aaron Addison, who gave me the idea to use the .then to run a second query to update the second table. Below is a snippet of the code:

```
create(req, res, next) {
        const catId = req.body;
        db.createRes(catId)
        .then((creating) => {
            comDB.createRest(creating.id, catId.cat_id)
            .then(() => {
            res.redirect('/restaurants')
            })
            .catch(e => next(e));
        })
        .catch(e => next(e));
    },
```

 ### MVC
 Due to the use of the database, MODEL, VIEW and CONTROLLER was used to separate the codes in file structure to make sure each section did it's own part. For the VIEW, ejs was used to render the different pages in conjunction with Javascript code to make the data run smoothly from the database to the user interface. 
 
 ### Credits
 
- GA-instructors for Quote-sta-gram and Soda-lab which provided model in making a CRUD website using the MVC model. 
- Unsplash provided a splash-free photo to be used as background.
- Google-Fonts provide three fonts to be used on the website.
- Aaron Addison and Mimi Klein who provided help with debugging and ideas.

### Further Growth
Still continuing in making the site better. Working on the likes, dislikes and filter option at this time. Wish to add user and auth as well. With growth of users, comments and photo uploads will be added.

### Video explanation
https://youtu.be/cMEPwrG1FZs
