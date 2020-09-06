# Shipwrecked
> Explore the seven seas and learn more about shipwrecks throughout history with the Shipwrecked app. 

## What is it? 

Shipwrecked is a map of shipwrecks that have happened all over the world. Click on any ship icon to read more about the wreck itself. You may also dive further into the wreck to learn more details about the ship and its watery fate. The majority of the app was created by a team of two in one day for MLH's Suns Out Hacks Out 2020 Hackathon, though we expect further work to be done.

## How?

We created a shipwreck map by combining the Google Maps API with Wikipedia's API. Google Maps allows us to display a user-friendly map of the world and insert icons at exact coordinates. The coordinates were gathered from Wikipedia's API by drilling down into a huge list of past shipwrecks and retrieving the relevant pages that also had coordinates.

## Difficulties & the future

The most difficult part of creating Shipwrecked was efficiently accessing Wikipedia's data. Though we had thought to use real-time queries to access the data every time the app loaded, this proved too inefficient. We ended up querying Wikipedia just once and then storing the necessary data in a JSON database for future queries.

Moving forward, we'd like to trim the data down and add more features such as filtering and searching for shipwrecks based on ship nationality and date of wreck. 

## Tech Used
* HTML5
* React + Hooks
* Javascript
* Google Maps API
* Wikipedia API

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).