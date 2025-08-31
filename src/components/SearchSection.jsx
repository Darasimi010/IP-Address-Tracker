import arrowIcon from "../assets/icon-arrow.svg";
import bgPattern from "../assets/pattern-bg-desktop.png";

export default function SearchSection({ query, setQuery, fetchIpData }) {
  return (
    <>
      <div
        className="relative z-10 text-white text-center m-0 min-h-80 bg-cover bg-center w-1/1"
        style={{
          backgroundImage: `url(${bgPattern})`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="relative m-0 max-w-2xl mx-auto -mt-30 p-8">
          <h1 className="text-2xl font-bold mb-4">IP Address Tracker</h1>
          <div className="flex justify-center">
            <input
              type="url"
              placeholder="Search for any IP address or domain"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              name="ip-address-input"
              id="ip-address-input"
              className="p-3 w-96 rounded-l-lg border-none bg-white text-gray-600"
            />

            <button
              className="bg-black px-4 rounded-r-lg"
              type="submit"
              onClick={() => fetchIpData(query)}
            >
              <img src={arrowIcon} alt="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
