// The provided course information.
const CourseInfo = { id: 451, name: "Introduction to JavaScript" };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
    function isValidID(CourseInfo,AssignmentGroup){
        try{
            if(CourseInfo.id===AssignmentGroup.courseId){
                return true;
            }

            else{
                throw new Error("you are in the wrong course");
        ``}
       
        }
        catch(e){
            console.error(e);
        }
    }
    function getAvg(points_possible,score){
      try{
        if(points_possible !== 0){

          if(isOnTime())return(score-(points_possible*.9))/points_possible;
        }
        else{
          throw new Error("Assignments cannot be worth 0 points");
        }
      }
      catch(e){
        console.error(e);
      }
    }
    function isOnTime(due_at,submitted_at){
      try{
        const TEMPDATE1 = new Date(due_at);
        const TEMPDATE2 = new Date(submitted_at);
        const isLate=TEMPDATE1>=TEMPDATE2;
        if(isLate){
          
        }
        else{
          throw new Error("bad date imput");
        }
      }
      catch(e){
        console.error(e);
      }
    }
    function getLearnerData(CourseInfo,AssignmentGroup,LearnerSubmissions){

    }
  
  
