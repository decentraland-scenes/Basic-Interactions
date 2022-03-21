import { activate } from './switchMaterial'
import { createCube } from './scene-utils'

const closeCube = createCube(new Vector3(2, 1, 9), 'Walk near')

// check distance for closeCube
export class Proximity implements ISystem {
  update() {
    const transform = closeCube.getComponent(Transform)
    const dist = distance(transform.position, Camera.instance.position)
    if (dist < 8) {
      activate(closeCube)
    }
  }
}

engine.addSystem(new Proximity())

// ground
const floor = new Entity()
floor.addComponent(new GLTFShape('models/FloorBaseGrass.glb'))
floor.addComponent(
  new Transform({
    position: new Vector3(8, 0, 8),
    scale: new Vector3(1.6, 0.1, 1.6)
  })
)
engine.addEntity(floor)

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
