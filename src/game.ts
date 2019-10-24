import { addLabel } from "./labels"
import { activate } from "./switchMaterial"


// ground
let floor = new Entity()
floor.addComponent(new GLTFShape("models/FloorBaseGrass.glb"))
floor.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  scale:new Vector3(1.6, 0.1, 1.6)
}))
engine.addEntity(floor)


// Click Cube
let clickCube = new Entity()
clickCube.addComponent(new Transform({
  position: new Vector3(2, 1, 2)
}))
clickCube.addComponent(new BoxShape())
clickCube.addComponent(new OnClick(e => {
  activate(clickCube)
}))
engine.addEntity(clickCube)

addLabel("click", clickCube)



// Pointer Down Cube
let pointerDownCube = new Entity()
pointerDownCube.addComponent(new Transform({
  position: new Vector3(2, 1, 4)
}))
pointerDownCube.addComponent(new BoxShape())
pointerDownCube.addComponent(new OnPointerDown(e => {
  activate(pointerDownCube)
}))
engine.addEntity(pointerDownCube)

addLabel("Pointer down", pointerDownCube)



// Pointer Up Cube
let pointerUpCube = new Entity()
pointerUpCube.addComponent(new Transform({
  position: new Vector3(2, 1, 6)
}))
pointerUpCube.addComponent(new BoxShape())
pointerUpCube.addComponent(new OnPointerUp(e => {
	activate(pointerUpCube)
}))
engine.addEntity(pointerUpCube)

addLabel("Pointer up", pointerUpCube)


////////////// Query sub-meshes

// robots base
const robots = new Entity()
robots.addComponent(new GLTFShape('models/Robots.glb'))
robots.addComponent(new Transform({
  position: new Vector3(12, 0, 2)
}))
engine.addEntity(robots)


// Robot feedback cube 1
let robot1Cube = new Entity()
robot1Cube.addComponent(new Transform({
  position: new Vector3(13, 1, 1.5),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
robot1Cube.addComponent(new BoxShape())
engine.addEntity(robot1Cube)

addLabel("Click robot 1", robot1Cube)


// Robot feedback cube 2
let robot2Cube = new Entity()
robot2Cube.addComponent(new Transform({
  position: new Vector3(10.5, 1, 1.5),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
robot2Cube.addComponent(new BoxShape())
engine.addEntity(robot2Cube)

addLabel("Click robot 2", robot2Cube)

// Click event

robots.addComponent(new OnPointerDown(e => {
	log(e.hit.meshName)
	if (e.hit.meshName == "Droid_01"){
		activate(robot1Cube)
	} else if (e.hit.meshName == "Droid_02"){
		activate(robot2Cube)
	}
}))



/////////Global pointerdown


// Global Pointer Down Sphere
let globalPointerDownCube = new Entity()
globalPointerDownCube.addComponent(new Transform({
  position: new Vector3(2, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPointerDownCube.addComponent(new SphereShape())
engine.addEntity(globalPointerDownCube)

addLabel("Global pointer down", globalPointerDownCube)



// Global Pointer Up Sphere
let globalPointerUpCube = new Entity()
globalPointerUpCube.addComponent(new Transform({
  position: new Vector3(2, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPointerUpCube.addComponent(new SphereShape())
engine.addEntity(globalPointerUpCube)

addLabel("Global pointer up", globalPointerUpCube)



// Global Primary Down Sphere
let globalPrimaryDownCube = new Entity()
globalPrimaryDownCube.addComponent(new Transform({
  position: new Vector3(4, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPrimaryDownCube.addComponent(new SphereShape())
engine.addEntity(globalPrimaryDownCube)

addLabel("Global primary down", globalPrimaryDownCube)



// Global Primary Up Sphere
let globalPrimaryUpCube = new Entity()
globalPrimaryUpCube.addComponent(new Transform({
  position: new Vector3(4, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPrimaryUpCube.addComponent(new SphereShape())
engine.addEntity(globalPrimaryUpCube)

addLabel("Global primary up", globalPrimaryUpCube)



// Global Secondary Down Sphere
let globalSecondaryDownCube = new Entity()
globalSecondaryDownCube.addComponent(new Transform({
  position: new Vector3(6, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalSecondaryDownCube.addComponent(new SphereShape())
engine.addEntity(globalSecondaryDownCube)

addLabel("Global secondary down", globalSecondaryDownCube)



// Global Secondary Up Sphere
let globalSecondaryUpCube = new Entity()
globalSecondaryUpCube.addComponent(new Transform({
  position: new Vector3(6, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalSecondaryUpCube.addComponent(new SphereShape())
engine.addEntity(globalSecondaryUpCube)

addLabel("Global secondary up", globalSecondaryUpCube)



//  Primary Down Cube (while pointing)
let primaryDownCube = new Entity()
primaryDownCube.addComponent(new Transform({
  position: new Vector3(8, 1, 12)
}))
primaryDownCube.addComponent(new BoxShape())
engine.addEntity(primaryDownCube)

addLabel("Primary down", primaryDownCube)



// Primary Up Cube (while pointing)
let primaryUpCube = new Entity()
primaryUpCube.addComponent(new Transform({
  position: new Vector3(10, 1, 12)
}))
primaryUpCube.addComponent(new BoxShape())
engine.addEntity(primaryUpCube)

addLabel("Primary up", primaryUpCube)



// Secondary Down Cube (while pointing)
let secondaryDownCube = new Entity()
secondaryDownCube.addComponent(new Transform({
  position: new Vector3(12, 1, 12)
}))
secondaryDownCube.addComponent(new BoxShape())
engine.addEntity(secondaryDownCube)

addLabel("Secondary down", secondaryDownCube)



// Secondary Up Cube (while pointing)
let secondaryUpCube = new Entity()
secondaryUpCube.addComponent(new Transform({
  position: new Vector3(14, 1, 12)
}))
secondaryUpCube.addComponent(new BoxShape())
engine.addEntity(secondaryUpCube)

addLabel("Secondary up", secondaryUpCube)


// Instance the input object
const input = Input.instance

// pointer down event
input.subscribe("BUTTON_DOWN", ActionButton.POINTER, true, e => {
  log("pointer down", e)
  activate(globalPointerDownCube)
  if(e.hit.entityId == pointerDownCube.uuid){
	activate(pointerDownCube)
  }
})

// pointer up event
input.subscribe("BUTTON_UP", ActionButton.POINTER, true, e => {
	log("pointer down", e)
	activate(globalPointerUpCube)
	if(e.hit.entityId == pointerUpCube.uuid){
		activate(pointerUpCube)
	}
})


// primary down event
input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, true, e => {
	log("primary down", e)
	activate(globalPrimaryDownCube)
	if(e.hit.entityId == primaryDownCube.uuid){
		activate(primaryDownCube)
	}
  })

// primary up event
input.subscribe("BUTTON_UP", ActionButton.PRIMARY, true, e => {
	log("primary down", e)
	activate(globalPrimaryUpCube)
	if(e.hit.entityId == primaryUpCube.uuid){
		activate(primaryUpCube)
	}
})


// secondary down event
input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, true, e => {
	log("secondary down", e)
	activate(globalSecondaryDownCube)
	if(e.hit.entityId == secondaryDownCube.uuid){
		activate(secondaryDownCube)
	}
  })
  
// secondary up event
input.subscribe("BUTTON_UP", ActionButton.SECONDARY, true, e => {
	log("secondary down", e)
	activate(globalSecondaryUpCube)
	if(e.hit.entityId == secondaryUpCube.uuid){
		activate(secondaryUpCube)
	}
})


///////////// Distance from player


// Object that tracks user position and rotation
const camera = Camera.instance

let closeCube = new Entity()
closeCube.addComponent(new Transform({
  position: new Vector3(2, 1, 8)
}))
closeCube.addComponent(new BoxShape())
engine.addEntity(closeCube)

addLabel("Walk near", closeCube)


// check distance for closeCube
export class Proximity {
  update() {
    let transform = closeCube.getComponent(Transform)
    let dist = distance(transform.position, camera.position)
    if ( dist < 8) {
		activate(closeCube)
    }
  }
}

engine.addSystem(new Proximity())

// Get distance
/*
Note:
This function really returns distance squared, as it's a lot more efficient to calculate.
The square root operation is expensive and isn't really necessary if we compare the result to squared values.
We also use {x,z} not {x,y}. The y-coordinate is how high up it is.
*/
function distance(pos1: Vector3, pos2: Vector3): number {
	const a = pos1.x - pos2.x
	const b = pos1.z - pos2.z
	return a * a + b * b
  }