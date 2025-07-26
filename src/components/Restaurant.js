import { useEffect, useState } from "react";
import RestCard from "./RestCard";

export default function Restaurant() {
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function restcall() {
      const proxyServer = "https://cors-anywhere.herokuapp.com/";
      const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";

      try {
        const response = await fetch(proxyServer + swiggyAPI, {
          headers: {
            "Origin": "http://localhost:1234/",
            "X-Requested-With": "XMLHttpRequest"
          }
        });

        const data = await response.json();
        console.log(data)
        setRestData(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      } catch (error) {
        console.error("Failed to fetch restaurants:", error);
      }
    }

    restcall();
  }, []);

  return (
    <div className="flex flex-wrap w-[80%] mx-auto mt-20 gap-5">
      {
        RestData.map((restInfo) =>
          <RestCard key={restInfo?.info?.id} restInfo={restInfo} />
        )
      }
    </div>
  );
}
