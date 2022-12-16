class Program {
    constructor(title, text, images) {
        this.title = title,
        this.text = text,
        this.images = images
    }
}

const fundamental = new Program(
     "Fundamental",
     "Our Fundamentals program is designed for any adult male or female regardles of size or age (16 or older). No experience is required, anyone can join! The specific curriculum is designed to effectively introduce all the basic positions, techniques, submissions, and escapes. This class is perfect for someone new to Jiu-Jitsu, focusing on basic techniques and controlled positional rounds.",
     ["/images/fundamentals1.jpg", "/images/fundamentals2.jpg"]
     );

const allLevel = new Program(
    "All Level",
    "This All Level class is our main group class and is open to white belts and above. It is designed for students who have more experience and understanding of the fundamentals of Jiu Jitsu. The program includes repetitive drilling with details. The use of a Gi and proper No Gi attire is mandatory in this class.",
    ["/images/allLevels1.jpg", "/images/allLevels2.jpg"]
)

const competitionTraining = new Program (
    "Competition Training",
    "Our Advanced program is for those with experience looking to expand their Jiu Jitsu knowledge past the Fundamentals. In this class, you will learn more intricate techniques and how to chain sequences, along with competition-style training. This class is one hour long, including specific positional sparring and sparring. Gi and proper NO Gi attire is mandatory in this class.", 
    ["/images/competition1.jpg", "/images/competition2.jpg"]
)

export const programs = [fundamental, allLevel, competitionTraining]

console.log(programs)