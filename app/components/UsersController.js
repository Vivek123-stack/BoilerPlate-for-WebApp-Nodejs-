module.exports = {
    getUsers(req, res) {
        res.json({ status: "success", message: "Welcome to Blockchain Technology!!!" });
    },
    addTwoNumbers(req,res){
        const { num1, num2 } = req.body;
        const add = (num1, num2) => {
          return num1 + num2;
        };
        res.json({
          status: "success",
          result: add(num1, num2)
        });
    }
  };