import { useState, useEffect } from "react";

function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch("/api/customer");
        const data = await response.json();
        if (data._embedded && Array.isArray(data._embedded.customers)) {
          setCustomers(data._embedded.customers);
        } else {
          console.error("La réponse de l'API n'est pas dans le format attendu:", data);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des clients:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h1>Customer List</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer._links.self.href}>
            {customer.fullname} - FCFA{customer.balance} - {customer.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CustomerPage;
