
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/blog',
  component: ComponentCreator('/blog'),
  exact: true,
  
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags'),
  exact: true,
  
},
{
  path: '/blog/tags/introductions',
  component: ComponentCreator('/blog/tags/introductions'),
  exact: true,
  
},
{
  path: '/blog/tags/shopify',
  component: ComponentCreator('/blog/tags/shopify'),
  exact: true,
  
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
