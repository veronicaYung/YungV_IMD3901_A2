'use strict';
AFRAME.registerComponent('createboxes', {
    multiple:false,
    init:function(){ 
        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#createBox-button');
        
        CONTEXT_AF.el.addEventListener('click', function(){
            // Create a new a-entity and set its geometry to box
            let box = document.createElement('a-box');
            box.setAttribute('material', 'src: url(assets/crate/textures/lambert2_baseColor.png)');

            //Add tags to the boxes created, useful for deleting/interacting with them
            box.classList.add('createdBox');
            box.classList.add('interactive');
            box.setAttribute('id', 'box');

            // Allow these boxes to be picked up
            box.setAttribute('pickup', '');

            // Generate random x and z coordinates inside the floor for the box position
            let x = Math.random() * 26-13; // Random number between -26 and 26
            let z = Math.random() * 26-13; 
            
            box.setAttribute('position', `${x} 0.551 ${z}`);
            
            // Add box under a-scene as a child, helpful for deleting them
            document.querySelector('a-scene').appendChild(box);
        });
    },
});