'use client';

import React, { useEffect, useState } from 'react';

const BlogPage = () => {
  const [posts, setPosts] = useState(null); // Хранилище для данных блогов
  const [loading, setLoading] = useState(true); // Статус загрузки

  const query = `query MyQuery {
    en: allBlogposts(locale: en) {
      title
      subtitle
      slug
      restparagraphs {
        text
        title
        photo {
          url
        }
      }
      p2vid
      p2title
      p2text
      p1title
      p1text
      p1pics {
        url
      }
      mainpic {
        url
      }
    }
    ru: allBlogposts(locale: ru) {
      title
      subtitle
      slug
      restparagraphs {
        text
        title
        photo {
          url
        }
      }
      p2vid
      p2title
      p2text
      p1title
      p1text
      p1pics {
        url
      }
      mainpic {
        url
      }
    }
    uk: allBlogposts(locale: uk) {
      title
      subtitle
      slug
      restparagraphs {
        text
        title
        photo {
          url
        }
      }
      p2vid
      p2title
      p2text
      p1title
      p1text
      p1pics {
        url
      }
      mainpic {
        url
      }
    }
  }`;

  const token = '46ff3946ab1c4370b85b220d0eb924';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ query }),
        });

        const result = await response.json();
        setPosts(result.data); // Сохраняем полученные данные
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Обновляем статус загрузки
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="text-3xl text-white h-screen flex justify-center items-center">
        Загрузка...
      </div>
    );
  }

  if (!posts) {
    return (
      <div className="text-3xl text-white h-screen flex justify-center items-center">
        Нет данных для отображения
      </div>
    );
  }

  return (
    <div className="text-white p-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {Object.entries(posts).map(([locale, blogPosts]) => (
        <div key={locale}>
          <h2 className="text-2xl mb-4">{locale.toUpperCase()}</h2>
          {blogPosts.map((post) => (
            <div
              key={post.slug}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-4">{post.subtitle}</p>
              {post.mainpic && (
                <img
                  src={post.mainpic.url}
                  alt={post.title}
                  className="mb-4 w-full h-40 object-cover rounded-lg"
                />
              )}
              <p className="text-gray-300 mb-4">{post.p1text}</p>
              <a
                href={`/blog/${post.slug}`}
                className="text-teal-400 hover:underline"
              >
                Читать дальше
              </a>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
