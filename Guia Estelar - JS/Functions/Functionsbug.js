// callback function

function test(thing) {
    thing = bug('oi')
    return thing
}


test(
    bug = function bug(algo) {
        algo = test('oi')
        return algo
    }
)


