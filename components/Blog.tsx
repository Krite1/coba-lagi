import React, { useState, useEffect } from 'react';

const parseCSV = (text) => {
    const lines = text.trim().split('\n');
    const headers = lines[0].split(',');
    return lines.slice(1).map(line => {
        const values = line.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) || [];
        const post = headers.reduce((obj, header, i) => {
            const value = (values[i] || '').replace(/"/g, '');
            if (header === 'featured') {
                obj[header] = value.toLowerCase() === 'true';
            } else {
                obj[header] = value;
            }
            return obj;
        }, {});
        return post;
    });
};

const categoryColors = {
    "Featured": "bg-gray-800 text-white",
    "SEO": "bg-blue-600 text-white",
    "Info Menarik": "bg-cyan-500 text-white",
    "Tips": "bg-emerald-500 text-white",
};

const FeaturedPostCard = ({ post }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 mb-8">
        <div className="md:h-80 bg-teal-400 flex items-center justify-center overflow-hidden">
             <img src="https://i.imgur.com/8L3jJ8p.png" alt="Investment Illustration" className="object-contain h-full w-auto" />
        </div>
        <div className="p-6 md:p-8">
            <span className="text-sm font-semibold text-gray-600 flex items-center">
                <svg className="w-4 h-4 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                Featured
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2 mb-3 leading-tight">{post.title}</h2>
            <p className="text-gray-600 mb-6">{post.content}</p>
            <a href="#" className="font-semibold text-gray-800 hover:text-orange-500 transition-colors">
                Read more →
            </a>
        </div>
    </div>
);

const PostCard = ({ post }) => (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 h-full flex flex-col">
        <div className={`${post.category === 'SEO' ? 'bg-blue-900' : 'bg-blue-500'} h-40 flex items-center justify-center p-4`}>
             <img src={post.category === 'SEO' ? "https://i.imgur.com/So3do2C.png" : "https://i.imgur.com/uFp31de.png"} alt="Post Illustration" className="object-contain h-full w-auto" />
        </div>
        <div className="p-6 flex-grow flex flex-col">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full self-start ${categoryColors[post.category] || 'bg-gray-200 text-gray-800'}`}>{post.category}</span>
            <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 flex-grow">{post.title}</h3>
            <p className="text-gray-600 text-sm">{post.content.substring(0, 100)}...</p>
        </div>
    </div>
);

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/posts.csv')
            .then(response => response.text())
            .then(text => {
                const parsedPosts = parseCSV(text);
                setPosts(parsedPosts);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching posts:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="text-center p-10">Loading posts...</div>;
    }

    const featuredPost = posts.find(p => p.featured);
    const regularPosts = posts.filter(p => !p.featured);

    return (
        <div>
            {featuredPost && <FeaturedPostCard post={featuredPost} />}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {regularPosts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default Blog;