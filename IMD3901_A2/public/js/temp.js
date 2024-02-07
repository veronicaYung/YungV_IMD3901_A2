'use strict';
AFRAME.registerComponent('pickup', {
    schema: {
        held: {default: false}
    },
    init: function() {
        console.log('pickup component initialized');
        const CONTEXT_AF = this;
        // Create a Three.js Raycaster
        this.raycaster = new THREE.Raycaster();
        this.mouse = new THREE.Vector2();
        this.moveMouse = new THREE.Vector2();
        var draggable = new THREE.Object3D();
        CONTEXT_AF.el.addEventListener('click', function(){

            console.log('click event');
        });

        CONTEXT_AF.el.addEventListener('click', event => {
            console.log('click event');
            this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            this.raycaster.setFromCamera(this.mouse, CONTEXT_AF.el.sceneEl.camera);
            //array contains all the objects that intersect with the ray
            const found = this.raycaster.intersectObjects(CONTEXT_AF.el.sceneEl.object3D.children, true);
            if (found.length > 0 && found[0].object.el.classList.contains('interactive')) {
                //if the object is found, then we will set the object to the first object in the array
                draggable = found[0].object;
                console.log("found draggable object");
            }
        });
    }
});