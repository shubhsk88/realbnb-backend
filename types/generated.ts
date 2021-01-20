import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './customTypes';
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export type CreateRoomResponse = {
  __typename?: 'createRoomResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRoom: CreateRoomResponse;
  completePhoneVerification: CompletePhoneVerificationResponse;
  createUserViaPhone: CreateUserViaPhoneResponse;
  editProfile: EditProfileResponse;
  emailSignIn: EmailSignInResponse;
  emailSignUp: EmailSignUpResponse;
  googleSignIn: GoogleSignInResponse;
  startPhoneVerification: StartPhoneVerificationResponse;
};


export type MutationCreateRoomArgs = {
  name: Scalars['String'];
  price: Scalars['Float'];
  beds: Scalars['Int'];
  bedrooms: Scalars['Int'];
  bathroom: Scalars['Int'];
  guests: Scalars['Int'];
  checkIn: Scalars['DateTime'];
  checkOut: Scalars['DateTime'];
};


export type MutationCompletePhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
  key: Scalars['String'];
};


export type MutationCreateUserViaPhoneArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  phone: Scalars['String'];
  birthDate?: Maybe<Scalars['String']>;
};


export type MutationEditProfileArgs = {
  name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
};


export type MutationEmailSignInArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationEmailSignUpArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  birthDate?: Maybe<Scalars['String']>;
};


export type MutationGoogleSignInArgs = {
  email: Scalars['String'];
  avatar: Scalars['String'];
  name: Scalars['String'];
  googleId: Scalars['String'];
};


export type MutationStartPhoneVerificationArgs = {
  phoneNumber: Scalars['String'];
};

export type GetRoomResponse = {
  __typename?: 'getRoomResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  room?: Maybe<Room>;
};

export type Query = {
  __typename?: 'Query';
  getRoom: GetRoomResponse;
  getRooms: GetRoomsResponse;
  getUserProfile: GetUserProfileResponse;
  hello?: Maybe<Scalars['String']>;
};


export type QueryGetRoomArgs = {
  id: Scalars['String'];
};

export type GetRoomsResponse = {
  __typename?: 'getRoomsResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  rooms?: Maybe<Array<Maybe<Room>>>;
};

export type CompletePhoneVerificationResponse = {
  __typename?: 'completePhoneVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};


export type CreateUserViaPhoneResponse = {
  __typename?: 'createUserViaPhoneResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type EditProfileResponse = {
  __typename?: 'EditProfileResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
};

export type EmailSignInResponse = {
  __typename?: 'emailSignInResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type EmailSignUpResponse = {
  __typename?: 'emailSignUpResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type GetUserProfileResponse = {
  __typename?: 'getUserProfileResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type GoogleSignInResponse = {
  __typename?: 'googleSignInResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type StartPhoneVerificationResponse = {
  __typename?: 'startPhoneVerificationResponse';
  ok: Scalars['Boolean'];
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Amenity = {
  __typename?: 'Amenity';
  id: Scalars['String'];
  name: Scalars['String'];
  room: Array<Maybe<Room>>;
};

export type Room = {
  __typename?: 'Room';
  id: Scalars['String'];
  name: Scalars['String'];
  host: User;
  hostId: Scalars['String'];
  address: Address;
  roomType: RoomType;
  roomTypeId: Scalars['String'];
  amenities: Array<Maybe<Amenity>>;
  houseRules: Array<Maybe<HouseRule>>;
  facilities: Array<Maybe<Facility>>;
  reviews: Array<Maybe<Review>>;
  reservations: Array<Maybe<Reservation>>;
  lists: Array<Maybe<List>>;
  instantBook: Scalars['Boolean'];
  price: Scalars['Float'];
  photos: Array<Maybe<Photo>>;
  beds: Scalars['Int'];
  bedrooms: Scalars['Int'];
  bathrooms: Scalars['Float'];
  guests: Scalars['Int'];
  checkIn: Scalars['DateTime'];
  checkOut: Scalars['DateTime'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  description: Scalars['String'];
  averageRating: AverageReviewRating;
};

export type Address = {
  __typename?: 'Address';
  id: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  address: Scalars['String'];
  User: Array<Maybe<User>>;
  Room: Array<Maybe<Room>>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  superhost: Scalars['Boolean'];
  language: Scalars['String'];
  currency: Scalars['String'];
  email: Scalars['String'];
  address?: Maybe<Address>;
  addressId?: Maybe<Scalars['String']>;
  rooms: Array<Maybe<Room>>;
  reviews: Array<Maybe<Review>>;
  lists: Array<Maybe<List>>;
  reservations: Array<Maybe<Reservation>>;
  chats: Array<Maybe<Chat>>;
  messages: Array<Maybe<Message>>;
  name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['DateTime']>;
  bio?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  isVerified?: Maybe<Scalars['Boolean']>;
};

export type RoomType = {
  __typename?: 'RoomType';
  id: Scalars['String'];
  name: Scalars['String'];
  room: Array<Maybe<Room>>;
};

export type HouseRule = {
  __typename?: 'HouseRule';
  id: Scalars['String'];
  name: Scalars['String'];
  room: Array<Maybe<Room>>;
};

export type Facility = {
  __typename?: 'Facility';
  id: Scalars['String'];
  name: Scalars['String'];
  room: Array<Maybe<Room>>;
};

export type AverageReviewRating = {
  __typename?: 'AverageReviewRating';
  accuracy: Scalars['Float'];
  location: Scalars['Float'];
  communication: Scalars['Float'];
  value: Scalars['Float'];
  checkIn: Scalars['Float'];
};

export type Review = {
  __typename?: 'Review';
  id: Scalars['String'];
  content: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  accuracy: Scalars['Int'];
  location: Scalars['Int'];
  communication: Scalars['Int'];
  checkIn: Scalars['Int'];
  value: Scalars['Int'];
  User: User;
  Room: Room;
  averageRating: Scalars['Float'];
};

export type Reservation = {
  __typename?: 'Reservation';
  id: Scalars['String'];
  status: Scalars['String'];
  checkIn: Scalars['DateTime'];
  checkOut: Scalars['DateTime'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  guest?: Maybe<User>;
  Room?: Maybe<Room>;
};

export type List = {
  __typename?: 'List';
  id: Scalars['String'];
  name: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  User?: Maybe<User>;
  userId?: Maybe<Scalars['String']>;
  rooms: Array<Maybe<Room>>;
};

export type Chat = {
  __typename?: 'Chat';
  id: Scalars['String'];
  participations: Array<Maybe<User>>;
  messages: Array<Maybe<Message>>;
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  User?: Maybe<User>;
  Chat?: Maybe<Chat>;
};

export type Message = {
  __typename?: 'Message';
  id: Scalars['String'];
  text: Scalars['String'];
  created: Scalars['DateTime'];
  updated: Scalars['DateTime'];
  User?: Maybe<User>;
  Chat?: Maybe<Chat>;
};

export type Photo = {
  __typename?: 'Photo';
  id: Scalars['String'];
  caption: Scalars['String'];
  link: Scalars['String'];
  Room?: Maybe<Room>;
};

export type Verification = {
  __typename?: 'Verification';
  id: Scalars['String'];
  key?: Maybe<Scalars['String']>;
  payload: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  createRoomResponse: ResolverTypeWrapper<any>;
  Boolean: ResolverTypeWrapper<any>;
  String: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  Float: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  getRoomResponse: ResolverTypeWrapper<any>;
  Query: ResolverTypeWrapper<{}>;
  getRoomsResponse: ResolverTypeWrapper<any>;
  completePhoneVerificationResponse: ResolverTypeWrapper<any>;
  DateTime: ResolverTypeWrapper<any>;
  createUserViaPhoneResponse: ResolverTypeWrapper<any>;
  EditProfileResponse: ResolverTypeWrapper<any>;
  emailSignInResponse: ResolverTypeWrapper<any>;
  emailSignUpResponse: ResolverTypeWrapper<any>;
  getUserProfileResponse: ResolverTypeWrapper<any>;
  googleSignInResponse: ResolverTypeWrapper<any>;
  startPhoneVerificationResponse: ResolverTypeWrapper<any>;
  Amenity: ResolverTypeWrapper<any>;
  Room: ResolverTypeWrapper<any>;
  Address: ResolverTypeWrapper<any>;
  User: ResolverTypeWrapper<any>;
  RoomType: ResolverTypeWrapper<any>;
  HouseRule: ResolverTypeWrapper<any>;
  Facility: ResolverTypeWrapper<any>;
  AverageReviewRating: ResolverTypeWrapper<any>;
  Review: ResolverTypeWrapper<any>;
  Reservation: ResolverTypeWrapper<any>;
  List: ResolverTypeWrapper<any>;
  Chat: ResolverTypeWrapper<any>;
  Message: ResolverTypeWrapper<any>;
  Photo: ResolverTypeWrapper<any>;
  Verification: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  createRoomResponse: any;
  Boolean: any;
  String: any;
  Mutation: {};
  Float: any;
  Int: any;
  getRoomResponse: any;
  Query: {};
  getRoomsResponse: any;
  completePhoneVerificationResponse: any;
  DateTime: any;
  createUserViaPhoneResponse: any;
  EditProfileResponse: any;
  emailSignInResponse: any;
  emailSignUpResponse: any;
  getUserProfileResponse: any;
  googleSignInResponse: any;
  startPhoneVerificationResponse: any;
  Amenity: any;
  Room: any;
  Address: any;
  User: any;
  RoomType: any;
  HouseRule: any;
  Facility: any;
  AverageReviewRating: any;
  Review: any;
  Reservation: any;
  List: any;
  Chat: any;
  Message: any;
  Photo: any;
  Verification: any;
};

export type CreateRoomResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['createRoomResponse'] = ResolversParentTypes['createRoomResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createRoom?: Resolver<ResolversTypes['createRoomResponse'], ParentType, ContextType, RequireFields<MutationCreateRoomArgs, 'name' | 'price' | 'beds' | 'bedrooms' | 'bathroom' | 'guests' | 'checkIn' | 'checkOut'>>;
  completePhoneVerification?: Resolver<ResolversTypes['completePhoneVerificationResponse'], ParentType, ContextType, RequireFields<MutationCompletePhoneVerificationArgs, 'phoneNumber' | 'key'>>;
  createUserViaPhone?: Resolver<ResolversTypes['createUserViaPhoneResponse'], ParentType, ContextType, RequireFields<MutationCreateUserViaPhoneArgs, 'email' | 'password' | 'name' | 'phone'>>;
  editProfile?: Resolver<ResolversTypes['EditProfileResponse'], ParentType, ContextType, RequireFields<MutationEditProfileArgs, never>>;
  emailSignIn?: Resolver<ResolversTypes['emailSignInResponse'], ParentType, ContextType, RequireFields<MutationEmailSignInArgs, 'email' | 'password'>>;
  emailSignUp?: Resolver<ResolversTypes['emailSignUpResponse'], ParentType, ContextType, RequireFields<MutationEmailSignUpArgs, 'email' | 'password' | 'name'>>;
  googleSignIn?: Resolver<ResolversTypes['googleSignInResponse'], ParentType, ContextType, RequireFields<MutationGoogleSignInArgs, 'email' | 'avatar' | 'name' | 'googleId'>>;
  startPhoneVerification?: Resolver<ResolversTypes['startPhoneVerificationResponse'], ParentType, ContextType, RequireFields<MutationStartPhoneVerificationArgs, 'phoneNumber'>>;
};

export type GetRoomResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['getRoomResponse'] = ResolversParentTypes['getRoomResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getRoom?: Resolver<ResolversTypes['getRoomResponse'], ParentType, ContextType, RequireFields<QueryGetRoomArgs, 'id'>>;
  getRooms?: Resolver<ResolversTypes['getRoomsResponse'], ParentType, ContextType>;
  getUserProfile?: Resolver<ResolversTypes['getUserProfileResponse'], ParentType, ContextType>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type GetRoomsResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['getRoomsResponse'] = ResolversParentTypes['getRoomsResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Maybe<Array<Maybe<ResolversTypes['Room']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompletePhoneVerificationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['completePhoneVerificationResponse'] = ResolversParentTypes['completePhoneVerificationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type CreateUserViaPhoneResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['createUserViaPhoneResponse'] = ResolversParentTypes['createUserViaPhoneResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EditProfileResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['EditProfileResponse'] = ResolversParentTypes['EditProfileResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailSignInResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['emailSignInResponse'] = ResolversParentTypes['emailSignInResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EmailSignUpResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['emailSignUpResponse'] = ResolversParentTypes['emailSignUpResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GetUserProfileResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['getUserProfileResponse'] = ResolversParentTypes['getUserProfileResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GoogleSignInResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['googleSignInResponse'] = ResolversParentTypes['googleSignInResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StartPhoneVerificationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['startPhoneVerificationResponse'] = ResolversParentTypes['startPhoneVerificationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  error?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AmenityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Amenity'] = ResolversParentTypes['Amenity']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Room'] = ResolversParentTypes['Room']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  host?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  hostId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['Address'], ParentType, ContextType>;
  roomType?: Resolver<ResolversTypes['RoomType'], ParentType, ContextType>;
  roomTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  amenities?: Resolver<Array<Maybe<ResolversTypes['Amenity']>>, ParentType, ContextType>;
  houseRules?: Resolver<Array<Maybe<ResolversTypes['HouseRule']>>, ParentType, ContextType>;
  facilities?: Resolver<Array<Maybe<ResolversTypes['Facility']>>, ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  reservations?: Resolver<Array<Maybe<ResolversTypes['Reservation']>>, ParentType, ContextType>;
  lists?: Resolver<Array<Maybe<ResolversTypes['List']>>, ParentType, ContextType>;
  instantBook?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  photos?: Resolver<Array<Maybe<ResolversTypes['Photo']>>, ParentType, ContextType>;
  beds?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bedrooms?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  bathrooms?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  guests?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  checkIn?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  checkOut?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  averageRating?: Resolver<ResolversTypes['AverageReviewRating'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AddressResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Address'] = ResolversParentTypes['Address']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  country?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  User?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  Room?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  superhost?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  language?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['Address']>, ParentType, ContextType>;
  addressId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  lists?: Resolver<Array<Maybe<ResolversTypes['List']>>, ParentType, ContextType>;
  reservations?: Resolver<Array<Maybe<ResolversTypes['Reservation']>>, ParentType, ContextType>;
  chats?: Resolver<Array<Maybe<ResolversTypes['Chat']>>, ParentType, ContextType>;
  messages?: Resolver<Array<Maybe<ResolversTypes['Message']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthDate?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  isVerified?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RoomTypeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RoomType'] = ResolversParentTypes['RoomType']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HouseRuleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['HouseRule'] = ResolversParentTypes['HouseRule']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FacilityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Facility'] = ResolversParentTypes['Facility']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  room?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AverageReviewRatingResolvers<ContextType = Context, ParentType extends ResolversParentTypes['AverageReviewRating'] = ResolversParentTypes['AverageReviewRating']> = {
  accuracy?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  communication?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  checkIn?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  accuracy?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  location?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  communication?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  checkIn?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  User?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  Room?: Resolver<ResolversTypes['Room'], ParentType, ContextType>;
  averageRating?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReservationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Reservation'] = ResolversParentTypes['Reservation']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  checkIn?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  checkOut?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  guest?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  Room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ListResolvers<ContextType = Context, ParentType extends ResolversParentTypes['List'] = ResolversParentTypes['List']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  rooms?: Resolver<Array<Maybe<ResolversTypes['Room']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ChatResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Chat'] = ResolversParentTypes['Chat']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  participations?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  messages?: Resolver<Array<Maybe<ResolversTypes['Message']>>, ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  Chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MessageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Message'] = ResolversParentTypes['Message']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  updated?: Resolver<ResolversTypes['DateTime'], ParentType, ContextType>;
  User?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  Chat?: Resolver<Maybe<ResolversTypes['Chat']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PhotoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Photo'] = ResolversParentTypes['Photo']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  caption?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  Room?: Resolver<Maybe<ResolversTypes['Room']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VerificationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Verification'] = ResolversParentTypes['Verification']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  payload?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = Context> = {
  createRoomResponse?: CreateRoomResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  getRoomResponse?: GetRoomResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  getRoomsResponse?: GetRoomsResponseResolvers<ContextType>;
  completePhoneVerificationResponse?: CompletePhoneVerificationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  createUserViaPhoneResponse?: CreateUserViaPhoneResponseResolvers<ContextType>;
  EditProfileResponse?: EditProfileResponseResolvers<ContextType>;
  emailSignInResponse?: EmailSignInResponseResolvers<ContextType>;
  emailSignUpResponse?: EmailSignUpResponseResolvers<ContextType>;
  getUserProfileResponse?: GetUserProfileResponseResolvers<ContextType>;
  googleSignInResponse?: GoogleSignInResponseResolvers<ContextType>;
  startPhoneVerificationResponse?: StartPhoneVerificationResponseResolvers<ContextType>;
  Amenity?: AmenityResolvers<ContextType>;
  Room?: RoomResolvers<ContextType>;
  Address?: AddressResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  RoomType?: RoomTypeResolvers<ContextType>;
  HouseRule?: HouseRuleResolvers<ContextType>;
  Facility?: FacilityResolvers<ContextType>;
  AverageReviewRating?: AverageReviewRatingResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  Reservation?: ReservationResolvers<ContextType>;
  List?: ListResolvers<ContextType>;
  Chat?: ChatResolvers<ContextType>;
  Message?: MessageResolvers<ContextType>;
  Photo?: PhotoResolvers<ContextType>;
  Verification?: VerificationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;

export type HelloQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
);


export const HelloDocument = gql`
    query Hello {
  hello
}
    `;
export type HelloQueryResult = Apollo.QueryResult<HelloQuery, HelloQueryVariables>;