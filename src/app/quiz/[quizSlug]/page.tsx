
"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { QUIZZES_DATA, type QuizData, type QuizQuestion, type QuizQuestionOption } from "@/lib/quiz-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle, XCircle, ChevronLeft, Info, RotateCcw, ChevronRight } from "lucide-react";

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const quizSlug = params.quizSlug as string;

  const [quiz, setQuiz] = useState<QuizData | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    const foundQuiz = QUIZZES_DATA.find((q) => q.slug === quizSlug);
    if (foundQuiz) {
      setQuiz(foundQuiz);
      // Reset state for a new quiz
      setCurrentQuestionIndex(0);
      setSelectedAnswers({});
      setScore(0);
      setQuizCompleted(false);
      setShowExplanation(false);
    } else {
      // Handle quiz not found, e.g., redirect or show error
      router.push("/treinamentos");
    }
  }, [quizSlug, router]);

  if (!quiz) {
    return <div className="flex justify-center items-center h-screen"><p>Carregando quiz...</p></div>;
  }

  const currentQuestion: QuizQuestion | undefined = quiz.questions[currentQuestionIndex];

  const handleOptionChange = (questionId: string, optionId: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionId }));
    setShowExplanation(false); // Hide explanation when a new option is selected
  };

  const handleSubmitAnswer = () => {
    if (!currentQuestion) return;
    const selectedOptionId = selectedAnswers[currentQuestion.id];
    
    if (selectedOptionId === currentQuestion.correctOptionId) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true); // Show explanation after submitting
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };
  
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(0);
    setQuizCompleted(false);
    setShowExplanation(false);
  };

  const progressPercentage = ((currentQuestionIndex + (quizCompleted || showExplanation ? 1: 0)) / quiz.questions.length) * 100;

  if (quizCompleted && currentQuestion) {
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary">Quiz Finalizado!</CardTitle>
          <CardDescription className="text-center text-lg">
            Você completou o quiz: {quiz.title}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-2xl font-semibold">
            Sua pontuação: {score} de {quiz.questions.length}
          </p>
          <div className="w-full max-w-xs mx-auto">
            <Progress value={(score / quiz.questions.length) * 100} className="h-4" />
          </div>
          {((score / quiz.questions.length) * 100) >= 70 ? (
            <Alert variant="default" className="bg-green-50 border-green-200">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <AlertTitle className="text-green-700 font-semibold">Parabéns!</AlertTitle>
              <AlertDescription className="text-green-600">
                Você atingiu uma boa pontuação. Continue assim!
              </AlertDescription>
            </Alert>
          ) : (
            <Alert variant="destructive">
              <XCircle className="h-5 w-5" />
              <AlertTitle>Continue Estudando!</AlertTitle>
              <AlertDescription>
                Sua pontuação pode melhorar. Revise o material e tente novamente.
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <Button onClick={handleRestartQuiz} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            Tentar Novamente
          </Button>
          <Button onClick={() => router.push("/treinamentos")}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Voltar para Treinamentos
          </Button>
        </CardFooter>
      </Card>
    );
  }

  if (!currentQuestion) {
    return <div className="flex justify-center items-center h-screen"><p>Fim do Quiz ou Erro ao carregar pergunta.</p></div>;
  }
  
  const selectedOptionId = selectedAnswers[currentQuestion.id];
  const isCorrect = selectedOptionId === currentQuestion.correctOptionId;

  return (
    <div className="space-y-6">
      <Button variant="outline" onClick={() => router.push("/treinamentos")} className="mb-4">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Voltar para Treinamentos
      </Button>
      <Card className="w-full max-w-2xl mx-auto shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">{quiz.title}</CardTitle>
          <CardDescription>
            Pergunta {currentQuestionIndex + 1} de {quiz.questions.length}
          </CardDescription>
          <Progress value={progressPercentage} className="mt-2 h-2" />
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-lg font-semibold leading-relaxed">{currentQuestion.text}</p>
          <RadioGroup
            value={selectedAnswers[currentQuestion.id]}
            onValueChange={(value) => handleOptionChange(currentQuestion.id, value)}
            className="space-y-3"
            disabled={showExplanation}
          >
            {currentQuestion.options.map((option) => (
              <div key={option.id} className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors has-[[data-state=checked]]:bg-primary/10 has-[[data-state=checked]]:border-primary">
                <RadioGroupItem value={option.id} id={`${currentQuestion.id}-${option.id}`} />
                <Label htmlFor={`${currentQuestion.id}-${option.id}`} className="flex-1 cursor-pointer text-base">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>

          {showExplanation && currentQuestion.explanation && (
            <Alert variant={isCorrect ? "default" : "destructive"} className={isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"}>
              {isCorrect ? <CheckCircle className="h-5 w-5 text-green-600" /> : <XCircle className="h-5 w-5 text-red-600" />}
              <AlertTitle className={isCorrect? "text-green-700" : "text-red-700"}>
                {isCorrect ? "Resposta Correta!" : "Resposta Incorreta."}
              </AlertTitle>
              <AlertDescription className={isCorrect? "text-green-600" : "text-red-600"}>
                {currentQuestion.explanation}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex justify-end pt-6">
          {!showExplanation ? (
            <Button onClick={handleSubmitAnswer} disabled={!selectedAnswers[currentQuestion.id]}>
              Verificar Resposta
            </Button>
          ) : (
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex < quiz.questions.length - 1 ? "Próxima Pergunta" : "Finalizar Quiz"}
               <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

    
