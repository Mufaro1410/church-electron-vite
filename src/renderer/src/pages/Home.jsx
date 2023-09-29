export default function Home() {
  const statsData = [{name: 'Members Total', total: 1100}, 
    {name: 'MUMC Total', total: 200}, {name: 'MUMC Full', total: 150}, {name: 'MUMC Probation', total: 50},
    {name: 'RRW Total', total: 500}, {name: 'RRW Full', total: 400}, {name: 'RRW Probation', total: 100},
    {name: 'UMYF Total', total: 250}, {name: 'UMYF Full', total: 175}, {name: 'UMYF Probation', total: 75},
    {name: 'JC Total', total: 150}, {name: 'JC Baptised', total: 75}, {name: 'JC Not Baptised', total: 75}
  ]

  return (
    <div className="container">
      <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-5">
        {/* {statsData.map( stat => { */}
          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>

          <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
            <div className="text-sm font-medium text-gray-500 truncate">
              {statsData[0].name}
            </div>
            <div className="mt-1 text-3xl font-semibold text-gray-900">
              {statsData[0].total}
            </div>
          </div>
        {/* })} */}
      </div>
    </div>
  );
}