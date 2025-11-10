# Roll Call Extension for Minecraft: Education Edition

This extension tracks players who type `join` in chat and lets you access
that list using MakeCode blocks.

## How it works

- When any player types `join` (no slash, just the word) in chat,
  the extension automatically:
  - gets their name,
  - adds it to an internal list (if not already there),
  - optionally sends a confirmation message.

> Note: We **cannot** read `/list` or actual join/leave events in MakeCode,
> so this chat-command approach is the workaround.

## Blocks

- **`number of registered players`**  
  Returns how many students have typed `join`.

- **`registered player at position (index)`**  
  1-based index: `1` is the first student who joined.

- **`registered players list`**  
  Returns a `string[]` so you can use loops like:  
  `for element value of list → do ...`

- **`registered players as text`**  
  Returns something like `"Alice, Bob, Carlos"` — good for displaying in chat.

- **`clear registered players`**  
  Empties the list. Use at the start of class or world reset.

- **`is player <name> registered`**  
  Returns true/false.

## Example usage (MakeCode blocks)

1. At the start of the lesson, run:

   ```ts
   rollcall.clearPlayers()
   player.say("Type 'join' in chat to register for roll call!")
Later, to show the list:

ts
Copy code
player.onChat("showroll", function () {
    player.say("Registered: " + rollcall.getPlayersText())
})
To work with each name:

ts
Copy code
player.onChat("check", function () {
    let list = rollcall.getPlayers()
    for (let i = 0; i < list.length; i++) {
        player.say("Student " + (i + 1) + ": " + list[i])
    }
})
markdown
Copy code

---

## 5. How this answers your original idea

- We **still can’t** directly capture `/list` output as text (the game just doesn’t expose it).
- This extension gives you a **“soft /list”**: a list of all students who voluntarily register by typing `join`.
- You can now:
  - store that list in a variable,
  - loop over it,
  - show it as text,
  - and manage it completely through blocks.

If you’d like, next step I can:

- tweak the blocks to match your exact naming style for kids, or  
- add a **“/unjoin” / reset** behaviour, or  
- add a block that **automatically prints a formatted roll call table** in chat.




