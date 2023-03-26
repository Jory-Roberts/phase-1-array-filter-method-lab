const findMatching = (drivers, name) => {
    return drivers.filter(function (matchingName) {
        return matchingName.toLowerCase() === name.toLowerCase();
    }
    )
}

const fuzzyMatch = (drivers, letters) => {
    let letterLength = letters.length;
    return drivers.filter(function (matchingLetters) {
        return matchingLetters.slice(0, letterLength) === letters;
    }
    )
}

const matchName = (drivers, query) => {
    return drivers.filter(function (driver) {
        return driver.name.toLowerCase() === query.toLowerCase();

    }
    )
}

    

    
        

    
    
    

