const magic8BallAnswers = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes - definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
];

const fortuneCookieSayings = {
    general: [
        "Do not be afraid of competition.",
        "An exciting opportunity lies ahead of you.",
        "You will always be surrounded by true friends.",
        "A journey of a thousand miles begins with a single step.",
        "Respect yourself and others will respect you.",
        "Attitude is a little thing that makes a big difference.",
        "The family that plays together stays together.",
        "Expect the unexpected.",
        "Live this day as if it were your last.",
        "Bloom where you are planted."
    ],
    funny: [
        "A closed mouth gathers no feet.",
        "He who throws dirt is losing ground.",
        "Borrow money from a pessimist. They don't expect it back.",
        "Life is what happens to you while you are busy making other plans.",
        "Help! I'm being held prisoner in a fortune cookie factory."
    ],
    romantic: [
        "Paradise is always where love dwells.",
        "The one you love is closer than you think.",
        "Love is like wildflowers… it is often found in the most unlikely places.",
        "True love is not something that comes every day, follow your heart, it knows the right answer.",
        "In dreams and in love there are no impossibilities."
    ]
};

function generateResponse() {
    const userQuestion = document.getElementById('userQuestion').value;

    if (!userQuestion.trim()) {
        alert('You need to ask a question first!');
        return;
    }

    const combinedSayings = [
        ...fortuneCookieSayings.general,
        ...fortuneCookieSayings.funny,
        ...fortuneCookieSayings.romantic
    ];

    const combinedAnswers = [...magic8BallAnswers, ...combinedSayings];
    const randomAnswer = combinedAnswers[Math.floor(Math.random() * combinedAnswers.length)];

    const responseSource = combinedAnswers.indexOf(randomAnswer) < magic8BallAnswers.length ? 'Magic 8-Ball' : 'Fortune Cookie';

    document.getElementById('response').textContent = `You asked: "${userQuestion}". The ${responseSource} says: "${randomAnswer}"`;
    console.log(`Question: ${userQuestion}`);
    console.log(`Source: ${responseSource}`);
    console.log(`Answer: ${randomAnswer}`);
}
