import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://nvfnteqeutonfkqcejdt.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52Zm50ZXFldXRvbmZrcWNlamR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjYyMTcsImV4cCI6MjA0MTU0MjIxN30.6o-WW5dDCzfP4iA0sirAeF_MdzsgFUjdpGL6Zu7NUbg");

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("countries").select();
    setCountries(data);
  }

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.name}>{country.name}</li>
      ))}
    </ul>
  );
}

export default App;