#pragma strict

private var velocity = Random.Range(0.5, 2.0);

function Update() {
    transform.localPosition.y += velocity * Timekeeper.deltaTime;
    if (transform.localPosition.y > 1.5) Destroy(gameObject);
}
