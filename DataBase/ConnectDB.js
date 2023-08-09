const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Database = process.env.CONNECT_DB;
mongoose
  .connect(Database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((Error) => {
    console.log(Error);
  });

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(Database, {
//       //must add in order to not get any error masseges:
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//       useCreateIndex: true,
//     });
//     console.log(`mongo database is connected!!! ${conn.connection.host} `);
//   } catch (error) {
//     console.error(`Error: ${error} `);
//     process.exit(1); //passing 1 - will exit the proccess with error
//   }
// };

// module.exports = connectDB;

// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);
// const Database = process.env.CONNECT_DB;

// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(Database, {
//       useUnifiedTopology: true,
//       useNewUrlParser: true,
//     });
//     console.log(`Mongo database is connected!!! ${conn.connection.host}`);
//   } catch (error) {
//     console.error(`Error: ${error}`);
//     process.exit(1); // Exiting the process with an error
//   }
// };

// module.exports = connectDB;
