$(document).ready(function() { 
      $("A#reviews__btn-js").toggle(function() { 
        // Отображаем скрытый блок 
        $("DIV#reviews__row-js").fadeIn(); // fadeIn - плавное появление
        return false; // не производить переход по ссылке
      },  
      function() { 
        // Скрываем блок 
        $("DIV#reviews__row-js").fadeOut(); // fadeOut - плавное исчезновение 
        return false; // не производить переход по ссылке
      }); // end of toggle() 
    }); // end of ready() 