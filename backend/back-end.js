export function backend(){

  const xhr = new XMLHttpRequest();
  
  const p = xhr.addEventListener('load',()=>{
    console.log(xhr.response);
  });
  xhr.open('GET','https://supersimplebackend.devs/products');
  xhr.send();

  return p;
}