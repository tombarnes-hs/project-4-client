# Minventory (working title)

This app allow players of the [X-Wing Miniatures Game (1st Edition)](https://www.fantasyflightgames.com/en/products/x-wing/) from [Fantasy Flight Games](https://www.fantasyflightgames.com/en/index/) to manage their collections.

In it's current state users can simply CRUD their collection by using input fields. Users own a `Ships` resource on tne API to control what ships they own.

A future iteration of the site would allow users to view all available ships, pilots, upgrades, released sets and select whether or not they own them. That data, though not currently accessible via requests to an API, comes courtesy of [this repo](https://github.com/guidokessels/xwing-data).

[Deployed Client](https://tomg84.github.io/project-4-client/#/)

[Deployed API](https://ancient-headland-25420.herokuapp.com/)

[API Repo](https://github.com/TomG84/project-4-api)

## Front End Installation

1. Fork and Clone this repository.
2. Install dependencies with `npm install`.
3. Run the development server with `npm start`.

## Technologies Used

#### Front End

* React
* Bootsrap via reactstrap
* Fetch for http requests to API for User Auth
* Axios for http requests to API for Ships resource
* JavaScript
* HTML5
* CSS3

#### Back End

* Rails
* PostgreSQL
* Ruby

## Next Steps

The scope of this project is ambitious and I have a long way to go. Below is a list of things I'd like to do with this app:

1. The API currently has a resources, `Sources`, that has been seeded from the data store. I haven't had time to make that the primary resource the user owns.

2. Replace manual/text input from the user with a list of available ships that is populated from the API.

3. Create Pilots, Ships, and Collections resources to expand user ownership and create an app that closely reflects a user's actual collection.

4. Incorporate a way for users to store information about squads they've used at tournaments based off of their collection

## Planning and Problem-Solving

#### User Stories

##### AUTH
* User can log-in with email/password
* User can sign up with email/password
* User can change password only when logged in
* User can sign out once logged in

##### SHIP
* Auth User can add a ship with favorite pilot and notes
* Auth User can view all owned ships
* Auth User can edit notes and favorite pilot of an owned ship
* Auth User can delete a ship

#### Wireframes

![Pre-Login Wireframe](https://i.imgur.com/ibcz1o4.jpg)

![Post-Login Wireframe](https://i.imgur.com/Zmvpg5Y.jpg)

![App Preview](https://i.imgur.com/mZp22yh.png)

Planning for this was difficult. React proved a tricky framework to wrap my head around and it had a big impact on my timeline.

My plan for this project was to build a version 1 that included a backend API in which a user owned a resource for ships. They would CRUD this resource by simply typing inputs from the client.

Once that was done I planned to add another resource and seed it with data from the X-Wing data collection with no relationships. After a user could CRUD on that resource (which would replace the version 1 resource), I would add more resources and create relationships between the resources.

In the 8 days I was able to:

1. Build the version 1 API with Rails.
2. Build the version 1 client with React.
3. Seed a version 2 database
4. Debug version 1

Problems encountered along the way mainly had to do with setting up routes for components. Passing data from component-to-component was a big challenge. I would often get stuck trying combinations of `this.props.that.that.x.y` or `this.state.a.b.c` over and over. I would only get out of this cycle by erasing a lot of code and writing it out meticulously.

I had a similar problem seeding the database for the version 2 resource. I'd never done that before and the data collection was huge.

Most errors in this problem came from wanting to get version 1 done quickly so I could attempt version 2 before the end of the project week. As a result of looking for shortcuts I made many mistakes that I would not have made had I been more meticulous and slow.
