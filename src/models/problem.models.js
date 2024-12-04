const mongoose=require('mongoose');

const problemSchema=new mongoose.Schema({

    title:{
        type:String,
        required:[true,'title cannot be empty']
    },

    description:{
        type:String,
        required:[true,'description cannot be empty']
    },
    difficulty:{
            type:String,
            enum:['easy','medium','hard'],
            required:[true,'difficulty cannot be empty'],
            default:'easy'
    },
    testcases:[
        {
            input:{
                type:String,
                required:true
            },
            output:{
                type:String,
                required:true
            }
        }
    ],
    codeStubs:[
        {
            language:{
                type:String,
                enum:["CPP","JAVA","PYTHON"],
                required:true
            },
            startSnipet:{
                 type:String,
            },
             endSnipet:{
                type:String,
             },
              userSnipet:{ 
              type:String,
       }
        }
    ],
    editorial:{
        type:String
    }
});


//this is object using which we can execute our ORM queries>>
const Problem=mongoose.model('Problem',problemSchema);

module.exports=Problem;