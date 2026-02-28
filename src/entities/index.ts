/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: achievements
 * Interface for Achievements
 */
export interface Achievements {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType number */
  propertiesSoldCount?: number;
  /** @wixFieldType text */
  propertiesSoldText?: string;
  /** @wixFieldType boolean */
  isRERACertified?: boolean;
  /** @wixFieldType text */
  reraCertificationDetails?: string;
  /** @wixFieldType boolean */
  isTrusted?: boolean;
  /** @wixFieldType text */
  trustStatement?: string;
}


/**
 * Collection ID: realestateservices
 * Interface for RealEstateServices
 */
export interface RealEstateServices {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  shortDescription?: string;
  /** @wixFieldType text */
  detailedDescription?: string;
  /** @wixFieldType image - Contains image URL, render with <Image> component, NOT as text */
  serviceImage?: string;
  /** @wixFieldType text */
  targetAudience?: string;
  /** @wixFieldType text */
  callToActionText?: string;
}
