export const assessmentData = {
  sections: [
    {
      title: "Anger Triggers & Frequency",
      description: "Understanding what triggers your anger and how often you experience it",
      questions: [
        {
          type: "radio",
          text: "How often do you feel angry or irritated?",
          options: [
            { label: "Rarely", value: 1 },
            { label: "Sometimes", value: 2 },
            { label: "Often", value: 3 },
            { label: "Very Often", value: 4 },
            { label: "Almost Always", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "When you get angry, how intense is your anger typically?",
          options: [
            { label: "Mild irritation", value: 1 },
            { label: "Moderate anger", value: 2 },
            { label: "Strong anger", value: 3 },
            { label: "Intense rage", value: 4 },
            { label: "Explosive fury", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "How quickly do you become angry when something bothers you?",
          options: [
            { label: "Takes a lot to anger me", value: 1 },
            { label: "Takes some time", value: 2 },
            { label: "Moderately quick", value: 3 },
            { label: "Very quickly", value: 4 },
            { label: "Instantly", value: 5 }
          ]
        },
        {
          type: "text",
          text: "What are your most common anger triggers? (Describe situations, people, or events that typically make you angry)",
          placeholder: "Example: Traffic jams, being interrupted, unfair treatment..."
        }
      ]
    },
    {
      title: "Physical & Emotional Responses",
      description: "How anger affects you physically and emotionally",
      questions: [
        {
          type: "radio",
          text: "When angry, do you experience physical symptoms? (tension, headaches, rapid heartbeat, etc.)",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "How long does your anger typically last?",
          options: [
            { label: "A few minutes", value: 1 },
            { label: "About an hour", value: 2 },
            { label: "Several hours", value: 3 },
            { label: "Most of the day", value: 4 },
            { label: "Days or longer", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "Do you have difficulty controlling your anger once it starts?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        },
        {
          type: "text",
          text: "Describe the physical sensations you experience when angry (e.g., muscle tension, sweating, shaking)",
          placeholder: "Example: My jaw clenches, I feel hot, my hands shake..."
        }
      ]
    },
    {
      title: "Behavioral Responses",
      description: "How you typically behave when experiencing anger",
      questions: [
        {
          type: "radio",
          text: "When angry, do you raise your voice or yell?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "Have you ever thrown objects or hit things when angry?",
          options: [
            { label: "Never", value: 1 },
            { label: "Once or twice", value: 2 },
            { label: "Occasionally", value: 3 },
            { label: "Frequently", value: 4 },
            { label: "Regularly", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "Do you say things you later regret when you're angry?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "When angry, do you withdraw or avoid others?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        }
      ]
    },
    {
      title: "Impact on Relationships",
      description: "How anger affects your relationships with others",
      questions: [
        {
          type: "radio",
          text: "Has your anger caused problems in your relationships?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Frequently", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "Do people seem afraid or uncomfortable around you when you're angry?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "Have you lost friendships or had relationship conflicts due to your anger?",
          options: [
            { label: "Never", value: 1 },
            { label: "Once", value: 2 },
            { label: "A few times", value: 3 },
            { label: "Several times", value: 4 },
            { label: "Many times", value: 5 }
          ]
        },
        {
          type: "text",
          text: "Describe how your anger has affected your most important relationships",
          placeholder: "Example: My partner says they walk on eggshells around me..."
        }
      ]
    },
    {
      title: "Coping Strategies & Self-Awareness",
      description: "Your current methods for managing anger and self-awareness",
      questions: [
        {
          type: "radio",
          text: "Do you recognize the warning signs before you become very angry?",
          options: [
            { label: "Always", value: 1 },
            { label: "Usually", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Rarely", value: 4 },
            { label: "Never", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "How effective are your current anger management strategies?",
          options: [
            { label: "Very effective", value: 1 },
            { label: "Somewhat effective", value: 2 },
            { label: "Moderately effective", value: 3 },
            { label: "Not very effective", value: 4 },
            { label: "Not effective at all", value: 5 }
          ]
        },
        {
          type: "radio",
          text: "Do you feel guilty or ashamed after angry outbursts?",
          options: [
            { label: "Never", value: 1 },
            { label: "Rarely", value: 2 },
            { label: "Sometimes", value: 3 },
            { label: "Often", value: 4 },
            { label: "Always", value: 5 }
          ]
        },
        {
          type: "text",
          text: "What strategies do you currently use to manage your anger? (e.g., deep breathing, counting to 10, walking away)",
          placeholder: "Example: I try to count to 10, sometimes I go for a walk..."
        },
        {
          type: "text",
          text: "What would you like to change about how you handle anger?",
          placeholder: "Example: I want to stay calmer during conflicts, not say hurtful things..."
        }
      ]
    }
  ]
}