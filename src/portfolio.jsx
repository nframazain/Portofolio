const { useState } = React;

function PortfolioControls({ setFilter }) {
  const handleClick = (category) => () => setFilter(category);

  return (
    <div class="controls text-center" className="controls text-center">
      <button
        class="filter active btn btn-common"
        className="filter btn btn-common"
        onClick={handleClick("all")}
      >
        All
      </button>
      <button
        class="filter btn btn-common"
        className="filter btn btn-common"
        onClick={handleClick("design")}
      >
        UI/UX Designers
      </button>
      <button
        class="filter btn btn-common"
        className="filter btn btn-common"
        onClick={handleClick("development")}
      >
        Fullstack Development
      </button>
      <button
        class="filter btn btn-common"
        className="filter btn btn-common"
        onClick={handleClick("print")}
      >
        Graphic Design
      </button>
    </div>
  );
}

function PortfolioCard({ item }) {
  return (
    <div className={`portfolio-item ${item.category}`}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );
}

const portfolioItems = [];

function Portfolio({ filter }) {
  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="portfolio">
      {filteredItems.map((item) => (
        <PortfolioCard key={item.id} item={item} />
      ))}
    </div>
  );
}

function App() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="app">
      <PortfolioControls setFilter={setFilter} />
      <Portfolio filter={filter} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
