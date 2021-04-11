import * as React from "react"
import hiLogo from '../images/hi_logo.png'

// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',

}

const bodyDiv = {
  maxWidth: 720,
}

const regularDiv = {
  marginBottom: '10%',
  marginTop: '10%',

}

const pageTitle = {
  fontSize: 60,
  marginBottom: 0,
}

const hiLogoStyle = {
  width: '130px',
}

const courseGoalsH1 = {
  fontStyle: 'italic'
}

const courseGoalsH2 = {
  marginTop: '60px',

}

const courseGoalsP = {
  lineHeight: '1.5em'
}

const introTextP = {
  fontWeight: 'bold',
}

// data
const pageData =
{
  title: 're-assessment.',
  introText: "I will present to you the course goal that I did not pass, my old stetment, the comment from my assessor and lastly my revised reflection.",
  outroText: "Thanks for letting me reassess these points, hopefully this will give you a better understanding on how I have interacted with the goals and show you the lessons I will take with me after completing this process of reflection."
}

const courseGoals = [
  {
    title: 'C2 - Collaborate effectively as employees and leaders in the management and implementation of projects.',
    preTitle: 'Previous Reflection:',
    preText: ['The regular meetings mentioned above coupled with the quality insurance way of approving code, automatically creates collaboration within the team.', 'I also think that its in the corporations DNA to collaborate, to be able to solve certain issues you have to communicate with other teams or people in other teams - as code could have been created by a person that is now in a new team.'],
    commentTitle: 'Comment from Assessor:',
    commentText: 'There is too little reflection and discussion for me to assess if you hold this competence. The fact that the company is working with a collaborative mindset is one thing, I would like to know more about how you as an individual are participating and acting on this.',
    postTitle: 'Revised Reflection:',
    postText: ["The cross-functional team that I've been working in at Epidemic Sound has been very insightful on how you can collaborate swiftly with minimal resistance.",
      "I always had contact with everyone in the team, which means that at any time that I would need assistance in something that was not a part of my expertis, I would get help by someone that has the expertise needed to solve the problem at hand.",
      "For example, one ticket I had was to create a experiment to the website that had to do with the menu on the site.",
      "The hypothesis was that having the full menu on the site would result in increased activity with the music player and more general browsing from the users, if you look at the start site of Epidemic Sound, you can see that it has a minimised version of the menubar, my guess is that it was made this way to force users to quickly fall into the path of conversion(sign up/ purchase) or login.",
      "The downside of this was that new users rarely interacted with the product that Epidemic Sound is selling, mainly the music catalog - as you had to move to another page, to then access the music in the menubar - thus it might actually detract the users to convert, as they would not be able to test the product they are looking for.",
      "In this case we got the ticket with the hypothesis explained and what needed to be done, it was me and another developer working on the ticket.",
      "We realised fast that before we can move with implementing this, we need to have a mock up from our UX designer that shows how the end result should be, I could quickly contact the UX designer in our team and we got the design in Figma immediately.",
      "During the implementation of the experiment we also needed some clarification from the data analyser in the team, ultimately she will be the one that examines the data that we are loggin and present that to our product manager and discuss if its worth implementing the experiment permanently.",
      "After we knew exactly what data the analyst wanted we could continue to finish the ticket.",
      "I think this ticket was a great example on how we work together in a cross - functional team, the morning meetings also give us opportunity for the whole team to talk about one ticket if needed, so its easy to get help if you would get stuck."],
    postTextExtra: [
      "* While writing this I see that I have missed important questions that could've helped me more in understanding the actual design thinking of the website.*",
      "* For example, I never asked why it was built with the smaller menu, my statement about the downside above is a pure guess - it would've been interesting to know why it was designed this way. *",
      "* And unfortunately I never got the results from the experiment, from what I can see the website still has the old minimised menu, it would've been interesting to know the results of this experiment and why the website was not revised. *",
      "* I think I need to reflect more before and after I work with something to be able to ask these questions, rather I've been living very much in the moment and forgot to ask why I am doing what I am doing. *"],
  },
  {
    title: 'C5 - Independently treat relationships with and expectations of customers and stakeholders in such a way that it leads to further learning and completion of project.',
    preTitle: 'Previous Reflection:',
    preText: ['At the team I was in, our goal was to convert as many new visitors as possible - every experiment we create or fix is to make the journey of a new client as smooth as possible, for them to register as a paying customer at Epidemic.',
      'Our connection with the end clients are manly based of reports that the data scientist delivers to the team, usually its they who have most of the data - but of course the data is also available to the whole team.',
      'They help us improve the website and tests hypothesis on how we can increase the conversion-rate or fix a possible drop of clients.'],
    commentTitle: 'Comment from Assessor:',
    commentText: 'The feedback is similar to C3. How have you actively taken a part in the things you describe in your report? I would like to know how you as an individual think regarding nourishing relationships and working with different stakeholders.',
    postTitle: 'Revised Reflection:',
    postText: ["",
      "In my internship I think the team itself was the stakeholders and the customers where the users using the product we manage. ",
      "At least from my perspective as I never had any contact with the literal stakeholders of Epidemic Sound.",
      "When it comes to nourishing relationships with the team and keep that sense of responsibility towards each other, I think the morning meetings where a big help, to try to small talk in between and joke around can benefit the team in major ways in the future.",
      "I can see that many other teams could fall into a trap where only work is the focus. I think that could be destructive for the communication between everyone, becouse it instills a sense that you are working for yourself and not for the team, that could start to infect the rest of the team and in the end, the willingness to collaboration could be hurt. ",
      "It's also important to participate in the after works and try actively to get to know everyone in the team - I would strongly suggest that the camaraderie in the team will eventually have a reflection in the end product.",
      "Regarding the customer, my own interaction has been very limited.",
      "The only opportunity I have regarding the relationship between myself as a developer and the end customer is through the data analyst and the designer in our team - and sometimes from the monthly meetings where the CEO of the company shares some highlights with different teams, where they present statistics and accomplishments that are connected with the end customer.",
      "My interaction with the designer and data analyst have been very limited couse of the low amout of tickets we eventually did, but I think that in the future its something I will have in mind and I think its important to start to ask questions regarding the data on the website - so I can have a deeper understanding of the product in relation to the customer.",],
    postTextExtra: [
      "* In the next place i will go on to work with, I want to be more aware of the data that the analyst is compiling so I have a stronger connection to the end users and their behaviour, so I can make the end product more applicable to the customer. *",
    ],
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>re-assessment</title>
      <div style={bodyDiv}>
        <div style={regularDiv}>
          <h1 style={pageTitle}>re-assessment.</h1>
          <img style={hiLogoStyle} src={hiLogo}></img>
        </div>
        <hr />
        <div style={regularDiv}>
          <p style={introTextP}>{pageData.introText}</p>
        </div>
        {courseGoals.map(courseGoals => (
          <>
            <hr />
            <div style={regularDiv}>
              <h1 style={courseGoalsH1}>{courseGoals.title}</h1>
              <h2 style={courseGoalsH2}>{courseGoals.preTitle}</h2>
              {courseGoals.preText.map(p => (
                <p style={courseGoalsP}>{p}</p>
              ))}
              <h2 style={courseGoalsH2}>{courseGoals.commentTitle}</h2>
              <p style={courseGoalsP}>{courseGoals.commentText}</p>
              <h2 style={courseGoalsH2}>{courseGoals.postTitle}</h2>
              {courseGoals.postText.map(p => (
                <p style={courseGoalsP}>{p}</p>
              ))}
              {courseGoals.postTextExtra.map(p => (
                <p style={courseGoalsP}><i>{p}</i></p>
              ))}
            </div>
          </>
        ))}
        <hr />
        <div style={regularDiv}>
          <p style={introTextP}>{pageData.outroText}</p>
          <p>/Emilio</p>
        </div>
      </div>
    </main>
  )
}

export default IndexPage
