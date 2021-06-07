const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
    title : {
        type : String,
        required: true
    },
    description : {
        type: String
    },
  
    storeInformation : {
        StreetNo : {
            type: String,
        },
        Country : {
            type: String
        },
        telno : {
            type: String
        },
        email : {
            type: String
        }
    },
    Categories : [
        {
          name : {
              type: String
          }  
        }
    ],
    defaultPages : [
        {
            PrivacyPolicy : {
                type: String
            },
            TermsConditions : {
                type: String
            },
            AboutUs : {
                type: String
            }
        }
    ],
    customPages : [
       {
        page : {
            type: String
        },
        permalink : {
            type: String
        }
       }
    ]
   


})


module.exports = mongoose.model('shop', ShopSchema);