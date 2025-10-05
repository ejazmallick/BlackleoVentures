import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="lg"
        className="rounded-full h-14 w-14 shadow-lg animate-pulse-slow"
        asChild
        data-testid="button-floating-whatsapp"
      >
        <a
          href="https://wa.me/917837059633?text=Hi%2C%20I%27m%20interested%20in%20learning%20more%20about%20Black%20Leo%20Ventures."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </Button>
    </div>
  );
}
