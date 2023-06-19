// 1. Find all the topics and tasks which are thought in the month of October


db.topics.aggregate([
    {
        $lookup: {
               from: "tasks",
               localField: "topicid",
               foreignField: "topicid",
               as: "taskinfo"
             }
    },
    {
        $match:{$and:[{$or:[{topic_date:{$gt:new Date("30-sep-2020")}},{topic_date:{$lt:new Date("1-nov-2020")}}]},
        
          {$or:[{"taskinfo.due_date":{$gt:new Date("30-sep-2020")}},{"taskinfo.due_date":{$lt:new Date("1-nov-2020")}}]}
        ]}
    }
    
    ])


// 2. Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020


db.companydrives.find({$or:[{drive_date:{$gte:new Date("15-oct-2020")}},
    {drive_date:{$lte:new Date("31-0ct-2020")}}]})


// 3. Find all the company drives and students who are appeared for the placement.


db.companydrives.aggregate([
    {
        $lookup: {
              from:"users",
              localField:"userid",
              foreignField:"userid",
              as :"userinfo"
             }
    },
    {
        $project:{
            _id:0,
            "userinfo.name":1,
            company:1,
            drive_date:1,
            "userinfo.email":1,
            "userinfo.userid":1
        }
    }
    ])


// 4. Find the number of problems solved by the user in codekata


 db.codekata.aggregate([
    {
        $lookup:{
            from:"users",
            localField:"userid",
            foreignField:"userid",
            as:"userinfo"
        }
    },
    {
        $project:{
            _id:0,
            "userinfo.name":1,
            userid:1,
            problems:1

        }
    }

])


// 5. Find all the mentors with who has the mentee's count more than 15


db.mentors.find({mentee_count:{$gt:15}});


//6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020
 

db.attendance.aggregate([
    {$lookup: {
           from: "topics",
           localField: "topicid",
           foreignField: "topicid",
           as: "topics"
         }},
         {
             $lookup: {
                    from: "tasks",
                    localField: "topicid",
                    foreignField: "topicid",
                    as: "tasks"
                  }
         },
         {$match:{$and:[{attended:false},{"tasks.submitted":false}]}},
         {$match:{$and:[{$or:[{"topics.topic_date":{$gte:new Date("15-oct-2020")}},{"topics.topic_date":{$lte:new Date("31-oct-2020")}}]}, 
         {$or:[{"tasks.due_date":{$gte:new Date("15-oct-2020")}},{"tasks.due_date":{$lte:new Date("31-oct-2020")}}]}
         ]}},
         {
             $count: "No_of_students_absent"
         }
         
    ])







