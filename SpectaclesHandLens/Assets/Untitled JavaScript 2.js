// @input SceneObject progressBar
// @input float maxLength = 1.0
// @input float growSpeed = 0.1
// @input float shrinkSpeed = 0.2

var currentLength = 0.5;

function updateProgressBar() {
    var scale = script.progressBar.getTransform().getLocalScale();
    scale.x = currentLength;
    script.progressBar.getTransform().setLocalScale(scale);
}

script.api.incrementProgress = function() {
    currentLength = Math.min(currentLength + script.growSpeed, script.maxLength);
    updateProgressBar();
}

script.api.decrementProgress = function() {
    currentLength = Math.max(currentLength - script.shrinkSpeed, 0);
    updateProgressBar();
}

// Initialize
updateProgressBar();
