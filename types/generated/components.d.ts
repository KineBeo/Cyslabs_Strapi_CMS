import type { Schema, Attribute } from '@strapi/strapi';

export interface GlobalNavBar extends Schema.Component {
  collectionName: 'components_global_nav_bars';
  info: {
    displayName: 'NavBar';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    links: Attribute.Component<'shared.link', true>;
  };
}

export interface GlobalFooter extends Schema.Component {
  collectionName: 'components_global_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    title: Attribute.String;
    subTitle: Attribute.Text;
    content: Attribute.Blocks;
  };
}

export interface SharedLink extends Schema.Component {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    label: Attribute.String;
    href: Attribute.String;
  };
}

export interface SharedHeroSection extends Schema.Component {
  collectionName: 'components_shared_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    heading: Attribute.String;
    subheading: Attribute.String;
  };
}

export interface SharedContentBlock2 extends Schema.Component {
  collectionName: 'components_shared_content_block2s';
  info: {
    displayName: 'ContentBlock2';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface SharedContentBlock extends Schema.Component {
  collectionName: 'components_shared_content_blocks';
  info: {
    displayName: 'ContentBlock';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Blocks;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
    links: Attribute.Component<'shared.link', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'global.nav-bar': GlobalNavBar;
      'global.footer': GlobalFooter;
      'shared.link': SharedLink;
      'shared.hero-section': SharedHeroSection;
      'shared.content-block2': SharedContentBlock2;
      'shared.content-block': SharedContentBlock;
    }
  }
}
