export enum Gender {
  'Мужской',
  'Женский',
  'Не указан'
}

export interface Location {
  city?: string;
  deliveryAddress?: string;
}

export interface BuyerCards {
  mainCard?: string;
  additionalCard1?: string;
  additionalCard2?: string;
}

export interface BuyerProfile {
  id?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  sex?: Gender;
  photoUrl?: string;
  location?: Location;
}

export interface ApiBuyerSchema {
  externalId?: string;
  buyer: BuyerProfile;
}

export interface BuyerProfileSchema {
  data?: BuyerProfile;
  isLoading?: boolean;
  errorOnProfile?: string;
  readonly?: boolean;
}

export interface ValidateBuyerProfileError {
  error: string;
}
