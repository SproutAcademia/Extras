/**
* Use this file to define custom functions and blocks.
* Read more at https://minecraft.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#00ffff icon=""
namespace SproutAcademia {

    // Internal storage (using var for maximum compatibility)
    var questionTexts: string[] = []
    var optionA: string[] = []
    var optionB: string[] = []
    var optionC: string[] = []
    var optionD: string[] = []
    var correctOption: number[] = [] // 1–4

    /**
     * Add a multiple choice question with 4 options.
     * correct is 1–4 (1 = A, 2 = B, 3 = C, 4 = D)
     */
    //% block="add quiz question $qText | A $a | B $b | C $c | D $d | correct option $correct | time limit (s) $seconds"
    //% qText.shadow=text a.shadow=text b.shadow=text c.shadow=text d.shadow=text
    //% correct.min=1 correct.max=4
    //% seconds.min=1 seconds.max=300
    //% group="Setup"
    export function addQuestion(qText: string, a: string, b: string, c: string, d: string, correct: number): void {
        
        if (correct < 1 || correct > 4) {
            correct = 1
        }
        questionTexts.push(qText)
        optionA.push(a)
        optionB.push(b)
        optionC.push(c)
        optionD.push(d)
        correctOption.push(correct)
    }

    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
