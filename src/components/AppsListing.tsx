import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface App {
  name: string;
  description: string;
  icon: string;
  playStoreLink: string;
}

const apps: App[] = [
  {
    name: "IA Dieta",
    description: "Intelligent diet planning and nutrition guidance at your fingertips.",
    icon: "https://play-lh.googleusercontent.com/4ZvRHKsamOrYklWrqLMeUZr8gK-1mOW8xNM1vBZAGliX8aqluCUA4iGeTf7EaZp1J2o=w480-h960-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rotech.iadieta",
  },
  {
    name: "Zero a Cinquenta",
    description: "Track your progress and achieve your goals from zero to fifty.",
    icon: "https://play-lh.googleusercontent.com/vtxF5oRMpGoxVW6F9ul_rD3v4LZIjxx6NOFlXSsR2iqmflzB3JWPjmKTumSI99NDSpI=w480-h960-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rotech.dezeroacinquenta",
  },
  {
    name: "Exame Psicotécnico",
    description: "Prepare for your psychometric exam with our comprehensive testing app.",
    icon: "https://play-lh.googleusercontent.com/gOpYUEHE6mZMX0iD6JXEynRsaTNcPJfXjdYMvV87GhJ0AfFy51C1tG4hha2pL9Dx7Q=w480-h960-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rotech.examepsicotecnico",
  },
];

export default function AppListing() {
  return (
    <section className="py-16 bg-[#030303]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Our Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <Card key={app.name} className="bg-gray-800 border-gray-700">
              <CardHeader className="flex flex-row items-center gap-4">
                <img
                  src={app.icon || "/placeholder.svg"}
                  alt={`${app.name} icon`}
                  width={60}
                  height={60}
                  className="rounded-xl"
                />
                <CardTitle className="text-xl text-white">{app.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300">{app.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <a href={app.playStoreLink} target="_blank" rel="noopener noreferrer">
                    Get on Google Play
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
