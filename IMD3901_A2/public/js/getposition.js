AFRAME.registerComponent('getposition', {
    schema: {
        position: {type: 'vec3'}
    },
    getActivePos: function() {
        // Return the cursor's current position
        return this.data.position;
    },
    tick: (function () {
        this.data.position = this.el.object3D.getWorldPosition(new THREE.Vector3());
        })
        
});