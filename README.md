# SWAPI-lib
 _Star Wars API Wrapper_

## What is SWAPI?

The Star Wars API, or "swapi" is the world's first quantified and programmatically-accessible data source for all the data from the Star Wars canon universe. [https://swapi.dev/]

## Purpose:

This wrapper helps you retrieve all possible swapi endpoints instead of calling direct API (without the need for their real-time interaction). It's a simple customizable javascript wrapper :)



## Methods Offering:

#### Get person:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Int` | **Required**. person id |
| `callback` | `function` | **Optional**. return response payload |

#### Get people list:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {`page`, `search`}  | {`Int`, `string`} | **Optional**. if empty it will return page 1. |
| `callback` | `function` | **Optional**. return response payload |

#### Get film:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Int` | **Required**. film id |
| `callback` | `function` | **Optional**. return response payload |

#### Get films list: 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {`page`, `search`}  | {`Int`, `string`} | **Optional**. if empty it will return page 1. |
| `callback` | `function` | **Optional**. return response payload |

#### Get planet:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Int` | **Required**. planet id |
| `callback` | `function` | **Optional**. return response payload |

#### Get planet list:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {`page`, `search`}  | {`Int`, `string`} | **Optional**. if empty it will return page 1. |
| `callback` | `function` | **Optional**. return response payload |

#### Get ship:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Int` | **Required**. ship id |
| `callback` | `function` | **Optional**. return response payload |

#### Get ships list:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {`page`, `search`}  | {`Int`, `string`} | **Optional**. if empty it will return page 1. |
| `callback` | `function` | **Optional**. return response payload |

#### Get species:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Int` | **Required**. species id |
| `callback` | `function` | **Optional**. return response payload |

#### Get species list: 

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {`page`, `search`}  | {`Int`, `string`} | **Optional**. if empty it will return page 1. |
| `callback` | `function` | **Optional**. return response payload |


#### Get vehicle:

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `Int` | **Required**. Vehicle id |
| `callback` | `function` | **Optional**. return response payload |

#### Get vehicle list:

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| {`page`, `search`}  | {`Int`, `string`} | **Optional**. if empty it will return page 1. |
| `callback` | `function` | **Optional**. return response payload |


# How to use:
- Include the lib folder.
- Import to respective file to access all predefined endpoints.

To get single item:- (_id, _callback)

```
swapiWrapper.getPersonById(1, (response)=>{
  console.log("Person is: ", response);
})
```

To get list of items takes:- ({_page, _search}, _callback)

```
swapiWrapper.getAllPeople({page: 1, search: "Luke"}, (response)=>{
  console.log("People list: ", response);
})
```

# How to Test:
We have setup a test React Native project where you can see all the console logs of above listed methods.
You just have to Clone/Download test project and follow steps: 

```sh
cd test
npm install
npx pod-install

npx react-native run-ios 
npx react- native run-android
```

(Note: this test is only fro React Native App, You must have React Native Cli setup)

# Examples:


```
// get all SWAPI endpoints
swapiWrapper.getAllResourcesUrls((response)=>{
  console.log("URLs: ", response);
})

// get peoples
swapiWrapper.getPersonById(1, (response)=>{
  console.log("Person is: ", response);
})

swapiWrapper.getAllPeople({page: 1}, (response)=>{
  console.log("People list: ", response);
})

swapiWrapper.getAllPeople({page: 1, search: "Luke"}, (response)=>{
  console.log("People list: ", response);
})

// get films
swapiWrapper.getFilmById(1, (response)=>{
  console.log("Film is: ", response);
})

swapiWrapper.getAllFilms({page: 1}, (response)=>{
  console.log("Flims list: ", response);
})

// get planates
swapiWrapper.getPlanetById(1, (response)=>{
  console.log("Planet is: ", response);
})

swapiWrapper.getAllPlanets({page: 1}, (response)=>{
  console.log("Planets list: ", response);
})

// get star ships
swapiWrapper.getShipById(1, (response)=>{
  console.log("Start ship is: ", response);
})

swapiWrapper.getAllShips({page: 1}, (response)=>{
  console.log("Start ships list: ", response);
})

// get star species
swapiWrapper.getSpeciesById(1, (response)=>{
  console.log("Species is: ", response);
})

swapiWrapper.getAllSpecies({page: 1}, (response)=>{
  console.log("Species list: ", response);
})

// get Vehicles
swapiWrapper.getVehicleById(1, (response)=>{
  console.log("Vehicle is: ", response);
})

swapiWrapper.getAllVehicles({page: 1}, (response)=>{
  console.log("Vehicles list: ", response);
})

```
