var alertBlock = document.querySelector(".alert");
var ok = document.querySelector(".ok");
$(
  (function () {
    $(".form").submit(function (event) {
      event.preventDefault();
      let appLink =
        "https://script.google.com/macros/s/AKfycbyr0ttAbG7xP6c82ZhdaxvYGHit1Yob2gUUFpBqxI29Xc44rm_woURTemS76V3p7Tx3wg/exec";

      let form = $("#" + $(this).attr("id"))[0];

      let fd = new FormData(form);

        alertBlock.style.display = "flex";
        ok.addEventListener("click", () => {
          alertBlock.style.display = "none";
          document.querySelector(".form").reset();
        });
      $.ajax({
        url: appLink,
        type: "POST",
        data: fd,
        processData: false,
        contentType: false,
      });
    });
  })(jQuery)
);

