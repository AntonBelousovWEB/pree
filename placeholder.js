i = 0;
default = [['name', ['I', 'v', 'a', 'n']]];

// i - индекс элемента который меняем 

function anim(i) { 
  if(i < default.length) { 
    var text = $('input#'+default[i][0]).attr("placeholder");
    if (default[i][1].length == text.length) {
      i++;
      anim(i);
      } else { 
        text += default[i][1][text.length]; 
        $('input#'+default[i][0]).attr("placeholder", text);
       }
     } else { 
       // очищаем все placeholder-ы
       i = 0; 
       for(j=0; j<default.length; j++) { 
         $('input#'+default[i][0]).attr("placeholder", ""); 
        }
       }
      } 
      // запускаем метод каждую секунду
      var timerId = setInterval( anim(i), 1000);
      // что бы выключить clearInterval(timerId);