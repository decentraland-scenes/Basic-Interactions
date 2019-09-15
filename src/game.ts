let textOffset = new Transform({
	position: new Vector3(0, 1.5, 0)
  })

function addLabel(text: string, parent: IEntity){
	let label = new Entity()
	label.setParent(parent)
	label.addComponent(new Billboard())
	label.addComponent(textOffset)
	label.addComponent(new TextShape(text))
	label.getComponent(TextShape).fontSize = 3
	label.getComponent(TextShape).color = Color3.Black()
	
	engine.addEntity(label)
	}

let greenMaterial = new Material()
greenMaterial.albedoColor = Color3.Green()



// ground
let floor = new Entity()
floor.addComponent(new GLTFShape("models/FloorBaseGrass.glb"))
floor.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  scale:new Vector3(1.6, 0.1, 1.6)
}))
engine.addEntity(floor)


// Click
let clickCube = new Entity()
clickCube.addComponent(new Transform({
  position: new Vector3(2, 1, 2)
}))
clickCube.addComponent(new BoxShape())
clickCube.addComponent(new OnClick(e => {
  clickCube.addComponentOrReplace(greenMaterial)
}))
engine.addEntity(clickCube)

addLabel("click", clickCube)



// Pointer Down
let pointerDownCube = new Entity()
pointerDownCube.addComponent(new Transform({
  position: new Vector3(2, 1, 4)
}))
pointerDownCube.addComponent(new BoxShape())
pointerDownCube.addComponent(new OnPointerDown(e => {
  pointerDownCube.addComponentOrReplace(greenMaterial)
}))
engine.addEntity(pointerDownCube)

addLabel("Pointer down", pointerDownCube)



// Pointer Up
let pointerUpCube = new Entity()
pointerUpCube.addComponent(new Transform({
  position: new Vector3(2, 1, 6)
}))
pointerUpCube.addComponent(new BoxShape())
pointerUpCube.addComponent(new OnPointerUp(e => {
  pointerUpCube.addComponentOrReplace(greenMaterial)
}))
engine.addEntity(pointerUpCube)

addLabel("Pointer up", pointerUpCube)



// Distance from player
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
      closeCube.addComponentOrReplace(greenMaterial)
    }
  }
}

engine.addSystem(new Proximity())

// Object that tracks user position and rotation
const camera = Camera.instance

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


/////////Global pointerdown




// Global Pointer Down
let globalPointerDownCube = new Entity()
globalPointerDownCube.addComponent(new Transform({
  position: new Vector3(2, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPointerDownCube.addComponent(new SphereShape())
engine.addEntity(globalPointerDownCube)

addLabel("Global pointer down", globalPointerDownCube)



// Global Pointer Up
let globalPointerUpCube = new Entity()
globalPointerUpCube.addComponent(new Transform({
  position: new Vector3(2, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPointerUpCube.addComponent(new SphereShape())
engine.addEntity(globalPointerUpCube)

addLabel("Global pointer up", globalPointerUpCube)



// Global Primary Down
let globalPrimaryDownCube = new Entity()
globalPrimaryDownCube.addComponent(new Transform({
  position: new Vector3(4, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPrimaryDownCube.addComponent(new SphereShape())
engine.addEntity(globalPrimaryDownCube)

addLabel("Global primary down", globalPrimaryDownCube)



// Global Primary Up
let globalPrimaryUpCube = new Entity()
globalPrimaryUpCube.addComponent(new Transform({
  position: new Vector3(4, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPrimaryUpCube.addComponent(new SphereShape())
engine.addEntity(globalPrimaryUpCube)

addLabel("Global primary up", globalPrimaryUpCube)



// Global Secondary Down
let globalSecondaryDownCube = new Entity()
globalSecondaryDownCube.addComponent(new Transform({
  position: new Vector3(6, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalSecondaryDownCube.addComponent(new SphereShape())
engine.addEntity(globalSecondaryDownCube)

addLabel("Global secondary down", globalSecondaryDownCube)



// Global Secondary Up
let globalSecondaryUpCube = new Entity()
globalSecondaryUpCube.addComponent(new Transform({
  position: new Vector3(6, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalSecondaryUpCube.addComponent(new SphereShape())
engine.addEntity(globalSecondaryUpCube)

addLabel("Global secondary up", globalSecondaryUpCube)










//  Primary Down
let primaryDownCube = new Entity()
primaryDownCube.addComponent(new Transform({
  position: new Vector3(8, 1, 12)
}))
primaryDownCube.addComponent(new BoxShape())
engine.addEntity(primaryDownCube)

addLabel("Primary down", primaryDownCube)



// Primary Up
let primaryUpCube = new Entity()
primaryUpCube.addComponent(new Transform({
  position: new Vector3(10, 1, 12)
}))
primaryUpCube.addComponent(new BoxShape())
engine.addEntity(primaryUpCube)

addLabel("Primary up", primaryUpCube)



// Secondary Down
let secondaryDownCube = new Entity()
secondaryDownCube.addComponent(new Transform({
  position: new Vector3(12, 1, 12)
}))
secondaryDownCube.addComponent(new BoxShape())
engine.addEntity(secondaryDownCube)

addLabel("Secondary down", secondaryDownCube)



// Secondary Up
let secondaryUpCube = new Entity()
secondaryUpCube.addComponent(new Transform({
  position: new Vector3(14, 1, 12)
}))
secondaryUpCube.addComponent(new BoxShape())
engine.addEntity(secondaryUpCube)

addLabel("Secondary up", secondaryUpCube)


// robots base
const robots = new Entity()
robots.addComponent(new GLTFShape('models/Robots.glb'))
robots.addComponent(new Transform({
  position: new Vector3(12, 0, 2)
}))
engine.addEntity(robots)

robots.addComponent(new OnPointerDown(e => {
	log(e.hit.meshName)
	if (e.hit.meshName == "Droid_01"){
		robot1Cube.addComponentOrReplace(greenMaterial)
	} else if (e.hit.meshName == "Droid_02"){
		robot2Cube.addComponentOrReplace(greenMaterial)
	}
}))


// Robot1
let robot1Cube = new Entity()
robot1Cube.addComponent(new Transform({
  position: new Vector3(13, 1, 1.5),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
robot1Cube.addComponent(new BoxShape())
engine.addEntity(robot1Cube)

addLabel("Click robot 1", robot1Cube)


// Robot2
let robot2Cube = new Entity()
robot2Cube.addComponent(new Transform({
  position: new Vector3(10.5, 1, 1.5),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
robot2Cube.addComponent(new BoxShape())
engine.addEntity(robot2Cube)

addLabel("Click robot 2", robot2Cube)




// Instance the input object
const input = Input.instance

// pointer down event
input.subscribe("BUTTON_DOWN", ActionButton.POINTER, true, e => {
  log("pointer down", e)
  if(e.hit.entityId == pointerDownCube.uuid){
	pointerDownCube.addComponentOrReplace(greenMaterial)
  } else {
	globalPointerDownCube.addComponentOrReplace(greenMaterial)
  }
})

// pointer up event
input.subscribe("BUTTON_UP", ActionButton.POINTER, true, e => {
	log("pointer down", e)
	if(e.hit.entityId == pointerUpCube.uuid){
		pointerUpCube.addComponentOrReplace(greenMaterial)
	} else {
		globalPointerUpCube.addComponentOrReplace(greenMaterial)
	}
})


// primary down event
input.subscribe("BUTTON_DOWN", ActionButton.PRIMARY, true, e => {
	log("primary down", e)
	if(e.hit.entityId == primaryDownCube.uuid){
		primaryDownCube.addComponentOrReplace(greenMaterial)
	} else {
	  globalPrimaryDownCube.addComponentOrReplace(greenMaterial)
	}
  })

// primary up event
input.subscribe("BUTTON_UP", ActionButton.PRIMARY, true, e => {
	log("primary down", e)
	if(e.hit.entityId == primaryUpCube.uuid){
		primaryUpCube.addComponentOrReplace(greenMaterial)
	} else {
		globalPrimaryUpCube.addComponentOrReplace(greenMaterial)
	}
})



// secondary down event
input.subscribe("BUTTON_DOWN", ActionButton.SECONDARY, true, e => {
	log("secondary down", e)
	if(e.hit.entityId == secondaryDownCube.uuid){
		secondaryDownCube.addComponentOrReplace(greenMaterial)
	} else {
	  globalSecondaryDownCube.addComponentOrReplace(greenMaterial)
	}
  })
  
// secondary up event
input.subscribe("BUTTON_UP", ActionButton.SECONDARY, true, e => {
	log("secondary down", e)
	if(e.hit.entityId == secondaryUpCube.uuid){
		secondaryUpCube.addComponentOrReplace(greenMaterial)
	} else {
		globalSecondaryUpCube.addComponentOrReplace(greenMaterial)
	}
})