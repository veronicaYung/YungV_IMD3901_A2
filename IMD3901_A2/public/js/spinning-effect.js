'use strict';
AFRAME.registerComponent('spinning-effect', {
    schema:{
        duration:{type:'number', default:2000},
    },
    multiple:false,
    init:function(){ // our setup 
        // get reference to the walls and the button
        // then we will add an animation component
        // listen for when the button is clicked [ similar to listen to click event]
        // play animation 
        // if clicked and animation is already playing, pause it 
        const CONTEXT_AF = this;
        CONTEXT_AF.walls = document.querySelector('#walls');
        CONTEXT_AF.button = document.querySelector('#universal-button');
        CONTEXT_AF.isSpinning = false;
        CONTEXT_AF.walls.setAttribute('animation', {property:'rotation.y', to:360, loop:true, 
                                                    dur:CONTEXT_AF.data.duration, easing:'linear',
                                                    enabled:false});
        // this.el or (CONTEXT_AF) refers to the element that this components is attached to
        CONTEXT_AF.el.addEventListener('click', function(){
            if (CONTEXT_AF.isSpinning === true){
                console.log('stop spinning')
                CONTEXT_AF.isSpinning = false;
                CONTEXT_AF.walls.setAttribute('animation', {enabled:false})
            }
            else{
                console.log('start spinning')
                CONTEXT_AF.isSpinning = true;
                CONTEXT_AF.walls.setAttribute('animation', {enabled:true})
            }
            
        });


    },
    // update: function(oldData){}, // IS NOT OF's update... only when a propert in the schema changes
    // tick: function(time, timeDelta){}, // called every update
    // tock: function(time, timeDelta){}, // called immediately after tick
    // remove: function(){},
    // pause: function(){},
    // play: function(){},
    // updateSchema(){},

});