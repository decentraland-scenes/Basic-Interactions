// spawn cube

export function createCube(pos: Vector3, label: string, sphere?: boolean) {
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

export let textOffset = new Transform({
  position: new Vector3(0, 1.5, 0),
})

// add label to cube

export function addLabel(text: string, parent: IEntity) {
  let label = new Entity()
  label.setParent(parent)
  label.addComponent(new Billboard())
  label.addComponent(textOffset)
  label.addComponent(new TextShape(text))
  label.getComponent(TextShape).fontSize = 3
  label.getComponent(TextShape).color = Color3.Black()

  engine.addEntity(label)
}
