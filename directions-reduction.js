// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST".
//  Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.

// Going to one direction and coming back the opposite direction right away is a needless effort. 
// Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, 
// otherwise you might die of thirst!

// How I crossed a mountainous desert the smart way.
// The directions given to the man are, for example, the following (depending on the language):

// ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

// You can immediatly see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same place!
//  So the task is to give to the man a simplified version of the plan.
//  A better plan in this case is simply: ["WEST"]

// Other examples:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.

let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]

// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] === arr[i + 1]) {
//         arr.splice(i, 1)
//     }
// }
const result = []
for(let i = 0; i < arr.length; i++) {
    if(arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || arr[i] === "SOUTH" && arr[i + 1] === "NORTH" || arr[i] === "EAST" && arr[i + 1] === "WEST" || arr[i] === "WEST" && arr[i + 1] === "EAST"){
        i++
    } else {
        if(result[result.length - 1] === "NORTH" && arr[i] === "SOUTH" || result[result.length - 1] === "SOUTH" && arr[i] === "NORTH" || result[result.length - 1] === "EAST" && arr[i] === "WEST" || result[result.length - 1] === "WEST" && arr[i] === "EAST"){
            result.pop()
        } else {
            result.push(arr[i])
        }
    }
}
return result

 

