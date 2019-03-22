// 1. You have encounter your opponent Mr Mine.
// 2. You send in Gengar.
// 3. You can choose one of Gengar's skills
// 3. Gengar use shadow ball. Shadow Ball hits for 50 DMG. 
// 4. Critical Hit. Enemy fainted because health reduced to 0/
// 5. You have earned experience points.
// 6. if your pokemon levels up, might learn new skills.

const mypkm = 'Gengar'
const oppkm = 'Mr.Mine'
let myhp = 100
let ophp = 100
let ismyturn = true

console.log ("You have encounter wild " + oppkm + " with " + ophp + " HP ")
console.log ("You send " + mypkm + " with " + myhp + " HP ")

while (myhp > 0 && ophp > 0){
    console.log("-----------------------------------------")
    let attname = ismyturn ? mypkm : oppkm //if is my turn, attacker = mypkm else oppkm
    let defname = ismyturn ? oppkm : mypkm//if is my turn, defender = oppkm else mypkm

    const attdmg = Math.floor(Math.random()*50 + 1)

    console.log (attname + " use shadow ball")

    if (ismyturn){
        ophp = ophp - attdmg
        console.log ("Shadow ball hits for " + attdmg + " DMG")
        console.log (defname + "'s health is reduced to " + ophp)
    } else {
        myhp = myhp - attdmg
        console.log ("Shadow ball hits for " + attdmg + " DMG")
        console.log (defname + "'s health is reduced to " + myhp)
    }

    ismyturn = !ismyturn
}

if (ophp <= 0){
    console.log (oppkm + ' faints')
    console.log (mypkm + ' has gained 50 exp')
} else {
    console.log(mypkm + ' faints')
    console.log('Game Over!!!')
}





