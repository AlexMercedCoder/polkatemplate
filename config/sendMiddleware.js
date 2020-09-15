//MIDDLEWARE TO ADD res.json and res.html functions

const classics = (req, res, next) => {
  
    res.json = (obj, status = 200) => {
      if (!res.headersSent) {
        try {
          res.writeHead(status, { "Content-Type": "application/json" });
          res.write(JSON.stringify(obj));
        } catch (err) {
          console.error(err);
          res.write(JSON.stringify(err));
        }
        return res.end();
      } else {
        console.log(
          "Request already has been responded too, if not intended, consider extending the resTimeout config to facilitate time for promises to resolve"
        );
      }
    };
  
    res.html = (html, status = 200) => {
      if (!res.headersSent) {
        try {
          res.writeHead(status, { "Content-Type": "text/html" });
          res.write(html);
        } catch (err) {
          console.error(err);
          res.write(JSON.stringify(err));
        }
        return res.end();
      } else {
        console.log(
          "Request already has been responded too, if not intended, consider extending the resTimeout config to facilitate time for promises to resolve"
        );
      }
    };

    next()
  };

  module.exports = classics