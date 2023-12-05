import Header from "./Header";
import CardSection from "./CardSection";
import bg from "./assets/images/background.jpg";
import CallToAction from "./CTA";
export default function App() {
  return (
    <div
      className="h-screen flex flex-col justify-between"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <Header className="flex-1" />
      <main className="flex flex-col justify-between">
        <CallToAction />
        <CardSection />
      </main>
    </div>
  );
}
