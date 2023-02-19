import { useLocation } from "react-router-dom";

export default function AnimePage() {
  const location = useLocation();
  console.log(location.state);
  return <></>;
}
