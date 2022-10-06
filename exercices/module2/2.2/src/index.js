import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import kungFuPanda from './img/550x791.jpg';
import batman from './img/dc-batman.jpg' ;

const homePage = `
<div class="text-center">
  <h3>Welcome to myMovies !</h3>

  <p>Here you can find a selection of our favorite movies ; )</p>
  <div class="pb-3">
    <img class="img-thumbnail w-50" src="${kungFuPanda}" alt="Groot" />
  </div>

  <div>
    <img
      class="img-thumbnail w-50"
      src="${batman}"
      alt="Stormtrooper"
    />
  </div>
</div>`;

const main = document.querySelector('main');

main.innerHTML = homePage;

