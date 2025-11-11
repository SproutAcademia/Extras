//% color="#00ffff" block="Quiz" icon="\uf3ff"
namespace SproutAcademia {
    // Internal storage (using var for maximum compatibility)
    var questionTexts: string[] = []
    var optionA: string[] = []
    var optionB: string[] = []
    var optionC: string[] = []
    var optionD: string[] = []
    var correctOption: number[] = [] // 1–4

    /**
     * Get the text of the question at the given position (1 = first question).
     * Returns empty text "" if the index is out of range.
     */
    //% block="Question text at position %index"
    //% index.min=1
    export function getQuestionText(index: number): string {
        let i = index - 1
        if (i < 0 || i >= questionTexts.length) {
            return ""
        }
        return questionTexts[i]
    }
}