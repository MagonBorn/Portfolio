// Parent Abstract Class
class Media {
  // Properties of all media objects: title, isCheckedOut, ratings.
  constructor(mediaTitle) {
      this._title = mediaTitle;
      this._isCheckedOut = false;
      this._ratings = [];
    }

  // Getters for all properties
  get mediaTitle() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get mediaRatings() {
    return this._ratings;
  }

  // Methods for all Media types
  getAverageRating() {
    return this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue, 0)/this._ratings.length;
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
  }

  addRating(newRating) {
    if (typeof newRating === 'number') {
      this._ratings.push(newRating);
    } else {
      return console.log(`The rating needs to be a numerical value`);
    }
  }
}

// Book Class
class Book extends Media {
  constructor(bookAuthor, bookTitle, pages) {
    super(bookTitle)
    this._author = bookAuthor;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

//Movie Class
class Movie extends Media {
  constructor(movieDirector, movieTitle, movieRunTime) {
    super(movieTitle);
    this._director = movieDirector;
    this._runTime = movieRunTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// CD Class
class CD extends Media {
  constructor(cdArtist, cdTitle, songList) {
    super(cdTitle);
    this._artist = cdArtist;
    this._songs = songList;
  }

  get artist() {
    return this._artist;
  }

  get songList() {
    return this._songs;
  }
}

historyOfEverything = new Book('Bill Bryson', 'A Short History Of Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(6);
console.log(historyOfEverything.getAverageRating());
console.log(`----------------------------`);

speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());