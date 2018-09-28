var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};

function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
        return file.contents;
    } else {
        return "Invalid password!";
    }
}

function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
}

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "DR. Evel's next meeting is in Philadelphia");
secret = getSecret(superSecretFile, 2);
console.log(secret);