import Bikes from "../components/bikes/Bikes";
import Header from "../components/header/Header";
import Roadmap from "../components/roadmap/Roadmap";
export default function Home() {
  return (
    <div className="BACKGROUND">
      <Header />
      <Bikes />
      <Roadmap />
    </div>
  );
}
