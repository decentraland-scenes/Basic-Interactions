import { activate } from './switchMaterial'
import { createCube } from './scene-utils'

// Pointer Down Cube

const pointerDownCube = createCube(new Vector3(2, 1, 4), 'Pointer down')

pointerDownCube.addComponent(
  new OnPointerDown(
    (_e) => {
      activate(pointerDownCube)
    },
    { button: ActionButton.POINTER, hoverText: 'Activate' }
  )
)

// Pointer Up Cube

const pointerUpCube = createCube(new Vector3(2, 1, 6), 'Pointer up')

pointerUpCube.addComponent(
  new OnPointerUp(
    (_e) => {
      activate(pointerUpCube)
    },
    { button: ActionButton.POINTER, hoverText: 'Activate' }
  )
)

//  Primary Down Cube (while pointing)
const primaryDownCube = createCube(new Vector3(8, 1, 12), 'Primary down')

primaryDownCube.addComponent(
  new OnPointerDown(
    (_e) => {
      activate(primaryDownCube)
    },
    { button: ActionButton.PRIMARY, hoverText: 'Activate' }
  )
)

// Primary Up Cube
const primaryUpCube = createCube(new Vector3(10, 1, 12), 'Primary up')

primaryUpCube.addComponent(
  new OnPointerUp(
    (_e) => {
      activate(primaryUpCube)
    },
    { button: ActionButton.PRIMARY, hoverText: 'Activate' }
  )
)

// Secondary Down Cube
const secondaryDownCube = createCube(new Vector3(12, 1, 12), 'Secondary down')

secondaryDownCube.addComponent(
  new OnPointerDown(
    (_e) => {
      activate(secondaryDownCube)
    },
    { button: ActionButton.SECONDARY, hoverText: 'Activate' }
  )
)

// Secondary Up Cube
const secondaryUpCube = createCube(new Vector3(14, 1, 12), 'Secondary up')

secondaryUpCube.addComponent(
  new OnPointerUp(
    (_e) => {
      activate(secondaryUpCube)
    },
    { button: ActionButton.SECONDARY, hoverText: 'Activate' }
  )
)
