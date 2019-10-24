export let textOffset = new Transform({
	position: new Vector3(0, 1.5, 0)
  })

export function addLabel(text: string, parent: IEntity){
	let label = new Entity()
	label.setParent(parent)
	label.addComponent(new Billboard())
	label.addComponent(textOffset)
	label.addComponent(new TextShape(text))
	label.getComponent(TextShape).fontSize = 3
	label.getComponent(TextShape).color = Color3.Black()
	
	engine.addEntity(label)
	}