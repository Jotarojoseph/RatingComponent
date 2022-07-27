    var value = "";
    var one = document.querySelectorAll('input');
    var btn = document.querySelector('button');
    var result = document.querySelector('#sec');
    var result2 = document.querySelector('#first');
    var span = document.querySelector('span');
    
      for(i=0; i<one.length; i++){
        one[i].addEventListener('click', initiateRate);
      }
      
    function initiateRate() {
      value = this.value;

      if(value == ""){
        value = 0;
        btn.addEventListener('click', rate);
      }else{
       
        btn.addEventListener('click', rate);
      }    
    }

    function rate(){
      span.textContent = value;
      result.classList.remove("ratemessage");
      result2.classList.add("ratemessage");   
    }
  
    

