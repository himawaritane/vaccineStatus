db = db.getSiblingDB("userSample");
db.createCollection("users");
usersCollection = db.getCollection("users");
usersCollection.remove({});

usersCollection.insert({
    userId: 1,
    name: "Jasmine Rice",
    email: "jasminerice@gmail.com",
    vaccineStatus: true,
    zipcode: "98101"
});
usersCollection.insert({
    userId: 2,
    name: "Jennifer Aberham",
    email: "jenny@gmail.com",
    vaccineStatus: false,
    zipcode: "98125"
});
usersCollection.insert({
    userId: 3,
    name: "Jake Riley",
    email: "jriley@gmail.com",
    vaccineStatus: true,
    zipcode: "98133"
});
usersCollection.insert({
    userId: 4,
    name: "Timothy Math",
    email: "ticktocktim@gmail.com",
    vaccineStatus: false,
    zipcode: "98125"
});
usersCollection.insert({
    userId: 5,
    name: "Simmon Ray",
    email: "simray@gmail.com",
    vaccineStatus: true,
    zipcode: "98101"
});