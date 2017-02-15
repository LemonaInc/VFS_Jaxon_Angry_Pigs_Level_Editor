function makeDraggable(element, onDragMove, onDragEnd) {
  element.style.position = 'absolute';

  var mouseDown = false;
  var offset = { x: 0, y: 0};
  var oldZIndex = '';

  element.addEventListener('mousedown', function(evt) {
    oldZIndex = element.style.zIndex;
    element.style.zIndex = 999;
    var rect = element.getBoundingClientRect();
    offset.x = evt.clientX - rect.left;
    offset.y = evt.clientY - rect.top;

    mouseDown = true;
  });

  element.addEventListener('mousemove', function(evt) {
    if(!mouseDown) {
      return;
    }

    element.style.left = (evt.clientX - offset.x) + 'px';
    element.style.top = (evt.clientY - offset.y) + 'px';

    onDragMove instanceof Function ? onDragMove(evt) : null;
  });

  var finishDrag = function(evt) {
    mouseDown = false;
    element.style.zIndex = oldZIndex;
    onDragEnd instanceof Function ? onDragEnd(evt) : null;
  }
// Add EventListeners here
  element.addEventListener('mouseup', finishDrag)
  element.addEventListener('mouseout', finishDrag);
}

var dragMove = function() {

}
//  Set make draggable elements here
makeDraggable(document.getElementById('Wall'), dragMove);
makeDraggable(document.getElementById('Bird'));
makeDraggable(document.getElementById('LargeWall'));
makeDraggable(document.getElementById('SmallWall'));
makeDraggable(document.getElementById('Ball'));
makeDraggable(document.getElementById('Grass'));

//Background image script

(function($) {
    $(document).ready(function() {

        $(".change").click(function() {
            $('.header').css('background-image', 'url(img/Beach.jpg)');
        });

        $(".background").click(function() {
            $('.header').css('background-image', 'url(img/Forest.jpg)');
        });

        $(".field").click(function() {
            $('.header').css('background-image', 'url(img/Field.jpg)');
        });

        $(".safari").click(function() {
            $('.header').css('background-image', 'url(img/Trees.jpg)');
        });

        $(".desert").click(function() {
            $('.header').css('background-image', 'url(img/Desert.jpg)');
        });


        $(".water").click(function() {
            $('.header').css('background-image', 'url(img/Water.jpg)');
        });



    });
})(jQuery);


