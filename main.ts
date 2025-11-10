//% color=#ff8000 icon="\uf0c0" block="Roll Call"
namespace SproutAcademia {
    let players: string[] = []

    //
    // Internal: listen for "join" in chat
    // Students will type: join
    //
    player.onChat("join", function () {
        const name = player.name()
        if (players.indexOf(name) < 0) {
            players.push(name)
            // Optional: give feedback in chat
            player.say(name + " has been registered for roll call.")
        }
    })

    //
    // BLOCKS
    //

    /**
     * Number of registered players.
     */
    //% block="number of registered players"
    //% weight=90
    export function playerCount(): number {
        return players.length
    }

    /**
     * Get registered player name at position (1-based index).
     */
    //% block="registered player at position %index"
    //% index.min=1
    //% weight=80
    export function getPlayerAt(index: number): string {
        index = Math.floor(index) - 1
        if (index < 0 || index >= players.length) return ""
        return players[index]
    }

    /**
     * Get array of all registered player names.
     */
    //% block="registered players list"
    //% weight=70
    export function getPlayers(): string[] {
        // Return the actual array so it can be used in array blocks
        return players
    }

    /**
     * Get a comma-separated string of all registered players.
     */
    //% block="registered players as text"
    //% weight=60
    export function getPlayersText(): string {
        if (players.length == 0) return ""
        return players.join(", ")
    }

    /**
     * Clear the registration list.
     */
    //% block="clear registered players"
    //% weight=50
    export function clearPlayers(): void {
        players = []
    }

    /**
     * Check if a given name is registered.
     */
    //% block="is player %name registered"
    //% weight=40
    export function isRegistered(name: string): boolean {
        return players.indexOf(name) >= 0
    }
}