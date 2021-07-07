import 'src/types/Job'

export function getJobs():any{
    let jobs:Job[] = [
        {
            "id": 1,
            "email":"abc@gmail.com",
            "cryptoAddress":"DOWDKSODK22",
            "wallet": 10,
            "description":"",
            "created_at": "05/07/2021",
            "before_photo": "1.jpe",
            "after_photo": "2.jpe",
            "hours": 2,
            "status": "pending",
            "up_vote": 2,
            "down_vote": 1
        },
        {
            "id":2,
            "email":"xyz@gmail.com",
            "cryptoAddress":"DOWD33ODK22",
            "wallet": 0,
            "description":"",
            "created_at": "04/07/2021",
            "before_photo": "1.jpe",
            "after_photo": "2.jpe",
            "hours": 3,
            "status": "pending",
            "up_vote": 2,
            "down_vote": 2
        },
        {
            "id":3,
            "email":"abc2@gmail.com",
            "cryptoAddress":"DOWDODK22",
            "wallet": 20,
            "description":"",
            "created_at": "03/07/2021",
            "before_photo": "1.jpe",
            "after_photo": "2.jpe",
            "hours": 2,
            "status": "accepted",
            "up_vote": 3,
            "down_vote": 0
        }
    ];  
    return jobs;
} 