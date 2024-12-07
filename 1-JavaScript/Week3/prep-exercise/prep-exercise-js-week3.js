import { modules, students, mentors, classes } from './hyf.js';

const possibleMentorsForModule = (moduleName) => {
  const module = modules.find((mod) => mod.name === moduleName);
  if (!module) return [];
  return mentors
    .filter((mentor) => mentor.canTeach.includes(module.name))
    .map((mentor) => mentor.name);
};

const findMentorForModule = (moduleName) => {
  const possibleMentors = possibleMentorsForModule(moduleName);
  if (possibleMentors.length === 0) return null;
  return possibleMentors[Math.floor(Math.random() * possibleMentors.length)];
};
// You can uncomment out this line to try your function
// console.log(findMentorForModule('javascript'));
