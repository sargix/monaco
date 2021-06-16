$("nav div button").on("click", function () {
  const goToSection = "[data-section=" + $(this).attr("id") + "]";
  $("body, html").animate({
    scrollTop: $(goToSection).offset().top,
  });
});
