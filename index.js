function clean(control){
  if(control.value == control.defaultValue)
    control.value = '';
}

function fill(control){
  if(control.value === '')
    control.value = control.defaultValue;
}

var numPost = 2;

function createPost(){
  numPost++;
  var feed = document.getElementById('feed');

  //Se agrega div de la publicación
  var post = document.createElement('div');
  post.id = 'post' + numPost;

  //Imagen de perfil
  var me = document.querySelectorAll('.profile')[0].src;
  var author = document.createElement('img');
  author.className = 'profile';
  author.src = me;

  //Fecha de la captura
  var date = document.getElementById('fecha').value;
  var year = date.split('-')[0];
  var month = date.split('-')[1];
  var day = date.split('-')[2];

  var fullDate = toOrdinal(day) + ' ' + convertMonth(month - 1) + ' ' + year + ' - ';

  //Lugar de la captura
  var location = document.getElementById('location').value;

  //Lugar y fecha de la captura
  var dateLocation = fullDate + location;

  var details = document.createElement('p');
  details.className = 'details';
  details.textContent = dateLocation;

  //Se agrega div de la foto
  var photoDiv = document.createElement('div');
  photoDiv.className = 'photo';

  //Se agrega imagen al div
  var filePath = document.getElementById('loadFile').files;

  var picture = document.createElement('img');
  picture.className = 'original';
  picture.src = 'images/street.jpeg';

  //Miniatura camara
  var telephoto = document.querySelector('.info .bubble').src;
  var camera = document.createElement('img');
  camera.className = 'bubble';
  camera.src = telephoto;

  //Parámetros de la foto
  var aperture = document.getElementById('aperture').value;
  var shutter = document.getElementById('shutter').value;
  var iso = document.getElementById('iso').value;

  var parameters = document.createElement('p');
  parameters.innerHTML = aperture + '<br/>' + shutter + '<br/>' + iso;

  //Información de la foto
  var info = document.createElement('div');
  info.className = 'info';

  //Descripción de la foto
  var description = document.getElementById('descripcion').value;
  var postDescription = document.createElement('p');
  postDescription.textContent = description;

  feed.prepend(post);
  post.append(author, details, photoDiv);
  photoDiv.appendChild(info);
  info.append(camera, parameters);
  photoDiv.appendChild(picture);
  post.appendChild(postDescription);

  window.location.href = '#post' + numPost;
}

function toOrdinal(number){
  if(number == 1 || number == 21 || number == 31)
    return number + 'st';
  else if(number == 2 || number == 22)
    return number + 'nd';
  else if(number == 3 || number == 23)
    return number + 'rd';
  else
    return number + 'th';
}

function convertMonth(month){
  var months = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"];
  return months[month];
}
