export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e7cc5543ab32701797de7ae',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-iuynpvik',
                  apiId: 'eff46e73-635f-4c69-9ffd-376e06179fcd'
                },
                {
                  buildHookId: '5e7cc554d87e7101b118ebf8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-m4ssxxq5',
                  apiId: 'eb2f52b8-dfa2-412c-90c0-9d73cc9c1160'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AndrewCull/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-m4ssxxq5.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
