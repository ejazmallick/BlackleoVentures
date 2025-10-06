import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Loader2, Send, RotateCcw } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import type { PitchPracticeMessage } from "@shared/schema";

export function PitchPracticeAI() {
  const [message, setMessage] = useState("");
  const [conversationHistory, setConversationHistory] = useState<PitchPracticeMessage[]>([]);

  const pitchMutation = useMutation({
    mutationFn: async (userMessage: string) => {
      const response = await apiRequest("POST", "/api/pitch-practice", {
        message: userMessage,
        conversationHistory,
      });
      const data = await response.json() as { success: boolean; response: string };
      return data;
    },
    onSuccess: (data) => {
      if (data.success) {
        setConversationHistory(prev => [
          ...prev,
          { role: 'user', content: message },
          { role: 'assistant', content: data.response }
        ]);
        setMessage("");
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !pitchMutation.isPending) {
      pitchMutation.mutate(message);
    }
  };

  const handleReset = () => {
    setConversationHistory([]);
    setMessage("");
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span className="text-primary">Pitch Practice AI</span>
          {conversationHistory.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={handleReset}
              data-testid="button-reset-pitch"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
          )}
        </CardTitle>
        <CardDescription>
          Practice your pitch with an AI investor. Get realistic feedback and tough questions.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <ScrollArea className="h-[300px] w-full rounded-md border p-4">
          {conversationHistory.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <p className="text-lg font-medium mb-2">Ready to pitch?</p>
              <p className="text-sm">
                Introduce your startup and I'll ask you questions like a real investor would.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {conversationHistory.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  data-testid={`message-${msg.role}-${idx}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                  </div>
                </div>
              ))}
              {pitchMutation.isPending && (
                <div className="flex justify-start" data-testid="message-loading">
                  <div className="bg-muted rounded-lg p-3">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </div>
                </div>
              )}
            </div>
          )}
        </ScrollArea>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell me about your startup..."
            className="resize-none"
            rows={3}
            disabled={pitchMutation.isPending}
            data-testid="input-pitch-message"
          />
          <Button
            type="submit"
            size="icon"
            disabled={!message.trim() || pitchMutation.isPending}
            data-testid="button-send-pitch"
          >
            {pitchMutation.isPending ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
