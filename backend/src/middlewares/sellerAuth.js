const Seller = require("../models/seller");
const firebaseAdmin = require("firebase-admin");

const auth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  console.log(token);
  firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .then(async (decodedToken) => {
      const uid = decodedToken.uid;
      const seller = await Seller.findOne({ firebaseUid: uid });
      if (!seller) throw new Error();
      req.seller = seller;
      next();
    })
    .catch((error) => {
      console.error(error);
      res.status(401).send({ error: "Please authenticate" });
    });
};

module.exports = auth;
