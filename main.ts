// An enum helps us create dropdown lists with its value type in the form of parameters.

enum TestEnum {
    //% block="full" blockId="one"
    One,
    //% block="normal" blockId="two"
    Two,
    //% block="no" blockId="three"
    Three
}

// This represent the color, title and icon of our extension button.

//% color="#3700ffff" block="Test Ext." icon="\uf3ff"
namespace Test {

    let _testBuilder = new builder.Builder();
    let _baseBlock = PLANKS_OAK

    //% block="This is a test function with parameters $n $s $e"
    //% blockId="testBlock" weight=65
    export function testFunction(n: number, s: string, e: TestEnum) {

    }

    //% block="This is a test block"
    //% blockId="testBlock" weight=65
    export function testBlock() {
        
    }

    //% block="add straight line of length $length || with $additional additional parameters"
    //% length.defl=20 length.min=1
    //% additional.defl="hidden"
    //% blockId="addStraightLine" weight=95
    export function addStraightLine(length: number, additional: string) {
        for (let index = 0; index < length; index++) {
            _testBuilder.place(_baseBlock)
            _testBuilder.move(FORWARD, 1)
        }
    }

    //% group="Customization"
    //% block="set base block to $blockType"
    //% blockType.shadow=minecraftBlock
    //% blockId="setBaseBlock" weight=20
    export function setBaseBlock(blockType: number) {
        _baseBlock = blockType
    }
}