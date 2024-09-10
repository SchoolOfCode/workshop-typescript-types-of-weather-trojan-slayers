  import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient(" https://dosmthtitslppqluzxzu.supabase.co", "<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRvc210aHRpdHNscHBxbHV6eHp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NjQ5ODgsImV4cCI6MjA0MTU0MDk4OH0.w2zvUM9CU4zrp7p-pwWmMbN-y3IY0ugKCpj2cjav5ii>")

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