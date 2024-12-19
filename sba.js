const { type } = require("node:os");

const CourseInfo = { id: 451, name: "Introduction to JavaScript" };

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
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function isValidID(CourseInfo, AssignmentGroup) {
  try {
    if (CourseInfo.id === AssignmentGroup.course_id) {
      return true;
    } else {
      throw new Error("You are in the wrong course");
    }
  } catch (e) {
    console.error(e);
    return false;
  }
}
function isOnTime(due_at, submitted_at) {
  try {
    const dueDate = new Date(due_at);
   // console.log(dueDate);
    const submittedDate = new Date(submitted_at);
    //console.log(submittedDate);
    //console.log(submittedDate <= dueDate);
    return submittedDate <= dueDate;
  } catch (e) {
    console.error("Bad date input", e);
  }
  return false;
}
function getAssignmentById(id) {//this should return a assignment obj based on it's id
  try {
    for (let x = 0; x < AssignmentGroup.assignments.length; x++) {
      const assignment = AssignmentGroup.assignments[x];
      if (assignment.id === id) {
        //console.log(assignment);
        return assignment;
      }
    }
    throw new Error("this assignment doesn't exist in the AssignmentGroup");
  } catch (e) {
    console.error(e);
  }
}
// returns the weighted avg by ID
function getAvgbyID(param_id) {
  try {
    let totalScore=0;
    let totalPoints=0;
    let sub;
    for (let x = 0; x < LearnerSubmissions.length; x++) {
      // find the leaner
      sub = LearnerSubmissions[x];
      if (sub.points_possible === 0) {
        throw new Error("Assignments cannot be worth 0 points");
      }
      if (sub.learner_id === param_id) {
        break;
      }
    }
    for (let i = 0; i < AssignmentGroup.assignments.length; i++) {
      // loop through and get all the assignments that this learner has and calculate the avg
      const assignment = AssignmentGroup.assignments[i];
      if (assignment.id === sub.assignment_id) {
        if (isOnTime(assignment.due_at, sub.submission.submitted_at)) {
          totalPoints += assignment.points_possible;
          totalScore += sub.submission.score;
          console.log("I was true");
        } 
        else {
          totalPoints += assignment.points_possible;
          totalScore += sub.submission.score *.9;
          console.log(totalPoints)
          console.log();
        }
      }
    }
    //console.log(totalScore / totalPoints);
    return totalScore / totalPoints;
  } catch (e) {
    console.error(e);
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
function getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions) {
  if (!isValidID(CourseInfo, AssignmentGroup)) {
    return;
  }
  let learnerData = [];
  for (let x = 0; x < LearnerSubmissions.length; x++) {
    const submission = LearnerSubmissions[x];
    const assignment = getAssignmentById(submission.assignment_id);
    const avgGrade = getAvgbyID(submission.assignment_id);
    // const onTime = isOnTime(due_at, sub.submitted_at); don't need this here since we aren't going to calc the weighted avg in this method
    learnerData.push({
      /// This is probably bad should fix this incase of
      id: submission.learner_id,
      Avg: avgGrade,
      assignment_id: assignment.assignment_id,
    });
    console.log(
      `id: ${learnerData[x].id} Avg: ${learnerData.Avg} Assignment id: ${learnerData.assignment_id}`
    );
  }
}
//etAssignmentById(4);// works as intended
//console.log(getAvgbyID(2));
//console.log(isOnTime(AssignmentGroup.assignments[1].due_at,LearnerSubmissions[0].submission.submitted_at)); //sorta works, if you pass in a non formated value it does't throw a error it kinda just makes up info
getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
