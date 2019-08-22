let textOffset = new Transform({
	position: new Vector3(0, 1, 0)
  })

function addLabel(text: string, parent: IEntity){
	let label = new Entity()
	label.setParent(parent)
	label.addComponent(new Billboard())
	label.addComponent(textOffset)
	label.addComponent(new TextShape(text))
	label.getComponent(TextShape).fontSize = 4
	engine.addEntity(label)
	}

let greenMaterial = new Material()
greenMaterial.albedoColor = Color3.Green()




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


// Instance the input object
const input = Input.instance

// button down event
input.subscribe("BUTTON_DOWN", e => {
  log("button A Down", e)
  globalPointerDownCube.addComponentOrReplace(greenMaterial)
})

// button up event
input.subscribe("BUTTON_UP", e => {
  log("button A Up", e)
  globalPointerUpCube.addComponentOrReplace(greenMaterial)
})




// Global Pointer Down
let globalPointerDownCube = new Entity()
globalPointerDownCube.addComponent(new Transform({
  position: new Vector3(2, 1, 10),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPointerDownCube.addComponent(new SphereShape())
engine.addEntity(globalPointerDownCube)

addLabel("Global down", globalPointerDownCube)



// Global Pointer Up
let globalPointerUpCube = new Entity()
globalPointerUpCube.addComponent(new Transform({
  position: new Vector3(2, 1, 12),
  scale: new Vector3(0.5, 0.5, 0.5)
}))
globalPointerUpCube.addComponent(new SphereShape())
engine.addEntity(globalPointerUpCube)

addLabel("Global up", globalPointerUpCube)



/////// ANIMATIONS

// Play sit animation
let idleAnimation = new AnimationState('Idle')
let sittingAnimation = new AnimationState('Sitting')
sittingAnimation.looping = false

const dog = new Entity()
dog.addComponent(new GLTFShape('models/BlockDog.glb'))
dog.addComponent(new Transform({
  position: new Vector3(10, 0, 10)
}))
let dogAnim = new Animator()
idleAnimation.playing = true
dogAnim.addClip(idleAnimation)
dogAnim.addClip(sittingAnimation)

dog.addComponent(dogAnim)
engine.addEntity(dog)



let sitCube = new Entity()
sitCube.addComponent(new Transform({
  position: new Vector3(12, 1, 12)
}))
sitCube.addComponent(new BoxShape())
sitCube.addComponent(new OnClick(e => {
  sitCube.addComponentOrReplace(greenMaterial)
  idleAnimation.stop()
  sittingAnimation.reset()
  sittingAnimation.play()
}))
engine.addEntity(sitCube)

addLabel("Play sit", sitCube)


// ground
let floor = new Entity()
floor.addComponent(new GLTFShape("models/FloorBaseGrass.glb"))
floor.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  scale:new Vector3(1.6, 0.1, 1.6)
}))
engine.addEntity(floor)

