import { Button } from "@/components/ui/button";
import { db } from "@/lib//db";

/**
 * Renders the home page: a full-screen, centered container with a "Get Started" button.
 *
 * @returns The page's JSX element.
 */
export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Button>Get Started</Button>
    </div>
  );
}
