
const corsOptions = {
    origin: ["http://localhost:3000"], // Allowed origins
    methods: "POST", // Allowed HTTP methods
    allowedHeaders: "Content-Type,Authorization", // Allowed headers
  };

  module.exports=corsOptions;