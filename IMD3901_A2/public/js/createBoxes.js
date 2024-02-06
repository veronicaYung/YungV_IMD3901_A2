
'use strict';
AFRAME.registerComponent('createboxes', {
    multiple:false,
    init:function(){ // our setup 
        // get reference to the button
        const CONTEXT_AF = this;
        CONTEXT_AF.button = document.querySelector('#createBox-button');
        // this.el or (CONTEXT_AF) refers to the element that this components is attached to
        CONTEXT_AF.el.addEventListener('click', function(){
            console.log('clicked');
            
            // Create a new a-entity and set its geometry to box
            let box = document.createElement('a-entity');
            box.setAttribute('geometry', 'primitive: box');

            //add a tag to the boxes created, useful for deleting them
            box.classList.add('createdBox');

            // Generate random x and z coordinates inside the floor for the box position
            let x = Math.random() * 26-13; // Random number between -26 and 26
            let z = Math.random() * 26-13; 
            
            box.setAttribute('position', `${x} 0 ${z}`);
            box.setAttribute('material', 'color: red');
            
            // Add box under a-scene as a child, helpful for deleting them
            document.querySelector('a-scene').appendChild(box);
        });


    },

});