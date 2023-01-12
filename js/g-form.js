$(function() {
  $(".form").submit(function (event) {
    event.preventDefault();
    let alertBlockOk = document.querySelector(".alert-ok");
    let alertBlockIt = document.querySelector(".alert-it");
    let alertBlockTest = document.querySelector(".alert-test");
    let ok = document.querySelector(".ok");
    let okIt = document.querySelector(".ok-it");

    let appLink = "https://script.google.com/macros/s/AKfycbyr0ttAbG7xP6c82ZhdaxvYGHit1Yob2gUUFpBqxI29Xc44rm_woURTemS76V3p7Tx3wg/exec";

    let form = $("#" + $(this).attr("id"))[0];
    let fd = new FormData(form);

    $.ajax({
 
      url: appLink,
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: function(){
 

      // Показываем прелоадер
      alertBlockTest.style.display = "flex";
 
    },
 
  }).done(function(res, textStatus, jqXHR) {
 
    if(jqXHR.readyState === 4 && jqXHR.status === 200) {
 
   // Прячем прелоадер
   alertBlockTest.style.display = "none";
 
    
    // Выводим ответ формы.
    alertBlockOk.style.display = "flex";
    ok.addEventListener("click", () => {
      alertBlockOk.style.display = "none";
      document.querySelector(".form").reset();
    });
     
    } else {
      // Прячем прелоадер
    alertBlockTest.style.display = "none";
   

      alertBlockIt.style.display = "flex";
      okIt.addEventListener("click", () => {
        alertBlockIt.style.display = "none";
        document.querySelector(".form").reset();
      });
      console.log('google nie zwrócił status 200');
    }
  }).fail(function(res, textStatus, jqXHR) {
    // Прячем прелоадер
    alertBlockTest.style.display = "none";
   

    alertBlockIt.style.display = "flex";
      okIt.addEventListener("click", () => {
        alertBlockIt.style.display = "none";
        document.querySelector(".form").reset();
      });
  
    console.log('Nie udało się');
  }); 
});
}(jQuery));