export interface Job{
    _id : String,
    email: String,
    cryptoAddress: String,
    description:String,
    createdAt : Date,
    updatedAt : Date,
    hours: Number,
    status: String,
    proofOfWork: {
        before:String,
        after:String
    },
    votes:  {
        up: Number,
        down: Number
    }
}