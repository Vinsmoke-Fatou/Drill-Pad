function validateUser(data) {
    let valid = true;
    let errors = [];

    if (data.name == undefined || typeof data.name != "string" || data.name.trim() === "") {
        valid = false;
        errors.push("The  name must be a non-empty string");
    }

    if (data.email == undefined || !(data.email.includes('@')) || !(data.email.includes('.'))) {
        valid = false;
        errors.push("The email must contain '@'and '.'");
    }

    if (typeof data.age !== "number" || data.age < 13 || data.age > 120) {
        valid = false;
        errors.push("The age must be a number between 13 and 120");
    }

    
    if (data.password == undefined || data.password.length < 8 || !(/\d/.test(data.password))) {
        valid = false;
        errors.push("The password must be at least 8 characters and contain at least one number");
    }

    return {valid, errors};
}