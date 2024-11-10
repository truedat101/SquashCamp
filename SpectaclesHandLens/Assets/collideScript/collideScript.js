// @input Physics.BodyComponent collider
// @input SceneObject moveObj
// @input Component.Text debug
// @input Component.AudioComponent hitSound
// @input Component.AudioComponent failSound

global.ballsHit = 0;
global.badBallsHit = 0;

script.collider.onOverlapEnter.add(function(eventArgs) {
    script.collider.dynamic = true;    

    var collision = eventArgs.collision;

    
    // Check for threshold
    // if within threshold, increment counter
    // if within threshold, do effect, maybe sound and someting else
    // if outwide threshold, do effect, sound and vision
    // at the end, make the next ball visible
    var myRotation = script.moveObj.getTransform().getWorldRotation();
    
    var xVar = (myRotation.toEulerAngles().x*(180 / Math.PI)).toFixed(1);
    var yVar = (myRotation.toEulerAngles().y*(180 / Math.PI)).toFixed(1);
    var zVar = (myRotation.toEulerAngles().x*(180 / Math.PI)).toFixed(1);
    
    var outsideThreshold = (xVar > 250 || xVar < 190 || yVar < 320);
    
    if (outsideThreshold) {
        script.debug.text = "FAILED!!"
        script.failSound.play(1);
        global.badBallsHit =+ 1;
    } else{
      script.hitSound.play(1);
      script.debug.text = "SUCCESS!" + "(" + xVar + ", " + yVar + ", " + zVar + ")";
      global.ballsHit += 1;
    }

    
});
