var swapiWrapper = (function () {
  var baseURL = "https://swapi.dev/api/";

  function request(url, callBack) {
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        if (typeof callBack === "function") {
          callBack(data);
        }

        return data;
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  function getAllResourcesUrls(callBack) {
    return request(baseURL, callBack);
  }

  function makeRequest(endPoint) {
    return function () {
      var requestParams = undefined;
      var callback = undefined;

      if (arguments.length > 1) {
        requestParams = arguments[0];
        callback = arguments[1];

        if (typeof arguments[0] !== "object") {
          // for signle Item by id
          return request(baseURL + endPoint + "/" + requestParams + "/", callback);
        }
        
      } else if (arguments[0]) {
        // If given exactly one argument
        if (typeof arguments[0] === "function") {
          callback = arguments[0];
          requestParams = null;
        } else {
          callback = null;
          requestParams = arguments[0];
        }
      }

      if (requestParams) {
        let searchParams = new URLSearchParams();
        for (let key of Object.keys(requestParams)) {
          let value = requestParams[key];
          searchParams.append(key, value);
        }
        return request(baseURL + endPoint + "/?" + searchParams.toString(), callback);
      }

      return request(baseURL + endPoint + "/", callback);
    };
  }

  return {
    getPersonById: makeRequest("people"),
    getAllPeople: makeRequest("people"),
    getFilmById: makeRequest("films"),
    getAllFilms: makeRequest("films"),
    getPlanetById: makeRequest("planets"),
    getAllPlanets: makeRequest("planets"),
    getShipById: makeRequest("starships"),
    getAllShips: makeRequest("starships"),
    getSpeciesById: makeRequest("species"),
    getAllSpecies: makeRequest("species"),
    getVehicleById: makeRequest("vehicles"),
    getAllVehicles: makeRequest("vehicles"),

    getAllResourcesUrls: getAllResourcesUrls,
  };
})();
export default swapiWrapper;
