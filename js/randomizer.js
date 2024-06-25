//export {tilfeldig_tall}
export function randomizer(tall) {
    const tilfeldig = Math.random(); // 0-1
    let ferdig_tall = tall * tilfeldig; // 0-tall
    let uten_desimal = Math.floor(ferdig_tall) + 1; // 1-tall uten desimal
    return uten_desimal;
}
