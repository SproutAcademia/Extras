//% color=#ffa500 icon="\uf128" block="Quiz"
namespace SproutQuiz {
    // Internal storage
    let questionTexts: string[] = []
    let optionA: string[] = []
    let optionB: string[] = []
    let optionC: string[] = []
    let optionD: string[] = []
    let correctOption: number[] = [] // 1–4

    /**
     * Add a multiple choice question with 4 options.
     * correct is 1–4 (1 = A, 2 = B, 3 = C, 4 = D)
     */
    //% block="add quiz question $qText | A $a | B $b | C $c | D $d | correct option $correct"
    //% qText.shadow=text a.shadow=text b.shadow=text c.shadow=text d.shadow=text
    //% correct.min=1 correct.max=4
    export function addQuestion(
        qText: string,
        a: string,
        b: string,
        c: string,
        d: string,
        correct: number
    ): void {
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
     * Get the text of the question at the given position (1 = first question).
     */
    //% block="question text at position %index"
    //% index.min=1
    export function getQuestionText(index: number): string {
        const i = index - 1
        if (i < 0 || i >= questionTexts.length) return ""
        return questionTexts[i]
    }

    /**
     * Get option A text for the given question.
     */
    //% block="option A of question %index"
    //% index.min=1
    export function getOptionA(index: number): string {
        const i = index - 1
        if (i < 0 || i >= optionA.length) return ""
        return optionA[i]
    }

    /**
     * Get option B text for the given question.
     */
    //% block="option B of question %index"
    //% index.min=1
    export function getOptionB(index: number): string {
        const i = index - 1
        if (i < 0 || i >= optionB.length) return ""
        return optionB[i]
    }

    /**
     * Get option C text for the given question.
     */
    //% block="option C of question %index"
    //% index.min=1
    export function getOptionC(index: number): string {
        const i = index - 1
        if (i < 0 || i >= optionC.length) return ""
        return optionC[i]
    }

    /**
     * Get option D text for the given question.
     */
    //% block="option D of question %index"
    //% index.min=1
    export function getOptionD(index: number): string {
        const i = index - 1
        if (i < 0 || i >= optionD.length) return ""
        return optionD[i]
    }
}