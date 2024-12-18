function addfuncation(){

   var list = document.createElement('li');
   var olbox = document.getElementById('oltag')

   olbox.appendChild(list)
   

     list.innerHTML = document.getElementById('inputvalue').value
     
   
    document.getElementById('inputvalue').value = ""
   
   
   var btn = document.createElement('button');
   
  
  btn.innerText = "Remove"

  list.appendChild(btn);

  btn.addEventListener("click",function(){

    list.remove()
  })


}
