let typed = new Typed('#typed', {  
    stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
    color: '#ff5c75', 
    typeSpeed: 100, // Скорость печати 
    startDelay: 500, // Задержка перед стартом анимации 
    backDelay: 500, // Пауза перед удалением
    backSpeed: 50, // Скорость удаления 
    loop: false, // Указываем, повторять ли анимацию
    loopCount: false 
  });