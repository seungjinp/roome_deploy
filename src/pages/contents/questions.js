const questions = [
    {
        'question': "You have a 9AM class tomorrow. <br/> Keep on Partying or nah?",
        'answers': [
            {
                text: 'I have my rules ❌ <br/> Back to my room ‼️',
                score: 3
            },
            {
                text: 'Now or Never! <br/> Party til the sun shines🔥',
                score: 7
            }
        ],
        'weight': 0.7
    },
    {
        'question': 'Your favorite study space is..',
        'answers': [
            {
                text: 'My Room 🤓',
                score: 1
            },
            {
                text: 'Study lounge at my dorm 👍',
                score: 2
            },
            {
                text: 'Cafe 🥤',
                score: 4
            },
            {
                text: 'Lock myself in the library🔒',
                score: 3
            }
        ],
        'weight': 0.3
    },
    {
        'question': 'First time meeting your rommate!',
        'answers': [
            {
                text: 'Can I follow you on Insta? <br/> We can be BFFs 😆',
                score: 6
            },
            {
                text: 'H..Hello…🙈 <br/> Uhh..do you like cheese 👀',
                score: 4
            }
        ],
        'weight': 0.5
    },
    {
        'question': 'Dining halls are closed,<br/>but you are starving🥺<br/> <br/>Your rommate has some <br/> cup noodles.. 🍜',
        'answers': [
            {
                text: 'Call your Roommate📞 <br/> Ask her if you can take one.',
                score: 8
            },
            {
                text: 'Run to the nearest 7-Eleven <br/> to grab something to eat.🐾',
                score: 2
            },
            {
                text: 'If she finds out, she finds out. <br/> IDC. Eat and Sleep 🥱',
                score: 0
            }
        ],
        'weight': 0.3
    },
    {
        'question': 'Dear Your Roomie, <br/> <br/> So you were was supposed to <br/>take the trash out today...',
        'answers': [
            {
                text: 'We made rules for a reason 😡 <br/> Call her NOW.',
                score: 6

            },
            {
                text: 'Should I actually call her? Ugh..<br/> Ends up doing her job.😑',
                score: 4
            }
        ],
        'weight': 0.2
    },
    {
        'question': 'What does your room look like?',
        'answers': [
            {
                text: 'Pile of clothes on my bed, <br/> Pile of papers on my desk!<br/>An orderly disorder😝',
                score: 3

            },
            {
                text: 'My room tends to be <br/> clean and organized✨',
                score: 7
            }
        ],
        'weight': 0.6
    },
    {
        'question': 'After washing your hair...',
        'answers': [
            {
                text: 'ShOwEr F22lS G00dd 🧖‍♀️ <br/> Lie on bed, open Youtube.',
                score: 2
            },
            {
                text: 'Gotta clean my hair <br/> out of the sink first🧼',
                score: 8
            }
        ],
        'weight': 0.2
    },
    {
        'question': 'How often do you <br/> vacuum your room?',
        'answers': [
            {
                text: 'Once a day 🧹',
                score: 9
            },
            {
                text: "Only if it's necessary 🤸",
                score: 1
            }
        ],
        'weight': 0.2
    },
    {
        'question': 'Setting an alarm for <br/> your morning classes?',
        'answers': [
            {
                text: "I just don't trust myself. <br/> 7:50, 7:55, 7:58, 8:00, 8:02..∞",
                score: 7
            },
            {
                text: 'One 8:00 alarm will do 🕰',
                score: 3
            }
        ],
        'weight': 0.6
    },
    {
        'question': 'You finished all your tasks<br/> and the clock just hit 10 PM.<br/><br/> What will you do for <br/>the rest of the night?',
        'answers': [
            {
                text: 'Already 10? <br/>I better get ready to sleep😴',
                score: 1
            },
            {
                text: 'Still got some time. <br/>Let my day begin 🥴',
                score: 9
            }
        ],
        'weight': 0.4
    }
    ,
    {
        'question': '',
        'answers': [
            {
                text: '',
                score: 0
            },
            {
                text: '',
                score: 0
            }
        ],
        'weight': 0
    }
]

export default questions;