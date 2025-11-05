// This represent the color, title and icon of our extension button.
//% color="#00ffff" block="Sprout" icon="\uf3ff"
namespace SproutAcademia {

    let rollCall: string[] = [];

    /**
     * Clears the roll call list.
     */
    //% block="Clear roll call list."
    export function clear(): void {
        rollCall = [];
    }

    /**
     * Registers the current player's name in the roll call list.
     * If they are already registered, nothing happens.
     */
    //% block="register my name for roll call"
    export function registerMe(): void {
        const name = player.name();
        if (!name) return;

        // avoid duplicates
        for (let i = 0; i < rollCall.length; i++) {
            if (rollCall[i] == name) {
                return;
            }
        }
        rollCall.push(name);
    }

    /**
     * Gets a list of all registered player names.
     */
    //% block="get roll call names"
    export function getNames(): string[] {
        return rollCall;
    }

    /**
     * Gets how many players are currently registered.
     */
    //% block="roll call count"
    export function count(): number {
        return rollCall.length;
    }
}