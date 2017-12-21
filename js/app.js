window.addEventListener('load', function(event) {
   var tweet = document.getElementById('input-write');
    var father =document.getElementById('maker');
    var button = document.getElementById('submit');
    
    //tweet hora contador desabilitar :)
    button.addEventListener('click', function(event){
        
        var date_c = document.createElement('p');
        date_c.setAttribute('class', 'date-current');
        var twitter = document.createElement('div');
        twitter.setAttribute('class', 'posts');
        var text= tweet.textContent;
        var fecha = new Date();
        var text_2=document.createTextNode("Day: "+fecha.getDate()+"\nHour: "+(fecha.getHours())+"\nMin: "+fecha.getMinutes());
        var profile =document.getElementById('photo_container');
        profile.setAttribute('class','feed_style');
        var text_3 = document.createTextNode("#FreeFifthHarmony");
        var text_4 =document.createTextNode(".@annyglop23");
        var user =document.createElement('p');
        var user_1 =document.createElement('p');
        var box = document.createElement('div');
        
        date_c.textContent=text_2.textContent;
        date_c.setAttribute('class','style');
        twitter.textContent = text;
        father.insertBefore(twitter, father.childNodes[0]);
        twitter.appendChild(date_c); 
        
        user.textContent=text_3.textContent;
        user_1.textContent=text_4.textContent;
        
         father.insertBefore(box,twitter);
        box.appendChild(user_1);
        box.insertBefore(user,user_1);
        box.insertBefore(profile,user);
       
        user.setAttribute('class', 'style_user_post letter_style1');
        user_1.setAttribute('class','style_user_post letter_style2');
    })
   
    setInterval (
        function(event) {
           var message=document.getElementById('input-write');
            var text_1=message.innerHTML;
           
            document.getElementById('counter').innerHTML=message.innerHTML.length;
            if(text_1.length<=119) {
                document.getElementById('counter').setAttribute('class', 'first-color');
            }
            if(text_1.length>=120) {
                document.getElementById('counter').setAttribute('class', 'second-color');
            }
            if(text_1.length>=130){
                document.getElementById('counter').setAttribute('class', 'third-color');
                newText=text_1.slice(0,140);
                message.value =newText;
            }
            if(text_1.length>1 && text_1.length<=140) {
               
                document.getElementById("submit").disabled = false;
            
            }
            if(text_1.length>140) {
                document.getElementById("submit").disabled = true;
            }
            if(text_1.length===0) {
                document.getElementById("submit").disabled = true;
            }
        }
    )
    
    
    
    
   
  
})