'use strict';
AFRAME.registerComponent('pickup', {
    schema: {
        held: {default: false}
    },
    init: function() {
        const CONTEXT_AF = this;

        CONTEXT_AF.el.addEventListener('click', function() {
            
            // Check if the entity has the 'interactive' class
            if (CONTEXT_AF.el.classList.contains('interactive')) {
                console.log('clicked pickup!!');
                // Set held to true
                CONTEXT_AF.data.held = true;
                //console.log(CONTEXT_AF.data.held);

                // Add a click event listener to the scene to drop the object
     
            }
        });
    },
    tick: function() {
       // console.log(this.data.held)
        //console.log('tick');
        // If the object is being held, update its position to match the cursor's position
        if (this.data.held) {
            //console.log('holding object');
            let cursor = document.querySelector('[cursor]');
            let cursorPos = cursor.components.getposition.getActivePos();
            let animationAttribute = `property: position; to: ${cursorPos.x} ${cursorPos.y} ${cursorPos.z}; dur: 500; easing: linear`;
            // Set the animation attribute
            this.el.setAttribute('animation', animationAttribute);
        }
    }
});