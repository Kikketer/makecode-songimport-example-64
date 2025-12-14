controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    button,
    assets.animation`ButtonPress`,
    100,
    false
    )
    pause(150)
    if (!(isPlaying)) {
        isPlaying = true
        // Visit https://cjweed.com/make-beeps to get the Chrome extension.
        // 
        // Build your song in BeepBox with the example starting song as a baseline.
        // 
        // Then use the Chrome extension to import that song into a MakeCode Arcade project!
        music.play(music.createSong(assets.song`convertedSong1`), music.PlaybackMode.LoopingInBackground)
    } else {
        isPlaying = false
        music.stopAllSounds()
    }
})
let isPlaying = false
let button: Sprite = null
button = sprites.create(assets.image`ButtonA`, SpriteKind.Player)
