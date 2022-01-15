const express = require("express");
const Exceptions = require("../utils/exceptions");
const ErrorHandler = require("../utils/error-handler");
const MiddleWare = require("../middleware/auth");
const User = require("../models/user-model");

const router = new express.Router();

router.put("/users/setPassword",MiddleWare.auth ,async (req, res) => {
  try {
    if(req.body.current)
    {
      await User.findByCredentials(
        req.user.EMAILS[0],
        req.body.current
      );
    }else {
      throw Exceptions.QueryException(
        "PASSWORD_MISSING",
        "Please provide the current password"
      );
    }
    if (req.body.password) {
      let re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[\]:;<>,.?\/~_+\-=|]).{8,}$/;
      if (re.test(req.body.password)) {
        req.user.ACCESS_KEY = req.body.password;
        req.user.save();
        res.status(204).send();
      } else {
        throw Exceptions.ValidationException(
          "PASSWORD_VALIDATION_FAILED",
          "Password doesn't matches the given criterias"
        );
      }
    } else {
      throw Exceptions.QueryException(
        "PASSWORD_MISSING",
        "Please provide the new password"
      );
    }
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    req.session.authToken = token;
    if (req.query.token && req.query.token === "Y") {
      res.send({ user, token });
    } else {
      res.status(204).send();
    }
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

router.delete("/users/logout", MiddleWare.auth, async (req, res) => {
  try {
    await req.user.removeToken(req.token);
    req.session.destroy();
    res.status(204).send();
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

router.delete("/users/logoutAll", MiddleWare.auth, async (req, res) => {
  try {
    await req.user.removeAllToken();
    req.session.destroy();
    res.status(204).send();
  } catch (e) {
    ErrorHandler.handleError(e, res);
  }
});

module.exports = router;
