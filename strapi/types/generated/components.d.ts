import type { Schema, Struct } from '@strapi/strapi';

export interface AboutmeAboutme extends Struct.ComponentSchema {
  collectionName: 'components_aboutme_aboutmes';
  info: {
    displayName: 'aboutme';
  };
  attributes: {
    aboutme: Schema.Attribute.Blocks;
  };
}

export interface ContactContact extends Struct.ComponentSchema {
  collectionName: 'components_contact_contacts';
  info: {
    displayName: 'contact';
  };
  attributes: {
    email: Schema.Attribute.Email;
    github: Schema.Attribute.Text;
    linkedIn: Schema.Attribute.Text;
    location: Schema.Attribute.Text;
    phoneNumber: Schema.Attribute.BigInteger;
    phoneNumber2: Schema.Attribute.BigInteger;
    telegram: Schema.Attribute.String;
  };
}

export interface FooterFooter extends Struct.ComponentSchema {
  collectionName: 'components_footer_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    email: Schema.Attribute.Email;
    phoneNumber: Schema.Attribute.String;
    phoNumberTwo: Schema.Attribute.String;
    telegram: Schema.Attribute.String;
  };
}

export interface ImageAndDescriptionImageAndDescription
  extends Struct.ComponentSchema {
  collectionName: 'components_image_and_description_image_and_descriptions';
  info: {
    description: '';
    displayName: 'imageAndDescription';
  };
  attributes: {
    description: Schema.Attribute.Text &
      Schema.Attribute.DefaultTo<'description'>;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface LinkLink extends Struct.ComponentSchema {
  collectionName: 'components_link_links';
  info: {
    displayName: 'link';
    icon: 'arrowRight';
  };
  attributes: {
    description: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'aboutme.aboutme': AboutmeAboutme;
      'contact.contact': ContactContact;
      'footer.footer': FooterFooter;
      'image-and-description.image-and-description': ImageAndDescriptionImageAndDescription;
      'link.link': LinkLink;
    }
  }
}
