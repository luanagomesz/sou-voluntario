import { useLocation } from "react-router-dom";

export const Events = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};
