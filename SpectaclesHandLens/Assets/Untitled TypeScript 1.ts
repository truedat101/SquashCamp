import { LSTween } from "LSTween/LSTween";
import {Easing} from 'LSTween/TweenJS/Easing'

@component
export class Yes extends BaseScriptComponent{
    @input 
    mat: Material
    onAwake(){
        let mat = this.mat
        let startColor = mat.mainPass.baseColor
        let thisTransform = this.sceneObject.getTransform()
        this.getTransform().setWorldScale(vec3.one().uniformScale(0.000001))
        LSTween.scaleFromToLocal(
            thisTransform,
            vec3.one().uniformScale(0.000001),
            vec3.one().uniformScale(5),
            250
        ).easing(Easing.Back.In).delay(500).onComplete(()=>{
            LSTween.scaleToLocal(
                thisTransform,
                vec3.one().uniformScale(4),
                250
            ).easing(Easing.Back.Out).delay(50).start()
        }).start()

        LSTween.rawTween(800).onUpdate((args) => {
            let elapsed = args.t as number
            mat.mainPass.baseColor = new vec4(startColor.x,startColor.y, startColor.z, 1 - elapsed)
        }).delay(700).start()
        

        LSTween.moveOffset(
            thisTransform,
            new vec3(0, 30, 0),
            600
        ).delay(300).start()
    }
}