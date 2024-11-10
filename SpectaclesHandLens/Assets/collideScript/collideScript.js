// @input Physics.BodyComponent collider
// @input SceneObject moveObj
// @input Component.Text debug
// @input Component.AudioComponent hitSound
// @input Component.AudioComponent failSound
// @input SceneObject racket  

global.ballsHit = 0;
global.badBallsHit = 0;
global.isGameActive = true;  
global.isRoundActive = true;  

var maxHits = 10;  
var initialPosition = new vec3(0, 0, 0);

    var collision = eventArgs.collision;
    var myRotation = script.moveObj.getTransform().getWorldRotation();
    var xVar = myRotation.toEulerAngles().x * (180 / Math.PI);
    var yVar = myRotation.toEulerAngles().y * (180 / Math.PI);
    var zVar = myRotation.toEulerAngles().z * (180 / Math.PI);
    
 
    var outsideThreshold = (xVar > 250 || xVar < 190 || yVar < 320);

    if (outsideThreshold) {

        script.debug.text = "wrong";
        script.failSound.play(1);
        global.badBallsHit += 1;
    } else {
   
        script.hitSound.play(1);
        script.debug.text = "good hit (" + xVar.toFixed(1) + ", " + yVar.toFixed(1) + ", " + zVar.toFixed(1) + ")";
        global.ballsHit += 1;
    }

    // Check if 10 hits have been reached
    if (global.ballsHit + global.badBallsHit >= maxHits) {
        endGame();  
    }

    // Call ball reset after 3 seconds
    resetBallAfterDelay();
});


function resetBallAfterDelay() {
    var delayEvent = script.createEvent("DelayedCallbackEvent");
    delayEvent.bind(function() {
        ballReset();  
    });
    delayEvent.reset(3);  
}


function ballReset() {
    script.collider.getTransform().setWorldPosition(initialPosition); 
}


function endGame() {
    global.isRoundActive = false;  
    script.debug.text =  "Good Hits = " + global.ballsHit + ", Bad Hits = " + global.badBallsHit;
    script.failSound.play(1);
}


function startGame() {
    global.isRoundActive = true; 
}


startGame();
