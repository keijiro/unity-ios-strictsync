#pragma strict

static var deltaTime : float;

function Update() {
    deltaTime = Mathf.Round(Time.deltaTime * 60) / 60;
}
