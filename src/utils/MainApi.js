class MainApi {
  constructor({baseUrl}) {
    this._baseUrl = baseUrl;
  }

  _checkResponse = (res) => {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Error ${res.status}.`)
  }

  register = (name, email, password) => {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, email, password})
    })
    .then(this._checkResponse)
  }

  login = (email, password) => {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({password, email})
    })
    .then(this._checkResponse)
  }

  getToken = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      }
    })
    .then(this._checkResponse)
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    .then(this._checkResponse)
  }

  editProfile = (name, email) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({name, email})
    })
    .then(this._checkResponse)
  }

  saveMovies = (movie) => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image,
        trailer: movie.trailer,
        thumbnail: movie.thumbnail,
        movieId: String(movie.movieId),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      })
    })
    .then(this._checkResponse)
  }

  getMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    .then(this._checkResponse)
  }

  deleteSavedMovies = (id) => {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      }
    })
    .then(this._checkResponse)
  }
}

export default new MainApi({
  baseUrl: "https://api.kerjanoid-movies.nomoredomains.rocks",
})
