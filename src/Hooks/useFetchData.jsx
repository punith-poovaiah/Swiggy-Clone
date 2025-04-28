import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function useFetchData() {
  const [swiggyData, setSwiggyData] = useState(null);
  const { id } = useParams();

  const fetchdetails = async () => {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=${id}&catalog_qa=undefined&query=South%20Indian&submitAction=ENTER`
      );

      const detailsdata = await response.json();
      const adata =
        detailsdata?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR
          ?.cards[1]?.card?.card?.itemCards;
      console.log(adata);

      setSwiggyData(adata);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchdetails();
  }, []);
  return swiggyData;
}
