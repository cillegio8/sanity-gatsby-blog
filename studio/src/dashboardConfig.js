export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5ec97ad156696522c03ccb0a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rqqj91or',
                  apiId: 'b090c6b2-0d51-4d8f-a8ea-9a31c010e94b'
                },
                {
                  buildHookId: '5ec97ad245228aa0a27994ee',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-7k6m9wkx',
                  apiId: '8bfe1f4f-8c45-4291-a336-f20a150aadef'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cillegio8/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-7k6m9wkx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
