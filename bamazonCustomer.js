var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id" + connection.threadId + "\n");
//   runSearch();
start();
});

function start() {
    inquirer
      .prompt({
        name: "searchDepartment",
        type: "list",
        message: "Which department would you like to search?",
        choices: ["Electronics", "Pets", "EXIT"]
      })
      .then(function(answer) {
        // based on their answer, either call the bid or the post functions
        console.log(answer.searchDepartment);    
        if (answer.searchDepartment === "Electronics") {
          console.log("Showing Electronics...")
          showGoods();
        }
        else if(answer.searchDepartment === "Pets") {
          console.log("Showing Pets...")

          showGoods();   
        } else{
          connection.end();
        }
      });
  }



function searchElectronics() {

}

function showGoods() {
    connection.query("SELECT * FROM merchandise",
    function(err, results) {
        if (err) throw err;
        // console.log(results);
        let choiceArray = [];
        for (var i = 0; i < results.length; i++) {
            choiceArray.push(results[i].product_name);
        }
        // console.log(choiceArray);
    inquirer
        .prompt([
            {
            name: "choice",
            type: "rawlist",
            choices: choiceArray,
            message: "Which item do you wish to purchase?"

          },
          {
            name: "purchase",
            type: "input",
            message: "How many do you want to buy?"
          }
        ])
        // querires items from product table//
        .then(function(answer) {
          return new Promise(function(resolve, reject){
            connection.query("SELECT * from products WHERE stock_quantity=?", answer.product_name, function(err,res){
              if (err) reject (err);
              resolve(res);
            });  
            //not enough//
          }).then(function(result) {
            if (answer.purchase > result[0].stock_quantity){
              return "Insufficent quantity!";
            }else{
              let object = {};
              object.answer = answer;
              object.result = result;
              return object;
            }
          }).catch(function(err){
            console.log(err);
            // connection.end();
          })
        });
        let chosenItem = connection.query("SELECT",(answer.purchase), "FROM merchandise === answer.purchase")
        console.log("THIS IS THE CHOSEN ITEM: ", chosenItem)
        for (var i = 0; i < results.length; i++) {
          if (results [i].stock_quantity === answer.choice)
          {
            chosenItem = results[i];
          }
        }
        if (chosenItem.stock_quantity < parseInt(answer.purchase)) {
            connection.query("UPDATE merchandise SET ? WHERE ?",
            [
                {
                   in_stock: answer.stock_quantity
                },
                {
                    id: chosenItem.id
                }
            ],
            function(err) { 
                if (err) throw err;
                console.log("You have purchased this item.");
                // RESTART TO INTRO FUNCTION GOES HERE
            }
          );
        }
        else {
            //alert user that there's not enough product
            console.log("We're sorry! We dont have that many");
            // RESTART TO INTRO FUNCTION GOES HERE 
        }
    });
}



// function runSearch() {
//     inquirer
//       .prompt({
//         name: "action",
//         type: "list",
//         message: "Which department would you like to search ?",
//         choices: [
//           "Electronics",
//           "Pets",
//           "exit"
//         ]
//       })
//       .then(function(answer) {
//         switch (answer.action) {
//         case "Electronics":
//           electronicsSearch();
//           break;
  
//         case "Pets":
//           petsSearch();
//           break;

//         case "exit":
//           connection.end();
//           break;
//         }
//     });

//     function electronicsSearch() {
//         inquirer
//           .prompt({
//               name:"action",
//               type: "list",
//               message : "What would you like to purchase?",
//               choices: [
//                   "theSexyBox",
//                   "prayerStation",
//                   "switchAroo",
//                   "throwbackGamingMachine",
//                   "gameBoi",
//                   "nerdBOX",
//                   "exit"
//               ]
//           })
        // console.log("Searching electronics department");
        // let E1 =  "SELECT electronics_department, product_name, price, stock_quantity FROM bamazon WHERE ?";
        // connection.query(E1, function(err,res) {
        //     for (var i = 0; i < res.length; i++){
        //         console.log(res[i].electronics_department);
        //     }
        // });
            
        
        
    
        // console.log(E1);
        // connection.E1(E1, {product_name})
        // inquirer
        //   .prompt({
        //       name:
        //       type:
        //       message: 
        //   })
    // }

    // function petsSearch(){
        
    // }
// }