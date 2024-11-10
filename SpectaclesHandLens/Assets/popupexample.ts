import { LSTween } from "LSTween/LSTween";
import {Easing} from 'LSTween/TweenJS/Easing'

@component
export class popupexample extends BaseScriptComponent{
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
            vec3.one().uniformScale(7),
            250
        ).easing(Easing.Back.In).delay(500).onComplete(()=>{
            LSTween.scaleToLocal(
                thisTransform,
                vec3.one().uniformScale(5),
                250
            ).easing(Easing.Back.Out).delay(50).start()
        }).start()
        
    }
}