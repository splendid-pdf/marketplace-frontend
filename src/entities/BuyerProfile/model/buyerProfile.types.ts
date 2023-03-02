export enum Gender {
  'Мужской',
  'Женский'
}

export interface Location {
  country?: string;
  region?: string;
  city?: string;
  postcode?: string;
  street?: string;
  houseNumber?: string;
  apartNumber?: string;
  latitude?: number,
  longitude?: number
}

export interface Contact {
  value?: string;
  type?: string;
}

export interface BuyerCards {
  mainCard?: string;
  additionalCard1?: string;
  additionalCard2?: string;
}

export interface NotificationSettings {
  isAllowedToReceiveOnAddress?: boolean,
  isAllowedToSendPromotionsAndMailingLists?: boolean,
  isAllowedToSendPopularArticles?: boolean,
}

export interface BuyerProfile {
  firstName?: string;
  middleName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  birthday?: string;
  phone?: string;
  sex?: Gender;
  location?: Location;
  contacts?: Contact[];
  avatar?: string;
  notificationSettings?: NotificationSettings;
  photoId?: string;
}

export interface ApiBuyerSchema {
  externalId?: string;
  buyer: BuyerProfile;
}

export interface BuyerProfileSchema {
  data?: BuyerProfile;
  form?: BuyerProfile;
  isLoading?: boolean;
  error?: unknown;
  readonly?: boolean;
}

export interface ValidateBuyerProfileError {
  error: string;
}
