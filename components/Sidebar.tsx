import React from 'react';

const AdWidget = () => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 p-4 text-center">
        <div className="flex justify-end mb-2">
            <span className="text-xs font-semibold border border-gray-300 text-gray-500 px-2 py-1 rounded-md">Visit</span>
        </div>
        <div className="p-4 rounded-lg" style={{ background: 'radial-gradient(circle, #fde4cf, #f6d1ff)' }}>
            <img src="https://i.imgur.com/1Z2Y1hT.png" alt="Ad Mockup" className="mx-auto w-40" />
        </div>
        <img src="https://i.imgur.com/6X2hJ5G.png" alt="Heo.li logo" className="h-6 mx-auto my-4"/>
        <h3 className="text-xl font-bold text-gray-800">Everything with one platform.</h3>
        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
            SHORTEN LINKS<br />
            BIO PAGES<br />
            QR CODES<br />
            SHARE VCARDS<br />
            TRANSFER FILE
        </p>
    </div>
);

const TrendingWidget = () => {
    const trendingPosts = [
        { title: "Apa Itu EDU Backlink", imageUrl: "https://i.imgur.com/e5n1zCD.png" },
        { title: "Cara Mengatasi SIM Tidak DI-provisloming", imageUrl: "https://i.imgur.com/u3S2pAb.png" },
    ];

    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 p-6 mt-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Trending Now</h3>
            <div className="space-y-4">
                {trendingPosts.map((post, index) => (
                    <a href="#" key={index} className="flex items-center group">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 flex items-center justify-center">
                           <img src={post.imageUrl} alt={post.title} className="h-10 w-10 object-contain"/>
                        </div>
                        <span className="ml-4 font-semibold text-gray-700 group-hover:text-orange-500 transition-colors">{post.title}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

const Sidebar = () => {
  return (
    <aside>
      <AdWidget />
      <TrendingWidget />
    </aside>
  );
};

export default Sidebar;