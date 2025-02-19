export type UserLogin = {
  email: string;
  password: string;
};

export type User = {
  id: number;
  name: string;
  email: string;
  token: string;
  tenant: string;
};

export type UserRegister = {
  email: string;
  firstName: string;
  lastName: string;
  document: string;
  homePhone: string;
  password: string;
};

export type RegisterData = {
  code: string;
  message: string;
  obs: unknown;
  data: {
    document: string;
    email: string;
    firstName: string;
    isNewsletterOptIn: boolean;
    phone: unknown;
    profilePicture: unknown;
    userId: string;
    isCorporate: unknown;
    tradeName: unknown;
    homePhone: string;
    brandPurchasedTag: unknown;
    brandVisitedTag: unknown;
    categoryPurchasedTag: unknown;
    categoryVisitedTag: unknown;
    departmentVisitedTag: unknown;
    productPurchasedTag: unknown;
    productVisitedTag: unknown;
    stateRegistration: unknown;
    lastName: string;
    localeDefault: unknown;
    attach: unknown;
    approved: unknown;
    birthDate: unknown;
    businessPhone: unknown;
    corporateDocument: unknown;
    corporateName: unknown;
    documentType: unknown;
    gender: unknown;
    visitedProductWithStockOutSkusTag: unknown;
    customerClass: unknown;
    priceTables: unknown;
    birthDateMonth: unknown;
    id: string;
    accountId: string;
    accountName: string;
    dataEntityId: string;
    createdBy: string;
    createdIn: string;
    updatedBy: string;
    updatedIn: string;
    lastInteractionBy: string;
    lastInteractionIn: string;
    followers: [];
    tags: [];
    auto_filter: unknown;
    address: [];
  };
};

export type PasswordRecover = {
  email: string;
};

export type SaveNewPassword = {
  email: string;
  password: string;
  key: string;
};
