import { useEffect, useState } from "react";

export default function Home() {
  const [stats, setStats] = useState([])

  const total_members = async () => {
    const res = await window.electronAPI.statistics()
    // console.log(res);
    setStats(res)
  }

  useEffect(() => {
    total_members()
  }, [])

  return (

    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        {stats.map((item, index) => (
          <div key={index} className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {item.name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {item.count}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}