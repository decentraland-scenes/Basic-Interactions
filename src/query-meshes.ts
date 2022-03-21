// robots base

import { createCube } from './scene-utils'
import { activate } from './switchMaterial'

const robots = new Entity()
robots.addComponent(new GLTFShape('models/Robots.glb'))
robots.addComponent(
  new Transform({
    position: new Vector3(12, 0, 2)
  })
)
engine.addEntity(robots)

// Robot feedback cube 1

const robot1Cube = createCube(new Vector3(13, 1, 1.5), 'Click robot 1')
robot1Cube.getComponent(Transform).scale.setAll(0.5)

// Robot feedback cube 2

const robot2Cube = createCube(new Vector3(10.5, 1, 1.5), 'Click robot 2')
robot2Cube.getComponent(Transform).scale.setAll(0.5)

// Click event

robots.addComponent(
  new OnPointerDown(
    (e) => {
      log(e.hit.meshName)
      if (e.hit.meshName === 'Droid_01') {
        activate(robot1Cube)
      } else if (e.hit.meshName === 'Droid_02') {
        activate(robot2Cube)
      }
    },
    { button: ActionButton.POINTER, showFeedback: false }
  )
)
