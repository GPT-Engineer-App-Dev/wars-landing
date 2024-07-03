const HistoryPage = () => {
  return (
    <div className="py-20">
      <h1 className="text-4xl font-bold mb-4">History of Wars</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="card p-4 bg-white shadow-md">
          <h3 className="text-xl font-bold mb-2">World War I</h3>
          <p className="text-md">A global war originating in Europe that lasted from 28 July 1914 to 11 November 1918.</p>
        </div>
        <div className="card p-4 bg-white shadow-md">
          <h3 className="text-xl font-bold mb-2">World War II</h3>
          <p className="text-md">A global war that lasted from 1939 to 1945, involving most of the world's nations.</p>
        </div>
        <div className="card p-4 bg-white shadow-md">
          <h3 className="text-xl font-bold mb-2">Vietnam War</h3>
          <p className="text-md">A conflict in Vietnam, Laos, and Cambodia from 1 November 1955 to the fall of Saigon on 30 April 1975.</p>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;