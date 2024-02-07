'use strict';

AFRAME.registerComponent('pickup', {
    schema: {
        isPickedUp: { default: false },
        isIntersecting: { default: false },
    },

    init: function () {
        var cursor = document.querySelector('#cursor');
        var camera = document.querySelector('#camera');
        var box = document.querySelector('#box');
        var attachedBox = document.querySelector('#attachedBox');

        cursor.addEventListener('raycaster-intersection', (event) => {
            this.data.intersectedEl = event.detail.els[0]; // Store the first intersected element
            this.data.isIntersecting = true;
        });

        cursor.addEventListener('raycaster-intersection-cleared', () => {
            this.data.isIntersecting = false;
        });

        window.addEventListener('mousedown', () => {
            console.log(this.data.intersectedEl)
            if (!this.data.isPickedUp && this.data.isIntersecting && this.data.intersectedEl.id === 'box') {
                this.data.intersectedEl.setAttribute('visible', 'false');
                attachedBox.setAttribute('visible', 'true');
                this.data.isPickedUp = true;
            }
        });
        
        window.addEventListener('mouseup', () => {
            if (this.data.isPickedUp) {
                var cameraDirection = camera.object3D.getWorldDirection(new THREE.Vector3());
                var dropPosition = cameraDirection.multiplyScalar(-1).add(camera.object3D.position);
                dropPosition.y -= 0.8;
                this.data.intersectedEl.setAttribute('position', dropPosition);
                this.data.intersectedEl.setAttribute('visible', 'true');
                attachedBox.setAttribute('visible', 'false');
                this.data.isPickedUp = false;
            }
        });
    }
});