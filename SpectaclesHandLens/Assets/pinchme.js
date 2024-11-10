//@input SceneObject ball
//@input SceneObject wall
//@input SceneObject text
//@input SceneObject floor
//@input SceneObject bounding
//@input SceneObject buttonParent

script.ball.enabled = false;
script.wall.enabled = false;
script.bounding.enabled = false;
script.floor.enabled = false;
// Function to toggle visibility
script.onPinch = function() {
    // Show ball and wall

    script.ball.enabled = !script.ball.enabled;
    script.wall.enabled = !script.wall.enabled;
     script.bounding.enabled = !script.bounding.enabled;
    
    script.floor.enabled = !script.floor.enabled;
    // Hide text
    script.text.enabled = !script.text.enabled;
    script.buttonParent.enabled = false;
    
    print("Ball and Wall are now visible, Text is hidden");
}


