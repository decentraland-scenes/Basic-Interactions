import { activate } from './switchMaterial'
import { createCube } from './scene-utils'

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

// Primary Up Cube
let primaryUpCube = createCube(new Vector3(10, 1, 12), 'Primary up')

primaryUpCube.addComponent(
  new OnPointerUp(
    (e) => {
      activate(primaryUpCube)
    },
    { button: ActionButton.PRIMARY, hoverText: 'Activate' }
  )
)

// Secondary Down Cube
let secondaryDownCube = createCube(new Vector3(12, 1, 12), 'Secondary down')

secondaryDownCube.addComponent(
  new OnPointerDown(
    (e) => {
      activate(secondaryDownCube)
    },
    { button: ActionButton.SECONDARY, hoverText: 'Activate' }
  )
)

// Secondary Up Cube
let secondaryUpCube = createCube(new Vector3(14, 1, 12), 'Secondary up')

secondaryUpCube.addComponent(
  new OnPointerUp(
    (e) => {
      activate(secondaryUpCube)
    },
    { button: ActionButton.SECONDARY, hoverText: 'Activate' }
  )
)
