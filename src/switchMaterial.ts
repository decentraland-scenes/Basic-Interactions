
import utils from "../node_modules/decentraland-ecs-utils/index"


// reusable materials
let greenMaterial = new Material()
greenMaterial.albedoColor = Color3.Green()

let lightGreenMaterial = new Material()
lightGreenMaterial.albedoColor = Color3.FromHexString("#abe8bd")


export function activate(entity: Entity){
	entity.addComponentOrReplace(greenMaterial)
	entity.addComponent(new utils.Delay(1000,
		()=>{
			entity.addComponentOrReplace(lightGreenMaterial)
		}))
}