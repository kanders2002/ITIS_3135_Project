//Here I have set up the simple code which makes the slideshow section of the code function properly.
let $slideshow = $(".cycle-slideshow");

$(document).click(function() {
   if ($slideshow.is(".cycle-paused"))
      $slideshow.cycle("resume");
   else
      $slideshow.cycle("pause");
});
