'use client';

import { useEffect, useState } from 'react';

const BlogPostPage = ({ params }) => {
  const { slug } = params; // Получаем slug из параметров
  const [post, setPost] = useState(null); // Хранилище для данных поста
  const [loading, setLoading] = useState(true); // Статус загрузки

  const query = `
    query BlogPost($slug: String!) {
      en: blogpost(locale: en, filter: { slug: { eq: $slug } }) {
        title
        subtitle
        mainpic {
          url
        }
        p1title
        p1text
        p2title
        p2text
        p1pics {
          url
        }
        restparagraphs {
          title
          text
          photo {
            url
          }
        }
      }
      ru: blogpost(locale: ru, filter: { slug: { eq: $slug } }) {
        title
        subtitle
        mainpic {
          url
        }
        p1title
        p1text
        p2title
        p2text
        p1pics {
          url
        }
        restparagraphs {
          title
          text
          photo {
            url
          }
        }
      }
      uk: blogpost(locale: uk, filter: { slug: { eq: $slug } }) {
        title
        subtitle
        mainpic {
          url
        }
        p1title
        p1text
        p2title
        p2text
        p1pics {
          url
        }
        restparagraphs {
          title
          text
          photo {
            url
          }
        }
      }
    }
  `;

  const token = '46ff3946ab1c4370b85b220d0eb924';

  useEffect(() => {
    if (!slug) return; // Ждем, пока slug станет доступен

    const fetchData = async () => {
      try {
        const response = await fetch('https://graphql.datocms.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            query,
            variables: { slug }, // Передаем slug в переменную запроса
          }),
        });

        const result = await response.json();

        // Логируем данные для отладки
        console.log('Result data:', result.data);

        setPost(result.data); // Сохраняем данные поста для всех языков
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      } finally {
        setLoading(false); // Обновляем статус загрузки
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-3xl text-white h-screen flex justify-center items-center">
        Загрузка...
      </div>
    );
  }

  if (!post || (!post.en && !post.ru && !post.uk)) {
    return (
      <div className="text-3xl text-white h-screen flex justify-center items-center">
        Пост не найден
      </div>
    );
  }

  return (
    <div className="text-white p-8 flex">
      {/* Отображаем данные для каждого языка */}
      {['en', 'ru', 'uk'].map(
        (locale) =>
          post[locale] && ( // Проверяем, есть ли данные для каждого языка
            <div key={locale} className="mb-12">
              <h1 className="text-4xl font-bold mb-4">{post[locale].title}</h1>
              <h2 className="text-2xl text-gray-400 mb-6">
                {post[locale].subtitle}
              </h2>

              {post[locale].mainpic && (
                <img
                  src={post[locale].mainpic.url}
                  alt={post[locale].title}
                  className="mb-6 w-full h-60 object-cover rounded-lg"
                />
              )}

              <section className="mb-8">
                <h3 className="text-2xl font-semibold mb-2">
                  {post[locale].p1title}
                </h3>
                <p className="text-gray-300">{post[locale].p1text}</p>

                {/* Отображаем изображения из p1pics, если они существуют СЛАЙДЕР */}
                {post[locale].p1pics && post[locale].p1pics.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {post[locale].p1pics.map((pic, index) => (
                      <img
                        key={index}
                        src={pic.url}
                        alt={`p1pic-${index}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                )}
              </section>

              <section className="mb-8">
                {/* Вставляем iframe для отображения видео, если p2vid доступен */}
                {post[locale].p2vid && (
                  <iframe
                    width="560"
                    height="315"
                    src={post[locale].p2vid}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="mb-6 w-full h-80 rounded-lg"
                  ></iframe>
                )}
                <h3 className="text-2xl font-semibold mb-2">
                  {post[locale].p2title}
                </h3>
                <p className="text-gray-300">{post[locale].p2text}</p>
              </section>

              {post[locale].restparagraphs &&
                post[locale].restparagraphs.length > 0 && (
                  <div>
                    {post[locale].restparagraphs.map((paragraph, index) => (
                      <div key={index} className="mb-6">
                        <h4 className="text-xl font-semibold mb-2">
                          {paragraph.title}
                        </h4>
                        <p className="text-gray-300 mb-2">{paragraph.text}</p>
                        {paragraph.photo && (
                          <img
                            src={paragraph.photo.url}
                            alt={paragraph.title}
                            className="w-full h-40 object-cover rounded-lg"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          )
      )}
    </div>
  );
};

export default BlogPostPage;
