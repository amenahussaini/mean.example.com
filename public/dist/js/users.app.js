
function viewUsers(){

  let uri = `${window.location.origin}/api/users`;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', uri);

  xhr.setRequestHeader(
    'Content-Type',
    'application/json; charset=UTF-8'
  );

  xhr.send();

  xhr.onload = function(){
    let data = JSON.parse(xhr.response);
    console.log(data);
  }
}
