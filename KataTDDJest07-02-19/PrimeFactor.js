exports.PrimeFactor = (number) => {
    pFact = []

    if (number == 1)
        return null

    fact = 2
    while (number >= fact) {
        if (number % fact == 0) {
            pFact.push(fact)
            number = number / fact
        } else
            fact++
    }
    tu
    return pFact
}