let typed = new Typed('#typed-holder', {  
    stringsElement: '#typed-strings-holder', // Тут id блока из которого берем строки для анимации
    typeSpeed: 100, // Скорость печати 
    startDelay: 500, // Задержка перед стартом анимации 
    backDelay: 500, // Пауза перед удалением
    backSpeed: 50, // Скорость удаления 
    loop: false, // Указываем, повторять ли анимацию
    loopCount: false 
  });