const express = require("express");
const router = express.Router();

let { Visitors } = require(`./visitor`);

router.post("/addNewVisitor", async (req, res) => {
  let visitor1 = new Visitors(
    req.body.fullname,
    req.body.visitorsage,
    req.body.dateofvisit,
    req.body.timeofvisit,
    req.body.assistedby,
    req.body.comments
  );

  let visitorInfo = await visitor1.addNewVisitor();

  res.json({ visitor: visitorInfo[0] });
});

router.delete("/deletevisitor/:id", async (req, res) => {
  visitor1 = new Visitors();

  visitorInfo = await visitor1.deleteVisitor(req.params.id);

  res.json({ visitor: visitorInfo[0] });
});

router.delete("/deleteVisitors", async (req, res) => {
  visitor1 = new Visitors();

  visitorInfo = await visitor1.deleteAllVisitors();

  res.json({ visitor: visitorInfo[0] });
});

router.get("/viewVisitors", async (req, res) => {
  visitor1 = new Visitors();

  visitorInfo = await visitor1.viewAllVisitors();

  res.json({ visitor: visitorInfo });
});

router.get("/viewVisitor/:id", async (req, res) => {
  visitor1 = new Visitors();

  visitorInfo = await visitor1.viewOneVisitor(req.params.id);

  res.json({ visitor: visitorInfo[0] });

  router.put("/updateVisitor/:id", async (req, res) => {
    visitor1 = new Visitors();

    visitorInfo = await visitor1.updateVisitorInfo(
      req.params.id,
      req.body.column,
      req.body.newInfo
    );

    res.json({ visitor: visitorInfo[0] });
  });
});

module.exports = router;
