import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaApple, FaGooglePlay } from "react-icons/fa";
interface App {
  name: string;
  description: string;
  icon: string;
  playStoreLink: string;
  appStoreLink: string;
}

const apps: App[] = [
  {
    name: "IA Dieta",
    description: "Using AI to help you to calculate your daily caloric needs.",
    icon: "https://play-lh.googleusercontent.com/4ZvRHKsamOrYklWrqLMeUZr8gK-1mOW8xNM1vBZAGliX8aqluCUA4iGeTf7EaZp1J2o=w480-h960-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rotech.iadieta",
    appStoreLink: "https://apps.apple.com/",
  },
  {
    name: "Zero a Cinquenta",
    description: "Fun game to play with your friends.",
    icon: "https://play-lh.googleusercontent.com/vtxF5oRMpGoxVW6F9ul_rD3v4LZIjxx6NOFlXSsR2iqmflzB3JWPjmKTumSI99NDSpI=w480-h960-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rotech.dezeroacinquenta",
    appStoreLink: "https://apps.apple.com/",
  },
  {
    name: "Exame Psicotécnico",
    description: "Prepare for your psychometric exam with our comprehensive testing app.",
    icon: "https://play-lh.googleusercontent.com/gOpYUEHE6mZMX0iD6JXEynRsaTNcPJfXjdYMvV87GhJ0AfFy51C1tG4hha2pL9Dx7Q=w480-h960-rw",
    playStoreLink: "https://play.google.com/store/apps/details?id=com.rotech.examepsicotecnico",
    appStoreLink: "https://apps.apple.com/",
  },
];

export default function AppListing() {
  return (
    <section className="py-16 bg-[#030303]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}>
              <Card className="bg-gray-950 border-gray-800">
                <CardHeader className="flex flex-row items-center gap-4 justify-center">
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
                  <CardDescription className=" flex text-gray-300 min-h-10 items-center justify-center">
                    {app.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-4">
                  <Button asChild className="w-full" variant="secondary">
                    <a href={app.playStoreLink} target="_blank" rel="noopener noreferrer">
                      <FaGooglePlay className="mr-2" /> Get on Google Play
                    </a>
                  </Button>
                  <Button asChild className="w-full" variant="default" disabled>
                    <a href={app.appStoreLink} target="_blank" rel="noopener noreferrer">
                      <FaApple className="mr-2" /> Soon on App Store
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
