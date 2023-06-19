// Inserting Users


db.createCollection("users")

db.users.insertMany([
   {
    "userid":1,
    "name":"sarah",
    "email":"sarah@gmail.com"
   },
   {
    "userid":2,
    "name":"orhan",
    "email":"orhan@gmail.com"
   },
   {
    "userid":3,
    "name":"sam",
    "email":"sam@gmail.com"
   },
   {
    "userid":4,
    "name":"daniel",
    "email":"daniel@gmail.com"
   },
   {
    "userid":5,
    "name":"claus",
    "email":"claus@gmail.com"
   }


])


// Inserting Codekata
'

db.createCollection("codekata");

db.codekata.insertMany([
    {
        userid:1,
        problems:500
    },
     {
        userid:2,
        problems:300
    },
     {
        userid:3,
        problems:255
    },
     {
        userid:4,
        problems:355
    },
     {
        userid:5,
        problems:475
    }
    ])  


// Inserting Topics


db.createCollection("topics");

db.topics.insertMany([
    {   
        topicid:1,
        topic:"HTML",
        topic_date:new Date("3-oct-2020")
    },
     {
         topicid:2,
        topic:"CSS",
        topic_date:new Date("12-oct-2020")
    },
     {
         topicid:3,
        topic:"Bootstrap",
        topic_date:new Date("14-oct-2020")
    },
     {
         topicid:4,
        topic:"JavaScript",
        topic_date:new Date("16-oct-2020")
    },
     {
         topicid:5,
        topic:"React JS",
        topic_date:new Date("25-oct-2020")
    }
    ])

 
// Inserting Tasks


db.createCollection("tasks");

db.tasks.insertMany([
    {
        taskid:1,
        topicid:1,
        userid:1,
        task:"HTML task",
        due_date:new Date("5-oct-2020"),
        submitted:true
    },
    {
        taskid:2,
        topicid:2,
        userid:2,
        task:"CSS task",
        due_date:new Date("15-oct-2020"),
        submitted:true
    },
     {
        taskid:3,
        topicid:3,
        userid:3,
        task:"Bootstrap task",
        due_date:new Date("17-oct-2020"),
        submitted:false
    },
      {
        taskid:4,
        topicid:4,
        userid:4,
        task:"JavaScript task",
        due_date:new Date("18-oct-2020"),
        submitted:true
    },
     {
        taskid:5,
        topicid:5,
        userid:5,
        task:"React JS task",
        due_date:new Date("27-oct-2020"),
        submitted:false
    }
    ])

// Inserting Attendance


db.createCollection("attendance");

 db.attendance.insertMany([
    {
        userid:1,
        topicid:2,
        attended:true
    },
     {
        userid:2,
        topicid:1,
        attended:true
    },
     {
        userid:3,
        topicid:5,
        attended:false
    },
    {
        userid:4,
        topicid:3,
        attended:true
    },
    {
        userid:5,
        topicid:4,
        attended:false
    }
    
    ])
    

// Inserting Mentors


db.createCollection("mentors");

 db.mentors.insertMany([
    {
        mentorid:1,
        mentorname:"Ruban",
        mentor_email:"ruban@gmail.com",
        mentee_count: 20
    },
      {
        mentorid:2,
        mentorname:"sangeetha",
        mentor_email:"sangeetha@gmail.com",
        mentee_count:15
    },
      {
        mentorid:3,
        mentorname:"sathis",
        mentor_email:"sathis@gmail.com",
        mentee_count:100
    },
      {
        mentorid:4,
        mentorname:"sanjay",
        mentor_email:"sanjay@gmail.com",
        mentee_count:18
    },
      {
        mentorid:5,
        mentorname:"sai mohan",
        mentor_email:"saimohan@gmail.com",
        mentee_count:25
    }
    ])


// Inserting CompanyDrives


db.createCollection("companydrives");

 db.companydrives.insertMany([
    {
        userid:1,
        drive_date:new Date("5-oct-2020"),
        company:"Amazon"
    },
     {
        userid:1,
        drive_date:new Date("18-oct-2020"),
        company:"Infosys"
    },
     {
        userid:2,
        drive_date:new Date("21-oct-2020"),
        company:"Amazon"
    },
     {
        userid:3,
        drive_date:new Date("8-oct-2020"),
        company:"TCS"
    },
     {
        userid:4,
        drive_date:new Date("4-nov-2020"),
        company:"ITC"
    },
    {
       userid:5,
        drive_date:new Date("13-nov-2020"),
        company:"Fintech"
    }
    ])
    
