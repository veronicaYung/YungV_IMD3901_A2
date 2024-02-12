'use strict';
AFRAME.registerComponent('createboxes', {
    multiple:false,
    init:function(){ // our setup 
        // get reference to the button
        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#createBox-button');
        // this.el or (CONTEXT_AF) refers to the element that this components is attached to
        CONTEXT_AF.el.addEventListener('click', function(){
            console.log('clicked create box button');
            
            // Create a new a-entity and set its geometry to box
            let box = document.createElement('a-box');
            box.setAttribute('material', 'src: url(assets/crate/textures/lambert2_baseColor.png)');

            //add a tag to the boxes created, useful for deleting them
            box.classList.add('createdBox');
            box.classList.add('interactive');
            box.setAttribute('id', 'box');

            // Add the pickup component to the box
            box.setAttribute('pickup', '');

            // Generate random x and z coordinates inside the floor for the box position
            let x = Math.random() * 26-13; // Random number between -26 and 26
            let z = Math.random() * 26-13; 
            
            box.setAttribute('position', `${x} 0.5 ${z}`);
            
            // Add box under a-scene as a child, helpful for deleting them
            document.querySelector('a-scene').appendChild(box);
        });
    },
});