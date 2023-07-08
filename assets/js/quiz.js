const quiz = document.getElementById("quiz");





let questions = [
    {
        question: "What date was NASA established?",
        Answer1: 'May 14, 1945',
        Answer2: 'July 20, 1969',
        Answer3: 'July 29, 1958',
        Answer4: 'August 04, 1985',
        answer: 3,
        fact: 'Fact: The National Aeronautics and Space Administration (NASA) was established on July 29, 1958 by President Dwight D. Eisenhower.'
    },
    {
        question: "What NASA mission was the first to land on the moon?",
        Answer1: 'Apollo 11',
        Answer2: 'Mercury 7',
        Answer3: 'Artemis',
        Answer4: 'Apollo 13',
        answer: 1,
        fact: 'Fact: The Apollo 11 NASA mission successfully landed on the moon on July 20, 1969. Astronauts Neil Armstrong and Buzz Aldrin were the first to step on the moon.'
    },
    {
        question: 'What U.S. President said these words: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard..."?',
        Answer1: 'Barack Obama',
        Answer2: 'John F. Kennedy',
        Answer3: 'Richard Nixon',
        Answer4: 'Abraham Lincoln',
        answer: 2,
        fact: 'Fact: President John F. Kennedy gave this speech on September 12, 1962. Although JFK did not live to see the moon landing, NASA was able successfuly land man on the moon by the end of the decade.'
    },
    {
        question: "Which famous 1960s show\'s spaceship became the namesake of a shuttle in the Space Shuttle Program?",
        Answer1: 'Doctor Who',
        Answer2: 'I Dream of Jeannie',
        Answer3: 'Star Trek',
        Answer4: 'Bewitched',
        answer: 3,
        fact: 'Fact: In 1976, fans of Star Trek wrote to NASA and President Gerald R. Ford to name the first shuttle in the Space Shuttle Program, "Enterprise". Both NASA Administrator and the president agreed.'
    },
    {
        question: "In what year was the Hubble Space Telescope launched?",
        Answer1: '1955',
        Answer2: '1968',
        Answer3: '1988',
        Answer4: '1990',
        answer: 4,
        fact: 'Fact: The Hubble Space Telescope was launched in 1990, and is still in operation. "Hubble has made more than 1.5 million observations over the course of its lifetime (nasa.gov)."'
    },
    {
        question: 'What Apollo mission did the famous phrase, "Okay, Houston, we\'ve had a problem here." come from?', 
        Answer1: 'Apollo 11',
        Answer2: 'Apollo 13',
        Answer3: 'Apollo 1',
        Answer4: 'Apollo 17',
        answer: 2,
        fact: 'Fact: The three astronauts on Apollo 13 would never fly in space again. In 1995, the Apollo 13 film made the phrase famous, but they did shorten it to, "Houston, we have a problem."'
    },
    {
        question: "In the 1970s, Voyager 1 and 2 was launched with a Golden Record. What is one song that is on the record?",
        Answer1: 'Michael Jackson: Beat It',
        Answer2: 'Chuck Berry: Johnny B. Goode',
        Answer3: 'Cyndi Lauper: Time After Time',
        Answer4: 'Spice Girls: Wannabe',
        answer: 2,
        fact: 'Fact: The Golden Record on Voyager 1 and 2, is a record that has images, sounds, music, and greetings from around the world. Voyager 1 nd 2 are still in operation and where the first to pass Pluto and is still venturing across space.'
    },
    {
        question: "Cassini was a spacecraft that studied which planet?",
        Answer1: 'Mars',
        Answer2: 'Neptune',
        Answer3: 'Jupiter',
        Answer4: 'Saturn',
        answer: 4,
        fact: 'Fact: "Cassini carried a passenger...the European Huygens probe-the first human-made object to land on a world in the distant outer solar system (nasa.gov)."'
    },
    {
        question: "Who was the first American to orbit the Earth?",
        Answer1: 'John H. Glenn',
        Answer2: 'Neil Armstrong',
        Answer3: 'Scott Kelly',
        Answer4: 'Alan Shepherd',
        answer: 1,
        fact: 'Fact: John H. Glenn returned to space in 1998 making him the oldest person to fly in space at that time.'
    },
    {
        question: "NASA would use human computers to perform important calculations that was important to NASA flight missions during the 1960s and 70s. Who is a well-known human computer?.",
        Answer1: 'Mae Jemison',
        Answer2: 'Nichelle Nichols',
        Answer3: 'Katherine Johnson',
        Answer4: 'Taraji P. Henson',
        answer: 3,
        fact: 'Fact: John H. Glenn asked for Katherine Johnson specifically to perform the calculations for his lauch on Friendship, which would allow him to become the first Americna to orbit the Earth.'
    },

]