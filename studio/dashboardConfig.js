export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5d9b95ee3fe84e65529952d3',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-698yn77m',
                  apiId: '46d1ffe0-6bb5-4c70-8010-6f3d1f865350'
                },
                {
                  buildHookId: '5d9b95ee05197e0c2460164b',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-rm1g2298',
                  apiId: '2e57122f-0339-44e7-a41f-9a43230f7d25'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ajonp/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-rm1g2298.netlify.com', category: 'apps'}
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
