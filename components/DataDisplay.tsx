// DataDisplay.tsx
import React, { useEffect, useState } from 'react';
import { fetchData } from '../services/dataService';
import styles from './DataDisplay.module.css';

interface DataItem {
  id: number;
  name: string;
  // Ajoutez d'autres propriétés selon votre schéma de données
}

const DataDisplay: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        setData(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Data from Supabase</h1>
      <ul className={styles.list}>
        {data.map((item) => (
          <li key={item.id} className={styles.listItem}>{item.name},{item.price},{item.stock}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;
