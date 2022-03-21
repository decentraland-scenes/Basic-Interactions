import { activate } from './switchMaterial'
import { createCube } from './scene-utils'

// Global Pointer Down Sphere
const globalPointerDownCube = createCube(
  new Vector3(2, 1, 10),
  'Global pointer down',
  true
)

// Global Pointer Up Sphere
const globalPointerUpCube = createCube(
  new Vector3(2, 1, 12),
  'Global pointer up',
  true
)

// Global Primary Down Sphere
const globalPrimaryDownCube = createCube(
  new Vector3(4, 1, 10),
  'Global primary down',
  true
)

// Global Primary Up Sphere
const globalPrimaryUpCube = createCube(
  new Vector3(4, 1, 12),
  'Global primary up',
  true
)

// Global Secondary Down Sphere
const globalSecondaryDownCube = createCube(
  new Vector3(6, 1, 10),
  'Global secondary down',
  true
)

// Global Secondary Up Sphere
const globalSecondaryUpCube = createCube(
  new Vector3(6, 1, 12),
  'Global secondary up',
  true
)

/////// GLOBAL EVENT LISTENERS

// pointer down event
Input.instance.subscribe('BUTTON_DOWN', ActionButton.POINTER, true, (e) => {
  log('pointer down', e)
  activate(globalPointerDownCube)
})

// pointer up event
Input.instance.subscribe('BUTTON_UP', ActionButton.POINTER, true, (e) => {
  log('pointer down', e)
  activate(globalPointerUpCube)
})

// primary down event
Input.instance.subscribe('BUTTON_DOWN', ActionButton.PRIMARY, true, (e) => {
  log('primary down', e)
  activate(globalPrimaryDownCube)
})

// primary up event
Input.instance.subscribe('BUTTON_UP', ActionButton.PRIMARY, true, (e) => {
  log('primary down', e)
  activate(globalPrimaryUpCube)
})

// secondary down event
Input.instance.subscribe('BUTTON_DOWN', ActionButton.SECONDARY, true, (e) => {
  log('secondary down', e)
  activate(globalSecondaryDownCube)
})

// secondary up event
Input.instance.subscribe('BUTTON_UP', ActionButton.SECONDARY, true, (e) => {
  log('secondary down', e)
  activate(globalSecondaryUpCube)
})
