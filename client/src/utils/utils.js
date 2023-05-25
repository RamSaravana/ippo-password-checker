export const verifyPassword = (password) => {
    const strengthChecks = {
        length: 0,
        hasUpperCase: false,
        hasLowerCase: false,
        hasDigit: false,
        hasRepeatedChar: false,
    };

    strengthChecks.length = 20 >= password.length && 6 <= password.length ? true : false;
    strengthChecks.hasUpperCase = /[A-Z]+/.test(password);
    strengthChecks.hasLowerCase = /[a-z]+/.test(password);
    strengthChecks.hasDigit = /[0-9]+/.test(password);
    strengthChecks.hasRepeatedChar = password.length >=6 && !/(.)\1\1/.test(password);

    let verifiedList = Object.values(strengthChecks).filter((value) => value);
    let strength =
        verifiedList.length === 5
            ? "Strong"
            : 4 >= verifiedList.length && 2 <= verifiedList.length
                ? "Medium"
                : "Weak";
    return {
        verifiedList:verifiedList,
        strength:strength
    }
}

export const progressPercentage = (percentage) => {
    if (percentage >= 40 && percentage < 60) 
        percentage = 25
    else if (percentage >= 60 && percentage < 80) 
        percentage = 50
    else if (percentage === 80)
        percentage = 75
    return percentage;
}