import { addLabel } from './labels'
import { activate } from './switchMaterial'

// Click Cube

let clickCube = createCube(new Vector3(2, 1, 2), 'click')

clickCube.addComponent(
  new OnClick((e) => {
    activate(clickCube)
  })
)

// Pointer Down Cube

let pointerDownCube = createCube(new Vector3(2, 1, 4), 'Pointer down')

pointerDownCube.addComponent(
  new OnPointerDown(
    (e) => {
      activate(pointerDownCube)
    },
    { button: ActionButton.POINTER, hoverText: 'Activate' }
  )
)

// Pointer Up Cube

let pointerUpCube = createCube(new Vector3(2, 1, 6), 'Pointer up')

pointerUpCube.addComponent(
  new OnPointerUp(
    (e) => {
      activate(pointerUpCube)
    },
    { button: ActionButton.POINTER, hoverText: 'Activate' }
  )
)

//  Primary Down Cube (while pointing)
let primaryDownCube = createCube(new Vector3(8, 1, 12), 'Primary down')

primaryDownCube.addComponent(
  new OnPointerDown(
    (e) => {
      activate(primaryDownCube)
    },
    { button: ActionButton.PRIMARY, hoverText: 'Activate' }
  )
)

// Primary Up Cube (while pointing)
let primaryUpCube = createCube(new Vector3(10, 1, 12), 'Primary up')

primaryUpCube.addComponent(
  new OnPointerUp(
    (e) => {
      activate(primaryUpCube)
    },
    { button: ActionButton.PRIMARY, hoverText: 'Activate' }
  )
)

// Secondary Down Cube (while pointing)
let secondaryDownCube = createCube(new Vector3(12, 1, 12), 'Secondary down')

secondaryDownCube.addComponent(
  new OnPointerDown(
    (e) => {
      activate(secondaryDownCube)
    },
    { button: ActionButton.SECONDARY, hoverText: 'Activate' }
  )
)

// Secondary Up Cube (while pointing)
let secondaryUpCube = createCube(new Vector3(14, 1, 12), 'Secondary up')

secondaryUpCube.addComponent(
  new OnPointerUp(
    (e) => {
      activate(secondaryUpCube)
    },
    { button: ActionButton.SECONDARY, hoverText: 'Activate' }
  )
)

////////////// Query sub-meshes

// robots base

const robots = new Entity()
robots.addComponent(new GLTFShape('models/Robots.glb'))
robots.addComponent(
  new Transform({
    position: new Vector3(12, 0, 2),
  })
)
engine.addEntity(robots)

// Robot feedback cube 1

let robot1Cube = createCube(new Vector3(13, 1, 1.5), 'Click robot 1')
robot1Cube.getComponent(Transform).scale.setAll(0.5)

// Robot feedback cube 2

let robot2Cube = createCube(new Vector3(10.5, 1, 1.5), 'Click robot 2')
robot2Cube.getComponent(Transform).scale.setAll(0.5)

// Click event

robots.addComponent(
  new OnPointerDown(
    (e) => {
      log(e.hit.meshName)
      if (e.hit.meshName == 'Droid_01') {
        activate(robot1Cube)
      } else if (e.hit.meshName == 'Droid_02') {
        activate(robot2Cube)
      }
    },
    { button: ActionButton.POINTER, showFeedback: false }
  )
)

/////////Global pointerdown

// Global Pointer Down Sphere
let globalPointerDownCube = createCube(
  new Vector3(2, 1, 10),
  'Global pointer down',
  true
)

// Global Pointer Up Sphere
let globalPointerUpCube = createCube(
  new Vector3(2, 1, 12),
  'Global pointer up',
  true
)

// Global Primary Down Sphere
let globalPrimaryDownCube = createCube(
  new Vector3(4, 1, 10),
  'Global primary down',
  true
)

// Global Primary Up Sphere
let globalPrimaryUpCube = createCube(
  new Vector3(4, 1, 12),
  'Global primary up',
  true
)

// Global Secondary Down Sphere
let globalSecondaryDownCube = createCube(
  new Vector3(6, 1, 10),
  'Global secondary down',
  true
)

// Global Secondary Up Sphere
let globalSecondaryUpCube = createCube(
  new Vector3(6, 1, 12),
  'Global secondary up',
  true
)

/////// GLOBAL EVENT LISTENERS

// Instance the input object
const input = Input.instance

// pointer down event
input.subscribe('BUTTON_DOWN', ActionButton.POINTER, true, (e) => {
  log('pointer down', e)
  activate(globalPointerDownCube)
})

// pointer up event
input.subscribe('BUTTON_UP', ActionButton.POINTER, true, (e) => {
  log('pointer down', e)
  activate(globalPointerUpCube)
})

// primary down event
input.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (e) => {
  log('primary down', e)
  activate(globalPrimaryDownCube)
})

// primary up event
input.subscribe('BUTTON_UP', ActionButton.PRIMARY, true, (e) => {
  log('primary down', e)
  activate(globalPrimaryUpCube)
})

// secondary down event
input.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, true, (e) => {
  log('secondary down', e)
  activate(globalSecondaryDownCube)
})

// secondary up event
input.subscribe('BUTTON_UP', ActionButton.SECONDARY, true, (e) => {
  log('secondary down', e)
  activate(globalSecondaryUpCube)
})

///////////// Distance from player

let closeCube = createCube(new Vector3(2, 1, 9), 'Walk near')

// check distance for closeCube
export class Proximity {
  update() {
    let transform = closeCube.getComponent(Transform)
    let dist = distance(transform.position, Camera.instance.position)
    if (dist < 8) {
      activate(closeCube)
    }
  }
}

engine.addSystem(new Proximity())

// ground
let floor = new Entity()
floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
floor.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.6, 0.1, 1.6),
  })
)
engine.addEntity(floor)

// reusable functions to add each cube and sphere
function createCube(pos: Vector3, label: string, sphere?: boolean) {
  let cube = new Entity()
  cube.addComponent(
    new Transform({
      position: pos,
    })
  )
  if (sphere == true) {
    cube.addComponent(new SphereShape())
    cube.getComponent(Transform).scale.setAll(0.5)
  } else {
    cube.addComponent(new BoxShape())
  }

  engine.addEntity(cube)
  addLabel(label, cube)

  return cube
}

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
