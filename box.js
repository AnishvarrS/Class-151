AFRAME.registerComponent('mover',{
    schema: {
        positionX: {type: 'number', default: 1},
    },
 
tick: function(){
    this.data.positionX = this.data.positionX + 0.10
    var pos = this.el.getAttribute("position")
    pos.x = this.data.positionX
    this.el.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
}
})