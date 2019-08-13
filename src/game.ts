

let greenMaterial = new Material()
greenMaterial.albedoColor = Color3.Green()


let textOffset = new Transform({
  position: new Vector3(0, 1, 0)
})

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

let label1 = new Entity()
label1.setParent(clickCube)
label1.addComponent(new Billboard())
label1.addComponent(textOffset)
label1.addComponent(new TextShape("Click here"))
engine.addEntity(label1)


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

let label2 = new Entity()
label2.setParent(pointerDownCube)
label2.addComponent(new Billboard())
label2.addComponent(textOffset)
label2.addComponent(new TextShape("Pointer down"))
engine.addEntity(label2)


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

let label3 = new Entity()
label3.setParent(pointerUpCube)
label3.addComponent(new Billboard())
label3.addComponent(textOffset)
label3.addComponent(new TextShape("Pointer up"))
engine.addEntity(label3)


// Distance from player
let closeCube = new Entity()
closeCube.addComponent(new Transform({
  position: new Vector3(2, 1, 8)
}))
closeCube.addComponent(new BoxShape())
engine.addEntity(closeCube)

let label4 = new Entity()
label4.setParent(closeCube)
label4.addComponent(new Billboard())
label4.addComponent(textOffset)
label4.addComponent(new TextShape("Walk near"))
engine.addEntity(label4)



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

let label5 = new Entity()
label5.setParent(sitCube)
label5.addComponent(new Billboard())
label5.addComponent(textOffset)
label5.addComponent(new TextShape("Play Sit"))
engine.addEntity(label5)


// ground
let floor = new Entity()
floor.addComponent(new GLTFShape("models/FloorBaseGrass.glb"))
floor.addComponent(new Transform({
  position: new Vector3(8, 0, 8),
  scale:new Vector3(1.6, 0.1, 1.6)
}))
engine.addEntity(floor)