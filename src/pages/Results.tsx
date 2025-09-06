import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  CheckCircle, 
  AlertCircle, 
  TrendingUp, 
  BookOpen, 
  Users, 
  BarChart3,
  Download,
  RefreshCw,
  Star
} from "lucide-react";

interface Results {
  overall: number;
  psychometric: number;
  technical: number;
  wiscar: number;
  recommendation: string;
}

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, answers } = location.state as { results: Results; answers: Record<string, string> } || {};

  if (!results) {
    navigate('/');
    return null;
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "success";
    if (score >= 70) return "warning";
    return "destructive";
  };

  const getScoreIcon = (score: number) => {
    if (score >= 80) return <CheckCircle className="w-5 h-5 text-success" />;
    if (score >= 70) return <AlertCircle className="w-5 h-5 text-warning" />;
    return <AlertCircle className="w-5 h-5 text-destructive" />;
  };

  const getJobRoles = (score: number) => {
    if (score >= 80) {
      return [
        { title: "Procurement Analyst", match: "95%", description: "Perfect fit for analytical procurement work" },
        { title: "Category Manager", match: "90%", description: "Strategic sourcing and category management" },
        { title: "Vendor Risk Analyst", match: "85%", description: "Compliance and risk assessment focus" }
      ];
    } else if (score >= 70) {
      return [
        { title: "Procurement Coordinator", match: "85%", description: "Entry-level procurement support role" },
        { title: "Contract Administrator", match: "80%", description: "Contract management and documentation" },
        { title: "Purchasing Assistant", match: "75%", description: "Support purchasing operations" }
      ];
    } else {
      return [
        { title: "Operations Analyst", match: "70%", description: "Broader operational analysis role" },
        { title: "Inventory Coordinator", match: "65%", description: "Focus on inventory management" },
        { title: "Project Support Specialist", match: "60%", description: "Structured project support work" }
      ];
    }
  };

  const getLearningPath = (score: number) => {
    if (score >= 80) {
      return [
        "Advanced Excel & Data Analysis",
        "Strategic Sourcing Fundamentals", 
        "Contract Negotiation Skills",
        "Supply Chain Risk Management"
      ];
    } else if (score >= 70) {
      return [
        "Procurement Basics & Lifecycle",
        "Excel Intermediate Skills",
        "Vendor Evaluation Methods",
        "Basic Contract Management"
      ];
    } else {
      return [
        "Business Analysis Fundamentals",
        "Excel Beginner to Intermediate",
        "Project Management Basics",
        "Communication & Documentation Skills"
      ];
    }
  };

  const jobRoles = getJobRoles(results.overall);
  const learningPath = getLearningPath(results.overall);

  return (
    <div className="min-h-screen bg-gradient-secondary p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Your Assessment Results</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your responses, here's your personalized career readiness analysis for becoming a Procurement Analyst.
          </p>
        </div>

        {/* Overall Score */}
        <Card className="shadow-elegant bg-gradient-card border-border/50">
          <CardHeader className="text-center pb-4">
            <div className="mx-auto w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl font-bold text-primary-foreground">{results.overall}</span>
            </div>
            <CardTitle className="text-2xl">Overall Readiness Score</CardTitle>
            <Badge variant={getScoreColor(results.overall) as any} className="mx-auto">
              {results.recommendation}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center text-muted-foreground">
                {results.overall >= 80 && "Excellent! You show strong potential for a career in procurement analysis."}
                {results.overall >= 70 && results.overall < 80 && "Good foundation! With some skill development, you'd be well-suited for this field."}
                {results.overall >= 60 && results.overall < 70 && "Moderate potential. Consider additional training to strengthen your readiness."}
                {results.overall < 60 && "You might want to explore other career paths that better match your interests and strengths."}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Users className="w-5 h-5 text-primary mr-2" />
              <CardTitle className="text-lg">Psychometric Fit</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{results.psychometric}%</span>
                  {getScoreIcon(results.psychometric)}
                </div>
                <Progress value={results.psychometric} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Personality traits and work preferences alignment
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <BarChart3 className="w-5 h-5 text-primary mr-2" />
              <CardTitle className="text-lg">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{results.technical}%</span>
                  {getScoreIcon(results.technical)}
                </div>
                <Progress value={results.technical} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Analytical abilities and domain knowledge
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <TrendingUp className="w-5 h-5 text-primary mr-2" />
              <CardTitle className="text-lg">Career Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{results.wiscar}%</span>
                  {getScoreIcon(results.wiscar)}
                </div>
                <Progress value={results.wiscar} className="h-2" />
                <p className="text-sm text-muted-foreground">
                  Motivation and learning orientation
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Recommendations */}
        <Card className="shadow-elegant bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              Recommended Career Paths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {jobRoles.map((role, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/30 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{role.title}</h3>
                    <Badge variant="secondary">{role.match}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="shadow-elegant bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Your Learning Path
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {learningPath.map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                    {index + 1}
                  </div>
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="hero" size="lg" className="flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Report
          </Button>
          <Button variant="outline" size="lg" onClick={() => navigate('/assessment')} className="flex items-center gap-2">
            <RefreshCw className="w-4 h-4" />
            Retake Assessment
          </Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/')} className="flex items-center gap-2">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;