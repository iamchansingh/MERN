const AWS = require("aws-sdk");
const uuid = require("uuid/v1");
//const requireLogin = require("../middlewares/requireLogin");
const keys = require("../../config/key_dev");
const express = require("express");
const router = express.Router();
const passport = require("passport");

const s3 = new AWS.S3({
  accessKeyId: keys.accessKeyId,
  secretAccessKey: keys.secretAccessKey
});

router.get(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req);
    const key = `${req.user.id}/${uuid()}.jpeg`;

    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "devconn",
        ContentType: "image/jpeg",
        Key: key
      },
      (err, url) => res.send({ key, url })
    );
  }
);
module.exports = router;
