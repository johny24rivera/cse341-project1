let users = []

exports.getUsers = () => {
    return users;
};

exports.addUser = (fname, surname) => {
    const userExists = users.filter((user) => {
        console.log('in func' + user.firstName + user.lastName)
        return (user.firstName === fname) && (user.surname === surname);
    });

    if (userExists == undefined || userExists.length == 0) {
        users.push({
            firstName: fname,
            lastName: surname,
        });
    };
};

exports.deleteUser = (name) => {
    users = users.filter((user) => {
        return user.firstName + user.lastName != name;
    });

};