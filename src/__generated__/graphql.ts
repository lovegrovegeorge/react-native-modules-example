/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date type */
  Date: any;
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  location?: Maybe<Scalars['String']>;
  long_description: Scalars['String'];
  price: Scalars['String'];
  starts: Scalars['Date'];
  title: Scalars['String'];
};

export type EventFilter = {
  description?: InputMaybe<Scalars['String']>;
  description_neq?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_neq?: InputMaybe<Scalars['ID']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  image?: InputMaybe<Scalars['String']>;
  image_neq?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  location_neq?: InputMaybe<Scalars['String']>;
  long_description?: InputMaybe<Scalars['String']>;
  long_description_neq?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  price_neq?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  starts?: InputMaybe<Scalars['Date']>;
  starts_gt?: InputMaybe<Scalars['Date']>;
  starts_gte?: InputMaybe<Scalars['Date']>;
  starts_lt?: InputMaybe<Scalars['Date']>;
  starts_lte?: InputMaybe<Scalars['Date']>;
  starts_neq?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
  title_neq?: InputMaybe<Scalars['String']>;
};

export type EventInput = {
  description: Scalars['String'];
  id: Scalars['ID'];
  image: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  long_description: Scalars['String'];
  price: Scalars['String'];
  starts: Scalars['Date'];
  title: Scalars['String'];
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent?: Maybe<Event>;
  createManyEvent?: Maybe<Array<Maybe<Event>>>;
  removeEvent?: Maybe<Event>;
  updateEvent?: Maybe<Event>;
};


export type MutationCreateEventArgs = {
  description: Scalars['String'];
  image: Scalars['String'];
  location?: InputMaybe<Scalars['String']>;
  long_description: Scalars['String'];
  price: Scalars['String'];
  starts: Scalars['Date'];
  title: Scalars['String'];
};


export type MutationCreateManyEventArgs = {
  data?: InputMaybe<Array<InputMaybe<EventInput>>>;
};


export type MutationRemoveEventArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateEventArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  long_description?: InputMaybe<Scalars['String']>;
  price?: InputMaybe<Scalars['String']>;
  starts?: InputMaybe<Scalars['Date']>;
  title?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  Event?: Maybe<Event>;
  _allEventsMeta?: Maybe<ListMetadata>;
  allEvents?: Maybe<Array<Maybe<Event>>>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type Query_AllEventsMetaArgs = {
  filter?: InputMaybe<EventFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
};


export type QueryAllEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  page?: InputMaybe<Scalars['Int']>;
  perPage?: InputMaybe<Scalars['Int']>;
  sortField?: InputMaybe<Scalars['String']>;
  sortOrder?: InputMaybe<Scalars['String']>;
};
