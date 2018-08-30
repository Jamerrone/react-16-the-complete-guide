# React 16 - The Complete Guide (SRP Point)

This repository is not a school, work or personal project. It is a learning/playground where I will be trying to teach myself the basics of the popular JavaScript library React, version 16 and beyond. There are two main reasons why I am doing this. In a couple of weeks, I will start a six months internship. Where I will be using multiple JS libraries like Vue JS and React. The thing is, I have never used a JS library before. I did use some smaller codebases and projects from other people but never on this scale.

My second reason for doing this are SRP points. SRP points are "Self-learning points" where we HvA students need to come up with projects related to our education and future carrier. Before we can complete our course and receive our diploma we need to have at least 4 SRP points. Each point is equivalent to 28 hours of self-learning.

There is, of course, multiple ways of learning something new. I could, for example, follow youtube tutorials, read blog posts, read the React documentation, etc. The way I chose to do it, was by following a Udemy course while keeping the React documentation at hand.

The Udemy course I chose is [React 16 - The Complete Guide](https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/overview) by Maximilian Schwarzmüller. While this course covers almost every React topic, there is just so much you can do within the given time limit. For this SRP point, my main foci were the basics and the fundamentals. I can always come back for the more advanced topics on my own free time.

**Learning Goals**

- [x] Learn the fundamentals of React.
- [x] Try to understand why React and other JS libraries are so popular.
- [x] Try to teach myself how to use GIT from the terminal. Right now I use GUI tools.
- [x] Try to understand what the positive and negative points are when talking about JS libraries.

## GIT & GitHub

Like I said before, I want to teach myself how to use GIT from within the terminal. Yes I'm on GitHub and yes I have used GIT before and a lot. However, I have always used tools like GitKraken and the build in GIT tools from my code editor, VsCode.

Most people I know prefer to use the terminal over GUI tools, mainly because of control and clarity. You have to run each command manually where most tools will skip a lot of steps, running them in the background. I have never run into any problem, to be honest, so there was no real reason to start using GIT from within the terminal. I am doing this mainly for fun and curiosity. I am sure there are multiple reasons why using GIT from the terminal is better but I never really bothered with it.

Understanding the commands I need to run in order to commit my changes made me realize what my tools were doing in the background. I will try to demonstrate this step by step, let's say we want to commit all saved changes to GitHub.

**The Terminal Way**

1. Prepare every file with changes in order to commit them: `git add .`
2. Commit your changes locally: `git commit -m "Your commit message here."`
3. Push your changes to the GitHub server: `git push`

Quite easy right? You may have noticed that I use a lot of shortcuts. For example `add .` for adding every file at once and `commit -m ""` for typing the message inside the commit command without having to use Vim or Nano. It is considered best practices to run `git status` before every command but to be honest I never bothered doing so.

Other helpful commands are: `git checkout branch-name` in order to switch to another branch and `git checkout -B new-branch-name` in order to create a new branch and immediately switch to it.

**The GUI Way**

1. Type your message inside the text field.
2. Press the push button.

That is it... As you can see using a GUI is much faster than typing 3 different commands every single time. However, I will be using the terminal from now on, for the cool factor.

## Next Generation JavaScript

Previously I mentioned that the course I choose is super complete and detailed. One of the first topics it covered was next-generation JavaScript techniques that are considered best practices in the React world. Some of them I had used before but most of them were new to me. Here is a list containing a few topics from this chapter:

- Array Functions
- Arrow Functions
- Classes
- Destructuring
- Export & Import
- Spread Operator

Classes, destructuring and the spread operator were all new to me. At first, it was quite hard to understand the difference between the spread operator and destructuring, they both share the same `...` syntax. To be honest, I still don't really know with one of them I am using at certain times, I just know the syntax I need to achieve what I want.

## React vs Vanilla JavaScript

Both React and Vanilla JS have positive and negative points. It is in our hand to determinate which tool is the right one for the given context. From my own experience, which by all means is not a lot, I have come to enjoy writing code in both ways. While React is super powerful and readable I should never use it for smaller projects and websites. React is just too big and time-consuming to set up. Don't get me wrong, writing React components and especially reusing or updating them is super fast and easy, however, setting everything up from scratch can be very time-consuming.

My biggest problem with React is the constant need to add new import statements. This gets messy and hard to understand quite fast, there is just too much of them, everywhere.

By the way, this does not mean that react is a bad option for smaller projects, it justs means that I prefer to use plain Vanilla JS when writing smaller code bases or when working alone.

**Why should I choose Vanilla JS?**

- It is much smaller and does not depend on work from other people.
- It will always be faster if you know what you are doing (The difference will not be that big though).
- If a user chooses to disable JavaScript the website will still render and be somewhat useful. There are, however, ways to render React websites server-side.

**Why should I choose React?**

- More readable code thanks to React's structuring.
- You can use React + Vanilla JS side-by-side without any problem.
- The development environment given to you is very powerful and complete.
- React's virtual DOM only rerenders the changed elements and not the entire page, resulting in much faster paint time.
- Extremely easy to reuse elements and update them when necessaries. For example, adding new features or refactoring the code for speed gains.
- React is very powerful but does not suffer in the performance department like older JS libraries do.
- Much, much, much more...

From my personal viewpoint, it may seem that React beats Vanilla JS by a lot, but both of them have there own place. React and Vanilla JS can both be really powerful in the right hands. For me, there is no clear winner, it all depends on the given context.

## Next Steps & Conclusion
