import React from 'react';

export function StudentWorkshop() {
  const workshopImages = [
    { id: 1, url: "/pics/1t.png" },
    { id: 2, url: "/pics/t2.png"},
    { id: 3, url: "/pics/t3.png" },
    { id: 4, url: "/pics/t4.png" },
    { id: 5, url: "/pics/t5.png" },
   // { id: 6, url: "/pics/t6.png" },
    { id: 7, url: "/pics/t7.png" },
    { id: 8, url: "/pics/t8.png" },
    { id: 9, url: "/pics/t9.png" },
    { id: 10, url: "/pics/t10.png" },
    { id: 11, url: "/pics/t11.png" },
    { id: 12, url: "/pics/t12.png" },
    { id: 13, url: "/pics/t13.png" },
    { id: 14, url: "/pics/t14.png"},
    { id: 15, url: "/pics/t15.png"},
    { id: 16, url: "/pics/t16.png" },
    { id: 17, url: "/pics/t17.png" },
    { id: 18, url: "/pics/t18.png" },
    { id: 19, url: "/pics/t19.png" },
    { id: 20, url: "/pics/t20.png" },
    { id: 21, url: "/pics/t21.png" },
    { id: 22, url: "/pics/t22.png" },
    { id: 23, url: "/pics/t23.png" },
    { id: 24, url: "/pics/t24.png" },
    { id: 25, url: "/pics/t25.png" },
    { id: 26, url: "/pics/t26.png" },
    { id: 27, url: "/pics/t27.png" },
    { id: 28, url: "/pics/t28.png" },
  ];

  return (
    <div className="min-h-screen bg-purple-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">Student Workshop 1</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
           
            <div className="p-6">
              <h2 className="text-2xl font-bold text-purple-900 mb-4"></h2>
              <p className="text-gray-700 leading-relaxed">
  
              </p>
            </div>
          </div>

          {/* One image per row */}
          <div className="space-y-6">
            {workshopImages.map((image) => (
              <div key={image.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={image.url}
                  alt={`Workshop image ${image.id}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-purple-900 mb-4"></h2>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
