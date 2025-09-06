import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  Award,
  BookOpen,
  Target
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-secondary">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-hero">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center space-y-8">
            <Badge className="bg-primary-lighter text-primary border-primary-light">
              AI-Driven Career Assessment
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight">
              Should I Become a<br />
              <span className="text-accent">Procurement Analyst?</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Discover if a career in procurement analysis is right for you with our comprehensive 
              AI-powered assessment. Get personalized insights based on your personality, skills, and career goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => navigate('/assessment')}
                className="text-lg px-8 py-6 h-auto"
              >
                Start Assessment
              </Button>
              <div className="flex items-center gap-2 text-primary-foreground/80">
                <Clock className="w-4 h-4" />
                <span>20-30 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Discover */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold text-foreground">What You'll Discover</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive assessment evaluates multiple dimensions of career readiness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-card bg-gradient-card border-border/50 hover:shadow-elegant transition-all">
            <CardHeader>
              <Users className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Psychometric Fit</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Assess your personality traits, work preferences, and natural inclinations for procurement work.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Personality alignment</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Work style preferences</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Motivation assessment</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50 hover:shadow-elegant transition-all">
            <CardHeader>
              <BarChart3 className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Technical Readiness</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Evaluate your analytical abilities, numerical skills, and procurement domain knowledge.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Numerical reasoning</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Logical thinking</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Domain awareness</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-card border-border/50 hover:shadow-elegant transition-all">
            <CardHeader>
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <CardTitle>Career Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Get personalized recommendations for career paths and skill development opportunities.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Job role matches</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Learning pathway</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>Skill gap analysis</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Assessment Features */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-foreground">Comprehensive Assessment Framework</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on validated psychometric principles and industry expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Target className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">WISCAR Framework</h3>
              <p className="text-sm text-muted-foreground">
                Will, Interest, Skill, Cognitive ability, Ability to learn, Real-world alignment
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Validated Models</h3>
              <p className="text-sm text-muted-foreground">
                Based on Big Five Personality, Holland RIASEC, and Grit Scale assessments
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Learning Paths</h3>
              <p className="text-sm text-muted-foreground">
                Personalized skill development recommendations and career progression guidance
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <BarChart3 className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-semibold">Detailed Analytics</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive scoring with visual insights and actionable recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <Card className="shadow-elegant bg-gradient-card border-border/50">
          <CardContent className="py-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Discover Your Career Potential?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take the first step towards understanding if procurement analysis is the right career path for you. 
              Get instant, personalized results with actionable insights.
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              onClick={() => navigate('/assessment')}
              className="text-lg px-8 py-6 h-auto"
            >
              Begin Your Assessment
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No registration required • Instant results • Completely confidential
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
