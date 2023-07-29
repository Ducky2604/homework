/*
Implement solutions to the following questions/problems by writing functions for each one:
Instruction
Implement a function biggestFollower() which returns the name of the individual who follows the most people.
Instruction
Implement mostPopular() which returns the name of the most popular (most followed) individual.
Instruction
Implement printAll() which outputs a list of everyone and for each of them, the names of who they follow and who follows them.
Instruction
Implement unrequitedFollowers() which returns a list of names for those who follow someone that doesn't follow them back.
Instruction
Implement some or all these remaining functions.
Identify who has the most followers over 30
Identify who follows the most people over 30
List everyone and their reach (sum of # of followers and # of followers of followers)
Tips
You are encouraged to create some additional functions in order to avoid having very large functions that try to do everything. That said, be sure to name them well. All this may sound familiar - that's because it was covered recently as part of our Function Best Practices.
 */
// ----------
const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"],
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"],
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"],
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"],
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"],
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"],
  },
};
// ---------------------
function biggestFollower(data) {
  let mostFollows = 0;
  let biggestFollowerName = "";

  for (const userId in data) {
    const user = data[userId];
    if (user.follows.length > mostFollows) {
      mostFollows = user.follows.length;
      biggestFollowerName = user.name;
    }
  }

  return biggestFollowerName;
}
// ----------------------
function mostPopular(data) {
  const followsCount = {};

  for (const userId in data) {
    const user = data[userId];
    user.follows.forEach((followedUserId) => {
      if (followsCount[followedUserId]) {
        followsCount[followedUserId]++;
      } else {
        followsCount[followedUserId] = 1;
      }
    });
  }

  let mostFollowedUserId = "";
  let maxFollows = 0;

  for (const userId in followsCount) {
    if (followsCount[userId] > maxFollows) {
      mostFollowedUserId = userId;
      maxFollows = followsCount[userId];
    }
  }

  return data[mostFollowedUserId].name;
}
// -----------------
function printAll(data) {
  for (const userId in data) {
    const user = data[userId];
    const name = user.name;
    const follows = user.follows.map((followedUserId) => data[followedUserId].name);
    const followers = Object.values(data).filter((u) => u.follows.includes(userId)).map((u) => u.name);

    console.log(`Name: ${name}`);
    console.log(`  Follows: ${follows.join(", ")}`);
    console.log(`  Followers: ${followers.join(", ")}`);
  }
}
// ----------------
function unrequitedFollowers(data) {
  const unrequited = [];

  for (const userId in data) {
    const user = data[userId];
    const followers = Object.values(data).filter((u) => u.follows.includes(userId)).map((u) => u.name);
    const follows = user.follows.map((followedUserId) => data[followedUserId].name);

    const nonReciprocalFollowers = followers.filter((followerName) => !follows.includes(followerName));

    if (nonReciprocalFollowers.length > 0) {
      unrequited.push(user.name);
    }
  }

  return unrequited;
}
// --------------------
console.log("Biggest Follower: ", biggestFollower(data));
console.log("Most Popular: ", mostPopular(data));
console.log("Print All:");
printAll(data);
console.log("Unrequited Followers: ", unrequitedFollowers(data));
