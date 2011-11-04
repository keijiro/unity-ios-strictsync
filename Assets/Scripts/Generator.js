#pragma strict

var prefab : GameObject;
var maxCount : int = 20;

function Update() {
    if (GameObject.FindGameObjectsWithTag("Star").Length < maxCount) {
        Instantiate(prefab, Vector3(Random.Range(-0.7, 0.7), -1.5, 0.0), prefab.transform.rotation);
    }
}
