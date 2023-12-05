import Header from "./Header";
import CardSection from "./CardSection";
import bg from "./assets/images/background.jpg";

export default function App() {
  return (
    <div
      className="h-screen flex flex-col"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
      }}
    >
      <Header className="flex-1" />
      <main className="h-full">
        <p>hsdf</p>
        <CardSection />
      </main>
    </div>
  );
}
