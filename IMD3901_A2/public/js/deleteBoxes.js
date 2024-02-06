'use strict';
AFRAME.registerComponent('deleteboxes', {
    multiple: false,
    init: function() { // our setup 
        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#deleteBox_button');

        CONTEXT_AF.el.addEventListener('click', function() {
            console.log('delete button clicked');

            // Get all the boxes in the scene
            let boxes = document.querySelectorAll('.createdBox');

            // for each box with the class createdBox, remove it from the parent a-scene
            boxes.forEach(box => box.parentNode.removeChild(box));
        });
    },
    // Other methods...
});