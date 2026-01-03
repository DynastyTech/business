import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User, Tag, Share2, Linkedin, Twitter, Facebook } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = getPostBySlug(slug);
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    // Update document title for SEO
    if (post) {
      document.title = `${post.title} | Dynasty Tech Blog`;
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = `https://dynastytech.co.za/blog/${post.slug}`;
  const shareText = `Check out this article: ${post.title}`;

  const handleShare = (platform) => {
    const urls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      {/* Hero Section */}
      <article>
        <header className="bg-gradient-to-br from-primary-600 to-primary-700 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary-200 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft size={18} />
                Back to Blog
              </Link>
              
              <span className="inline-block px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                {post.category}
              </span>
              
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-primary-100">
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {new Date(post.date).toLocaleDateString('en-ZA', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div 
                className="blog-content max-w-none"
                style={{
                  lineHeight: '1.8',
                  fontSize: '1.1rem',
                }}
              >
                <style>{`
                  .blog-content h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    color: inherit;
                    line-height: 1.3;
                  }
                  .blog-content h3 {
                    font-size: 1.4rem;
                    font-weight: 600;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    color: inherit;
                    line-height: 1.4;
                  }
                  .blog-content h4 {
                    font-size: 1.2rem;
                    font-weight: 600;
                    margin-top: 1.5rem;
                    margin-bottom: 0.5rem;
                    color: inherit;
                  }
                  .blog-content p {
                    margin-bottom: 1.25rem;
                    line-height: 1.8;
                  }
                  .blog-content ul, .blog-content ol {
                    margin: 1.25rem 0;
                    padding-left: 1.5rem;
                  }
                  .blog-content li {
                    margin-bottom: 0.5rem;
                    line-height: 1.7;
                  }
                  .blog-content strong {
                    font-weight: 600;
                  }
                  .dark .blog-content h2,
                  .dark .blog-content h3,
                  .dark .blog-content h4 {
                    color: #fff;
                  }
                  .dark .blog-content p,
                  .dark .blog-content li {
                    color: #d1d5db;
                  }
                  .blog-content h2,
                  .blog-content h3,
                  .blog-content h4 {
                    color: #111827;
                  }
                  .blog-content p,
                  .blog-content li {
                    color: #374151;
                  }
                `}</style>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={18} className="text-gray-500" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium">
                    <Share2 size={18} />
                    Share this article:
                  </span>
                  <button
                    onClick={() => handleShare('twitter')}
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={18} className="text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleShare('linkedin')}
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={18} className="text-gray-600 dark:text-gray-400" />
                  </button>
                  <button
                    onClick={() => handleShare('facebook')}
                    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-primary-100 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={18} className="text-gray-600 dark:text-gray-400" />
                  </button>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-3">
                  Need a Website for Your Business?
                </h3>
                <p className="text-primary-100 mb-6">
                  Get a professional website in just 7 days. Free consulting included!
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Free Quote
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Recent Posts
                </h3>
                <div className="space-y-4">
                  {recentPosts.map((recentPost) => (
                    <Link
                      key={recentPost.id}
                      to={`/blog/${recentPost.slug}`}
                      className="block p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-shadow"
                    >
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm mb-2 line-clamp-2">
                        {recentPost.title}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {recentPost.readTime}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Newsletter CTA */}
                <div className="mt-8 p-6 bg-gray-100 dark:bg-gray-800 rounded-xl">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    Free Consultation
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Book a free call to discuss your project requirements.
                  </p>
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-2 bg-primary-500 text-white rounded-lg text-sm font-medium hover:bg-primary-600 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.aside>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;

