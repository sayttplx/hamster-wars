const isHamsterObject = (obj) => {
    const keys = Object.keys(obj);

    if ((typeof obj) !== 'object') {
        return false;
    }

    if (!keys.includes('wins')
        || !keys.includes('defeats')
        || !keys.includes('games')
        || !keys.includes('age')
        || !keys.includes('name')
        || !keys.includes('favFood')
        || !keys.includes('loves')
        || !keys.includes('imgName')) {
        return false
    }
    return true;

};

module.exports = isHamsterObject;