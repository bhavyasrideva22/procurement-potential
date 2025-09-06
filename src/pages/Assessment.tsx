import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight, Clock, CheckCircle } from "lucide-react";

interface Question {
  id: string;
  type: 'likert' | 'multiple-choice' | 'numerical' | 'ranking';
  section: string;
  question: string;
  options?: string[];
  context?: string;
}

const questions: Question[] = [
  // Psychometric Evaluation
  {
    id: "psych_1",
    type: "likert",
    section: "Psychometric Evaluation",
    question: "I enjoy working with contracts, data, and vendor terms.",
  },
  {
    id: "psych_2", 
    type: "likert",
    section: "Psychometric Evaluation",
    question: "I prefer structured, detail-oriented work environments.",
  },
  {
    id: "psych_3",
    type: "likert",
    section: "Psychometric Evaluation", 
    question: "I see cost as a key metric in decision-making.",
  },
  {
    id: "psych_4",
    type: "likert",
    section: "Psychometric Evaluation",
    question: "I feel energized when negotiating terms with vendors.",
  },
  {
    id: "psych_5",
    type: "likert",
    section: "Psychometric Evaluation",
    question: "I naturally think about risk when making purchasing decisions.",
  },
  
  // Technical & Aptitude
  {
    id: "tech_1",
    type: "multiple-choice",
    section: "Technical & Aptitude",
    question: "A supplier offers a 12% discount for bulk orders. How much do you save on a $12,000 order?",
    options: ["$1,200", "$1,440", "$1,500", "$1,320"]
  },
  {
    id: "tech_2",
    type: "multiple-choice",
    section: "Technical & Aptitude",
    question: "If vendor A has faster delivery but higher cost, which should you choose for urgent orders?",
    options: ["Always vendor A", "Always the cheaper option", "Depends on urgency vs budget", "Split the order"]
  },
  {
    id: "tech_3", 
    type: "multiple-choice",
    section: "Technical & Aptitude",
    question: "What does a 3-bid minimum policy imply?",
    options: ["Must get 3 bids for any purchase", "Need 3 vendors in database", "Compare at least 3 options for major purchases", "All vendors must bid 3 times"]
  },
  {
    id: "tech_4",
    type: "multiple-choice", 
    section: "Technical & Aptitude",
    question: "Which Excel function is most useful for comparing vendor bids?",
    options: ["VLOOKUP", "SUM", "IF", "All of the above"]
  },
  
  // WISCAR Framework
  {
    id: "wiscar_1",
    type: "likert",
    section: "Career Readiness",
    question: "I persist through challenges even when the work becomes difficult.",
  },
  {
    id: "wiscar_2",
    type: "likert", 
    section: "Career Readiness",
    question: "I enjoy learning new procurement tools and systems.",
  },
  {
    id: "wiscar_3",
    type: "likert",
    section: "Career Readiness", 
    question: "I would find analyzing supplier performance data engaging.",
  },
  {
    id: "wiscar_4",
    type: "likert",
    section: "Career Readiness",
    question: "I can see myself working in this field for several years.",
  },
  {
    id: "wiscar_5",
    type: "multiple-choice",
    section: "Career Readiness",
    question: "What appeals to you most about procurement work?",
    options: ["Cost savings opportunities", "Building vendor relationships", "Data analysis aspects", "Process optimization"]
  }
];

const likertOptions = [
  "Strongly Disagree",
  "Disagree", 
  "Neutral",
  "Agree", 
  "Strongly Agree"
];

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    setCurrentSection(questions[currentQuestion]?.section || "");
  }, [currentQuestion]);

  const handleAnswer = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate results and navigate
      const results = calculateResults(answers);
      navigate('/results', { state: { results, answers } });
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResults = (answers: Record<string, string>) => {
    // Simple scoring logic
    const psychometricScore = calculateSectionScore(answers, 'psych');
    const technicalScore = calculateSectionScore(answers, 'tech'); 
    const wiscarScore = calculateSectionScore(answers, 'wiscar');
    
    const overallScore = Math.round((psychometricScore + technicalScore + wiscarScore) / 3);
    
    return {
      overall: overallScore,
      psychometric: psychometricScore,
      technical: technicalScore,
      wiscar: wiscarScore,
      recommendation: getRecommendation(overallScore)
    };
  };

  const calculateSectionScore = (answers: Record<string, string>, prefix: string) => {
    const sectionAnswers = Object.entries(answers).filter(([key]) => key.startsWith(prefix));
    if (sectionAnswers.length === 0) return 0;
    
    let totalScore = 0;
    sectionAnswers.forEach(([_, answer]) => {
      if (answer.includes('Strongly Agree')) totalScore += 5;
      else if (answer.includes('Agree')) totalScore += 4;
      else if (answer.includes('Neutral')) totalScore += 3;
      else if (answer.includes('Disagree')) totalScore += 2;
      else if (answer.includes('Strongly Disagree')) totalScore += 1;
      else totalScore += 3; // Default for multiple choice
    });
    
    return Math.round((totalScore / (sectionAnswers.length * 5)) * 100);
  };

  const getRecommendation = (score: number) => {
    if (score >= 80) return "Excellent fit - Highly recommended";
    if (score >= 70) return "Good fit - Recommended with skill development";
    if (score >= 60) return "Moderate fit - Consider with training";
    return "May want to explore alternative career paths";
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];
  const currentAnswer = answers[question?.id] || "";

  if (!question) return null;

  return (
    <div className="min-h-screen bg-gradient-secondary p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-foreground">Procurement Analyst Assessment</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm">~20 minutes</span>
            </div>
          </div>
          
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">{currentSection}</span>
              <span className="text-muted-foreground">{currentQuestion + 1} of {questions.length}</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-elegant bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg leading-relaxed">{question.question}</CardTitle>
            {question.context && (
              <p className="text-muted-foreground text-sm">{question.context}</p>
            )}
          </CardHeader>
          <CardContent className="space-y-6">
            {question.type === 'likert' && (
              <RadioGroup 
                value={currentAnswer} 
                onValueChange={(value) => handleAnswer(question.id, value)}
                className="space-y-3"
              >
                {likertOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option} id={`${question.id}_${index}`} />
                    <Label htmlFor={`${question.id}_${index}`} className="flex-1 cursor-pointer font-medium">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}

            {question.type === 'multiple-choice' && question.options && (
              <RadioGroup 
                value={currentAnswer} 
                onValueChange={(value) => handleAnswer(question.id, value)}
                className="space-y-3"
              >
                {question.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem value={option} id={`${question.id}_${index}`} />
                    <Label htmlFor={`${question.id}_${index}`} className="flex-1 cursor-pointer font-medium">
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button 
            variant="outline" 
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          
          <Button 
            variant="hero"
            onClick={goToNext}
            disabled={!currentAnswer}
            className="flex items-center gap-2"
          >
            {currentQuestion === questions.length - 1 ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Complete Assessment
              </>
            ) : (
              <>
                Next
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;