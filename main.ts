enum RadioMessage {
    message1 = 49434
}
// WELLCOME TO MKCE PHONE 2006
// 
// CLICK ON THE SCREEN AND
// 
// USE THE ARROWS AND 7/5 BUTTONS
// 
// 7- A
// 
// 5- B
// 
// DPAD-8,2,4,6
// 
// TOUCH TO USE VIRTUAL KEYPAD
// 
// DO NOT CHANGE COLORS OR RESOULUTION
// 
// DO NOT USE START USE FUNCTION "cart" instead
function cart () {
    sprites.destroy(startup)
    game.showLongText(game.ask("how"), DialogLayout.Bottom)
}
let myMenu2: miniMenu.MenuSprite = null
let myMenu: miniMenu.MenuSprite = null
let INT_MIN = 0
let INT_MIN_2 = 0
let INT_HOUR = 0
let startup: Sprite = null
namespace userconfig {
    export const ARCADE_SCREEN_WIDTH = 128
    export const ARCADE_SCREEN_HEIGHT = 128
}
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP
)
MakeyMakey.setSimulatorKeymap(
MakeyMakey.PlayerNumber.ONE,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP,
MakeyMakey.MakeyMakeyKey.UP
)
color.startFade(color.Black, color.originalPalette, 1000)
startup = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff111111111111fffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff111111111111fffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff111111111111fffffffffffffffffffff1111111111ffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff111111111111fffffffffffffffffffff1111111111ffffff1111111111fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffff11111111111111fffffffffffffffff111111111111ffffff1111111111fffffff1111111111ffffff111111111111111ffffffff1111111111111111fff
    ffff11111111111111fffffffffffffffff111111111111ffffff1111111111fffffff1111111111ffffff111111111111111ffffffff1111111111111111fff
    ffff11111111111111fffffffffffffffff11111111111111ffff1111111111fffff111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff11111111111111fffffffffffffffff11111111111111ffff1111111111fffff111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff1111111111111111fffffffffffff1111111111111111ffff1111111111fff11111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff1111111111111111fffffffffffff1111111111111111ffff1111111111fff11111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff111111111111111111ffffffff1111111111111111111ffff111111111111111111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff111111111111111111ffffffff1111111111111111111ffff111111111111111111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff111111111111111111ffffffff1111111111111111111ffff111111111111111111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff111111111111111111ffffffff1111111111111111111ffff111111111111111111111111111ffffff111111111111111ffffff111111111111111111fff
    ffff11111111111111111111ffff111111111111111111111ffff1111111111111111111111111ffffffff1111111111fffffffffff111111111111fffffffff
    ffff11111111111111111111ffff111111111111111111111ffff1111111111111111111111111ffffffff1111111111fffffffffff111111111111fffffffff
    ffff11111111111111111111ffff111111111111111111111ffff11111111111111111111111ffffffffff1111111111111ffffffff111111111111111111111
    ffff11111111111111111111ffff111111111111111111111ffff11111111111111111111111ffffffffff1111111111111ffffffff111111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffff111111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffff111111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffffff1111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffffff1111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffffff1111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffffff1111111111111111111
    ffff111111111111111111111111111111111111111111111ffff1111111111111111111111111ffffffff1111111111111ffffffffff1111111111111111111
    ffff111111111111111111111111111111111111111111111ffff111111111111111111111111111ffffffff11111111111ffffffffff1111111111111111111
    ffff111111111111111111111111111111111111111111111ffff111111111111111111111111111ffffffff11111111111ffffffffff1111111111111111111
    ffff1111111111ff111111111111111111111ff1111111111ffff1111111111fffff111111111111ffffffff11111111111ffffffffffff111111111111fffff
    ffff1111111111ff111111111111111111111ff1111111111ffff1111111111fffff111111111111ffffffff11111111111ffffffffffff111111111111fffff
    ffff1111111111ff111111111111111111111ff1111111111ffff1111111111fffff11111111111111ffffff1111111111111ffffffffff111111111111fffff
    ffff1111111111ff111111111111111111111ff1111111111ffff1111111111fffff11111111111111ffffff1111111111111ffffffffff111111111111fffff
    ffff1111111111ffff11111111111111111ffff1111111111ffff1111111111fffff11111111111111ffffff1111111111111ffffffffff11111111111111111
    ffff1111111111ffff11111111111111111ffff1111111111ffff1111111111fffff11111111111111ffffff1111111111111ffffffffff11111111111111111
    ffff1111111111ffffff1111111111111ffffff1111111111ffff1111111111fffffff111111111111ffffff1111111111111ffffffffffff111111111111111
    ffff1111111111ffffff1111111111111ffffff1111111111ffff1111111111fffffff111111111111ffffff1111111111111ffffffffffff111111111111111
    ffff1111111111ffffff1111111111111ffffff1111111111ffff1111111111fffffff11111111111111ffff1111111111111ffffffffffff111111111111111
    ffff1111111111ffffff1111111111111ffffff1111111111ffff1111111111fffffff11111111111111ffff1111111111111ffffffffffff111111111111111
    ffff1111111111ffffffff11111111111ffffff1111111111ffff1111111111fffffffff111111111111ffffff11111111111ffffffffffff111111111111111
    ffff1111111111ffffffff11111111111ffffff1111111111ffff1111111111fffffffff111111111111ffffff11111111111ffffffffffff111111111111111
    ffff1111111111fffffffffffffffffffffffff1111111111ffff1111111111fffffffff111111111111ffffff11111111111ffffffffffffff1111111111111
    ffff1111111111fffffffffffffffffffffffff1111111111ffff1111111111fffffffff111111111111ffffff11111111111ffffffffffffff1111111111111
    ffff1111111111fffffffffffffffffffffffff1111111111ffff1111111111fffffffff111111111111ffffff111111111111111111111fffffffffffffffff
    ffff1111111111fffffffffffffffffffffffff1111111111ffff1111111111fffffffff111111111111ffffff111111111111111111111fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffff1111111111ffffff111111111111111111111fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffff1111111111ffffff111111111111111111111fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffff111111111111111111111fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111fffffffffffffffffffffffffff111111111111111111111fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111111111111111111fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111fffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff111111fffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff1111fffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ff1111fffff
    ffffffffff1111ffff11ff11ffff1111111ffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffff11fffff
    ffffffffff1111ffff11ff11ffff1111111ffffffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff11ffffff11fffff
    ffffffffff111111ff111111ffff1111111ffff1111ffff1111111111fffffffff1111111111fffffffffffffffffffffffffffffffffff1111fffffffffffff
    ffffffffff111111ff111111ffff1111111ffff1111ffff1111111111fffffffff1111111111fffffffffffffffffffffffffffffffffff1111fffffffffffff
    ffffffffff11ff11ff111111ffff1111111ffff1111ffff11ff1111ffffffff111ffffffff11ffff111111ffffff1111111ffffffffffff1111111111fffffff
    ffffffffff11ff11ff111111ffff1111111ffff1111ffff11ff1111ffffffff111ffffffff11ffff111111ffffff1111111ffffffffffff1111111111fffffff
    ffffffffff11ff11ff11ff11ffff1111111ffff1111ff1111ffff11fffffffffffffffffff11ffff11ffff11ff1111fffff11ffffffff111111ffff1111fffff
    ffffffffff11ff11ff11ff11ffff1111111ffff1111ff1111ffff11fffffffffffffffffff11ffff11ffff11ff1111fffff11ffffffff111111ffff1111fffff
    ffffffffff111111ff11ff11ffff1111111ff11ff111111ffffff1111fffffffffffffff1111ffff11ffff11ff11fffffffff11ffffff11ffffffffff11fffff
    ffffffffff111111ff11ff11ffff1111111ff11ff111111ffffff1111fffffffffffffff1111ffff11ffff11ff11fffffffff11ffffff11ffffffffff11fffff
    ffffffffff11ffffff11ff1111fffffffffff11ffff1111ffffff11ff1111fffffffff1111ffffff11ffff11ff11fffffffff11ffffff1111ffffffff11fffff
    ffffffffff11ffffff11ff1111fffffffffff11ffff1111ffffff11ff1111fffffffff1111ffffff11ffff11ff11fffffffff11ffffff1111ffffffff11fffff
    ffffffffff11fffffffffffffffffffffffffffffff11ffffffff111111fffffff1111ffffffffff11ffff11ff1111fffff1111ffffffffff1111111111fffff
    ffffffffff11fffffffffffffffffffffffffffffff11ffffffff111111fffffff1111ffffffffff11ffff11ff1111fffff1111ffffffffff1111111111fffff
    ffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffff111111ffff111111111fffffffffffffffffffffffffff
    ffffffffff11ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111ffffff111111ffff111111111fffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
Clock.makeClock(
INT_HOUR,
INT_MIN_2,
INT_MIN,
"pm"
)
let textSprite = textsprite.create(Clock.clockTime(false))
textSprite.setPosition(21, 13)
pause(2000)
music.play(music.createSong(hex`00fa000408010100001c00010a006400f401640000040000000000000000000000000005000004180000000400012504000800012008000c0001250c001000012a`), music.PlaybackMode.InBackground)
startup.setImage(assets.image`myImage`)
for (let index = 0; index < 3; index++) {
    startup.setImage(assets.image`myImage`)
    pause(200)
    startup.setImage(assets.image`myImage4`)
    pause(200)
    startup.setImage(assets.image`myImage5`)
    pause(200)
    startup.setImage(assets.image`myImage6`)
    pause(200)
}
menu.addmenuoption("APPS", img`
    . f f f f f f f f f f f f f f . 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f 1 1 1 1 9 9 f f f f 9 9 f f 
    f f 1 f f 1 9 9 9 f f 9 9 9 f f 
    1 1 1 1 f 1 b f b c c b 4 b f f 
    1 f 1 1 1 1 f f f c c 8 b 2 f f 
    1 f f 1 f f b f b c c b 7 b f f 
    1 1 1 1 f f b b f f f f b b f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    f f f f f f f f f f f f f f f f 
    . f f f f f f f f f f f f f f . 
    `, function () {
    fakeButtons.pressMenu()
    pause(100)
    // ON THE FIRST SELECTION PASTE YOUR GAME NAME HERE
    myMenu = miniMenu.createMenu(
    miniMenu.createMenuItem("(game name here)", img`
        f f f f f f f f f f f f f f f f 
        f f d d d d f f f f d d d d f f 
        f f c c c c c c c c 5 c c c f f 
        f f c c c c c c c 5 5 5 c c f f 
        f f c c c c c c 8 8 5 2 2 c f f 
        f f c c 1 1 c 8 8 8 c 2 2 2 f f 
        f f c 1 1 1 1 c 8 8 7 2 2 c f f 
        f f c 1 1 1 1 c c 7 7 7 c c f f 
        f f c c 1 1 c c c c 7 c c c f f 
        f f c c c c c c c c c c c c f f 
        f f c c c c f f f f c c c c f f 
        f f c c c c f f f f c c c c f f 
        f f c c c c f f f f c c c c f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `),
    miniMenu.createMenuItem("MESSANGER", img`
        f f f f f f f f f f f f f f f f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
        f f f f f f f f f 1 1 1 f f f f 
        . . . . . . . . . f 1 f . . . . 
        . . . . . . . . . . f f f . . . 
        `),
    miniMenu.createMenuItem("MAKEBOOK", img`
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 1 1 1 1 1 2 2 2 2 1 1 1 1 1 2 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 2 2 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
        2 1 1 1 2 1 1 1 1 1 1 2 1 1 1 2 
        2 1 1 1 2 1 1 1 1 1 1 2 1 1 1 2 
        2 1 1 1 2 1 1 1 1 1 2 2 1 1 1 2 
        2 1 1 1 2 2 1 1 1 1 2 2 1 1 1 2 
        2 1 1 1 2 2 1 1 1 2 2 2 1 1 1 2 
        2 1 1 1 2 2 2 2 2 2 2 2 1 1 1 2 
        2 1 1 1 2 2 2 2 2 2 2 2 1 1 1 2 
        2 1 1 1 2 2 2 2 2 2 2 2 1 1 1 2 
        2 1 1 1 2 2 2 2 2 2 2 2 1 1 1 2 
        2 1 1 1 2 2 2 2 2 2 2 2 1 1 1 2 
        `),
    miniMenu.createMenuItem("SETTINGS", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . c c c . . . . . . . 
        c c c . . . c c c . c c c c c . 
        c c c . c c c c c c c c c c c . 
        c c c c c c c c c c c c c c c . 
        . . c c c 1 1 1 1 1 1 c c . . . 
        . . c c 1 1 1 1 1 1 1 c c . . . 
        . . c c 1 1 1 1 1 1 1 c c c c . 
        c c c c 1 1 1 1 1 1 1 c c c c . 
        c c c c 1 1 1 1 1 1 1 c c c c . 
        c c c c 1 1 1 1 1 1 1 c c . . . 
        . . c c 1 1 1 1 1 c c c c c c . 
        . c c c c c c c c c c c c c c . 
        . c c c c c c c c c c . c c c . 
        . c c c . c c c . . . . . . . . 
        `),
    miniMenu.createMenuItem("FILES", img`
        4 4 4 4 4 4 . . . . . . . . . . 
        4 4 4 4 4 4 4 . . . . . . . . . 
        4 4 4 4 4 4 4 4 . . . . . . . . 
        4 4 4 4 4 4 4 4 4 . . . . . . . 
        4 4 4 4 4 4 4 4 4 5 . . . . . . 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 8 8 8 8 8 8 8 8 8 8 5 5 5 
        5 5 5 8 1 1 1 1 1 1 1 1 8 5 5 5 
        5 5 5 8 8 8 8 8 8 8 8 8 8 5 5 5 
        `)
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 90)
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        // PASTE YOUR GAME NAME HERE
        if (selection == "(game name here)") {
            myMenu.close()
        } else if (selection == "MESSANGER") {
        	
        } else if (selection == "MAKEBOOK") {
            game.splash("UPCOMING")
        } else if (selection == "SETTINGS") {
            myMenu.close()
            myMenu2 = miniMenu.createMenu(
            miniMenu.createMenuItem("SOUND ON", img`
                . . . . . . . . . . . f f f f . 
                f f f f f f f f f f f 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f c c c c c f 1 1 1 1 1 1 1 f . 
                f f f f f f f f f f f 1 1 1 f . 
                . . . . . . . . . . . f f f f . 
                `),
            miniMenu.createMenuItem("SOUND OFF", img`
                2 . . . . . . . . . . f f f f 2 
                f 2 f f f f f f f f f 1 1 1 2 . 
                f c 2 c c c f 1 1 1 1 1 1 2 f . 
                f c c 2 c c f 1 1 1 1 1 2 1 f . 
                f c c c 2 c f 1 1 1 1 2 1 1 f . 
                f c c c c 2 f 1 1 1 2 1 1 1 f . 
                f c c c c c 2 1 1 2 1 1 1 1 f . 
                f c c c c c f 2 2 1 1 1 1 1 f . 
                f c c c c c f 2 2 1 1 1 1 1 f . 
                f c c c c c 2 1 1 2 1 1 1 1 f . 
                f c c c c 2 f 1 1 1 2 1 1 1 f . 
                f c c c 2 c f 1 1 1 1 2 1 1 f . 
                f c c 2 c c f 1 1 1 1 1 2 1 f . 
                f c 2 c c c f 1 1 1 1 1 1 2 f . 
                f 2 f f f f f f f f f 1 1 1 2 . 
                2 . . . . . . . . . . f f f f 2 
                `),
            miniMenu.createMenuItem("COLOR ARCADE", img`
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                3 3 1 3 3 3 3 3 3 3 3 3 3 1 3 3 
                3 1 3 3 3 3 3 1 1 1 3 3 3 3 1 3 
                3 1 3 3 3 3 1 1 1 1 1 3 3 3 1 3 
                3 1 3 3 3 1 1 1 1 1 1 1 1 3 1 3 
                3 1 3 3 3 1 1 1 1 1 1 1 1 3 1 3 
                3 1 3 3 1 1 1 1 1 1 1 1 1 3 1 3 
                1 3 3 1 1 1 1 1 1 1 1 1 3 3 3 1 
                3 1 3 1 1 1 1 1 1 1 1 3 3 3 1 3 
                3 1 3 1 1 1 1 1 1 1 1 1 3 3 1 3 
                3 1 3 3 1 1 1 1 1 1 1 1 1 3 1 3 
                3 1 3 3 3 1 1 1 1 1 1 1 1 3 1 3 
                3 1 3 3 3 1 1 1 1 1 1 1 1 3 1 3 
                3 1 3 3 3 3 3 3 3 3 3 3 3 3 1 3 
                3 3 1 3 3 3 3 3 3 3 3 3 3 1 3 3 
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
                `),
            miniMenu.createMenuItem("COLOR NORMAL", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                b b b 1 a a a a a a a a 1 b b b 
                b b b b a f f f f f f a b b b b 
                b 1 1 b a f f f f f f a 5 1 8 b 
                1 1 1 1 a f f f f f f a 5 1 8 b 
                1 1 1 1 a f f f f f f a 1 2 1 b 
                b 1 1 b a f f f f f f a 1 2 1 b 
                b b b b a f f f f f f a 7 1 3 b 
                b b b b a f f f f f f a 7 1 3 b 
                c c c 1 a a a a a a a a 1 c c c 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("PC BIND", img`
                b b b b b b b b b b b b b b b b 
                b f f f f f f f f b b 7 b b b b 
                b f f f f f f f f b b b b b b b 
                b f f f f f f f f b b 1 b b 1 b 
                b f f f f f f f f b b 1 b b 1 b 
                b f f f f f f f f b b 1 b b b b 
                b f f f f f f f f b b 1 b b 1 b 
                b b b b b b b b b b b 1 b b 1 b 
                . . . b b b b . . . b b b b b b 
                . . . b b b b . . . b b b b b b 
                b b b b b b b b b b b b b b b b 
                b f b f b f b f b f b f 1 1 f . 
                b b f b f b f b f b b f 1 1 f . 
                b b b f b f b f b b b f 1 1 f . 
                b b f b f b f b f b b f f f f . 
                b b f b b b b b f b b f f f f . 
                `),
            miniMenu.createMenuItem("MOBILE BIND", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                b b b b b b b b b b b b b b b b 
                b b f f f f f f f f f f f b b b 
                b b f f f f f f f f f f f b b b 
                b b f f f f f f f f f f f 1 1 1 
                b b f f f f f f f f f f f 1 1 1 
                b b f f f f f f f f f f f 1 1 1 
                b b f f f f f f f f f f f 1 1 1 
                b b f f f f f f f f f f f b b b 
                b b b b b b b b b b b b b b b b 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `),
            miniMenu.createMenuItem("XBOX BIND", img`
                1 1 1 1 1 1 1 1 f . . . . . . . 
                1 f f f f f f 1 f . . . . . . . 
                1 f f f f f f 1 f . . . . . . . 
                1 f f f f f f 1 f . . . . . . . 
                1 f f f f f f 1 f . . . . . . . 
                1 f f f f f f 1 f . . . . . . . 
                1 f f f f f f 1 f b b b . b b b 
                1 1 1 1 1 1 1 1 f c c c c c c c 
                1 1 1 1 1 1 1 1 f c b a a 5 c c 
                1 1 1 1 1 1 1 1 f b b b 8 c 2 c 
                1 1 1 1 1 1 1 1 f c b c c 7 c c 
                1 1 1 1 1 1 1 1 f c c . . . c c 
                1 1 1 1 1 1 1 1 f c c . . . c c 
                1 1 1 1 1 1 1 1 f c c . . . c c 
                1 1 1 1 1 1 1 1 f c c . . . c c 
                1 1 1 1 1 1 1 1 f c . . . . . c 
                `),
            miniMenu.createMenuItem("BACK", img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . 2 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . 2 . . . . . . . . . 
                . . . . . 2 . . . . . . . . . . 
                . . . 2 2 . . . . . . . . . . . 
                . . 2 2 . . . . . . . . . . . . 
                . . 2 2 2 2 2 2 . . . . . . . . 
                . 2 . . . . . . 2 2 2 2 2 . . . 
                . . 2 2 . . . . . . . . . . . . 
                . . . . 2 . . . . . . . . . . . 
                . . . . . 2 2 . . . . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . 2 . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `)
            )
            myMenu2.setDimensions(100, 70)
            myMenu2.setPosition(69, 55)
            myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selection == "SOUND ON") {
                    music.setVolume(100)
                } else if (selection == "SOUND OFF") {
                    music.setVolume(0)
                } else if (selection == "COLOR ARCADE") {
                    color.startFade(color.originalPalette, color.Arcade, 500)
                } else if (selection == "COLOR NORMAL") {
                    color.startFade(color.Arcade, color.originalPalette, 500)
                } else if (selection == "BACK") {
                    myMenu2.close()
                }
            })
        } else if (selection == "FILES") {
            game.splash("hey")
        }
    })
})
menu.addmenuoption("CLOCK", img`
    . f f f f f f f f f f f f f f . 
    f 1 1 1 1 1 1 2 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 f 1 1 1 1 1 1 1 f 
    f 2 1 1 1 1 1 f 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 f f f f f 1 1 2 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 2 1 1 1 1 1 1 f 
    . f f f f f f f f f f f f f f . 
    `, function () {
	
})
menu.addmenuoption("SOCIAL", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . e e e 4 e 4 
    . . . . . . . . . e 4 4 e 4 e 4 
    . . . . . . . . . 4 e f e 4 e 4 
    f f f . . . . . . e . f 1 1 f 1 
    5 f 5 f . . . . . . . f 1 1 f 1 
    5 f 5 5 f . . . . . . . f 1 1 f 
    5 f 5 5 f . . . f f f f f f f f 
    5 5 5 5 f . . . f 5 f f f f f 8 
    f 5 5 f . . . . f 5 f f f f f 8 
    f f f f f f f f f f f f f f f 8 
    8 8 8 8 8 f 5 5 5 f f f f f f 8 
    8 8 8 8 8 f 5 5 5 f f f f f f 8 
    8 8 8 8 8 f 5 5 5 f f f f f f 8 
    8 8 8 8 8 f 5 5 5 f . f f f f 8 
    8 8 8 8 8 f 5 5 5 f . f f f f f 
    `, function () {
	
})
menu.addmenuoption("RESTART", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . 2 . . . . . . . . . 2 . . . 
    . 2 . . . . . . . . . . . 2 . . 
    2 2 2 . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . 2 . . 
    . . . . . . . . . . . . . 2 . . 
    . . . . . . . . . . . . . 2 . . 
    . . . . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . 2 . . 
    . . 2 . . . . . . . . . 2 . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    `, function () {
    game.reset()
})
menu.addmenuoption("POWER OFF", img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . 2 2 . 2 . 2 2 . . . . . 
    . . . 2 . . . 2 . . . 2 . . . . 
    . . 2 . . . . 2 . . . . 2 . . . 
    . 2 . . . . . 2 . . . . . 2 . . 
    . 2 . . . . . 2 . . . . . 2 . . 
    . 2 . . . . . 2 . . . . . 2 . . 
    . 2 . . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . 2 . . 
    . 2 . . . . . . . . . . . 2 . . 
    . . 2 . . . . . . . . . 2 . . . 
    . . . 2 . . . . . . . 2 . . . . 
    . . . . 2 2 2 2 2 2 2 . . . . . 
    `, function () {
	
})
cart()
