const Character = require("../models/Character");
const User = require("../models/User");

module.exports = {
  defaultCharacters: async () => {
    const buffBill = new Character({
      name: "Black Hat",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await buffBill.save();

    const blackHat = new Character({
      name: "Buff Bill",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await blackHat.save();

    const marlonSquad = new Character({
      name: "Marlon Squad",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await marlonSquad.save();

    const parachute = new Character({
      name: "Parachute",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await parachute.save();

    const reus = new Character({
      name: "Reus",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await reus.save();

    const xray = new Character({
      name: "Xray",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await xray.save();

    const air = new Character({
      name: "Air",
      unlocked: true,
      level: 1,
      progress: 0
    });

    await air.save();

    const characters = [
      buffBill,
      blackHat,
      marlonSquad,
      parachute,
      reus,
      xray,
      air
    ];

    return characters;
  },
  newUser: req => {
    const user = new User({
      name: req.body.name,
      deviceId: req.body.deviceId,
      socialUsername: req.body.socialUsername || null,
      fcmToken: req.body.fcmToken || null,
      clan: {
        name: null
      },
      currency: {
        gold: 0,
        hats: 0,
        coins: 0
      },
      characters,
      properties: []
    });

    return user;
  }
};
