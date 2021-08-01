import { Route, useLocation } from "wouter";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { Navbar } from "../../components/Navbar/Navbar";
import { Planet } from "../Planet/Planet";
import { PLANET, PLANETS } from "../../types/Planets";

export const App = () => {
  const [location, setLocation] = useLocation();
  const [lastPath, setLastPath] = useLocalStorage("lastPath", "/planet/earth");

  if (
    location !== "/" &&
    PLANETS.includes(location.split("/")[2] as PLANET) &&
    lastPath !== location
  )
    setLastPath(location);
  else setLocation(lastPath);

  return (
    <>
      <Navbar />
      <main className="h-lessNavbar md:p-6">
        <Route path="/planet/:planet" component={Planet} />
      </main>
    </>
  );
};
