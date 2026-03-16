/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** AccountLogDto */
export interface AccountLogDto {
  /** Available funds after the operation */
  availableBalance?: number;
  availableBalanceFormatted?: string;
  /** Balance after the operation */
  balanceAfter?: number;
  balanceAfterFormatted?: string;
  /** Balance before the operation */
  balanceBefore?: number;
  balanceBeforeFormatted?: string;
  ccNumber?: string;
  ccOwner?: string;
  /** Optional comment from the initiator */
  comment?: string;
  currency?: string;
  currencyFormat?: string;
  /** The name of the event that triggered the operation */
  eventName?: string;
  fromOwner?: string;
  jobNumber?: string;
  /** Operation amount. Greater or less than zero */
  operationAmount?: number;
  operationAmountFormatted?: string;
  /** @format date-time */
  operationDate?: string;
  /** Available balance change due to reservation for a job. Greater or less than zero */
  reserved?: number;
  reservedFormatted?: string;
  toOwner?: string;
  /** The name of the performed transaction */
  transactionName?: string;
  type?: AccountLogDtoTypeEnum;
}

/** AddLostPropertyRequest */
export interface AddLostPropertyRequest {
  customerType?: AddLostPropertyRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  property?: string;
}

/** AddressCountRequest */
export interface AddressCountRequest {
  customerType?: AddressCountRequestCustomerTypeEnum;
  query?: string;
  stopType?: AddressCountRequestStopTypeEnum;
  types?: AddressCountRequestTypesEnum[];
}

/** AddressCountResponse */
export interface AddressCountResponse {
  /** @format int64 */
  count?: number;
  countByType?: Record<string, number>;
  errorMessage?: string;
  status?: AddressCountResponseStatusEnum;
}

/** AddressCreateRequest */
export interface AddressCreateRequest {
  customerType?: AddressCreateRequestCustomerTypeEnum;
  favouriteAddress?: ShortFavouriteAddressDto;
}

/** AddressCreateResponse */
export interface AddressCreateResponse {
  address?: FavouriteAddressDto;
  errorMessage?: string;
  status?: AddressCreateResponseStatusEnum;
}

/** AddressDeleteRequest */
export interface AddressDeleteRequest {
  /** @format uuid */
  addressId?: string;
  customerType?: AddressDeleteRequestCustomerTypeEnum;
  deleteRecent?: boolean;
}

/** AddressDetailsRequest */
export interface AddressDetailsRequest {
  caption?: string;
  customerType?: AddressDetailsRequestCustomerTypeEnum;
  data?: string;
  source?: AddressDetailsRequestSourceEnum;
}

/** AddressDto */
export interface AddressDto {
  /** @format uuid */
  addressId?: string;
  caption?: string;
  data?: string;
  fields?: Record<string, string>;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  note?: string;
  restrictions?: Restrictions;
  source?: AddressDtoSourceEnum;
}

/** AddressEditRequest */
export interface AddressEditRequest {
  customerType?: AddressEditRequestCustomerTypeEnum;
  favouriteAddress?: ShortFavouriteAddressDto;
}

/** AddressEditResponse */
export interface AddressEditResponse {
  address?: FavouriteAddressDto;
  errorMessage?: string;
  status?: AddressEditResponseStatusEnum;
}

/** AddressHierarchyResponse */
export interface AddressHierarchyResponse {
  addresses?: CustomerAddressDto[];
  deleted?: string[];
  errorMessage?: string;
  /** @format date-time */
  lastUpdateDate?: string;
  status?: AddressHierarchyResponseStatusEnum;
}

/** AddressListRequest */
export interface AddressListRequest {
  customerType?: AddressListRequestCustomerTypeEnum;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  offset?: number;
  query?: string;
  stopType?: AddressListRequestStopTypeEnum;
  types?: AddressListRequestTypesEnum[];
}

/** AddressListResponse */
export interface AddressListResponse {
  addresses?: RecentAddressDto[];
  errorMessage?: string;
  status?: AddressListResponseStatusEnum;
}

/** AddressPositionRequest */
export interface AddressPositionRequest {
  customerType?: AddressPositionRequestCustomerTypeEnum;
  /** @format double */
  distance?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  limit?: number;
  /** @format double */
  longitude?: number;
}

/** AddressRequest */
export interface AddressRequest {
  /** @format uuid */
  addressId?: string;
}

/** AddressResponse */
export interface AddressResponse {
  address?: AddressDto;
  errorMessage?: string;
  status?: AddressResponseStatusEnum;
}

/** AddressSearchRequest */
export interface AddressSearchRequest {
  customerType?: AddressSearchRequestCustomerTypeEnum;
  enableAutocomplete?: boolean;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  limit?: number;
  /** @format double */
  longitude?: number;
  searchString?: string;
}

/** AddressSearchResponse */
export interface AddressSearchResponse {
  addresses?: AddressDto[];
  errorMessage?: string;
  status?: AddressSearchResponseStatusEnum;
}

/** AddressToDelete */
export interface AddressToDelete {
  /** @format uuid */
  addressId?: string;
  deleteRecent?: boolean;
}

/** AddressesListRequest */
export interface AddressesListRequest {
  customerTypes?: AddressesListRequestCustomerTypesEnum[];
  /** @format date-time */
  lastUpdateDate?: string;
}

/** AddressesListResponse */
export interface AddressesListResponse {
  addresses?: FavouriteAddressDto[];
  deleted?: Record<string, string>;
  errorMessage?: string;
  /** @format date-time */
  lastUpdateDate?: string;
  status?: AddressesListResponseStatusEnum;
}

/** AirlineDto */
export interface AirlineDto {
  iata?: string;
  icao?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

/** AirlinesRequest */
export interface AirlinesRequest {
  searchString?: string;
}

/** AirlinesResponse */
export interface AirlinesResponse {
  airlines?: AirlineDto[];
  errorMessage?: string;
  status?: AirlinesResponseStatusEnum;
}

/** AirportReplacementResponse */
export interface AirportReplacementResponse {
  address?: AddressDto;
  allowNonAirportAddress?: boolean;
  errorMessage?: string;
  message?: string;
  status?: AirportReplacementResponseStatusEnum;
}

/** AirportStopSettings */
export interface AirportStopSettings {
  /** SherbookAirportStopConfig.airlineRequireForPrebook */
  airlineRequireForPrebook?: boolean;
  /** deprecated; SherbookAirportStopConfig.airlineRequireForPrebook */
  airlineRequired?: boolean;
  /** SherbookAirportStopConfig.airlineShowForPrebook */
  airlineShowForPrebook?: boolean;
  /** At least one airport exits */
  airportsUsed?: boolean;
  /** SherbookAirportStopConfig.arrivalFromRequireForPrebook */
  arrivalFromRequireForPrebook?: boolean;
  /** deprecated; SherbookAirportStopConfig.arrivalFromRequireForPrebook */
  arrivalFromRequired?: boolean;
  /** SherbookAirportStopConfig.arrivalFromShowForPrebook */
  arrivalFromShowForPrebook?: boolean;
  /** SherbookAirportStopConfig.flightNumberRequireForPrebook */
  flightNumberRequireForPrebook?: boolean;
  /** deprecated; SherbookAirportStopConfig.flightNumberRequireForPrebook */
  flightNumberRequired?: boolean;
  /** SherbookAirportStopConfig.flightNumberShowForPrebook */
  flightNumberShowForPrebook?: boolean;
  /** When enabled, a valid flight number is mandatory to confirm an arrival airport booking (taxi.sherbookConfig.mandatoryValidFlightNumber) */
  mandatoryValidFlightNumber?: boolean;
  /** SherbookAirportStopConfig.meetingPointRequireForASAP */
  meetingPointRequireForASAP?: boolean;
  /** SherbookAirportStopConfig.meetingPointRequireForPrebook */
  meetingPointRequireForPrebook?: boolean;
  /** SherbookAirportStopConfig.meetingPointShowForASAP */
  meetingPointShowForASAP?: boolean;
  /** SherbookAirportStopConfig.meetingPointShowForPrebook */
  meetingPointShowForPrebook?: boolean;
  /** SherbookAirportStopConfig.pickupTimeDelayRequireForPrebook */
  pickupTimeDelayRequireForPrebook?: boolean;
  /** deprecated; SherbookAirportStopConfig.pickupTimeDelayRequireForPrebook */
  pickupTimeDelayRequired?: boolean;
  /** SherbookAirportStopConfig.pickupTimeDelayShowForPrebook */
  pickupTimeDelayShowForPrebook?: boolean;
  /** deprecated; SherbookAirportStopConfig.terminalRequired */
  terminalRequired?: boolean;
}

/** AmendableCustomerDataRequest */
export interface AmendableCustomerDataRequest {
  /** @format uuid */
  amendJobId?: string;
  customerTypes?: AmendableCustomerDataRequestCustomerTypesEnum[];
}

/** AnonymousLoginRequest */
export interface AnonymousLoginRequest {
  clientType?: AnonymousLoginRequestClientTypeEnum;
  device?: DeviceDto;
}

/** AnonymousLoginResponse */
export interface AnonymousLoginResponse {
  errorMessage?: string;
  sessionRefreshToken?: string;
  sessionToken?: string;
  status?: AnonymousLoginResponseStatusEnum;
}

/** AnswerDto */
export interface AnswerDto {
  answerCode?: string;
  questionCode?: string;
  /** @format uuid */
  questionId?: string;
  text?: string;
}

/** AnswerValueDto */
export interface AnswerValueDto {
  code?: string;
  value?: string;
}

/** ApplicationVersionResponse */
export interface ApplicationVersionResponse {
  applicationLink?: string;
  errorMessage?: string;
  status?: ApplicationVersionResponseStatusEnum;
}

/** ArchiveBookingsRequest */
export interface ArchiveBookingsRequest {
  customerTypes?: ArchiveBookingsRequestCustomerTypesEnum[];
  /** @format date-time */
  lastUpdateDate?: string;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  offset?: number;
}

/** ArchiveBookingsResponse */
export interface ArchiveBookingsResponse {
  bookings?: BookingListDto[];
  errorMessage?: string;
  hiddenBookings?: string[];
  /** @format date-time */
  lastUpdateDate?: string;
  status?: ArchiveBookingsResponseStatusEnum;
}

/** ArrivalDelayResponse */
export interface ArrivalDelayResponse {
  asap?: boolean;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  delay?: number;
  errorMessage?: string;
  offerService?: ServiceDto;
  status?: ArrivalDelayResponseStatusEnum;
}

/** ArrivalDetails */
export interface ArrivalDetails {
  airline?: AirlineDto;
  arrivalFrom?: string;
  arrivalNumber?: string;
  /** @format date-time */
  arrivalTime?: string;
  arrived?: boolean;
  /** @format int32 */
  pickupTimeDelay?: number;
  shipName?: string;
}

/** ArrivalPickupDelaySettings */
export interface ArrivalPickupDelaySettings {
  /** @format int32 */
  airportPickupTimeDelay?: number;
  /** @format int32 */
  trainPickupTimeDelay?: number;
}

/** AsDirectedMinutesRoundingInfoDto */
export interface AsDirectedMinutesRoundingInfoDto {
  /** @format int32 */
  asDirectedRoundedMinutes?: number;
  caption?: string;
}

/** AuthFieldValue */
export interface AuthFieldValue {
  key?: AuthFieldValueKeyEnum;
  value?: string;
}

/** AuthInfoDto */
export interface AuthInfoDto {
  type?: AuthInfoDtoTypeEnum;
}

/** AvailableAddressesResponse */
export interface AvailableAddressesResponse {
  airports?: CustomerAddressDto[];
  book?: RecentAddressDto[];
  errorMessage?: string;
  ships?: CustomerAddressDto[];
  status?: AvailableAddressesResponseStatusEnum;
  trains?: CustomerAddressDto[];
}

/** AvailableBookingActionsDto */
export interface AvailableBookingActionsDto {
  amend?: boolean;
  cancel?: boolean;
  email?: boolean;
  hide?: boolean;
  survey?: boolean;
}

/** BaseDatedRequest */
export interface BaseDatedRequest {
  customerTypes?: BaseDatedRequestCustomerTypesEnum[];
  /** @format date-time */
  lastUpdateDate?: string;
}

/** BaseLoginRequest */
export interface BaseLoginRequest {
  device?: DeviceDto;
}

/** BaseResponse */
export interface BaseResponse {
  errorMessage?: string;
  status?: BaseResponseStatusEnum;
}

/** BonusAccountLogsResponse */
export interface BonusAccountLogsResponse {
  errorMessage?: string;
  logs?: AccountLogDto[];
  status?: BonusAccountLogsResponseStatusEnum;
}

/** BonusDiscountDto */
export interface BonusDiscountDto {
  discount?: PriceField;
  discountExt?: PriceField;
  pointsToWithdraw?: number;
}

/** BonusDto */
export interface BonusDto {
  discount?: PriceField;
  maxAllowedPoints?: number;
  minAllowedPoints?: number;
  pointsCalculated?: number;
}

/** BonusProgramDto */
export interface BonusProgramDto {
  balance?: number;
  enabled?: boolean;
  /** @format int32 */
  precision?: number;
}

/** BonusProgramInfoResponse */
export interface BonusProgramInfoResponse {
  balance?: number;
  enabled?: boolean;
  errorMessage?: string;
  /** @format int32 */
  precision?: number;
  status?: BonusProgramInfoResponseStatusEnum;
}

/** BookJobRequest */
export interface BookJobRequest {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  creditCardChanged?: boolean;
  customerType?: BookJobRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: BookJobRequestOperationTypeEnum;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentMethodId?: string;
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  price?: PriceDto;
  promoCode?: string;
  references?: ReferenceDto[];
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  serverData?: string;
  service?: BookingServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  voucher?: VoucherDto;
}

/** BookJobResponse */
export interface BookJobResponse {
  bonusPointsBalance?: number;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  delay?: number;
  errorMessage?: string;
  extPrice?: PriceDto;
  flags?: string[];
  /** @format uuid */
  jobId?: string;
  number?: string;
  paymentData?: PaymentData;
  paymentLinkUrl?: string;
  price?: PriceDto;
  redirectInfo?: RedirectDto;
  status?: BookJobResponseStatusEnum;
}

/** BookingCountResponse */
export interface BookingCountResponse {
  /** @format int64 */
  count?: number;
  errorMessage?: string;
  status?: BookingCountResponseStatusEnum;
}

/** BookingDataRequest */
export interface BookingDataRequest {
  customerType?: BookingDataRequestCustomerTypeEnum;
  operationType?: BookingDataRequestOperationTypeEnum;
  /** @format uuid */
  usedJobId?: string;
}

/** BookingDataResponse */
export interface BookingDataResponse {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  /** @format date-time */
  date?: string;
  errorMessage?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: BookingDataResponseOperationTypeEnum;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentTypes?: BookingPaymentTypeDto[];
  promoCode?: PromoCodeDto;
  references?: ReferenceDto[];
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  service?: ServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  status?: BookingDataResponseStatusEnum;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  usedJobNumber?: string;
  voucher?: VoucherDto;
  warnings?: string[];
}

/** BookingDetailsDto */
export interface BookingDetailsDto {
  account?: string;
  amendable?: boolean;
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: BonusDiscountDto;
  caller?: ContactDto;
  cancellable?: boolean;
  confirmDriverChanges?: boolean;
  contact?: ContactDto;
  creditCard?: ShortCreditCardDto;
  customerType?: BookingDetailsDtoCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  /**
   * Distance, kilometers
   * @format double
   */
  distance?: number;
  driver?: DriverDto;
  /** @format date-time */
  driverEta?: string;
  extPrice?: PriceDto;
  flags?: string[];
  /** @format uuid */
  id?: string;
  instructions?: SpecialInstructionDto[];
  /**
   * Journey time, minutes
   * @format int32
   */
  journeyTime?: number;
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  number?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  partner?: PartnerDto;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  price?: PriceDto;
  promoCode?: PromoCodeDto;
  /** @format int32 */
  rate?: number;
  rateSkipped?: boolean;
  references?: ReferenceDto[];
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  shareable?: boolean;
  /** @format int32 */
  smallBagsNumber?: number;
  status?: BookingDetailsDtoStatusEnum;
  stops?: StopDto[];
  supplierName?: string;
  unreadChatMessages?: boolean;
  /** @format int32 */
  version?: number;
  voucher?: VoucherDto;
}

/** BookingDetailsResponse */
export interface BookingDetailsResponse {
  booking?: BookingDetailsDto;
  errorMessage?: string;
  status?: BookingDetailsResponseStatusEnum;
}

/** BookingFeedbackRequest */
export interface BookingFeedbackRequest {
  answers?: AnswerDto[];
  complaint?: string;
  contact?: ContactDto;
  customerType?: BookingFeedbackRequestCustomerTypeEnum;
  /** @format int32 */
  rate?: number;
  skipped?: boolean;
  /** @format uuid */
  surveyId?: string;
  tips?: number;
  tokenId?: string;
}

/** BookingFilterDto */
export interface BookingFilterDto {
  address?: string;
  appIds?: string[];
  asap?: boolean;
  bookingSources?: BookingFilterDtoBookingSourcesEnum[];
  callerName?: string;
  client?: string;
  contractNumber?: string;
  /** @format date-time */
  creationDateFrom?: string;
  excludedAppIds?: string[];
  excludedServices?: string[];
  /** @format date-time */
  from?: string;
  number?: string;
  numberLike?: string;
  references?: string;
  referencesList?: ReferenceValueDto[];
  /** @format uuid */
  serviceId?: string;
  services?: string[];
  status?: BookingFilterDtoStatusEnum[];
  /** @format date-time */
  to?: string;
}

/** BookingIdRequest */
export interface BookingIdRequest {
  customerType?: BookingIdRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
}

/** BookingJobTrackResponse */
export interface BookingJobTrackResponse {
  driverPositions?: GeoCoordinates[];
  errorMessage?: string;
  status?: BookingJobTrackResponseStatusEnum;
}

/** BookingLinkResponse */
export interface BookingLinkResponse {
  errorMessage?: string;
  link?: string;
  status?: BookingLinkResponseStatusEnum;
  text?: string;
}

/** BookingListDto */
export interface BookingListDto {
  asap?: boolean;
  confirmDriverChanges?: boolean;
  customerType?: BookingListDtoCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  driver?: DriverDto;
  /** @format date-time */
  driverEta?: string;
  drop?: string;
  dropStop?: SimpleStop;
  extTotalPrice?: PriceField;
  flags?: string[];
  /** @format uuid */
  id?: string;
  /** @format int32 */
  intermediateStops?: number;
  journeyType?: BookingListDtoJourneyTypeEnum;
  mainPassengerName?: string;
  number?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  partner?: PartnerDto;
  pickup?: string;
  pickupStop?: SimpleStop;
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  shareable?: boolean;
  status?: BookingListDtoStatusEnum;
  /** @format int64 */
  supervisorVersion?: number;
  supplierName?: string;
  totalPrice?: PriceField;
}

/** BookingListFilter */
export interface BookingListFilter {
  address?: string;
  asDirected?: boolean;
  asap?: boolean;
  bookingSources?: BookingListFilterBookingSourcesEnum[];
  caller?: string;
  contact?: string;
  contractNumber?: string;
  /** @format date-time */
  creationDateFrom?: string;
  /** @format date-time */
  dateFrom?: string;
  /** @format date-time */
  dateTo?: string;
  destinationUnknown?: boolean;
  dropOff?: string;
  intermediate?: string;
  mainActorName?: string;
  number?: string;
  passenger?: string;
  pickup?: string;
  /** @format double */
  priceFrom?: number;
  /** @format double */
  priceTo?: number;
  query?: string;
  references?: string;
  referencesList?: ReferenceValueDto[];
  services?: string[];
  status?: BookingListFilterStatusEnum[];
  statusPriority?: Record<string, number>;
  waitAndReturn?: boolean;
}

/** BookingListOrder */
export interface BookingListOrder {
  field?: BookingListOrderFieldEnum;
  method?: BookingListOrderMethodEnum;
}

/** BookingListRequest */
export interface BookingListRequest {
  customerType?: BookingListRequestCustomerTypeEnum;
  filter?: BookingListFilter;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  offset?: number;
  sort?: BookingListOrder[];
}

/** BookingListResponse */
export interface BookingListResponse {
  errorMessage?: string;
  list?: BookingListDto[];
  status?: BookingListResponseStatusEnum;
}

/** BookingPaymentTypeDto */
export interface BookingPaymentTypeDto {
  code?: string;
  customerType?: BookingPaymentTypeDtoCustomerTypeEnum;
  kind?: BookingPaymentTypeDtoKindEnum;
  maxPaymentAmount?: number;
  maxPaymentPercent?: number;
  name?: string;
  payInCar?: boolean;
  usePaymentLink?: boolean;
}

/** BookingServiceDto */
export interface BookingServiceDto {
  caption?: string;
  code?: string;
  customerType?: BookingServiceDtoCustomerTypeEnum;
  delivery?: boolean;
  description?: string;
  /** @format uuid */
  id?: string;
  vehicleModelType?: VehicleModelTypeDto;
}

/** BookingSettingsDto */
export interface BookingSettingsDto {
  accountOrPinSupervisor?: boolean;
  arrivalPickupDelaySettings?: ArrivalPickupDelaySettings;
  asDirectedUsed?: boolean;
  bookingsRequireApproval?: boolean;
  callerSettings?: ProfileSettings;
  /** Indicates whether 'Referral Code' input field can be shown to client */
  canEnterReferralCode?: boolean;
  contactSettings?: ProfileSettings;
  creditCardSettings?: CreditCardSettings;
  currency?: CurrencyDto;
  customerType?: BookingSettingsDtoCustomerTypeEnum;
  defaultDropoff?: AddressDto;
  defaultPickup?: AddressDto;
  destinationUnknownUsed?: boolean;
  discountSettings?: DiscountSettings;
  enableQRCodePayment?: boolean;
  /**
   * Maximum allowed duration between eta and job date (taxi.booking.etaDurationMinutes)
   * @format int32
   */
  etaDurationMinutes?: number;
  faqLink?: string;
  jobOfferSettings?: JobOfferSettings;
  messages?: Record<string, string>;
  multiPaymentsAvailable?: boolean;
  partners?: PartnerDto[];
  passengerSettings?: ProfileSettings;
  /** Key - payment type; Value - set of incompatible payment types. More convenient form of ss taxi.PaymentTypeConfig.paymentRestrictions (default PAY_PAL/CREDIT_CARD) */
  paymentTypeRestrictions?: Record<string, string[]>;
  qrCodePaymentMessage?: string;
  /** taxi.MarketingCampaignConfig.consentRequestedOnAuth && consent has not been requested before */
  requestConsentToNotifications?: boolean;
  restrictions?: Restrictions;
  shipTerminalPrebookAvailable?: boolean;
  showPassengers?: boolean;
  showPrice?: boolean;
  /** taxi.sherbookConfig.showPriceForDestinationUnknown */
  showPriceForDestinationUnknown?: boolean;
  waitAndReturnUsed?: boolean;
}

/** BookingSettingsResponse */
export interface BookingSettingsResponse {
  bookingSettings?: BookingSettingsDto[];
  errorMessage?: string;
  status?: BookingSettingsResponseStatusEnum;
}

/** BookingStartedResponse */
export interface BookingStartedResponse {
  errorMessage?: string;
  /** @format uuid */
  requestId?: string;
  status?: BookingStartedResponseStatusEnum;
}

/** BookingSurveyRequest */
export interface BookingSurveyRequest {
  customerType?: BookingSurveyRequestCustomerTypeEnum;
  tokenId?: string;
}

/** BookingVersionResponse */
export interface BookingVersionResponse {
  errorMessage?: string;
  status?: BookingVersionResponseStatusEnum;
  /** @format int32 */
  version?: number;
}

/** BookingsResponse */
export interface BookingsResponse {
  bookings?: BookingListDto[];
  errorMessage?: string;
  status?: BookingsResponseStatusEnum;
}

/** CancelBookingRequest */
export interface CancelBookingRequest {
  customerType?: CancelBookingRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
}

/** CancelBookingResponse */
export interface CancelBookingResponse {
  charge?: PriceField;
  errorMessage?: string;
  status?: CancelBookingResponseStatusEnum;
  type?: CancelBookingResponseTypeEnum;
}

/** CapacityRequirementsSettingsDto */
export interface CapacityRequirementsSettingsDto {
  allowLargeBagsInInterior?: boolean;
  /** @format int32 */
  bagsCapacityUnits?: number;
  /** @format double */
  bigBagCapacityUnits?: number;
  /** @format double */
  passengerCapacityUnits?: number;
  requiredForAirports?: boolean;
  requiredForShips?: boolean;
  requiredForTrains?: boolean;
  /** @format double */
  smallBagCapacityUnits?: number;
}

/** CaptchaSettings */
export interface CaptchaSettings {
  enterprise?: boolean;
  required?: boolean;
  siteKey?: string;
  type?: string;
}

/** ChangePasswordRequest */
export interface ChangePasswordRequest {
  password?: string;
}

/** ChangePhoneRequest */
export interface ChangePhoneRequest {
  phone?: string;
}

/** ChangeProfileRequest */
export interface ChangeProfileRequest {
  customerType?: ChangeProfileRequestCustomerTypeEnum;
  profile?: ProfileDto;
}

/** ChatDto */
export interface ChatDto {
  actorName?: string;
  driverName?: string;
  fromClientToDriver?: boolean;
  messageText?: string;
  received?: boolean;
  /** @format date-time */
  timestamp?: string;
  wasRead?: boolean;
}

/** CheckOperationAreaRequest */
export interface CheckOperationAreaRequest {
  customerType?: CheckOperationAreaRequestCustomerTypeEnum;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  serviceDto?: ServiceDto;
}

/** CheckServicesResponse */
export interface CheckServicesResponse {
  available?: boolean;
  errorMessage?: string;
  status?: CheckServicesResponseStatusEnum;
}

/** ClientPositionRequest */
export interface ClientPositionRequest {
  coordinates?: CoordinatesDto;
  customerTypes?: ClientPositionRequestCustomerTypesEnum[];
}

/** ClientTypeRequest */
export interface ClientTypeRequest {
  clientType?: ClientTypeRequestClientTypeEnum;
  deviceType?: ClientTypeRequestDeviceTypeEnum;
}

/** CompletePaymentRequest */
export interface CompletePaymentRequest {
  content?: string;
  customerType?: CompletePaymentRequestCustomerTypeEnum;
  parameters?: Record<string, string>;
}

/** CompleteSaveCreditCardRequest */
export interface CompleteSaveCreditCardRequest {
  content?: string;
  customerType?: CompleteSaveCreditCardRequestCustomerTypeEnum;
  parameters?: Record<string, string>;
}

/** ConfirmSurveyByTokenRequest */
export interface ConfirmSurveyByTokenRequest {
  answers?: AnswerDto[];
  /** @format int32 */
  rate?: number;
  skipped?: boolean;
  /** @format uuid */
  surveyId?: string;
  tokenId?: string;
}

/** ConfirmSurveyRequest */
export interface ConfirmSurveyRequest {
  answers?: AnswerDto[];
  /** @format int32 */
  rate?: number;
  skipped?: boolean;
  /** @format uuid */
  surveyId?: string;
}

/** ConfirmationRequest */
export interface ConfirmationRequest {
  confirm?: boolean;
  id?: string;
}

/** ContactDto */
export interface ContactDto {
  customerType?: ContactDtoCustomerTypeEnum;
  email?: string;
  /** @format uuid */
  individualId?: string;
  name?: string;
  phone?: string;
}

/** CoordinatesDto */
export interface CoordinatesDto {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

/** CoordinatesRequest */
export interface CoordinatesRequest {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

/** CorporateAuthInfoDto */
export interface CorporateAuthInfoDto {
  /** @format uuid */
  accountId?: string;
  accountName?: string;
  accountNumber?: string;
  caller?: string;
  /** @format uuid */
  callerId?: string;
  madeBookings?: boolean;
  /** @format uuid */
  pinId?: string;
  pinName?: string;
  reportsAvailable?: boolean;
  type?: CorporateAuthInfoDtoTypeEnum;
}

/** CorporateCredentialsResponse */
export interface CorporateCredentialsResponse {
  accountName?: string;
  authInfo?: CorporateAuthInfoDto;
  caller?: ContactDto;
  errorMessage?: string;
  loginFields?: LoginField[];
  mustBeInList?: boolean;
  sessionRefreshToken?: string;
  sessionToken?: string;
  status?: CorporateCredentialsResponseStatusEnum;
}

/** CorporateLoginRequest */
export interface CorporateLoginRequest {
  authentication?: AuthFieldValue[];
  clientType?: CorporateLoginRequestClientTypeEnum;
  device?: DeviceDto;
  recoveryCode?: string;
  refreshToken?: string;
}

/** CorporateLoginResponse */
export interface CorporateLoginResponse {
  authInfo?: CorporateAuthInfoDto;
  errorMessage?: string;
  loginFields?: LoginField[];
  mustBeInList?: boolean;
  sessionRefreshToken?: string;
  sessionToken?: string;
  status?: CorporateLoginResponseStatusEnum;
}

/** CreateComplaintRequest */
export interface CreateComplaintRequest {
  contact?: ContactDto;
  customerType?: CreateComplaintRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  text?: string;
}

/** CreditCardDto */
export interface CreditCardDto {
  billingAddress?: string;
  billingPostcode?: string;
  encryptedDetails?: string;
  expiryMonth?: string;
  expiryYear?: string;
  holderName?: string;
  /** @format uuid */
  id?: string;
  issueNumber?: string;
  number?: string;
  securityNumber?: string;
  sessionId?: string;
  type?: string;
  useForInvoicing?: boolean;
  validFrom?: string;
}

/** CreditCardSettings */
export interface CreditCardSettings {
  /** Used to select an appropriate integration method */
  applePayProvider?: CreditCardSettingsApplePayProviderEnum;
  creditCardType?: CreditCardSettingsCreditCardTypeEnum;
  cseAlgorithmCode?: string;
  csePublicKey?: string;
  cvcRequiredForNewProfileCreditCard?: boolean;
  /** Used to select an appropriate integration method */
  googlePayProvider?: CreditCardSettingsGooglePayProviderEnum;
  initCreditCardPath?: string;
  internalPaymentPageJsURL?: string;
  internalPaymentPageURL?: string;
  internalPaymentPageUsed?: boolean;
  /** Used in client-side sdk to initialize payments */
  merchantCountry?: string;
  /** Mobile user will be able to postpone credit card details input even if only one payment type is available */
  postponeCCDetails?: boolean;
  stripeAccount?: string;
  stripePublicKey?: string;
}

/** CurrencyDto */
export interface CurrencyDto {
  code?: string;
  formatString?: string;
  name?: string;
  symbol?: string;
}

/** CustomerAddressDto */
export interface CustomerAddressDto {
  /** @format uuid */
  addressId?: string;
  caption?: string;
  customerType?: CustomerAddressDtoCustomerTypeEnum;
  data?: string;
  fields?: Record<string, string>;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  note?: string;
  /** @format uuid */
  parentId?: string;
  restrictions?: Restrictions;
  source?: CustomerAddressDtoSourceEnum;
}

/** CustomerAddressSearchResponse */
export interface CustomerAddressSearchResponse {
  addresses?: CustomerAddressDto[];
  errorMessage?: string;
  status?: CustomerAddressSearchResponseStatusEnum;
}

/** CustomerDataRequest */
export interface CustomerDataRequest {
  customerTypes?: CustomerDataRequestCustomerTypesEnum[];
}

/** CustomerRequest */
export interface CustomerRequest {
  customerType?: CustomerRequestCustomerTypeEnum;
}

/** DelayDto */
export interface DelayDto {
  asap?: boolean;
  /** @format date-time */
  date?: string;
  /** @format int32 */
  delay?: number;
}

/** DelayRequest */
export interface DelayRequest {
  customerType?: DelayRequestCustomerTypeEnum;
  instructions?: SpecialInstructionDto[];
  operationType?: DelayRequestOperationTypeEnum;
  /** Main payment type */
  paymentType?: string;
  pickupStop?: StopDto;
  /** @format uuid */
  requestId?: string;
  service?: BookingServiceDto;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
}

/** DelayResponse */
export interface DelayResponse {
  /** @format int32 */
  delay?: number;
  errorMessage?: string;
  offerService?: ServiceDto;
  status?: DelayResponseStatusEnum;
}

/** DeleteAddressListRequest */
export interface DeleteAddressListRequest {
  customerType?: DeleteAddressListRequestCustomerTypeEnum;
  list?: AddressToDelete[];
}

/** DeleteCreditCardRequest */
export interface DeleteCreditCardRequest {
  /** @format uuid */
  creditCardId?: string;
  customerType?: DeleteCreditCardRequestCustomerTypeEnum;
}

/** DeleteCreditCardResponse */
export interface DeleteCreditCardResponse {
  errorMessage?: string;
  status?: DeleteCreditCardResponseStatusEnum;
}

/** DeletePayPalAccountRequest */
export interface DeletePayPalAccountRequest {
  account?: PayPalAccountDto;
}

/** DeliveryDetails */
export interface DeliveryDetails {
  /** @format date-time */
  date?: string;
  signatureUrl?: string;
  status?: DeliveryDetailsStatusEnum;
}

/** DetailedArchiveBookingsResponse */
export interface DetailedArchiveBookingsResponse {
  bookings?: BookingDetailsDto[];
  errorMessage?: string;
  hiddenBookings?: string[];
  /** @format date-time */
  lastUpdateDate?: string;
  status?: DetailedArchiveBookingsResponseStatusEnum;
}

/** DetailedBookingsResponse */
export interface DetailedBookingsResponse {
  bookings?: BookingDetailsDto[];
  errorMessage?: string;
  status?: DetailedBookingsResponseStatusEnum;
}

/** DeviceDto */
export interface DeviceDto {
  appId?: string;
  appVersion?: string;
  deviceId?: string;
  fingerprint?: string;
  imei?: string;
  osId?: string;
  osVersion?: string;
  /** @format int32 */
  screenHeight?: number;
  /** @format int32 */
  screenWidth?: number;
  type?: DeviceDtoTypeEnum;
}

/** DiscountDetailsDto */
export interface DiscountDetailsDto {
  discount?: PriceField;
  discountedTax?: PriceField;
  loyaltyCard?: LoyaltyCardDto;
  promoCode?: PromoCodeDto;
  reason?: string;
  voucher?: VoucherDto;
}

/** DiscountInfoDto */
export interface DiscountInfoDto {
  appliedDiscounts?: DiscountDetailsDto[];
  bonuses?: BonusDto;
  excludedDiscounts?: DiscountDetailsDto[];
}

/** DiscountSettings */
export interface DiscountSettings {
  autoPopulateVoucher?: boolean;
  bonusProgram?: BonusProgramDto;
  loyaltyCardsUsed?: boolean;
  promoCodesUsed?: boolean;
  vouchersUsed?: boolean;
}

/** DriverChangeDto */
export interface DriverChangeDto {
  bookingExtraName?: string;
  /** @format date-time */
  createTs?: string;
  description?: string;
  details?: string;
  /** @format uuid */
  id?: string;
  newValue?: string;
  oldValue?: string;
  status?: DriverChangeDtoStatusEnum;
  type?: DriverChangeDtoTypeEnum;
}

/** DriverChangesConfirmationRequest */
export interface DriverChangesConfirmationRequest {
  confirm?: boolean;
  customerType?: DriverChangesConfirmationRequestCustomerTypeEnum;
  ids?: string[];
}

/** DriverChangesResponse */
export interface DriverChangesResponse {
  changes?: DriverChangeDto[];
  errorMessage?: string;
  newPrice?: PriceField;
  oldPrice?: PriceField;
  status?: DriverChangesResponseStatusEnum;
}

/** DriverDetailsRequest */
export interface DriverDetailsRequest {
  customerType?: DriverDetailsRequestCustomerTypeEnum;
  /** @format int32 */
  historyIntervalInSeconds?: number;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  lastPassedStop?: string;
  loadPassedStop?: boolean;
  loadPosition?: boolean;
  loadPositionHistory?: boolean;
}

/** DriverDetailsResponse */
export interface DriverDetailsResponse {
  /** @format double */
  bearing?: number;
  /** @format date-time */
  driverEta?: string;
  driverRoute?: DriverRouteData[];
  errorMessage?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  /** @format uuid */
  passedStop?: string;
  /** @format double */
  pobLatitude?: number;
  /** @format double */
  pobLongitude?: number;
  status?: DriverDetailsResponseStatusEnum;
}

/** DriverDto */
export interface DriverDto {
  callsign?: string;
  carModel?: string;
  carRegNumber?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  name?: string;
  phone?: string;
  /** @format uuid */
  photoId?: string;
  /** @format double */
  pobLatitude?: number;
  /** @format double */
  pobLongitude?: number;
  vehicleColor?: string;
  vehicleManufacturer?: string;
}

/** DriverMapRequest */
export interface DriverMapRequest {
  bottomRight: CoordinatesDto;
  /** @format int64 */
  priorityTrackDurationInSeconds?: number;
  /** @format uuid */
  serviceId?: string;
  topLeft: CoordinatesDto;
  usedDrivers?: string[];
}

/** DriverMapResponse */
export interface DriverMapResponse {
  driverData?: DriverRouteDto[];
  errorMessage?: string;
  status?: DriverMapResponseStatusEnum;
}

/** DriverPositionResponse */
export interface DriverPositionResponse {
  /** @format double */
  bearing?: number;
  /** @format date-time */
  driverEta?: string;
  errorMessage?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  /** @format double */
  pobLatitude?: number;
  /** @format double */
  pobLongitude?: number;
  status?: DriverPositionResponseStatusEnum;
}

/** DriverRouteData */
export interface DriverRouteData {
  /** @format double */
  bearing?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  /** @format int64 */
  timestamp?: number;
}

/** DriverRouteDto */
export interface DriverRouteDto {
  /** @format uuid */
  driverId?: string;
  routeData?: DriverRouteData[];
}

/** DurationResponse */
export interface DurationResponse {
  /** @format int64 */
  duration?: number;
  /** @format int64 */
  durationInTraffic?: number;
  errorMessage?: string;
  status?: DurationResponseStatusEnum;
}

/** EditLostPropertyRequest */
export interface EditLostPropertyRequest {
  customerType?: EditLostPropertyRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  property?: string;
  /** @format uuid */
  propertyId?: string;
}

/** FavoriteAddressesResponse */
export interface FavoriteAddressesResponse {
  addresses?: FavouriteAddressDto[];
  errorMessage?: string;
  status?: FavoriteAddressesResponseStatusEnum;
}

/** FavouriteAddressDto */
export interface FavouriteAddressDto {
  /** @format uuid */
  addressId?: string;
  caption?: string;
  customerType?: FavouriteAddressDtoCustomerTypeEnum;
  data?: string;
  favouriteName?: string;
  fields?: Record<string, string>;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  global?: boolean;
  /** @format date-time */
  lastUsedTs?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  note?: string;
  /** @format uuid */
  parentId?: string;
  restrictions?: Restrictions;
  source?: FavouriteAddressDtoSourceEnum;
}

/** FinAccountLogsRequest */
export interface FinAccountLogsRequest {
  asc?: boolean;
  customerType?: FinAccountLogsRequestCustomerTypeEnum;
  /** @format date-time */
  from?: string;
  jobNumber?: string;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  offset?: number;
  /** @format date-time */
  to?: string;
  type?: FinAccountLogsRequestTypeEnum;
}

/** FindDefaultContactResponse */
export interface FindDefaultContactResponse {
  contact?: ContactDto;
  errorMessage?: string;
  status?: FindDefaultContactResponseStatusEnum;
}

/** FindDefaultEmailResponse */
export interface FindDefaultEmailResponse {
  email?: string;
  errorMessage?: string;
  status?: FindDefaultEmailResponseStatusEnum;
}

/** FindDefaultInfoRequest */
export interface FindDefaultInfoRequest {
  /** @format uuid */
  individualId?: string;
}

/** FindDefaultPhoneResponse */
export interface FindDefaultPhoneResponse {
  errorMessage?: string;
  phone?: string;
  status?: FindDefaultPhoneResponseStatusEnum;
}

/** FindTokenAuthInfo */
export interface FindTokenAuthInfo {
  /** @format uuid */
  accountId?: string;
  accountName?: string;
  accountNumber?: string;
  caller?: string;
  /** @format uuid */
  callerId?: string;
  madeBookings?: boolean;
  name?: string;
  phone?: string;
  /** @format uuid */
  pinId?: string;
  pinName?: string;
  reportsAvailable?: boolean;
  type?: FindTokenAuthInfoTypeEnum;
}

/** FindTokenRequest */
export interface FindTokenRequest {
  /** @format uuid */
  exposedToken?: string;
}

/** FindTokenResponse */
export interface FindTokenResponse {
  authInfo?: FindTokenAuthInfo;
  errorMessage?: string;
  sessionRefreshToken?: string;
  sessionToken?: string;
  status?: FindTokenResponseStatusEnum;
}

/** FlightInfoDto */
export interface FlightInfoDto {
  airline?: AirlineDto;
  airport?: CustomerAddressDto;
  arrivalFrom?: string;
  /** @format date-time */
  eta?: string;
  number?: string;
  status?: FlightInfoDtoStatusEnum;
  terminal?: CustomerAddressDto;
}

/** FlightInfoRequest */
export interface FlightInfoRequest {
  /** @format uuid */
  airportId?: string;
  /** @format date-time */
  flightDate?: string;
  flightNumber?: string;
}

/** FlightInfoResponse */
export interface FlightInfoResponse {
  errorMessage?: string;
  flight?: FlightInfoDto;
  status?: FlightInfoResponseStatusEnum;
}

/** GeoCoordinates */
export interface GeoCoordinates {
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

/** HideBookingsRequest */
export interface HideBookingsRequest {
  bookingIds?: Record<string, string>;
}

/** InitSecure3DRequest */
export interface InitSecure3DRequest {
  /** @format uuid */
  amendJobId?: string;
  /** @format uuid */
  bookingRequestId?: string;
  /** @format uuid */
  creditCardId?: string;
  creditCardNumber?: string;
  customerType?: InitSecure3DRequestCustomerTypeEnum;
  /** @format uuid */
  ospTokenId?: string;
  /** @format uuid */
  paymentLinkTokenId?: string;
  sessionId?: string;
  type?: InitSecure3DRequestTypeEnum;
}

/** InitSecure3DResponse */
export interface InitSecure3DResponse {
  errorMessage?: string;
  redirectDto?: RedirectDto;
  status?: InitSecure3DResponseStatusEnum;
}

/** InitialSettingsDto */
export interface InitialSettingsDto {
  /** taxi.sherbookConfig.smartphoneApplicationSettings.android */
  androidAppUrl?: string;
  captcha?: CaptchaSettings;
  companyName?: string;
  currency?: CurrencyDto;
  /** Customer service phone from DEFAULT company information */
  customerServicePhone?: string;
  /**
   * taxi.sherbookConfig.driverPositionServiceDelay
   * @format int32
   */
  driverPositionRefreshPeriod?: number;
  enableRealms?: boolean;
  /** taxi.sherbookConfig.smartphoneApplicationSettings.iphone */
  iPhoneAppUrl?: string;
  /**
   * Show credit card form after registration.
   * -1 - disabled; 0 - screen is shown, customer can skip; >0 - screen is show, customer can skip after specified number of seconds
   * @format int32
   */
  initialCreditCardScreenMode?: number;
  /**
   * taxi.sherbookConfig.jobVersionServiceDelay
   * @format int32
   */
  jobDetailsRefreshPeriod?: number;
  /**
   * admin.settings.security.passwordMinLength
   * @format int32
   */
  passwordLength?: number;
  /** taxi.sherbookConfig.passwordCallbackEnabled */
  passwordRecoveryCallbackEnabled?: boolean;
  /** taxi.sherbookConfig.pricingPolicyURL */
  pricingPolicyURL?: string;
  /** taxi.sherbookConfig.privacyPolicyUrl */
  privacyPolicyUrl?: string;
  /** taxi.MarketingCampaignConfig.consentRequestedOnAuth */
  requestConsentToNotifications?: boolean;
  /** taxi.sherbookConfig.requireTermsConditionsAndPrivacyPolicyAgreement */
  requirePolicyAgreement?: boolean;
  /** Email from DEFAULT company information */
  supportEmail?: string;
  /** taxi.sherbookConfig.termsAndConditionUrl */
  termsAndConditionUrl?: string;
  /** Server time zone ID */
  timeZoneID?: string;
  /** Website from DEFAULT company information */
  website?: string;
}

/** InitialSettingsResponse */
export interface InitialSettingsResponse {
  errorMessage?: string;
  initialSettings?: InitialSettingsDto;
  status?: InitialSettingsResponseStatusEnum;
}

/** InstructionsValidationInfo */
export interface InstructionsValidationInfo {
  /** @format uuid */
  instructionId?: string;
  name?: string;
  parameterExistsPassed?: boolean;
  parameterMandatoryPassed?: boolean;
  parameterTypePassed?: boolean;
  parameterValuePassed?: boolean;
  validationInfo?: string;
}

/** JobOfferCancelRequest */
export interface JobOfferCancelRequest {
  customerType?: JobOfferCancelRequestCustomerTypeEnum;
  /** @format uuid */
  offerId?: string;
}

/** JobOfferCheckRequest */
export interface JobOfferCheckRequest {
  customerType?: JobOfferCheckRequestCustomerTypeEnum;
  /** @format uuid */
  offerId?: string;
}

/** JobOfferCheckResponse */
export interface JobOfferCheckResponse {
  errorMessage?: string;
  offerStatus?: JobOfferStatusDto;
  status?: JobOfferCheckResponseStatusEnum;
}

/** JobOfferRequest */
export interface JobOfferRequest {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  creditCardChanged?: boolean;
  customerType?: JobOfferRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: JobOfferRequestOperationTypeEnum;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentMethodId?: string;
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  price?: PriceDto;
  promoCode?: string;
  references?: ReferenceDto[];
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  serverData?: string;
  service?: BookingServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  voucher?: VoucherDto;
}

/** JobOfferResponse */
export interface JobOfferResponse {
  errorMessage?: string;
  /** @format uuid */
  offerId?: string;
  status?: JobOfferResponseStatusEnum;
}

/** JobOfferSettings */
export interface JobOfferSettings {
  /**
   * Timeout in seconds for client to make decision about offered driver (taxi.mobileWsAppConfiguration.jobOfferDecisionTimeout)
   * @format int32
   */
  jobOfferDecisionTimeout?: number;
  /**
   * Delay in seconds between requests to the offer end-point to get current state of an offer (taxi.mobileWsAppConfiguration.jobOfferServiceDelay)
   * @format int32
   */
  jobOfferRefreshPeriod?: number;
  /**
   * Period of time between the first notification and the moment when offer is closed. (taxi.JobOfferConfiguration.overallOfferTimeoutSeconds) + additional timeout in seconds for drivers to make decision about offered booking (taxi.mobileWsAppConfiguration.jobOfferTimeoutDelta)
   * @format int32
   */
  jobOfferTimeout?: number;
}

/** JobOfferStatusDto */
export interface JobOfferStatusDto {
  /** @format date-time */
  confirmationDate?: string;
  /** @format int32 */
  delay?: number;
  driver?: DriverDto;
  state?: JobOfferStatusDtoStateEnum;
}

/** JobStopsAvailabilityRequest */
export interface JobStopsAvailabilityRequest {
  customerType?: JobStopsAvailabilityRequestCustomerTypeEnum;
  /** @format uuid */
  jobId?: string;
  type?: JobStopsAvailabilityRequestTypeEnum;
}

/**
 * JobStopsAvailabilityResponse
 * List of currently unavailable job stops
 */
export interface JobStopsAvailabilityResponse {
  errorMessage?: string;
  message?: string;
  status?: JobStopsAvailabilityResponseStatusEnum;
  stops?: StopDto[];
}

/** JourneyTimeRequest */
export interface JourneyTimeRequest {
  asap?: boolean;
  customerType?: JourneyTimeRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  operationType?: JourneyTimeRequestOperationTypeEnum;
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
}

/** JourneyTimeResponse */
export interface JourneyTimeResponse {
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  durationInTraffic?: number;
  errorMessage?: string;
  status?: JourneyTimeResponseStatusEnum;
}

/** KioskConfigDto */
export interface KioskConfigDto {
  askDestination?: boolean;
  askPickup?: boolean;
  client?: string;
  clientContactType?: string;
  currentLocale?: string;
  customerIdentification?: KioskCustomerIdentificationDto;
  jobIdentificationType?: string;
  languages?: LanguageDto[];
  phoneNumberFormatterConfig?: PhoneNumberConfigDto;
  prebookAvailable?: boolean;
  releaseNumber?: string;
  useTheme?: boolean;
}

/** KioskConfigResponse */
export interface KioskConfigResponse {
  config?: KioskConfigDto;
  errorMessage?: string;
  status?: KioskConfigResponseStatusEnum;
}

/** KioskCustomerIdentificationDto */
export interface KioskCustomerIdentificationDto {
  nameRequired?: boolean;
  phoneRequired?: boolean;
  reference?: ReferenceFieldDto;
  referenceRequired?: boolean;
}

/** LanguageDto */
export interface LanguageDto {
  caption?: string;
  locale?: string;
}

/** LoadAirportsRequest */
export interface LoadAirportsRequest {
  customerTypes?: LoadAirportsRequestCustomerTypesEnum[];
  /** @format date-time */
  lastUpdateDate?: string;
  loadMeetingPoints?: boolean;
}

/** LoadAvailableContactsRequest */
export interface LoadAvailableContactsRequest {
  customerTypes?: LoadAvailableContactsRequestCustomerTypesEnum[];
  partOfName?: string;
}

/** LoadAvailableContactsResponse */
export interface LoadAvailableContactsResponse {
  contacts?: ContactDto[];
  errorMessage?: string;
  status?: LoadAvailableContactsResponseStatusEnum;
}

/** LoadBookingSurveyResponse */
export interface LoadBookingSurveyResponse {
  complaint?: string;
  errorMessage?: string;
  status?: LoadBookingSurveyResponseStatusEnum;
  survey?: SurveyDto;
  tips?: TipsDto[];
}

/** LoadChatRequest */
export interface LoadChatRequest {
  customerType?: LoadChatRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  lastMessageTimestamp?: string;
  onlyUnread?: boolean;
}

/** LoadChatResponse */
export interface LoadChatResponse {
  chat?: ChatDto[];
  errorMessage?: string;
  status?: LoadChatResponseStatusEnum;
}

/** LoadComplaintRequest */
export interface LoadComplaintRequest {
  customerType?: LoadComplaintRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
}

/** LoadComplaintResponse */
export interface LoadComplaintResponse {
  errorMessage?: string;
  status?: LoadComplaintResponseStatusEnum;
  text?: string;
}

/** LoadCreditCardResponse */
export interface LoadCreditCardResponse {
  creditCards?: ShortCreditCardDto[];
  errorMessage?: string;
  status?: LoadCreditCardResponseStatusEnum;
}

/** LoadLanguagesResponse */
export interface LoadLanguagesResponse {
  errorMessage?: string;
  languages?: LanguageDto[];
  status?: LoadLanguagesResponseStatusEnum;
}

/** LoadPassengersResponse */
export interface LoadPassengersResponse {
  errorMessage?: string;
  passengers?: ContactDto[];
  status?: LoadPassengersResponseStatusEnum;
}

/** LoadPayPalAccountResponse */
export interface LoadPayPalAccountResponse {
  accounts?: PayPalAccountDto[];
  errorMessage?: string;
  status?: LoadPayPalAccountResponseStatusEnum;
}

/** LoadPaymentTypesRequest */
export interface LoadPaymentTypesRequest {
  /** @format uuid */
  amendJobId?: string;
  customerTypes?: LoadPaymentTypesRequestCustomerTypesEnum[];
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

/** LoadPaymentTypesResponse */
export interface LoadPaymentTypesResponse {
  errorMessage?: string;
  paymentTypes?: PaymentTypeDto[];
  status?: LoadPaymentTypesResponseStatusEnum;
}

/** LoadProfileResponse */
export interface LoadProfileResponse {
  errorMessage?: string;
  profile?: ProfileDto;
  status?: LoadProfileResponseStatusEnum;
}

/** LoadQrCodeRequest */
export interface LoadQrCodeRequest {
  customerType?: LoadQrCodeRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  loadData?: boolean;
}

/** LoadQrCodeResponse */
export interface LoadQrCodeResponse {
  errorMessage?: string;
  qr?: QrCodeDto;
  status?: LoadQrCodeResponseStatusEnum;
}

/** LoadReferralCodeResponse */
export interface LoadReferralCodeResponse {
  errorMessage?: string;
  referralCode?: ReferralCodeDto;
  status?: LoadReferralCodeResponseStatusEnum;
}

/** LoadReportsResponse */
export interface LoadReportsResponse {
  errorMessage?: string;
  reports?: ReportDto[];
  status?: LoadReportsResponseStatusEnum;
}

/** LoadServicesRequest */
export interface LoadServicesRequest {
  /** @format uuid */
  amendJobId?: string;
  customerTypes?: LoadServicesRequestCustomerTypesEnum[];
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
}

/** LoadServicesResponse */
export interface LoadServicesResponse {
  errorMessage?: string;
  services?: ServiceDto[];
  status?: LoadServicesResponseStatusEnum;
}

/** LoadSpecialInstructionsRequest */
export interface LoadSpecialInstructionsRequest {
  /** @format uuid */
  amendJobId?: string;
  customerType?: LoadSpecialInstructionsRequestCustomerTypeEnum;
  service?: BookingServiceDto;
}

/** LoadSpecialInstructionsResponse */
export interface LoadSpecialInstructionsResponse {
  errorMessage?: string;
  instructions?: SpecialInstructionFieldDto[];
  status?: LoadSpecialInstructionsResponseStatusEnum;
}

/** LoadSurveyResponse */
export interface LoadSurveyResponse {
  errorMessage?: string;
  status?: LoadSurveyResponseStatusEnum;
  survey?: SurveyDto;
}

/** LoadSurveyResultResponse */
export interface LoadSurveyResultResponse {
  errorMessage?: string;
  /** @format int32 */
  rate?: number;
  skipped?: boolean;
  status?: LoadSurveyResultResponseStatusEnum;
  surveyAnswers?: AnswerDto[];
  /** @format uuid */
  surveyId?: string;
}

/** LoginField */
export interface LoginField {
  /** Available caller options with emails and phones */
  contacts?: ContactDto[];
  /** Value passed in */
  currentValue?: string;
  /** Additional info */
  flags?: string[];
  /** Field type */
  key?: LoginFieldKeyEnum;
  /** Localized field name */
  label?: string;
  /** Available caller options */
  options?: string[];
  /** Is field passed validation or not */
  valid?: boolean;
}

/** LostPropertiesResponse */
export interface LostPropertiesResponse {
  errorMessage?: string;
  properties?: LostPropertyDto[];
  status?: LostPropertiesResponseStatusEnum;
}

/** LostPropertyDto */
export interface LostPropertyDto {
  /** @format date-time */
  date?: string;
  /** @format uuid */
  id?: string;
  property?: string;
  status?: LostPropertyDtoStatusEnum;
}

/** LostPropertyRequest */
export interface LostPropertyRequest {
  customerType?: LostPropertyRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  propertyId?: string;
}

/** LoyaltyCardDto */
export interface LoyaltyCardDto {
  customerType?: LoyaltyCardDtoCustomerTypeEnum;
  defaultCard?: boolean;
  discount?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  number?: string;
}

/** LoyaltyCardsResponse */
export interface LoyaltyCardsResponse {
  errorMessage?: string;
  loyaltyCards?: LoyaltyCardDto[];
  status?: LoyaltyCardsResponseStatusEnum;
}

/** MasterCardSessionResponse */
export interface MasterCardSessionResponse {
  apiVersion?: string;
  errorMessage?: string;
  gatewayUrl?: string;
  id?: string;
  merchantId?: string;
  status?: MasterCardSessionResponseStatusEnum;
}

/** MessageToDriverRequest */
export interface MessageToDriverRequest {
  customerType?: MessageToDriverRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  message?: string;
}

/** MessageToDriverResponse */
export interface MessageToDriverResponse {
  errorMessage?: string;
  status?: MessageToDriverResponseStatusEnum;
  /** @format date-time */
  timestamp?: string;
}

/** MostUsedAddressRequest */
export interface MostUsedAddressRequest {
  customerTypes?: MostUsedAddressRequestCustomerTypesEnum[];
  /** @format int32 */
  limit?: number;
  type?: MostUsedAddressRequestTypeEnum;
}

/** MultiPaymentPartDto */
export interface MultiPaymentPartDto {
  amount?: PriceField;
  paymentCode?: string;
  paymentName?: string;
}

/** NotificationConfirmRequest */
export interface NotificationConfirmRequest {
  pushMessageId?: string;
}

/** NotificationSettingsDto */
export interface NotificationSettingsDto {
  consentToEmail?: boolean;
  consentToPush?: boolean;
  consentToSms?: boolean;
  consentToWhatsapp?: boolean;
  marketingConsentToWhatsapp?: boolean;
}

/** NotificationTokenRequest */
export interface NotificationTokenRequest {
  customerType?: NotificationTokenRequestCustomerTypeEnum;
  token?: string;
}

/** OffSessionInvoicePaymentItem */
export interface OffSessionInvoicePaymentItem {
  accountName?: string;
  accountNumber?: string;
  individualName?: string;
  /** @format date-time */
  invoiceDate?: string;
  invoiceNumber?: string;
  jobs?: OffSessionJobPaymentItem[];
  /** @format int32 */
  jobsCount?: number;
}

/** OffSessionJobPaymentItem */
export interface OffSessionJobPaymentItem {
  account?: string;
  asap?: boolean;
  convertedPrice?: PriceDto;
  driver?: DriverDto;
  drop?: string;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  jobDate?: string;
  mainPassengerName?: string;
  number?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  pickup?: string;
  price?: PriceDto;
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  status?: OffSessionJobPaymentItemStatusEnum;
}

/** OffSessionPaymentData */
export interface OffSessionPaymentData {
  amount?: PriceField;
  /** @format date-time */
  closeTs?: string;
  convertedAmount?: PriceField;
  creditCard?: ShortCreditCardDto;
  creditCardSettings?: CreditCardSettings;
  cvcRequiredForExistingCreditCard?: boolean;
  cvcRequiredForNewCreditCard?: boolean;
  invoiceItem?: OffSessionInvoicePaymentItem;
  jobItem?: OffSessionJobPaymentItem;
  outdated?: boolean;
  paymentType?: string;
}

/** OffSessionPaymentDataResponse */
export interface OffSessionPaymentDataResponse {
  data?: OffSessionPaymentData;
  errorMessage?: string;
  status?: OffSessionPaymentDataResponseStatusEnum;
}

/** OffSessionPaymentRequest */
export interface OffSessionPaymentRequest {
  clientType?: OffSessionPaymentRequestClientTypeEnum;
  paymentMethodId?: string;
  paymentTypeCode?: string;
  serverData?: string;
}

/** OffSessionPaymentResponse */
export interface OffSessionPaymentResponse {
  errorMessage?: string;
  paymentData?: PaymentData;
  redirectInfo?: RedirectDto;
  status?: OffSessionPaymentResponseStatusEnum;
}

/** OffSessionPaymentStartRequest */
export interface OffSessionPaymentStartRequest {
  clientType?: OffSessionPaymentStartRequestClientTypeEnum;
  creditCardDto?: CreditCardDto;
  tokenId?: string;
}

/** PartnerDto */
export interface PartnerDto {
  caption?: string;
  city?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  timezone?: string;
}

/** PassedStopRequest */
export interface PassedStopRequest {
  customerType?: PassedStopRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  /** @format uuid */
  lastPassedStop?: string;
}

/** PassedStopResponse */
export interface PassedStopResponse {
  errorMessage?: string;
  /**
   * ID of the last passed stop
   * @format uuid
   */
  passedStop?: string;
  status?: PassedStopResponseStatusEnum;
}

/** PayPalAccountDto */
export interface PayPalAccountDto {
  business?: boolean;
  customerType?: PayPalAccountDtoCustomerTypeEnum;
  email?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

/** PayPalFeedbackDto */
export interface PayPalFeedbackDto {
  success?: boolean;
  token?: string;
  /** @format uuid */
  transactionId?: string;
}

/** PayPalFeedbackRequest */
export interface PayPalFeedbackRequest {
  customerType?: PayPalFeedbackRequestCustomerTypeEnum;
  feedback?: PayPalFeedbackDto;
}

/** PayPalResponse */
export interface PayPalResponse {
  account?: PayPalAccountDto;
  errorMessage?: string;
  status?: PayPalResponseStatusEnum;
}

/** PaymentBookingDto */
export interface PaymentBookingDto {
  account?: string;
  asap?: boolean;
  driver?: DriverDto;
  drop?: string;
  extPrice?: PriceField;
  /** @format uuid */
  id?: string;
  /** @format date-time */
  jobDate?: string;
  mainPassengerName?: string;
  number?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  paymentTypeCode?: string;
  pickup?: string;
  price?: PriceField;
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  status?: PaymentBookingDtoStatusEnum;
}

/** PaymentCompleteResponse */
export interface PaymentCompleteResponse {
  booking?: PaymentBookingDto;
  errorMessage?: string;
  status?: PaymentCompleteResponseStatusEnum;
}

/** PaymentData */
export interface PaymentData {
  clientSecret?: string;
  requiresClientAction?: boolean;
  serverData?: string;
}

/** PaymentInfoRequest */
export interface PaymentInfoRequest {
  clientType?: PaymentInfoRequestClientTypeEnum;
}

/** PaymentInfoResponse */
export interface PaymentInfoResponse {
  booking?: PaymentBookingDto;
  creditCardSettings?: CreditCardSettings;
  errorMessage?: string;
  status?: PaymentInfoResponseStatusEnum;
}

/** PaymentRequest */
export interface PaymentRequest {
  clientType?: PaymentRequestClientTypeEnum;
  creditCard?: CreditCardDto;
  paymentMethodId?: string;
  paymentTypeCode?: string;
  serverData?: string;
}

/** PaymentResponse */
export interface PaymentResponse {
  bookingDto?: PaymentBookingDto;
  errorMessage?: string;
  paymentData?: PaymentData;
  redirectDto?: RedirectDto;
  status?: PaymentResponseStatusEnum;
}

/** PaymentTypeDto */
export interface PaymentTypeDto {
  askReference?: boolean;
  availableBalance?: number;
  availableBalanceFormatted?: string;
  code?: string;
  creditCardsAvailable?: boolean;
  customerType?: PaymentTypeDtoCustomerTypeEnum;
  cvcRequiredForExistingCreditCards?: boolean;
  cvcRequiredForNewCreditCards?: boolean;
  defaultAdditionalType?: boolean;
  defaultLimitAmount?: number;
  defaultLimitPercent?: number;
  defaultType?: boolean;
  description?: string;
  limitType?: PaymentTypeDtoLimitTypeEnum;
  name?: string;
  payInCar?: boolean;
  usedByWebKiosk?: boolean;
}

/** PendingApprovalBookingsResponse */
export interface PendingApprovalBookingsResponse {
  bookings?: SupervisorBookingDto[];
  errorMessage?: string;
  status?: PendingApprovalBookingsResponseStatusEnum;
  /** @format int64 */
  version?: number;
}

/** PendingApprovalCountResponse */
export interface PendingApprovalCountResponse {
  /** @format int32 */
  count?: number;
  errorMessage?: string;
  status?: PendingApprovalCountResponseStatusEnum;
}

/** PendingApprovalListRequest */
export interface PendingApprovalListRequest {
  customerType?: PendingApprovalListRequestCustomerTypeEnum;
  filter?: BookingFilterDto;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  offset?: number;
}

/** PendingApprovalListVersionResponse */
export interface PendingApprovalListVersionResponse {
  errorMessage?: string;
  /** @format int64 */
  latestJob?: number;
  status?: PendingApprovalListVersionResponseStatusEnum;
}

/** PhoneNumberConfigDto */
export interface PhoneNumberConfigDto {
  /** taxi.phoneFormat.allowObfuscatedNumbers (default true) */
  allowObfuscatedNumbers?: boolean;
  /** taxi.phoneFormat.decorated (default true) */
  decorateNumbers?: boolean;
  /** taxi.phoneFormat.active (default true) */
  enable?: boolean;
  /** taxi.phoneFormat.regionCode (default GB) */
  regionCode?: string;
  /** taxi.phoneFormat.useCompactNationalNumbers (default false) */
  useCompactNationalNumbers?: boolean;
}

/** PhoneRequest */
export interface PhoneRequest {
  device?: DeviceDto;
  phone?: string;
}

/** PolicyAgreementResponse */
export interface PolicyAgreementResponse {
  accepted?: boolean;
  errorMessage?: string;
  status?: PolicyAgreementResponseStatusEnum;
}

/** PortalBookingActionsResponse */
export interface PortalBookingActionsResponse {
  actions?: AvailableBookingActionsDto;
  errorMessage?: string;
  status?: PortalBookingActionsResponseStatusEnum;
}

/** PortalBookingCountResponse */
export interface PortalBookingCountResponse {
  /** @format int32 */
  count?: number;
}

/** PortalBookingListRequest */
export interface PortalBookingListRequest {
  customerType?: PortalBookingListRequestCustomerTypeEnum;
  filter?: BookingFilterDto;
  /** @format int32 */
  limit?: number;
  /** @format int32 */
  offset?: number;
  sort?: BookingListOrder[];
}

/** PortalConfigDto */
export interface PortalConfigDto {
  /** taxi.sherbookPortalConfig.anonymousCaller */
  anonymousModeEnabled?: boolean;
  appClientConfig?: string;
  /** taxi.sherbookPortalConfig.callCenterPhoneNumber */
  callCenterPhoneNumber?: string;
  /** taxi.sherbookPortalConfig.copyright */
  copyright?: string;
  currentLocale?: string;
  /** taxi.GoogleKeyConfiguration.clientId */
  googleClientId?: string;
  /** Google tag manager container id (taxi.sherbookPortalConfig.gtmId) */
  gtmId?: string;
  languages?: LanguageDto[];
  /**
   * taxi.sherbookPortalConfig.defaultMapLatitude (default 51.5001)
   * @format double
   */
  mapStartupLatitude?: number;
  /**
   * taxi.sherbookPortalConfig.defaultMapLongitude (default -0.1262)
   * @format double
   */
  mapStartupLongitude?: number;
  phoneNumberFormatterConfig?: PhoneNumberConfigDto;
  /** taxi.sherbookPortalConfig.prePopulateStops (default true) */
  prePopulateStops?: boolean;
  supportEmail?: string;
}

/** PortalConfigResponse */
export interface PortalConfigResponse {
  config?: PortalConfigDto;
  errorMessage?: string;
  status?: PortalConfigResponseStatusEnum;
}

/** PortalErrorRequest */
export interface PortalErrorRequest {
  error?: string;
}

/** PortalFilteredBookingsCountRequest */
export interface PortalFilteredBookingsCountRequest {
  customerType?: PortalFilteredBookingsCountRequestCustomerTypeEnum;
  filter?: BookingFilterDto;
}

/** PortalSetLocaleRequest */
export interface PortalSetLocaleRequest {
  locale?: string;
}

/** PrebookLimitRangeResponse */
export interface PrebookLimitRangeResponse {
  errorMessage?: string;
  /** @format date-time */
  jobDateRangeMax?: string;
  /** @format date-time */
  jobDateRangeMin?: string;
  status?: PrebookLimitRangeResponseStatusEnum;
}

/** PrebookLimitRequest */
export interface PrebookLimitRequest {
  customerType?: PrebookLimitRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  operationType?: PrebookLimitRequestOperationTypeEnum;
  pickupStop?: StopDto;
  /** @format uuid */
  requestId?: string;
  service?: BookingServiceDto;
  /** @format uuid */
  usedJobId?: string;
}

/** PrebookLimitResponse */
export interface PrebookLimitResponse {
  errorMessage?: string;
  /** @format date-time */
  nearestEarlier?: string;
  /** @format date-time */
  nearestLater?: string;
  status?: PrebookLimitResponseStatusEnum;
}

/** PrepaidAccountInfoResponse */
export interface PrepaidAccountInfoResponse {
  availableBalance?: number;
  availableBalanceFormatted?: string;
  balance?: number;
  balanceFormatted?: string;
  canClose?: boolean;
  canCreate?: boolean;
  currency?: string;
  currencyFormat?: string;
  enabled?: boolean;
  errorMessage?: string;
  /** @format int32 */
  precision?: number;
  status?: PrepaidAccountInfoResponseStatusEnum;
  /** @format int32 */
  timeoutTFASec?: number;
  useTFA?: boolean;
}

/** PrepaidCheckSmsCodeRequest */
export interface PrepaidCheckSmsCodeRequest {
  amount?: number;
  customerType?: PrepaidCheckSmsCodeRequestCustomerTypeEnum;
  operationData?: string;
  smsCode?: string;
  /** @format uuid */
  toIndividualId?: string;
}

/** PrepaidCheckSmsCodeResponse */
export interface PrepaidCheckSmsCodeResponse {
  errorMessage?: string;
  result?: boolean;
  status?: PrepaidCheckSmsCodeResponseStatusEnum;
}

/** PrepaidCommissionCalculationRequest */
export interface PrepaidCommissionCalculationRequest {
  amount?: number;
  customerType?: PrepaidCommissionCalculationRequestCustomerTypeEnum;
}

/** PrepaidCommissionCalculationResponse */
export interface PrepaidCommissionCalculationResponse {
  amount?: number;
  errorMessage?: string;
  status?: PrepaidCommissionCalculationResponseStatusEnum;
}

/** PrepaidDepositRequest */
export interface PrepaidDepositRequest {
  amount?: number;
  creditCard?: CreditCardDto;
  customerType?: PrepaidDepositRequestCustomerTypeEnum;
  operationData?: string;
  paymentMethodId?: string;
  paymentTypeCode?: string;
  serverData?: string;
  smsCode?: string;
  /** @format uuid */
  toIndividualId?: string;
}

/** PrepaidDepositResponse */
export interface PrepaidDepositResponse {
  errorMessage?: string;
  newBalance?: number;
  paymentData?: PaymentData;
  redirectDto?: RedirectDto;
  status?: PrepaidDepositResponseStatusEnum;
}

/** PrepaidFindUserRequest */
export interface PrepaidFindUserRequest {
  customerType?: PrepaidFindUserRequestCustomerTypeEnum;
  phone?: string;
}

/** PrepaidSmsRequest */
export interface PrepaidSmsRequest {
  amount?: number;
  customerType?: PrepaidSmsRequestCustomerTypeEnum;
  /** @format uuid */
  toIndividualId?: string;
}

/** PrepaidSmsResponse */
export interface PrepaidSmsResponse {
  errorMessage?: string;
  operationData?: string;
  status?: PrepaidSmsResponseStatusEnum;
  timeout?: boolean;
}

/** PrepaidTransferRequest */
export interface PrepaidTransferRequest {
  amount?: number;
  customerType?: PrepaidTransferRequestCustomerTypeEnum;
  operationData?: string;
  smsCode?: string;
  /** @format uuid */
  toIndividualId?: string;
}

/** PrepaidTransferResponse */
export interface PrepaidTransferResponse {
  errorMessage?: string;
  newBalance?: number;
  status?: PrepaidTransferResponseStatusEnum;
}

/** PrepaidUserResponse */
export interface PrepaidUserResponse {
  currentUser?: boolean;
  errorMessage?: string;
  /** @format uuid */
  individualId?: string;
  individualName?: string;
  status?: PrepaidUserResponseStatusEnum;
}

/** PriceDetailsDto */
export interface PriceDetailsDto {
  amount?: PriceField;
  code?: string;
  name?: string;
  type?: PriceDetailsDtoTypeEnum;
}

/** PriceDto */
export interface PriceDto {
  alternativeCurrency?: string;
  details?: Record<string, string>;
  discount?: PriceField;
  gross?: PriceField;
  net?: PriceField;
  payments?: MultiPaymentPartDto[];
  prefix?: string;
  priceDetails?: PriceDetailsDto[];
  primaryCurrency?: string;
  taxTotal?: PriceField;
  usedCurrency?: string;
}

/** PriceField */
export interface PriceField {
  currency?: string;
  currencyFormat?: string;
  formattedValue?: string;
  value?: number;
}

/** PriceRequest */
export interface PriceRequest {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  creditCardChanged?: boolean;
  customerType?: PriceRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: PriceRequestOperationTypeEnum;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentMethodId?: string;
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  price?: PriceDto;
  promoCode?: string;
  references?: ReferenceDto[];
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  serverData?: string;
  service?: BookingServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  voucher?: VoucherDto;
}

/** PriceResponse */
export interface PriceResponse {
  asDirectedMinutesRounding?: AsDirectedMinutesRoundingInfoDto;
  discount?: DiscountInfoDto;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  durationInTraffic?: number;
  errorMessage?: string;
  extDiscount?: DiscountInfoDto;
  extPrice?: PriceDto;
  price?: PriceDto;
  status?: PriceResponseStatusEnum;
}

/** ProfileDto */
export interface ProfileDto {
  accountName?: string;
  consentToWhatsapp?: boolean;
  email?: string;
  name?: string;
  notifications?: NotificationSettingsDto;
}

/** ProfileSettings */
export interface ProfileSettings {
  mustBeInList?: boolean;
  populateByDefault?: boolean;
  showOptions?: boolean;
  tag?: string;
  used?: boolean;
}

/** PromoCodeDto */
export interface PromoCodeDto {
  customerType?: PromoCodeDtoCustomerTypeEnum;
  description?: string;
  discount?: string;
  discountExt?: string;
  number?: string;
}

/** ProposedAddressesRequest */
export interface ProposedAddressesRequest {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  creditCardChanged?: boolean;
  customerType?: ProposedAddressesRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: ProposedAddressesRequestOperationTypeEnum;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentMethodId?: string;
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  price?: PriceDto;
  promoCode?: string;
  references?: ReferenceDto[];
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  serverData?: string;
  service?: BookingServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  voucher?: VoucherDto;
}

/** ProposedAddressesResponse */
export interface ProposedAddressesResponse {
  errorMessage?: string;
  proposedAddressCombinations?: ProposedDto[];
  status?: ProposedAddressesResponseStatusEnum;
}

/** ProposedDto */
export interface ProposedDto {
  /** @format int32 */
  asapDelay?: number;
  dropOffProposedAddress?: AddressDto;
  /** @format double */
  journeyDistance?: number;
  /** @format int32 */
  journeyTime?: number;
  pickupProposedAddress?: AddressDto;
  price?: PriceDto;
  /** @format int64 */
  walkingDistance?: number;
}

/** QbPresetResponse */
export interface QbPresetResponse {
  errorMessage?: string;
  preset?: string;
  status?: QbPresetResponseStatusEnum;
}

/** QrCodeDto */
export interface QrCodeDto {
  data?: string;
  extension?: string;
  /** @format uuid */
  file?: string;
  /** @format int32 */
  height?: number;
  hints?: Record<string, string>;
  label?: string;
  /** @format uuid */
  logo?: string;
  name?: string;
  /** @format int32 */
  size?: number;
  stops?: QrCodeStopDto[];
  text?: string;
  /** @format int32 */
  width?: number;
}

/** QrCodeStopDto */
export interface QrCodeStopDto {
  address?: RelatedAddressDto;
  type?: QrCodeStopDtoTypeEnum;
}

/** QuestionDto */
export interface QuestionDto {
  code?: string;
  /** @format uuid */
  id?: string;
  text?: string;
  type?: QuestionDtoTypeEnum;
  values?: AnswerValueDto[];
}

/** QuotationRequest */
export interface QuotationRequest {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  customerType?: QuotationRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: QuotationRequestOperationTypeEnum;
  passengers?: ContactDto[];
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  promoCode?: string;
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  voucher?: VoucherDto;
}

/** QuotationResponse */
export interface QuotationResponse {
  asDirectedMinutesRounding?: AsDirectedMinutesRoundingInfoDto;
  delayDto?: DelayDto;
  discount?: DiscountInfoDto;
  /** @format int32 */
  duration?: number;
  /** @format int32 */
  durationInTraffic?: number;
  errorMessage?: string;
  extDiscount?: DiscountInfoDto;
  extPrice?: PriceDto;
  offerService?: ServiceDto;
  price?: PriceDto;
  status?: QuotationResponseStatusEnum;
}

/** RecentAddressDto */
export interface RecentAddressDto {
  /** @format uuid */
  addressId?: string;
  caption?: string;
  customerType?: RecentAddressDtoCustomerTypeEnum;
  data?: string;
  /** @format int32 */
  dropUsageCount?: number;
  favourite?: boolean;
  favouriteName?: string;
  fields?: Record<string, string>;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  global?: boolean;
  /** @format date-time */
  lastUsedTs?: string;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  note?: string;
  /** @format uuid */
  parentId?: string;
  /** @format int32 */
  pickupUsageCount?: number;
  restrictions?: Restrictions;
  source?: RecentAddressDtoSourceEnum;
  /** @format int32 */
  usageCount?: number;
}

/** RecentAddressRequest */
export interface RecentAddressRequest {
  customerTypes?: RecentAddressRequestCustomerTypesEnum[];
  /** @format double */
  distance?: number;
  /** @format double */
  latitude?: number;
  /** @format int32 */
  limit?: number;
  /** @format double */
  longitude?: number;
  type?: RecentAddressRequestTypeEnum;
}

/** RecentAddressResponse */
export interface RecentAddressResponse {
  addresses?: RecentAddressDto[];
  errorMessage?: string;
  status?: RecentAddressResponseStatusEnum;
}

/** RedirectDto */
export interface RedirectDto {
  html?: string;
  method?: RedirectDtoMethodEnum;
  params?: Record<string, string>;
  url?: string;
}

/** ReferenceDto */
export interface ReferenceDto {
  /** @format uuid */
  id?: string;
  name?: string;
  value?: string;
}

/** ReferenceFieldDto */
export interface ReferenceFieldDto {
  defaultOption?: string;
  /** @format uuid */
  dependOn?: string;
  /** @format uuid */
  id?: string;
  mandatory?: boolean;
  mustBeInList?: boolean;
  name?: string;
  pattern?: string;
  showOptions?: boolean;
  tooltip?: string;
}

/** ReferenceOptionsRequest */
export interface ReferenceOptionsRequest {
  /** @format uuid */
  entityId?: string;
  filterValue?: string;
  masterValue?: string;
}

/** ReferenceOptionsResponse */
export interface ReferenceOptionsResponse {
  errorMessage?: string;
  status?: ReferenceOptionsResponseStatusEnum;
  values?: string[];
}

/** ReferenceSchemaResponse */
export interface ReferenceSchemaResponse {
  errorMessage?: string;
  references?: ReferenceFieldDto[];
  status?: ReferenceSchemaResponseStatusEnum;
}

/** ReferenceValidationInfo */
export interface ReferenceValidationInfo {
  mustBeInListPassed?: boolean;
  name?: string;
  patternPassed?: boolean;
  /** @format uuid */
  referenceId?: string;
  requiredPassed?: boolean;
  validationMessage?: string;
}

/** ReferenceValidationRequest */
export interface ReferenceValidationRequest {
  references?: ReferenceDto[];
}

/** ReferenceValidationResponse */
export interface ReferenceValidationResponse {
  errorMessage?: string;
  status?: ReferenceValidationResponseStatusEnum;
  validation?: ReferenceValidationInfo[];
}

/** ReferenceValueDto */
export interface ReferenceValueDto {
  name?: string;
  value?: string;
}

/** ReferralCodeDto */
export interface ReferralCodeDto {
  code?: string;
  /** @format date-time */
  expirationDate?: string;
  /** @format uuid */
  id?: string;
  /** @format int32 */
  maxUsageCount?: number;
  message?: string;
  /** @format int64 */
  receivedVouchersCount?: number;
  status?: ReferralCodeDtoStatusEnum;
  subject?: string;
  /** @format int32 */
  usageCount?: number;
}

/** ReferralCodeRequest */
export interface ReferralCodeRequest {
  referralCode?: string;
}

/** RegistrationRequest */
export interface RegistrationRequest {
  device?: DeviceDto;
  email?: string;
  language?: LanguageDto;
  name?: string;
  notifications?: NotificationSettingsDto;
  phone?: string;
}

/** RegistrationResponse */
export interface RegistrationResponse {
  errorMessage?: string;
  status?: RegistrationResponseStatusEnum;
}

/** RelatedAddressDto */
export interface RelatedAddressDto {
  /** @format uuid */
  addressId?: string;
  caption?: string;
  data?: string;
  fields?: Record<string, string>;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  note?: string;
  /** @format uuid */
  parentId?: string;
  restrictions?: Restrictions;
  source?: RelatedAddressDtoSourceEnum;
}

/** RelatedAddressesRequest */
export interface RelatedAddressesRequest {
  /** @format uuid */
  parentId?: string;
}

/** ReportDto */
export interface ReportDto {
  code?: string;
  inputParameters?: ReportInputParameterDto[];
  name?: string;
}

/** ReportInputParameterDto */
export interface ReportInputParameterDto {
  alias?: string;
  name?: string;
  required?: boolean;
  /** @format int32 */
  type?: number;
  value?: string;
}

/** ResourceRequestDto */
export interface ResourceRequestDto {
  /** @format uuid */
  entityId?: string;
  hash?: string;
}

/** ResourceResponseDto */
export interface ResourceResponseDto {
  /** @format uuid */
  entityId?: string;
  hash?: string;
  link?: string;
  /** @format int32 */
  resourceHeight?: number;
  /** @format uuid */
  resourceId?: string;
  resourceName?: string;
  /** @format int32 */
  resourceWidth?: number;
  showCustomBackground?: boolean;
}

/** ResourcesRequest */
export interface ResourcesRequest {
  /** @format int32 */
  imageHeight?: number;
  /** @format int32 */
  imageWidth?: number;
  resources?: ResourceRequestDto[];
}

/** ResourcesResponse */
export interface ResourcesResponse {
  errorMessage?: string;
  resources?: ResourceResponseDto[];
  status?: ResourcesResponseStatusEnum;
}

/** Restrictions */
export interface Restrictions {
  dropRestricted?: boolean;
  intermediateRestricted?: boolean;
  pickupRestricted?: boolean;
}

/** RetailAuthInfoDto */
export interface RetailAuthInfoDto {
  /** @format uuid */
  callerId?: string;
  madeBookings?: boolean;
  name?: string;
  phone?: string;
  type?: RetailAuthInfoDtoTypeEnum;
}

/** RetailLoginRequest */
export interface RetailLoginRequest {
  clientType?: RetailLoginRequestClientTypeEnum;
  device?: DeviceDto;
  password?: string;
  phone?: string;
}

/** RetailLoginResponse */
export interface RetailLoginResponse {
  authInfo?: RetailAuthInfoDto;
  errorMessage?: string;
  policyAccepted?: boolean;
  sessionRefreshToken?: string;
  sessionToken?: string;
  status?: RetailLoginResponseStatusEnum;
  /** @format uuid */
  token?: string;
}

/** RouteInfo */
export interface RouteInfo {
  asDirected?: boolean;
  /** @format int32 */
  asDirectedMinutes?: number;
  destinationUnknown?: boolean;
  waitAndReturn?: boolean;
}

/** RouteRequest */
export interface RouteRequest {
  customerType?: RouteRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  points?: CoordinatesDto[];
}

/** RouteResponse */
export interface RouteResponse {
  /** @format int64 */
  distance?: number;
  /** @format int64 */
  duration?: number;
  /** @format int64 */
  durationInTraffic?: number;
  errorMessage?: string;
  route?: CoordinatesDto[];
  status?: RouteResponseStatusEnum;
}

/** RouteSettings */
export interface RouteSettings {
  asDirectedAvailable?: boolean;
  destinationUnknownAvailable?: boolean;
  /** @format int32 */
  minAsDirectedMinutes?: number;
  waitAndReturnAvailable?: boolean;
}

/** SaveCreditCardRequest */
export interface SaveCreditCardRequest {
  creditCard?: CreditCardDto;
  customerType?: SaveCreditCardRequestCustomerTypeEnum;
}

/** SaveCreditCardResponse */
export interface SaveCreditCardResponse {
  creditCard?: ShortCreditCardDto;
  errorMessage?: string;
  redirectInfo?: RedirectDto;
  status?: SaveCreditCardResponseStatusEnum;
}

/** SavePayPalAccountResponse */
export interface SavePayPalAccountResponse {
  errorMessage?: string;
  redirectInfo?: RedirectDto;
  status?: SavePayPalAccountResponseStatusEnum;
}

/** SearchContactByNameRequest */
export interface SearchContactByNameRequest {
  loadPhoneAndEmail?: boolean;
  partOfName?: string;
  searchContact?: boolean;
}

/** SendBookingRequest */
export interface SendBookingRequest {
  customerType?: SendBookingRequestCustomerTypeEnum;
  email?: string;
  /** @format uuid */
  id?: string;
}

/** ServiceDto */
export interface ServiceDto {
  asapOnly?: boolean;
  availableInstructions?: string[];
  availablePaymentTypes?: string[];
  capacityRequirementsSettings?: CapacityRequirementsSettingsDto;
  caption?: string;
  code?: string;
  customerType?: ServiceDtoCustomerTypeEnum;
  /** @format int32 */
  defaultBigBags?: number;
  /** @format int32 */
  defaultSmallBags?: number;
  delivery?: boolean;
  description?: string;
  enableAddressProposal?: boolean;
  /** @format uuid */
  id?: string;
  images?: ResourceResponseDto[];
  offerService?: boolean;
  partner?: PartnerDto;
  /** @format int32 */
  passengerCount?: number;
  pricePrefix?: string;
  proposedService?: ServiceDto;
  routeSettings?: RouteSettings;
  shortTariffDescription?: string;
  tariffDescription?: string;
  unavailablePaymentTypes?: Record<string, string>;
  vehicleModelType?: VehicleModelTypeDto;
}

/** SetDefaultContactRequest */
export interface SetDefaultContactRequest {
  contact?: ContactDto;
  customerType?: SetDefaultContactRequestCustomerTypeEnum;
}

/** SetLanguageRequest */
export interface SetLanguageRequest {
  customerType?: SetLanguageRequestCustomerTypeEnum;
  language?: LanguageDto;
}

/** ShipTerminalStopSettings */
export interface ShipTerminalStopSettings {
  /** At least one ship terminal exists */
  shipTerminalsUsed?: boolean;
}

/** ShortCreditCardDto */
export interface ShortCreditCardDto {
  customerType?: ShortCreditCardDtoCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  number?: string;
  type?: string;
}

/** ShortFavouriteAddressDto */
export interface ShortFavouriteAddressDto {
  /** @format uuid */
  addressId?: string;
  caption?: string;
  data?: string;
  favouriteName?: string;
  fields?: Record<string, string>;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  /** @format double */
  latitude?: number;
  /** @format double */
  longitude?: number;
  note?: string;
  restrictions?: Restrictions;
  source?: ShortFavouriteAddressDtoSourceEnum;
}

/** SimpleStop */
export interface SimpleStop {
  address?: string;
  type?: SimpleStopTypeEnum;
}

/** SpecialInstructionDto */
export interface SpecialInstructionDto {
  code?: string;
  name?: string;
  set?: boolean;
  /** @format uuid */
  typeId?: string;
  value?: string;
}

/** SpecialInstructionFieldDto */
export interface SpecialInstructionFieldDto {
  code?: string;
  extraTemplateCode?: string;
  /** @format uuid */
  id?: string;
  name?: string;
  parameterExists?: boolean;
  parameterMandatory?: boolean;
  parameterType?: SpecialInstructionFieldDtoParameterTypeEnum;
  preference?: boolean;
  preferenceValue?: string;
  price?: PriceField;
  values?: string[];
}

/** SpecialPlaceHierarchyResponse */
export interface SpecialPlaceHierarchyResponse {
  addresses?: RelatedAddressDto[];
  deleted?: string[];
  deletedTypes?: string[];
  errorMessage?: string;
  /** @format date-time */
  lastUpdateDate?: string;
  status?: SpecialPlaceHierarchyResponseStatusEnum;
  types?: SpecialPlaceTypeDto[];
}

/** SpecialPlaceRequest */
export interface SpecialPlaceRequest {
  /** @format uuid */
  parentId?: string;
  searchString?: string;
}

/** SpecialPlaceTypeDto */
export interface SpecialPlaceTypeDto {
  code?: string;
  /** @format uuid */
  id?: string;
  name?: string;
}

/** SpecialPlaceTypeResponse */
export interface SpecialPlaceTypeResponse {
  errorMessage?: string;
  status?: SpecialPlaceTypeResponseStatusEnum;
  types?: SpecialPlaceTypeDto[];
}

/** StopDto */
export interface StopDto {
  address?: AddressDto;
  arrivalDetails?: ArrivalDetails;
  contact?: ContactDto;
  deliveryDetails?: DeliveryDetails;
  /** @format double */
  fromLatitude?: number;
  /** @format double */
  fromLongitude?: number;
  /** @format uuid */
  id?: string;
  notes?: string;
  operationType?: StopDtoOperationTypeEnum;
  paymentAddress?: boolean;
}

/** SubmitTipsRequest */
export interface SubmitTipsRequest {
  customerType?: SubmitTipsRequestCustomerTypeEnum;
  /** @format uuid */
  id?: string;
  tips?: PriceField;
}

/** SupervisorBookingDto */
export interface SupervisorBookingDto {
  asap?: boolean;
  caller?: ContactDto;
  confirmDriverChanges?: boolean;
  contact?: ContactDto;
  customerType?: SupervisorBookingDtoCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  driver?: DriverDto;
  /** @format date-time */
  driverEta?: string;
  drop?: string;
  dropStop?: SimpleStop;
  extTotalPrice?: PriceField;
  flags?: string[];
  /** @format uuid */
  id?: string;
  /** @format int32 */
  intermediateStops?: number;
  journeyType?: SupervisorBookingDtoJourneyTypeEnum;
  mainPassengerName?: string;
  number?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  partner?: PartnerDto;
  pickup?: string;
  pickupStop?: SimpleStop;
  price?: PriceDto;
  routeInfo?: RouteInfo;
  service?: BookingServiceDto;
  shareable?: boolean;
  status?: SupervisorBookingDtoStatusEnum;
  /** @format int64 */
  supervisorVersion?: number;
  supplierName?: string;
  totalPrice?: PriceField;
}

/** SurveyDto */
export interface SurveyDto {
  /** @format date-time */
  finishDate?: string;
  /** @format uuid */
  id?: string;
  questions?: QuestionDto[];
  /** @format int32 */
  rate?: number;
  rateSkipped?: boolean;
  /** @format int32 */
  tips?: number;
}

/** SystemSettingsDto */
export interface SystemSettingsDto {
  /**
   * max quantity of items in a search addresses response (taxi.sherbookConfig.addressLoadingLimit)
   * @format int32
   */
  addressLoadingLimit?: number;
  /**
   * max distance for searching addresses by position, in meters (taxi.sherbookConfig.addressPositionSearchDistance)
   * @format int32
   */
  addressPositionSearchDistance?: number;
  airportStopSettings?: AirportStopSettings;
  /**
   * taxi.sherbookConfig.displayCarsOnMap.pollingInterval
   * @format int32
   */
  carsOnMapRefreshPeriod?: number;
  /** taxi.execution.driverToClientChat.enableDriverToClientChat */
  chatEnabled?: boolean;
  companyName?: string;
  /** Customer service phone from DEFAULT company information */
  customerServicePhone?: string;
  /** taxi.sherbookConfig.displayCarsOnMap.enabled */
  displayCarsOnMap?: boolean;
  /**
   * Delay in seconds between requests to the job end-point to get current position of a driver allocated to the job (taxi.sherbookConfig.driverPositionServiceDelay)
   * @format int32
   */
  driverPositionRefreshPeriod?: number;
  enableW3W?: boolean;
  /** Indicates whether 'WhatsApp Notifications' block is enabled in Profile */
  enableWhatsapp?: boolean;
  /** taxi.sherbookConfig.flightDetailsFeatureEnabled */
  findArrivalInfo?: boolean;
  /** taxi.sherbookConfig.inAppRating */
  inAppRating?: boolean;
  /**
   * Delay in seconds between requests to the job end-point to get current job version (taxi.sherbookConfig.jobVersionServiceDelay)
   * @format int32
   */
  jobDetailsRefreshPeriod?: number;
  /**
   * Maximum allowed time for 'as directed' journeys (taxi.booking.maxAsDirectedMinutes)
   * @format int32
   */
  maxAsDirectedMinutes?: number;
  /**
   * Maximum number of days between day of booking and prebooking job date (taxi.booking.maxPrebookingDays)
   * @format int32
   */
  maxPrebookingDays?: number;
  /**
   * taxi.core.execution.passengerPositionRefreshIntervalSec (default 10)
   * @format int32
   */
  passengerPositionRefreshIntervalSec?: number;
  /** taxi.sherbookConfig.pricingPolicyURL */
  pricingPolicyURL?: string;
  /** taxi.sherbookConfig.privacyPolicyUrl */
  privacyPolicyUrl?: string;
  /** Indicates whether referral program is enabled in system */
  referralProgramEnabled?: boolean;
  /** Additional link for showing 'Share referral code' web page */
  referralProgramLink?: string;
  /** if users must accept Terms and Conditions and Privacy Policy to use portal/mobile app (taxi.sherbookConfig.requireTermsConditionsAndPrivacyPolicyAgreement) */
  requirePolicyAgreement?: boolean;
  shipTerminalStopSettings?: ShipTerminalStopSettings;
  /** Is driver name returned by Sherbook (taxi.sherbookConfig.showDriverName) */
  showDriverDetails?: boolean;
  /** taxi.core.execution.showPassengerLocationToDriver (default false) */
  showPassengerLocationToDriver?: boolean;
  /** Indicates whether referral code expiration date must be shown to client  */
  showReferralCodeExpirationDate?: boolean;
  /** Indicates whether referral code usage count must be shown to client */
  showReferralCodeUsageCount?: boolean;
  /** Email from DEFAULT company information */
  supportEmail?: string;
  /** taxi.sherbookConfig.termsAndConditionUrl */
  termsAndConditionUrl?: string;
  /** Server time zone ID */
  timeZoneID?: string;
  trainStopSettings?: TrainStopSettings;
  /** Website from DEFAULT company information */
  website?: string;
}

/** SystemSettingsResponse */
export interface SystemSettingsResponse {
  errorMessage?: string;
  status?: SystemSettingsResponseStatusEnum;
  systemSettings?: SystemSettingsDto;
}

/** TerminalMeetingPointsRequest */
export interface TerminalMeetingPointsRequest {
  customerTypes?: TerminalMeetingPointsRequestCustomerTypesEnum[];
  /** @format uuid */
  parentId?: string;
}

/** TerminalMeetingPointsResponse */
export interface TerminalMeetingPointsResponse {
  errorMessage?: string;
  meetingPoints?: CustomerAddressDto[];
  status?: TerminalMeetingPointsResponseStatusEnum;
}

/** TipsDto */
export interface TipsDto {
  tips?: PriceField;
  total?: PriceField;
}

/** TipsRangeResponse */
export interface TipsRangeResponse {
  errorMessage?: string;
  status?: TipsRangeResponseStatusEnum;
  tipsRange?: TipsDto[];
}

/** TokenLoginRequest */
export interface TokenLoginRequest {
  clientType?: TokenLoginRequestClientTypeEnum;
  token?: string;
}

/** TokenLoginResponse */
export interface TokenLoginResponse {
  authInfo?: AuthInfoDto;
  customerType?: TokenLoginResponseCustomerTypeEnum;
  errorMessage?: string;
  sessionRefreshToken?: string;
  sessionToken?: string;
  status?: TokenLoginResponseStatusEnum;
}

/** TokenRefreshRequest */
export interface TokenRefreshRequest {
  refreshToken?: string;
}

/** TokenRefreshResponse */
export interface TokenRefreshResponse {
  errorMessage?: string;
  newAccessToken?: string;
  newRefreshToken?: string;
  status?: TokenRefreshResponseStatusEnum;
}

/** TokenRequest */
export interface TokenRequest {
  clientType?: TokenRequestClientTypeEnum;
  tokenId?: string;
}

/** TokenRevokeRequest */
export interface TokenRevokeRequest {
  accessToken?: string;
}

/** TrainStopSettings */
export interface TrainStopSettings {
  /** SherbookTrainStopConfig.arrivalFromRequireForPrebook */
  arrivalFromRequireForPrebook?: boolean;
  /** deprecated; SherbookTrainStopConfig.arrivalFromRequireForPrebook */
  arrivalFromRequired?: boolean;
  /** SherbookTrainStopConfig.arrivalFromShowForPrebook */
  arrivalFromShowForPrebook?: boolean;
  /** SherbookTrainStopConfig.meetingPointRequireForASAP */
  meetingPointRequireForASAP?: boolean;
  /** SherbookTrainStopConfig.meetingPointRequireForPrebook */
  meetingPointRequireForPrebook?: boolean;
  /** SherbookTrainStopConfig.meetingPointShowForASAP */
  meetingPointShowForASAP?: boolean;
  /** SherbookTrainStopConfig.meetingPointShowForPrebook */
  meetingPointShowForPrebook?: boolean;
  /** SherbookTrainStopConfig.trainNumberRequireForPrebook */
  trainNumberRequireForPrebook?: boolean;
  /** deprecated; SherbookTrainStopConfig.trainNumberRequireForPrebook */
  trainNumberRequired?: boolean;
  /** SherbookTrainStopConfig.trainNumberShowForPrebook */
  trainNumberShowForPrebook?: boolean;
  /** At least on train station used */
  trainStationsUsed?: boolean;
}

/** UnratedBookingDto */
export interface UnratedBookingDto {
  /** @format date-time */
  completedDate?: string;
  customerType?: UnratedBookingDtoCustomerTypeEnum;
  /** @format uuid */
  id?: string;
}

/** UnratedBookingsResponse */
export interface UnratedBookingsResponse {
  errorMessage?: string;
  status?: UnratedBookingsResponseStatusEnum;
  unrated?: UnratedBookingDto[];
}

/** UpdateDeviceRequest */
export interface UpdateDeviceRequest {
  customerType?: UpdateDeviceRequestCustomerTypeEnum;
  device?: DeviceDto;
}

/** ValidateDiscountRequest */
export interface ValidateDiscountRequest {
  asap?: boolean;
  /** @format int32 */
  bigBagsNumber?: number;
  bonuses?: number;
  contact?: ContactDto;
  creditCard?: CreditCardDto;
  creditCardChanged?: boolean;
  customerType?: ValidateDiscountRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
  instructions?: SpecialInstructionDto[];
  loyaltyCard?: LoyaltyCardDto;
  notes?: string;
  /** @format int32 */
  numberOfPassengers?: number;
  operationType?: ValidateDiscountRequestOperationTypeEnum;
  passengers?: ContactDto[];
  payPalAccount?: PayPalAccountDto;
  paymentMethodId?: string;
  paymentType?: BookingPaymentTypeDto;
  paymentTypes?: BookingPaymentTypeDto[];
  price?: PriceDto;
  promoCode?: string;
  references?: ReferenceDto[];
  /** @format uuid */
  requestId?: string;
  routeInfo?: RouteInfo;
  serverData?: string;
  service?: BookingServiceDto;
  /** @format int32 */
  smallBagsNumber?: number;
  stops?: StopDto[];
  /** @format uuid */
  usedJobId?: string;
  voucher?: VoucherDto;
}

/** ValidateDiscountResponse */
export interface ValidateDiscountResponse {
  discount?: DiscountInfoDto;
  errorMessage?: string;
  extDiscount?: DiscountInfoDto;
  status?: ValidateDiscountResponseStatusEnum;
}

/** ValidatePromoCodeRequest */
export interface ValidatePromoCodeRequest {
  code?: string;
  customerType?: ValidatePromoCodeRequestCustomerTypeEnum;
  /** @format date-time */
  date?: string;
}

/** ValidatePromoCodeResponse */
export interface ValidatePromoCodeResponse {
  errorMessage?: string;
  promoCode?: PromoCodeDto;
  status?: ValidatePromoCodeResponseStatusEnum;
}

/** ValidateSpecialInstructionsRequest */
export interface ValidateSpecialInstructionsRequest {
  customerType?: ValidateSpecialInstructionsRequestCustomerTypeEnum;
  instructions?: SpecialInstructionDto[];
}

/** ValidateSpecialInstructionsResponse */
export interface ValidateSpecialInstructionsResponse {
  errorMessage?: string;
  status?: ValidateSpecialInstructionsResponseStatusEnum;
  validation?: InstructionsValidationInfo[];
}

/** ValidateVoucherRequest */
export interface ValidateVoucherRequest {
  customerType?: ValidateVoucherRequestCustomerTypeEnum;
  number?: string;
}

/** ValidateVoucherResponse */
export interface ValidateVoucherResponse {
  errorMessage?: string;
  status?: ValidateVoucherResponseStatusEnum;
  voucher?: VoucherDto;
}

/** ValidationPhoneResponse */
export interface ValidationPhoneResponse {
  errorMessage?: string;
  message?: string;
  smsConsentRequired?: boolean;
  status?: ValidationPhoneResponseStatusEnum;
}

/** VehicleModelTypeDto */
export interface VehicleModelTypeDto {
  code?: string;
  name?: string;
}

/** VoucherDto */
export interface VoucherDto {
  customerType?: VoucherDtoCustomerTypeEnum;
  discount?: string;
  discountExt?: string;
  /** @format date-time */
  expirationDate?: string;
  /** @format uuid */
  id?: string;
  number?: string;
}

/** VouchersResponse */
export interface VouchersResponse {
  errorMessage?: string;
  status?: VouchersResponseStatusEnum;
  vouchers?: VoucherDto[];
}

export type AccountLogDtoTypeEnum = "JOB" | "TRANSFER" | "CREDIT_CARD";

export type AddLostPropertyRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressCountRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressCountRequestStopTypeEnum = "PICKUP" | "DROPOFF";

export type AddressCountRequestTypesEnum = "FAVOURITE" | "RECENT";

export type AddressCountResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressCreateRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressCreateResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressDeleteRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressDetailsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressDetailsRequestSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type AddressDtoSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type AddressEditRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressEditResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressHierarchyResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressListRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressListRequestStopTypeEnum = "PICKUP" | "DROPOFF";

export type AddressListRequestTypesEnum = "FAVOURITE" | "RECENT";

export type AddressListResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressPositionRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressSearchRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressSearchResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AddressesListRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AddressesListResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AirlinesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AirportReplacementResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AmendableCustomerDataRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type AnonymousLoginRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type AnonymousLoginResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ApplicationVersionResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ArchiveBookingsRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ArchiveBookingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ArrivalDelayResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type AuthFieldValueKeyEnum = "ACCOUNT" | "PIN" | "CALLER" | "PASSWORD";

export type AuthInfoDtoTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type AvailableAddressesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BaseDatedRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BaseResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BonusAccountLogsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BonusProgramInfoResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookJobRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookJobRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type BookJobResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingCountResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingDataRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingDataRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type BookingDataResponseOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type BookingDataResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingDetailsDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingDetailsDtoStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type BookingDetailsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingFeedbackRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingFilterDtoBookingSourcesEnum =
  | "BOOKING_SCREEN"
  | "MOBILE_WS"
  | "WORKLOAD_GENERATOR"
  | "CONTRACT"
  | "WEB_PORTAL"
  | "INTEGRATOR"
  | "LINE_JOB"
  | "IVR"
  | "QUICKBOOKER"
  | "WEB_KIOSK";

export type BookingFilterDtoStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type BookingIdRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingJobTrackResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingLinkResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingListDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingListDtoJourneyTypeEnum =
  | "STANDARD"
  | "PICKUP_FROM_AIRPORT"
  | "DROP_AT_AIRPORT"
  | "PICKUP_FROM_TRAIN"
  | "DROP_TO_TRAIN"
  | "PICKUP_FROM_SHIP_TERMINAL"
  | "DROP_TO_SHIP_TERMINAL";

export type BookingListDtoStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type BookingListFilterBookingSourcesEnum =
  | "BOOKING_SCREEN"
  | "MOBILE_WS"
  | "WORKLOAD_GENERATOR"
  | "CONTRACT"
  | "WEB_PORTAL"
  | "INTEGRATOR"
  | "LINE_JOB"
  | "IVR"
  | "QUICKBOOKER"
  | "WEB_KIOSK";

export type BookingListFilterStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type BookingListOrderFieldEnum =
  | "CREATE_TS"
  | "UPDATE_TS"
  | "NUMBER"
  | "PICKUP"
  | "DROP_OFF"
  | "CONTACT"
  | "PASSENGER"
  | "CALLER"
  | "PRICE"
  | "DATE"
  | "ASAP"
  | "EXECUTION_STATUS"
  | "SERVICE_NAME"
  | "SERVICE_TYPE"
  | "PAYMENT_TYPE"
  | "COA"
  | "TYPE"
  | "SUPERVISOR_VERSION"
  | "STATUS_PRIORITY";

export type BookingListOrderMethodEnum = "ASC" | "DESC";

export type BookingListRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingListResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingPaymentTypeDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingPaymentTypeDtoKindEnum = "MAIN" | "ADDITIONAL";

export type BookingServiceDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingSettingsDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingSettingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingStartedResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingSurveyRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type BookingVersionResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type BookingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type CancelBookingRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type CancelBookingResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type CancelBookingResponseTypeEnum = "FREE" | "COA";

export type ChangeProfileRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type CheckOperationAreaRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type CheckServicesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ClientPositionRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ClientTypeRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type ClientTypeRequestDeviceTypeEnum = "IPHONE" | "ANDROID";

export type CompletePaymentRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type CompleteSaveCreditCardRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ContactDtoCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type CorporateAuthInfoDtoTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type CorporateCredentialsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type CorporateLoginRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type CorporateLoginResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type CreateComplaintRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

/** Used to select an appropriate integration method */
export type CreditCardSettingsApplePayProviderEnum = "TEST" | "STRIPE";

export type CreditCardSettingsCreditCardTypeEnum =
  | "PLAIN"
  | "CSE"
  | "EPP_NEW"
  | "EPP_ALL"
  | "CUSTOM"
  | "STRIPE"
  | "CAYMAN";

/** Used to select an appropriate integration method */
export type CreditCardSettingsGooglePayProviderEnum = "TEST" | "STRIPE";

export type CustomerAddressDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type CustomerAddressDtoSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type CustomerAddressSearchResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type CustomerDataRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type CustomerRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type DelayRequestCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type DelayRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type DelayResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DeleteAddressListRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type DeleteCreditCardRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type DeleteCreditCardResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DeliveryDetailsStatusEnum =
  | "PENDING"
  | "IN_PROGRESS"
  | "PARCEL_TAKEN"
  | "PARCEL_DELIVERED"
  | "PARCEL_NOT_TAKEN"
  | "PARCEL_NOT_DELIVERED";

export type DetailedArchiveBookingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DetailedBookingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DeviceDtoTypeEnum = "IPHONE" | "ANDROID";

export type DriverChangeDtoStatusEnum = "NEW" | "CONFIRMED" | "REJECTED";

export type DriverChangeDtoTypeEnum =
  | "WORKING_HOURS"
  | "PAYMENT_TYPE"
  | "ADD_EXTRA"
  | "DELETE_EXTRA"
  | "CHANGE_EXTRA"
  | "MANUAL_PRICE"
  | "ADD_PASSENGER"
  | "DELETE_PASSENGER"
  | "ADD_ENROUTE_STOP"
  | "DELETE_ENROUTE_STOP"
  | "CHANGE_ENROUTE_STOP"
  | "CHANGE_WAITING_TIME"
  | "OTHER";

export type DriverChangesConfirmationRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type DriverChangesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DriverDetailsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type DriverDetailsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DriverMapResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DriverPositionResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type DurationResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type EditLostPropertyRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type FavoriteAddressesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type FavouriteAddressDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type FavouriteAddressDtoSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type FinAccountLogsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type FinAccountLogsRequestTypeEnum = "JOB" | "TRANSFER" | "CREDIT_CARD";

export type FindDefaultContactResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type FindDefaultEmailResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type FindDefaultPhoneResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type FindTokenAuthInfoTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type FindTokenResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type FlightInfoDtoStatusEnum =
  | "SCHEDULED"
  | "ON_TIME"
  | "EN_ROUTE"
  | "ARRIVED"
  | "DELAYED"
  | "CANCELLED";

export type FlightInfoResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type InitSecure3DRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type InitSecure3DRequestTypeEnum =
  | "SAVE"
  | "BOOKING"
  | "OSP"
  | "PAYMENT_LINK"
  | "PREPAID";

export type InitSecure3DResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type InitialSettingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type JobOfferCancelRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type JobOfferCheckRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type JobOfferCheckResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type JobOfferRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type JobOfferRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type JobOfferResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type JobOfferStatusDtoStateEnum =
  | "UNKNOWN"
  | "IN_PROGRESS"
  | "DRIVER_FOUND"
  | "DRIVER_NOT_FOUND";

export type JobStopsAvailabilityRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type JobStopsAvailabilityRequestTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type JobStopsAvailabilityResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type JourneyTimeRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type JourneyTimeRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type JourneyTimeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type KioskConfigResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadAirportsRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadAvailableContactsRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadAvailableContactsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadBookingSurveyResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadChatRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadChatResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadComplaintRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadComplaintResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadCreditCardResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadLanguagesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadPassengersResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadPayPalAccountResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadPaymentTypesRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadPaymentTypesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadProfileResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadQrCodeRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadQrCodeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadReferralCodeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadReportsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadServicesRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadServicesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadSpecialInstructionsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoadSpecialInstructionsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadSurveyResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadSurveyResultResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

/** Field type */
export type LoginFieldKeyEnum = "ACCOUNT" | "PIN" | "CALLER" | "PASSWORD";

export type LostPropertiesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LostPropertyDtoStatusEnum =
  | "LOST"
  | "NOT_FOUND"
  | "FOUND"
  | "RETURNED"
  | "DISPOSED";

export type LostPropertyRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoyaltyCardDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type LoyaltyCardsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type MasterCardSessionResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type MessageToDriverRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type MessageToDriverResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type MostUsedAddressRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type MostUsedAddressRequestTypeEnum = "PICKUP" | "DROPOFF";

export type NotificationTokenRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type OffSessionJobPaymentItemStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type OffSessionPaymentDataResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type OffSessionPaymentRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type OffSessionPaymentResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type OffSessionPaymentStartRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type PassedStopRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PassedStopResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PayPalAccountDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PayPalFeedbackRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PayPalResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PaymentBookingDtoStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type PaymentCompleteResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PaymentInfoRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type PaymentInfoResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PaymentRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type PaymentResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PaymentTypeDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PaymentTypeDtoLimitTypeEnum = "AMOUNT" | "PERCENT";

export type PendingApprovalBookingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PendingApprovalCountResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PendingApprovalListRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PendingApprovalListVersionResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PolicyAgreementResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PortalBookingActionsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PortalBookingListRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PortalConfigResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PortalFilteredBookingsCountRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrebookLimitRangeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrebookLimitRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrebookLimitRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type PrebookLimitResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidAccountInfoResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidCheckSmsCodeRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrepaidCheckSmsCodeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidCommissionCalculationRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrepaidCommissionCalculationResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidDepositRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrepaidDepositResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidFindUserRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrepaidSmsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrepaidSmsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidTransferRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type PrepaidTransferResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PrepaidUserResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PriceDetailsDtoTypeEnum =
  | "TOTAL"
  | "BASE"
  | "EXTRA_STOPS"
  | "TBS_SERVICE_FEE"
  | "WAITING_TIME"
  | "ADMIN_FEE"
  | "ADMIN_FEE_TAX"
  | "MODIFIER"
  | "EXTRA"
  | "TAX"
  | "DISCOUNT"
  | "ROUNDING_ADJUSTMENT"
  | "SUBTOTAL";

export type PriceRequestCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type PriceRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type PriceResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type PromoCodeDtoCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ProposedAddressesRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ProposedAddressesRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type ProposedAddressesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type QbPresetResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type QrCodeStopDtoTypeEnum = "PICKUP" | "DROP";

export type QuestionDtoTypeEnum =
  | "SIMPLE"
  | "STRING"
  | "INTEGER"
  | "RATING"
  | "FLOAT"
  | "BOOLEAN"
  | "DATE"
  | "ENUM";

export type QuotationRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type QuotationRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type QuotationResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type RecentAddressDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type RecentAddressDtoSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type RecentAddressRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type RecentAddressRequestTypeEnum = "PICKUP" | "DROPOFF";

export type RecentAddressResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type RedirectDtoMethodEnum = "GET" | "POST";

export type ReferenceOptionsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ReferenceSchemaResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ReferenceValidationResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ReferralCodeDtoStatusEnum =
  | "ACTIVE"
  | "BANNED"
  | "USED"
  | "EXPIRED";

export type RegistrationResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type RelatedAddressDtoSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type ResourcesResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type RetailAuthInfoDtoTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type RetailLoginRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type RetailLoginResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type RouteRequestCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type RouteResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type SaveCreditCardRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type SaveCreditCardResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type SavePayPalAccountResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type SendBookingRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ServiceDtoCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type SetDefaultContactRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type SetLanguageRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ShortCreditCardDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ShortFavouriteAddressDtoSourceEnum =
  | "GOOGLE_PLACE"
  | "GOOGLE_GEO"
  | "THIRD_PARTY"
  | "MANUAL"
  | "UNKNOWN"
  | "ADDRESS_BOOK"
  | "SPECIAL_PLACE"
  | "MEETING_POINT"
  | "AIRPORT"
  | "AIRPORT_TERMINAL"
  | "AIRPORT_MEETING_POINT"
  | "SHIP_TERMINAL"
  | "BERTH"
  | "TRAIN"
  | "TRAIN_MEETING_POINT"
  | "BOOKING_ADDRESS"
  | "PROPOSED_ADDRESS"
  | "YANDEX_PLACE"
  | "PLACE_AUTOCOMPLETE"
  | "W3W";

export type SimpleStopTypeEnum =
  | "ADDRESS"
  | "AIRPORT"
  | "TRAIN"
  | "SHIP_TERMINAL"
  | "PROPOSED_ADDRESS";

export type SpecialInstructionFieldDtoParameterTypeEnum =
  | "STRING"
  | "INTEGER"
  | "FLOAT"
  | "DATE"
  | "ENUM";

export type SpecialPlaceHierarchyResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type SpecialPlaceTypeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type StopDtoOperationTypeEnum = "PICKUP" | "DROP";

export type SubmitTipsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type SupervisorBookingDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type SupervisorBookingDtoJourneyTypeEnum =
  | "STANDARD"
  | "PICKUP_FROM_AIRPORT"
  | "DROP_AT_AIRPORT"
  | "PICKUP_FROM_TRAIN"
  | "DROP_TO_TRAIN"
  | "PICKUP_FROM_SHIP_TERMINAL"
  | "DROP_TO_SHIP_TERMINAL";

export type SupervisorBookingDtoStatusEnum =
  | "WAITING_FOR_PAYMENT"
  | "WAITING_FOR_CONFIRMATION"
  | "BOOKED"
  | "DRIVER_FINISHES_PREVIOUS_BOOKING"
  | "DRIVER_ON_WAY"
  | "DRIVER_AT_PICKUP"
  | "PASSENGER_ON_BOARD"
  | "DONE"
  | "CANCELLED";

export type SystemSettingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type TerminalMeetingPointsRequestCustomerTypesEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type TerminalMeetingPointsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type TipsRangeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type TokenLoginRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type TokenLoginResponseCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type TokenLoginResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type TokenRefreshResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type TokenRequestClientTypeEnum =
  | "MOBILE_WS"
  | "WEB_PORTAL"
  | "WEB_KIOSK"
  | "QUICKBOOKER";

export type UnratedBookingDtoCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type UnratedBookingsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type UpdateDeviceRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ValidateDiscountRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ValidateDiscountRequestOperationTypeEnum =
  | "CREATE"
  | "AMEND"
  | "REPEAT"
  | "RETURN";

export type ValidateDiscountResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ValidatePromoCodeRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ValidatePromoCodeResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ValidateSpecialInstructionsRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ValidateSpecialInstructionsResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ValidateVoucherRequestCustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type ValidateVoucherResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type ValidationPhoneResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type VoucherDtoCustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type VouchersResponseStatusEnum =
  | "OK"
  | "INVALID_REQUEST"
  | "OPERATION_UNAVAILABLE"
  | "INVALID_CUSTOMER_TYPE"
  | "INVALID_CORPORATE_REQUEST"
  | "INVALID_RETAIL_REQUEST"
  | "INVALID_ANONYMOUS_REQUEST"
  | "FILL_REQUIRED_DETAILS"
  | "BOOKINGS_NOT_ALLOWED"
  | "SMARTPHONE_VALIDATION_FAILED"
  | "APPLICATION_OUTDATED"
  | "ACCOUNT_ON_HOLD"
  | "PIN_ON_HOLD"
  | "USER_ON_HOLD"
  | "FIELDS_VALIDATION_FAILED"
  | "REGISTRATION_FAILED"
  | "USER_ALREADY_EXISTS"
  | "UNABLE_TO_SEND_PASSWORD"
  | "UNABLE_TO_SEND_EMAIL"
  | "PASSWORD_NOT_SENT"
  | "USER_NOT_FOUND"
  | "INVALID_PASSWORD"
  | "USER_NOT_ACTIVE"
  | "TOKEN_NOT_FOUND"
  | "TOKEN_NOT_VALID"
  | "CAPTCHA_REQUIRED"
  | "ANONYMOUS_MODE_DISABLED"
  | "ADDRESS_SEARCH_FAILED"
  | "GLOBAL_ADDRESS"
  | "ADDRESS_ALREADY_EXISTS"
  | "INVALID_ADDRESS_DATA"
  | "INVALID_COORDINATES"
  | "INVALID_ADDRESS_SOURCE"
  | "RESTRICTED_ADDRESS"
  | "FULLY_BOOKED"
  | "TOO_EARLY_FOR_PREBOOK"
  | "TOO_LATE_FOR_PREBOOK"
  | "PREBOOK_NOT_AVAILABLE"
  | "ASAP_ONLY_SERVICE"
  | "PICKUP_CIRCUIT_LOCKED"
  | "INVALID_OPERATIONAL_AREA"
  | "REFERENCE_VALIDATION_FAILED"
  | "REFERENCE_EMPTY_MASTER_VALUE"
  | "REFERENCE_INVALID_MASTER_VALUE"
  | "INSTRUCTION_VALIDATION_FAILED"
  | "PAYMENT_TYPE_NOT_SUPPORTED"
  | "CREDIT_CARD_PAYMENT_FAILED"
  | "INVALID_PAYPAL_ACCOUNT"
  | "PAYPAL_OPERATION_FAILED"
  | "SERVICE_RESTRICTION_FAILED"
  | "PRICE_HAS_CHANGED"
  | "PRICE_CALCULATION_ERROR"
  | "INVALID_PROMO_CODE"
  | "INVALID_LOYALTY_CARD"
  | "INVALID_VOUCHER"
  | "VOUCHER_NOT_ACTIVE"
  | "BOOKING_NOT_AMENDABLE"
  | "BOOKING_NOT_REPEATABLE"
  | "REDIRECT_REQUIRED"
  | "REQUIRES_CLIENT_ACTION"
  | "BOOKING_COMPLETION_FAILED"
  | "BOOKING_CONFIRMATION_FAILED"
  | "BOOKING_ALREADY_PROCESSED"
  | "BOOKING_ALREADY_CANCELLED"
  | "BOOKING_NOT_CANCELLABLE"
  | "CANCELLATION_CHARGE_CHANGED"
  | "INVALID_PUSH_MESSAGE_ID"
  | "TIPS_NOT_ALLOWED"
  | "TIPS_ALREADY_SUBMITTED"
  | "BOOKING_NOT_RATED"
  | "INACTIVE_LOST_PROPERTY"
  | "DATA_NOT_FOUND"
  | "INCORRECT_DATA"
  | "INCORRECT_REQUEST_IDENTIFIER"
  | "INVALID_ACCOUNT_INFO"
  | "INVALID_CUSTOMER_DATA"
  | "INVALID_ROUTE_INFO"
  | "REPORT_UNSUPPORTED_PARAMETER"
  | "REFERRAL_PROGRAM_DISABLED"
  | "REFERRAL_PROGRAM_UNAVAILABLE"
  | "REFERRAL_CODE_NOT_FOUND"
  | "REFERRAL_CODE_USAGE_LIMIT"
  | "REFERRAL_CODE_BANNED"
  | "REFERRAL_CODE_EXPIRED"
  | "REFERRAL_CODE_ALREADY_USED"
  | "REFERRAL_CODE_OWNER"
  | "OUTDATED_APPLICATION"
  | "MOBILE_PAYMENT_FAILED"
  | "ROUTE_CALCULATION_FAILED"
  | "TOO_MANY_REQUESTS";

export type LoadAirportsUsingPostData = CustomerAddressSearchResponse;

export type LoadAirportsHierarchyUsingPostData = AddressHierarchyResponse;

export type LoadAirportByIdUsingPostData = AddressResponse;

export type LoadTerminalsUsingPostData = AddressSearchResponse;

export type LoadAirportTerminalByIdUsingPostData = AddressResponse;

export type LoadTerminalMeetingPointsUsingPostData =
  TerminalMeetingPointsResponse;

export type CreateFavouriteAddressUsingPostData = AddressCreateResponse;

export type LoadCountUsingPostData = AddressCountResponse;

export type DeleteFavouriteAddressUsingPostData = BaseResponse;

export type EditFavouriteAddressUsingPostData = AddressEditResponse;

export type LoadListUsingPostData = AddressListResponse;

export type DeleteFavouriteAddressesUsingPostData = BaseResponse;

export type LoadAvailableAddressesUsingPostData = AvailableAddressesResponse;

export type ListFavouriteAddressesUsingPostData = AddressesListResponse;

export type ListAllFavouriteAddressesUsingPostData = FavoriteAddressesResponse;

export type SearchLastUsedAddressesUsingPostData = RecentAddressResponse;

export type SearchRecentAddressesUsingPostData = RecentAddressResponse;

export type CheckJobStopsAvailabilityUsingPostData =
  JobStopsAvailabilityResponse;

export type CheckOperationAreaUsingPostData = BaseResponse;

export type CheckAirportReplacementUsingPostData = AirportReplacementResponse;

export type GetAddressDetailsUsingPostData = AddressResponse;

export type SearchAddressByPositionUsingPostData = AddressSearchResponse;

export type SearchAddressUsingPostData = AddressSearchResponse;

export type LoadShipTerminalsUsingPostData = CustomerAddressSearchResponse;

export type LoadBerthsUsingPostData = AddressSearchResponse;

export type LoadBerthsByIdUsingPostData = AddressResponse;

export type LoadShipTerminalsHierarchyUsingPostData = AddressHierarchyResponse;

export type LoadShipTerminalByIdUsingPostData = AddressResponse;

export type LoadSpecialPlacesHierarchyUsingPostData =
  SpecialPlaceHierarchyResponse;

export type LoadSpecialPlacesUsingPost1Data = AddressSearchResponse;

export type LoadSpecialPlacesUsingPostData = AddressResponse;

export type LoadSpecialPlaceMeetingPointsUsingPostData = AddressSearchResponse;

export type LoadSpecialPlaceTypesUsingPostData = SpecialPlaceTypeResponse;

export type LoadTrainStationsUsingPost1Data = CustomerAddressSearchResponse;

export type LoadTrainStationsUsingPostData = AddressHierarchyResponse;

export type LoadTrainStationByIdUsingPostData = AddressResponse;

export type LoadTrainStationMeetingPointUsingPostData = AddressSearchResponse;

export type GetBonusProgramInfoUsingPostData = BonusProgramInfoResponse;

export type GetAccountLogsUsingPostData = BonusAccountLogsResponse;

export type CancelJobUsingPostData = CancelBookingResponse;

export type GetCancellationChargeUsingPostData = CancelBookingResponse;

export type SavePassengerLocationUsingPostData = BaseResponse;

export type HideBookingUsingPostData = BaseResponse;

export type BookingsListUsingPostData = BookingListResponse;

export type BookingsCountUsingPostData = BookingCountResponse;

export interface SubmitBookingSurveyUsingPostParams {
  /**
   * jobId
   * @format uuid
   */
  jobId: string;
}

export type SubmitBookingSurveyUsingPostData = BaseResponse;

export interface LoadBookingSurveyUsingPostParams {
  /**
   * jobId
   * @format uuid
   */
  jobId: string;
}

export type LoadBookingSurveyUsingPostData = LoadBookingSurveyResponse;

export type LoadActiveBookingsUsingPostData = BookingsResponse;

export type LoadDetailedActiveBookingsInfoUsingPostData =
  DetailedBookingsResponse;

export type LoadJobDetailsUsingPostData = BookingDetailsResponse;

export type LoadJobDetailsByTokenUsingPostData = BookingDetailsResponse;

export type LoadDriverDetailsUsingPostData = DriverDetailsResponse;

export type GetDriverPositionUsingPostData = DriverPositionResponse;

export type LoadHistoryJobsUsingPostData = ArchiveBookingsResponse;

export type LoadFullJobsHistoryUsingPostData = DetailedArchiveBookingsResponse;

export type LoadJobLinkUsingPostData = BookingLinkResponse;

export interface GetPodSignatureUsingGetParams {
  /**
   * imageId
   * @format uuid
   */
  imageId: string;
}

export type GetPodSignatureUsingGetData = any;

export type GetPassedStopUsingPostData = PassedStopResponse;

export type LoadJobTrackUsingPostData = BookingJobTrackResponse;

export type GetJobVersionUsingPostData = BookingVersionResponse;

export type SendByEmailUsingPostData = BaseResponse;

export type CalculateArrivalDelayUsingPostData = ArrivalDelayResponse;

export type CalculateDelayUsingPostData = DelayResponse;

export type GetDurationByCoordinatesUsingPostData = DurationResponse;

export type CalculateJourneyTimeUsingPostData = JourneyTimeResponse;

export type CalculatePrebookLimitUsingPostData = PrebookLimitResponse;

export type CalculatePrebookLimitRangeUsingPostData = PrebookLimitRangeResponse;

export type CalculatePriceUsingPostData = PriceResponse;

export type CalculateProposedAddresssesUsingPostData =
  ProposedAddressesResponse;

export type CalculateQuotationUsingPostData = QuotationResponse;

export type GetRouteByCoordinatesUsingPostData = RouteResponse;

export type LoadChatUsingPostData = LoadChatResponse;

export type MarkReadUsingPostData = BaseResponse;

export type SendMessageToDriverUsingPostData = MessageToDriverResponse;

export type CreateComplaintUsingPostData = BaseResponse;

export type LoadComplaintUsingPostData = LoadComplaintResponse;

export type FindDefaultContactUsingPostData = FindDefaultContactResponse;

export type FindDefaultEmailUsingPostData = FindDefaultEmailResponse;

export type FindDefaultPassengerUsingPostData = FindDefaultContactResponse;

export type FindDefaultPhoneUsingPostData = FindDefaultPhoneResponse;

export type LoadPassengersUsingPostData = LoadPassengersResponse;

export type LoadAvailableContactsUsingPostData = LoadAvailableContactsResponse;

export type LoadAvailablePassengersUsingPostData =
  LoadAvailableContactsResponse;

export type SearchContactsByNameUsingPostData = LoadAvailableContactsResponse;

export type SetDefaultContactUsingPostData = BaseResponse;

export type SetDefaultPassengerUsingPostData = BaseResponse;

export type CheckApplicationVersionUsingPostData = ApplicationVersionResponse;

export type CheckAccountCredentialsUsingPostData = CorporateCredentialsResponse;

export type CheckRetailCredentialsUsingPostData = BaseResponse;

export type UpdateSmartphoneUsingPostData = BaseResponse;

export type DeleteCreditCardsUsingPostData = DeleteCreditCardResponse;

export type InitSecure3DUsingPostData = InitSecure3DResponse;

export type LoadCreditCardsUsingPostData = LoadCreditCardResponse;

export interface GetMasterCardSessionUsingPostParams {
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
}

export type GetMasterCardSessionUsingPostData = MasterCardSessionResponse;

export type SaveCreditCardUsingPostData = SaveCreditCardResponse;

export type CompleteSaveCreditCardUsingPostData = SaveCreditCardResponse;

export type CompleteSaveCreditCardInPortalUsingGetData = string;

export type CompleteSaveCreditCardInPortalUsingHeadData = string;

export type CompleteSaveCreditCardInPortalUsingPostData = string;

export type CompleteSaveCreditCardInPortalUsingPutData = string;

export type CompleteSaveCreditCardInPortalUsingDeleteData = string;

export type CompleteSaveCreditCardInPortalUsingOptionsData = string;

export type CompleteSaveCreditCardInPortalUsingPatchData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingGetParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingGetData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingHeadParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingHeadData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingPostParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingPostData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingPutParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingPutData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingDeleteParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingDeleteData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingOptionsParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingOptionsData = string;

export interface CompleteSaveCreditCardInPortalExposedUsingPatchParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompleteSaveCreditCardInPortalExposedUsingPatchData = string;

export interface GetInternalPageUsingGetParams {
  /** customerType */
  customerType?: CustomerTypeEnum;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingGetData = string;

/** customerType */
export type GetInternalPageUsingGetParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageUsingHeadParams {
  /** customerType */
  customerType?: CustomerTypeEnum1;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum1 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingHeadData = string;

/** customerType */
export type GetInternalPageUsingHeadParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageUsingPostParams {
  /** customerType */
  customerType?: CustomerTypeEnum2;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum2 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingPostData = string;

/** customerType */
export type GetInternalPageUsingPostParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageUsingPutParams {
  /** customerType */
  customerType?: CustomerTypeEnum3;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum3 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingPutData = string;

/** customerType */
export type GetInternalPageUsingPutParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageUsingDeleteParams {
  /** customerType */
  customerType?: CustomerTypeEnum4;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum4 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingDeleteData = string;

/** customerType */
export type GetInternalPageUsingDeleteParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageUsingOptionsParams {
  /** customerType */
  customerType?: CustomerTypeEnum5;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum5 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingOptionsData = string;

/** customerType */
export type GetInternalPageUsingOptionsParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageUsingPatchParams {
  /** customerType */
  customerType?: CustomerTypeEnum6;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
}

/** customerType */
export type CustomerTypeEnum6 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageUsingPatchData = string;

/** customerType */
export type GetInternalPageUsingPatchParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingGetParams {
  /** customerType */
  customerType?: CustomerTypeEnum7;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum7 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingGetData = string;

/** customerType */
export type GetInternalPageExposedUsingGetParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingHeadParams {
  /** customerType */
  customerType?: CustomerTypeEnum8;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum8 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingHeadData = string;

/** customerType */
export type GetInternalPageExposedUsingHeadParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingPostParams {
  /** customerType */
  customerType?: CustomerTypeEnum9;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum9 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingPostData = string;

/** customerType */
export type GetInternalPageExposedUsingPostParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingPutParams {
  /** customerType */
  customerType?: CustomerTypeEnum10;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum10 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingPutData = string;

/** customerType */
export type GetInternalPageExposedUsingPutParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingDeleteParams {
  /** customerType */
  customerType?: CustomerTypeEnum11;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum11 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingDeleteData = string;

/** customerType */
export type GetInternalPageExposedUsingDeleteParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingOptionsParams {
  /** customerType */
  customerType?: CustomerTypeEnum12;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum12 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingOptionsData = string;

/** customerType */
export type GetInternalPageExposedUsingOptionsParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface GetInternalPageExposedUsingPatchParams {
  /** customerType */
  customerType?: CustomerTypeEnum13;
  /**
   * paymentLinkTokenId
   * @format uuid
   */
  paymentLinkTokenId?: string;
  /** provider */
  provider?: string;
  /** session */
  session?: string;
  /** source */
  source?: string;
  /** useJson */
  useJson?: boolean;
  exposedToken: string;
}

/** customerType */
export type CustomerTypeEnum13 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type GetInternalPageExposedUsingPatchData = string;

/** customerType */
export type GetInternalPageExposedUsingPatchParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export type GetAirlinesUsingPostData = AirlinesResponse;

export type BookingDataUsingPostData = BookingDataResponse;

export type BookingStartedUsingPostData = BookingStartedResponse;

export type GetFlightInfoUsingPostData = FlightInfoResponse;

export type LoadAvailableSpecialInstructionsUsingPostData =
  LoadSpecialInstructionsResponse;

export type CheckInstructionsUsingPostData =
  ValidateSpecialInstructionsResponse;

export type LoadAvailablePaymentTypesUsingPostData = LoadPaymentTypesResponse;

export type LoadQrCodeUsingPostData = LoadQrCodeResponse;

export interface GenerateQrCodeUsingGetParams {
  /** asBase64 */
  asBase64?: boolean;
  /** attachment */
  attachment?: boolean;
  /** label */
  label?: string;
  /**
   * logoFile
   * @format uuid
   */
  logoFile?: string;
  /** name */
  name?: string;
  /**
   * size
   * @format int32
   */
  size?: number;
  /**
   * templateQr
   * @format uuid
   */
  templateQr?: string;
  /** text */
  text: string;
}

/** @format byte */
export type GenerateQrCodeUsingGetData = string;

export interface LoadQrCodeUsingGetParams {
  /** attachment */
  attachment?: boolean;
  /**
   * id
   * @format uuid
   */
  id: string;
}

/** @format byte */
export type LoadQrCodeUsingGetData = string;

export type GetReferenceOptionUsingPostData = ReferenceOptionsResponse;

export type GetReferenceSchemaUsingPostData = ReferenceSchemaResponse;

export type ValidateReferenceUsingPostData = ReferenceValidationResponse;

export type CheckAvailableServicesUsingPostData = CheckServicesResponse;

export type LoadAvailableServicesUsingPostData = LoadServicesResponse;

export type LoadLoyaltyCardsUsingPostData = LoyaltyCardsResponse;

export type CheckPromoCodeUsingPostData = ValidatePromoCodeResponse;

export type ValidateDiscountsUsingPostData = ValidateDiscountResponse;

export type CheckVoucherUsingPostData = ValidateVoucherResponse;

export type LoadVouchersUsingPostData = VouchersResponse;

export type ConfirmationUsingPostData = BaseResponse;

export type ConfirmationByTokenUsingPostData = BaseResponse;

export type LoadDriverChangesUsingPostData = DriverChangesResponse;

export type GetServerInfoUsingGetData = object;

export type ConfirmJobUsingPostData = BookJobResponse;

export type CompletePaymentUsingPostData = BookJobResponse;

export type MirrorUsingGetData = string;

export type MirrorUsingPostData = string;

export type MirrorV2UsingGetData = string;

export type MirrorV2UsingPostData = string;

export interface MirrorV2ExposedUsingGetParams {
  /** exposedToken */
  exposedToken: string;
}

export type MirrorV2ExposedUsingGetData = string;

export interface MirrorV2ExposedUsingPostParams {
  /** exposedToken */
  exposedToken: string;
}

export type MirrorV2ExposedUsingPostData = string;

export interface MirrorExposedUsingGetParams {
  /** exposedToken */
  exposedToken: string;
}

export type MirrorExposedUsingGetData = string;

export interface MirrorExposedUsingPostParams {
  /** exposedToken */
  exposedToken: string;
}

export type MirrorExposedUsingPostData = string;

export type CompletePaymentRawUsingGetData = string;

export type CompletePaymentRawUsingHeadData = string;

export type CompletePaymentRawUsingPostData = string;

export type CompletePaymentRawUsingPutData = string;

export type CompletePaymentRawUsingDeleteData = string;

export type CompletePaymentRawUsingOptionsData = string;

export type CompletePaymentRawUsingPatchData = string;

export interface CompletePaymentRawExposedUsingGetParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingGetData = string;

export interface CompletePaymentRawExposedUsingHeadParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingHeadData = string;

export interface CompletePaymentRawExposedUsingPostParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingPostData = string;

export interface CompletePaymentRawExposedUsingPutParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingPutData = string;

export interface CompletePaymentRawExposedUsingDeleteParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingDeleteData = string;

export interface CompletePaymentRawExposedUsingOptionsParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingOptionsData = string;

export interface CompletePaymentRawExposedUsingPatchParams {
  /** exposedToken */
  exposedToken: string;
}

export type CompletePaymentRawExposedUsingPatchData = string;

export type GetKioskConfigUsingGetData = KioskConfigResponse;

export type LoadLanguagesUsingPostData = LoadLanguagesResponse;

export type SetLanguageUsingPostData = BaseResponse;

export interface ExpectedUnexpectedExceptionUsingPostParams {
  /** text */
  text?: string;
}

export type ExpectedUnexpectedExceptionUsingPostData = any;

export interface GetLogFileUsingGetParams {
  /** full */
  full?: boolean;
  /** s */
  s: string;
  /** file */
  file: string;
}

export type GetLogFileUsingGetData = any;

export type LoginAnonymousUsingPostData = AnonymousLoginResponse;

export type LoginCorporateUsingPostData = CorporateLoginResponse;

export type TokenFindUsingPostData = FindTokenResponse;

export type LogoutUsingPostData = BaseResponse;

export type TokenRefreshUsingPostData = TokenRefreshResponse;

export type LoginRetailUsingPostData = RetailLoginResponse;

export type TokenRevokeUsingPostData = BaseResponse;

export type LoginTokenUsingPostData = TokenLoginResponse;

export type AddLostPropertyUsingPostData = BaseResponse;

export type DeleteLostPropertyUsingPostData = BaseResponse;

export type EditLostPropertyUsingPostData = BaseResponse;

export type LoadLostPropertiesUsingPostData = LostPropertiesResponse;

export type LoadDriversDataUsingPostData = DriverMapResponse;

export type CancelOfferUsingPostData = BaseResponse;

export type CheckOfferUsingPostData = JobOfferCheckResponse;

export type MakeOfferUsingPostData = JobOfferResponse;

export type LoadUsingPostData = OffSessionPaymentDataResponse;

export type StartUsingPostData = OffSessionPaymentResponse;

export interface CompletePaymentUsingPost1Params {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompletePaymentUsingPost1Data = BaseResponse;

export interface CompleteMobileCallbackUsingGetParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteMobileCallbackUsingGetData = string;

export interface CompleteMobileCallbackUsingPostParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteMobileCallbackUsingPostData = string;

export interface CompleteUsingGetParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteUsingGetData = string;

export interface CompleteUsingPostParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteUsingPostData = string;

export interface MobilePayUsingPostParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type MobilePayUsingPostData = OffSessionPaymentResponse;

export interface DepositMbCallbackUsingGetParams {
  token: string;
}

export type DepositMbCallbackUsingGetData = string;

export interface DepositMbCallbackUsingPostParams {
  token: string;
}

export type DepositMbCallbackUsingPostData = string;

export interface CompleteMobilePaymentUsingPostParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteMobilePaymentUsingPostData = BaseResponse;

export interface CompleteMobilePayUsingGetParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteMobilePayUsingGetData = string;

export interface CompleteMobilePayUsingPostParams {
  /**
   * token
   * @format uuid
   */
  token: string;
}

export type CompleteMobilePayUsingPostData = string;

export interface GetPaymentInfoUsingPostParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type GetPaymentInfoUsingPostData = PaymentInfoResponse;

export interface PayUsingPostParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type PayUsingPostData = PaymentResponse;

export interface DepositMbCallbackUsingGet1Params {
  tokenId: string;
}

export type DepositMbCallbackUsingGet1Data = string;

export interface DepositMbCallbackUsingPost1Params {
  tokenId: string;
}

export type DepositMbCallbackUsingPost1Data = string;

export interface CompletePaymentUsingPost3Params {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type CompletePaymentUsingPost3Data = PaymentCompleteResponse;

export interface DepositCallbackUsingGetParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingGetData = string;

export interface DepositCallbackUsingHeadParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingHeadData = string;

export interface DepositCallbackUsingPostParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingPostData = string;

export interface DepositCallbackUsingPutParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingPutData = string;

export interface DepositCallbackUsingDeleteParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingDeleteData = string;

export interface DepositCallbackUsingOptionsParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingOptionsData = string;

export interface DepositCallbackUsingPatchParams {
  /**
   * tokenId
   * @format uuid
   */
  tokenId: string;
}

export type DepositCallbackUsingPatchData = string;

export type CompleteAccountCreationUsingPostData = PayPalResponse;

export type DeletePayPalAccountUsingPostData = BaseResponse;

export type LoadPayPalAccountsUsingPostData = LoadPayPalAccountResponse;

export interface CompleteAccountCreationFromPortalUsingGetParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingGetData = string;

export interface CompleteAccountCreationFromPortalUsingHeadParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingHeadData = string;

export interface CompleteAccountCreationFromPortalUsingPostParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingPostData = string;

export interface CompleteAccountCreationFromPortalUsingPutParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingPutData = string;

export interface CompleteAccountCreationFromPortalUsingDeleteParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingDeleteData = string;

export interface CompleteAccountCreationFromPortalUsingOptionsParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingOptionsData = string;

export interface CompleteAccountCreationFromPortalUsingPatchParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompleteAccountCreationFromPortalUsingPatchData = string;

export interface CompleteAccountCreationFromPortalExposedUsingGetParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingGetData = string;

export interface CompleteAccountCreationFromPortalExposedUsingHeadParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingHeadData = string;

export interface CompleteAccountCreationFromPortalExposedUsingPostParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingPostData = string;

export interface CompleteAccountCreationFromPortalExposedUsingPutParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingPutData = string;

export interface CompleteAccountCreationFromPortalExposedUsingDeleteParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingDeleteData = string;

export interface CompleteAccountCreationFromPortalExposedUsingOptionsParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingOptionsData = string;

export interface CompleteAccountCreationFromPortalExposedUsingPatchParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompleteAccountCreationFromPortalExposedUsingPatchData = string;

export type SaveAccountUsingPostData = SavePayPalAccountResponse;

export type CompletePaymentUsingPost2Data = BookJobResponse;

export interface CompletePortalPaymentUsingGetParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingGetData = string;

export interface CompletePortalPaymentUsingHeadParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingHeadData = string;

export interface CompletePortalPaymentUsingPostParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingPostData = string;

export interface CompletePortalPaymentUsingPutParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingPutData = string;

export interface CompletePortalPaymentUsingDeleteParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingDeleteData = string;

export interface CompletePortalPaymentUsingOptionsParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingOptionsData = string;

export interface CompletePortalPaymentUsingPatchParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
}

export type CompletePortalPaymentUsingPatchData = string;

export interface CompletePortalPaymentExposedUsingGetParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingGetData = string;

export interface CompletePortalPaymentExposedUsingHeadParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingHeadData = string;

export interface CompletePortalPaymentExposedUsingPostParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingPostData = string;

export interface CompletePortalPaymentExposedUsingPutParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingPutData = string;

export interface CompletePortalPaymentExposedUsingDeleteParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingDeleteData = string;

export interface CompletePortalPaymentExposedUsingOptionsParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingOptionsData = string;

export interface CompletePortalPaymentExposedUsingPatchParams {
  /**
   * id
   * @format uuid
   */
  id: string;
  /** success */
  success: boolean;
  /** token */
  token: string;
  /** exposedToken */
  exposedToken: string;
}

export type CompletePortalPaymentExposedUsingPatchData = string;

export type AcceptPolicyAgreementUsingPostData = BaseResponse;

export type CheckPolicyAgreementUsingPostData = PolicyAgreementResponse;

export type GetBookingActionsUsingPostData = PortalBookingActionsResponse;

export type LoadActiveBookingsUsingPost1Data = BookingsResponse;

export type CountActiveBookingsUsingPostData = PortalBookingCountResponse;

export type LoadCompletedBookingsUsingPostData = BookingsResponse;

export type CountCompletedBookingsUsingPostData = PortalBookingCountResponse;

export type FindBookingsUsingPostData = BookingsResponse;

export type CountFilteredBookingsUsingPostData = PortalBookingCountResponse;

export type LoadPendingBookingsUsingPostData = BookingsResponse;

export type CountPendingBookingsUsingPostData = PortalBookingCountResponse;

export type SaveErrorUsingPostData = BaseResponse;

export type GetPortalConfigUsingGetData = PortalConfigResponse;

export type GetServerTimeUsingGetData = string;

export type SetLocaleUsingPostData = BaseResponse;

export type CloseAccountUsingPostData = BaseResponse;

export type DepositUsingPostData = PrepaidDepositResponse;

export type CompletePaymentUsingPost4Data = BaseResponse;

export type DepositMbCallbackUsingGet2Data = string;

export type DepositMbCallbackUsingPost2Data = string;

export interface DepositCallbackUsingGet1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingGet1Data = string;

export interface DepositCallbackUsingHead1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingHead1Data = string;

export interface DepositCallbackUsingPost1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingPost1Data = string;

export interface DepositCallbackUsingPut1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingPut1Data = string;

export interface DepositCallbackUsingDelete1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingDelete1Data = string;

export interface DepositCallbackUsingOptions1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingOptions1Data = string;

export interface DepositCallbackUsingPatch1Params {
  /** exposedToken */
  exposedToken: string;
}

export type DepositCallbackUsingPatch1Data = string;

export type GetPrepaidInfoUsingPostData = PrepaidAccountInfoResponse;

export type GetAccountLogsUsingPost1Data = BonusAccountLogsResponse;

export type OpenAccountUsingPostData = PrepaidAccountInfoResponse;

export type Send2FaUsingPostData = PrepaidSmsResponse;

export type Check2FaUsingPostData = PrepaidCheckSmsCodeResponse;

export type TransferUsingPostData = PrepaidTransferResponse;

export type CalculateCommissionUsingPostData =
  PrepaidCommissionCalculationResponse;

export type FindUserUsingPostData = PrepaidUserResponse;

export type LoadDetailsUsingPostData = LoadProfileResponse;

export type SaveDetailsUsingPostData = BaseResponse;

export type SetPasswordUsingPostData = BaseResponse;

export type SetPhoneNumberUsingPostData = BaseResponse;

export type RemoveProfileUsingPostData = BaseResponse;

export type ConfirmPushNotificationUsingPostData = BaseResponse;

export type ConfirmPushNotificationUnauthorizedUsingPostData = BaseResponse;

export type SetTokenUsingPostData = BaseResponse;

export type ApplyReferralCodeUsingPostData = BaseResponse;

export type CheckApplicableUsingPostData = BaseResponse;

export type LoadReferralCodeUsingPostData = LoadReferralCodeResponse;

export type CheckUserRegisteredUsingPostData = BaseResponse;

export type RegisterUsingPostData = RegistrationResponse;

export type RecoveryPasswordUsingPostData = BaseResponse;

export type PasswordCallbackUsingPostData = BaseResponse;

export type ValidatePhoneUsingPostData = ValidationPhoneResponse;

export interface ReportsUsingGetParams {
  /** customerType */
  customerType?: CustomerTypeEnum14;
}

/** customerType */
export type CustomerTypeEnum14 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingGetData = LoadReportsResponse;

/** customerType */
export type ReportsUsingGetParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface ReportsUsingHeadParams {
  /** customerType */
  customerType?: CustomerTypeEnum15;
}

/** customerType */
export type CustomerTypeEnum15 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingHeadData = LoadReportsResponse;

/** customerType */
export type ReportsUsingHeadParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface ReportsUsingPostParams {
  /** customerType */
  customerType?: CustomerTypeEnum16;
}

/** customerType */
export type CustomerTypeEnum16 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingPostData = LoadReportsResponse;

/** customerType */
export type ReportsUsingPostParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface ReportsUsingPutParams {
  /** customerType */
  customerType?: CustomerTypeEnum17;
}

/** customerType */
export type CustomerTypeEnum17 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingPutData = LoadReportsResponse;

/** customerType */
export type ReportsUsingPutParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface ReportsUsingDeleteParams {
  /** customerType */
  customerType?: CustomerTypeEnum18;
}

/** customerType */
export type CustomerTypeEnum18 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingDeleteData = LoadReportsResponse;

/** customerType */
export type ReportsUsingDeleteParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface ReportsUsingOptionsParams {
  /** customerType */
  customerType?: CustomerTypeEnum19;
}

/** customerType */
export type CustomerTypeEnum19 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingOptionsData = LoadReportsResponse;

/** customerType */
export type ReportsUsingOptionsParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface ReportsUsingPatchParams {
  /** customerType */
  customerType?: CustomerTypeEnum20;
}

/** customerType */
export type CustomerTypeEnum20 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

export type ReportsUsingPatchData = LoadReportsResponse;

/** customerType */
export type ReportsUsingPatchParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface DownloadReportUsingPostParams {
  customerType?: CustomerTypeEnum21;
  "reportDto.code"?: string;
  "reportDto.inputParameters[0].alias"?: string;
  "reportDto.inputParameters[0].name"?: string;
  "reportDto.inputParameters[0].required"?: boolean;
  /** @format int32 */
  "reportDto.inputParameters[0].type"?: number;
  "reportDto.inputParameters[0].value"?: string;
  "reportDto.name"?: string;
}

export type CustomerTypeEnum21 = "CORPORATE" | "RETAIL" | "ANONYMOUS";

/** @format byte */
export type DownloadReportUsingPostData = string;

export type DownloadReportUsingPostParams1CustomerTypeEnum =
  | "CORPORATE"
  | "RETAIL"
  | "ANONYMOUS";

export interface RenderHtmlTemplateUsingGetParams {
  /** params */
  params?: Record<string, string>[];
  /**
   * templateId
   * @format uuid
   */
  templateId: string;
}

export type RenderHtmlTemplateUsingGetData = string;

export interface DownloadTemplatePdfUsingGetParams {
  /** params */
  params?: Record<string, string>[];
  /**
   * templateId
   * @format uuid
   */
  templateId: string;
}

/** @format byte */
export type DownloadTemplatePdfUsingGetData = string;

export type GetResourcesUsingPostData = ResourcesResponse;

export interface LoadUsingGetParams {
  /** image */
  image: string;
}

export type LoadUsingGetData = any;

export type LoadBookingSettingsUsingPostData = BookingSettingsResponse;

export type LoadInitialSettingsUsingPostData = InitialSettingsResponse;

export type LoadPresetUsingPostData = QbPresetResponse;

export type LoadSystemSettingsUsingPostData = SystemSettingsResponse;

export type StatusUsingGetData = any;

export type ConfirmBookingUsingPostData = BaseResponse;

export type ConfirmBookingByTokenUsingPostData = BaseResponse;

export type CountPendingApprovalBookingsUsingGetData =
  PendingApprovalCountResponse;

export type CountPendingApprovalBookingsUsingHeadData =
  PendingApprovalCountResponse;

export type CountPendingApprovalBookingsUsingPostData =
  PendingApprovalCountResponse;

export type CountPendingApprovalBookingsUsingPutData =
  PendingApprovalCountResponse;

export type CountPendingApprovalBookingsUsingDeleteData =
  PendingApprovalCountResponse;

export type CountPendingApprovalBookingsUsingOptionsData =
  PendingApprovalCountResponse;

export type CountPendingApprovalBookingsUsingPatchData =
  PendingApprovalCountResponse;

export type LoadPendingApprovalBookingsUsingGetData =
  PendingApprovalBookingsResponse;

export type LoadPendingApprovalBookingsUsingHeadData =
  PendingApprovalBookingsResponse;

export type LoadPendingApprovalBookingsUsingPostData =
  PendingApprovalBookingsResponse;

export type LoadPendingApprovalBookingsUsingPutData =
  PendingApprovalBookingsResponse;

export type LoadPendingApprovalBookingsUsingDeleteData =
  PendingApprovalBookingsResponse;

export type LoadPendingApprovalBookingsUsingOptionsData =
  PendingApprovalBookingsResponse;

export type LoadPendingApprovalBookingsUsingPatchData =
  PendingApprovalBookingsResponse;

export type CalculateLatestVersionUsingGetData =
  PendingApprovalListVersionResponse;

export type CalculateLatestVersionUsingHeadData =
  PendingApprovalListVersionResponse;

export type CalculateLatestVersionUsingPostData =
  PendingApprovalListVersionResponse;

export type CalculateLatestVersionUsingPutData =
  PendingApprovalListVersionResponse;

export type CalculateLatestVersionUsingDeleteData =
  PendingApprovalListVersionResponse;

export type CalculateLatestVersionUsingOptionsData =
  PendingApprovalListVersionResponse;

export type CalculateLatestVersionUsingPatchData =
  PendingApprovalListVersionResponse;

export type SubmitSurveyUsingPostData = BaseResponse;

export type SubmitSurveyByTokenUsingPostData = BaseResponse;

export type LoadSurveyUsingPostData = LoadSurveyResponse;

export type LoadSurveyByTokenUsingPostData = LoadSurveyResponse;

export type LoadUnratedBookingsUsingPostData = UnratedBookingsResponse;

export type LoadSurveyResultUsingPostData = LoadSurveyResultResponse;

export type TipsRangeUsingPostData = TipsRangeResponse;

export type SubmitTipsUsingPostData = BaseResponse;

export interface EndpointFeedbackUsingGetParams {
  /** endpoint */
  endpoint: string;
}

export type EndpointFeedbackUsingGetData = string;

export interface EndpointFeedbackUsingPostParams {
  /** endpoint */
  endpoint: string;
}

export type EndpointFeedbackUsingPostData = string;

export namespace Addresses {
  /**
   * No description
   * @tags address-search-controller
   * @name LoadAirportsUsingPost
   * @summary loadAirports
   * @request POST:/addresses/airports
   * @secure
   */
  export namespace LoadAirportsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAirportsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadAirportsHierarchyUsingPost
   * @summary loadAirportsHierarchy
   * @request POST:/addresses/airports/full
   * @secure
   */
  export namespace LoadAirportsHierarchyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadAirportsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAirportsHierarchyUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadAirportByIdUsingPost
   * @summary loadAirportById
   * @request POST:/addresses/airports/loadById
   * @secure
   */
  export namespace LoadAirportByIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAirportByIdUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadTerminalsUsingPost
   * @summary loadTerminals
   * @request POST:/addresses/airports/terminals
   * @secure
   */
  export namespace LoadTerminalsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RelatedAddressesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadTerminalsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadAirportTerminalByIdUsingPost
   * @summary loadAirportTerminalById
   * @request POST:/addresses/airports/terminals/loadById
   * @secure
   */
  export namespace LoadAirportTerminalByIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAirportTerminalByIdUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadTerminalMeetingPointsUsingPost
   * @summary loadTerminalMeetingPoints
   * @request POST:/addresses/airports/terminals/meetingPoints
   * @secure
   */
  export namespace LoadTerminalMeetingPointsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TerminalMeetingPointsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadTerminalMeetingPointsUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name CreateFavouriteAddressUsingPost
   * @summary createFavouriteAddress
   * @request POST:/addresses/book/add
   * @secure
   */
  export namespace CreateFavouriteAddressUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressCreateRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CreateFavouriteAddressUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name LoadCountUsingPost
   * @summary Load favourite + recent addresses count
   * @request POST:/addresses/book/count
   * @secure
   */
  export namespace LoadCountUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressCountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadCountUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name DeleteFavouriteAddressUsingPost
   * @summary deleteFavouriteAddress
   * @request POST:/addresses/book/delete
   * @secure
   */
  export namespace DeleteFavouriteAddressUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressDeleteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteFavouriteAddressUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name EditFavouriteAddressUsingPost
   * @summary editFavouriteAddress
   * @request POST:/addresses/book/edit
   * @secure
   */
  export namespace EditFavouriteAddressUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressEditRequest;
    export type RequestHeaders = {};
    export type ResponseBody = EditFavouriteAddressUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name LoadListUsingPost
   * @summary Load favourite + recent addresses
   * @request POST:/addresses/book/list
   * @secure
   */
  export namespace LoadListUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadListUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name DeleteFavouriteAddressesUsingPost
   * @summary Delete multiply addresses
   * @request POST:/addresses/book/list/delete
   * @secure
   */
  export namespace DeleteFavouriteAddressesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DeleteAddressListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteFavouriteAddressesUsingPostData;
  }

  /**
   * @description Returns list of account addresses along with usage information, airports, train stations and ship terminals <br>Every address contains restrictions information <br>Returns empty list if account has no address restrictions in booking settings <br>Only CORPORATE request type is allowed
   * @tags address-book-controller
   * @name LoadAvailableAddressesUsingPost
   * @summary Load customer addresses, airports, train stations and ship terminals with availability info
   * @request POST:/addresses/book/load/available
   * @secure
   */
  export namespace LoadAvailableAddressesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAvailableAddressesUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name ListFavouriteAddressesUsingPost
   * @summary listFavouriteAddresses
   * @request POST:/addresses/book/load/favourites
   * @secure
   */
  export namespace ListFavouriteAddressesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressesListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ListFavouriteAddressesUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name ListAllFavouriteAddressesUsingPost
   * @summary listAllFavouriteAddresses
   * @request POST:/addresses/book/load/favourites/all
   * @secure
   */
  export namespace ListAllFavouriteAddressesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ListAllFavouriteAddressesUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name SearchLastUsedAddressesUsingPost
   * @summary searchLastUsedAddresses
   * @request POST:/addresses/book/load/mostUsed
   * @secure
   */
  export namespace SearchLastUsedAddressesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MostUsedAddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SearchLastUsedAddressesUsingPostData;
  }

  /**
   * No description
   * @tags address-book-controller
   * @name SearchRecentAddressesUsingPost
   * @summary searchRecentAddresses
   * @request POST:/addresses/book/load/recent
   * @secure
   */
  export namespace SearchRecentAddressesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RecentAddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SearchRecentAddressesUsingPostData;
  }

  /**
   * @description Returns list of stops, which were used in job but currently unavailable for specified booking operation type <br>Only available for CORPORATE users. Otherwise returns INVALID_RETAIL_REQUEST / INVALID_ANONYMOUS_REQUEST response status accordingly to passed customer type <br>Returns DATA_NOT_FOUND response status if there are no job for specified jobId or job has no stops <br>Returns empty array list if account has no address restrictions in booking configuration settings <br>Returns message field to display if job has unavailable address
   * @tags address-book-controller
   * @name CheckJobStopsAvailabilityUsingPost
   * @summary Check availability of job stops according to address restrictions settings
   * @request POST:/addresses/book/stops/check
   * @secure
   */
  export namespace CheckJobStopsAvailabilityUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JobStopsAvailabilityRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckJobStopsAvailabilityUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name CheckOperationAreaUsingPost
   * @summary checkOperationArea
   * @request POST:/addresses/checkOperationArea
   * @secure
   */
  export namespace CheckOperationAreaUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CheckOperationAreaRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckOperationAreaUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name CheckAirportReplacementUsingPost
   * @summary checkAirportReplacement
   * @request POST:/addresses/checkReplacement
   * @secure
   */
  export namespace CheckAirportReplacementUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CoordinatesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckAirportReplacementUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name GetAddressDetailsUsingPost
   * @summary getAddressDetails
   * @request POST:/addresses/search/details
   * @secure
   */
  export namespace GetAddressDetailsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressDetailsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetAddressDetailsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name SearchAddressByPositionUsingPost
   * @summary searchAddressByPosition
   * @request POST:/addresses/search/position
   * @secure
   */
  export namespace SearchAddressByPositionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressPositionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SearchAddressByPositionUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name SearchAddressUsingPost
   * @summary searchAddress
   * @request POST:/addresses/search/query
   * @secure
   */
  export namespace SearchAddressUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressSearchRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SearchAddressUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadShipTerminalsUsingPost
   * @summary loadShipTerminals
   * @request POST:/addresses/shipTerminals
   * @secure
   */
  export namespace LoadShipTerminalsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadShipTerminalsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadBerthsUsingPost
   * @summary loadBerths
   * @request POST:/addresses/shipTerminals/berths
   * @secure
   */
  export namespace LoadBerthsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RelatedAddressesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadBerthsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadBerthsByIdUsingPost
   * @summary loadBerthsById
   * @request POST:/addresses/shipTerminals/berths/loadById
   * @secure
   */
  export namespace LoadBerthsByIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadBerthsByIdUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadShipTerminalsHierarchyUsingPost
   * @summary loadShipTerminalsHierarchy
   * @request POST:/addresses/shipTerminals/full
   * @secure
   */
  export namespace LoadShipTerminalsHierarchyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BaseDatedRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadShipTerminalsHierarchyUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadShipTerminalByIdUsingPost
   * @summary loadShipTerminalById
   * @request POST:/addresses/shipTerminals/loadById
   * @secure
   */
  export namespace LoadShipTerminalByIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadShipTerminalByIdUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadSpecialPlacesHierarchyUsingPost
   * @summary loadSpecialPlacesHierarchy
   * @request POST:/addresses/special/full
   * @secure
   */
  export namespace LoadSpecialPlacesHierarchyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BaseDatedRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSpecialPlacesHierarchyUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadSpecialPlacesUsingPost1
   * @summary loadSpecialPlaces
   * @request POST:/addresses/special/places
   * @secure
   */
  export namespace LoadSpecialPlacesUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SpecialPlaceRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSpecialPlacesUsingPost1Data;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadSpecialPlacesUsingPost
   * @summary loadSpecialPlaces
   * @request POST:/addresses/special/places/loadById
   * @secure
   */
  export namespace LoadSpecialPlacesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSpecialPlacesUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadSpecialPlaceMeetingPointsUsingPost
   * @summary loadSpecialPlaceMeetingPoints
   * @request POST:/addresses/special/points
   * @secure
   */
  export namespace LoadSpecialPlaceMeetingPointsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RelatedAddressesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSpecialPlaceMeetingPointsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadSpecialPlaceTypesUsingPost
   * @summary loadSpecialPlaceTypes
   * @request POST:/addresses/special/types
   * @secure
   */
  export namespace LoadSpecialPlaceTypesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSpecialPlaceTypesUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadTrainStationsUsingPost1
   * @summary loadTrainStations
   * @request POST:/addresses/trainStations
   * @secure
   */
  export namespace LoadTrainStationsUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadTrainStationsUsingPost1Data;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadTrainStationsUsingPost
   * @summary loadTrainStations
   * @request POST:/addresses/trainStations/full
   * @secure
   */
  export namespace LoadTrainStationsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BaseDatedRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadTrainStationsUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadTrainStationByIdUsingPost
   * @summary loadTrainStationById
   * @request POST:/addresses/trainStations/loadById
   * @secure
   */
  export namespace LoadTrainStationByIdUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddressRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadTrainStationByIdUsingPostData;
  }

  /**
   * No description
   * @tags address-search-controller
   * @name LoadTrainStationMeetingPointUsingPost
   * @summary loadTrainStationMeetingPoint
   * @request POST:/addresses/trainStations/meetingPoints
   * @secure
   */
  export namespace LoadTrainStationMeetingPointUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RelatedAddressesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadTrainStationMeetingPointUsingPostData;
  }
}

export namespace Bonus {
  /**
   * @description Returns bonus program information <br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags bonus-program-controller
   * @name GetBonusProgramInfoUsingPost
   * @summary Get bonus program information
   * @request POST:/bonus/info
   * @secure
   */
  export namespace GetBonusProgramInfoUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetBonusProgramInfoUsingPostData;
  }

  /**
   * @description Returns financial account logs of the authenticated user. Not available for anonymous users<br>Available filter parameters: <br><b>from, to</b> - date intervals, inclusive <br><b>jobNumber</b> - return logs, related to specified job number <br>Logs are sorted by creation date, descending. Last created logs goes first. <br>Returns null instead of a list if a financial account is not configured for the authenticated user<br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags bonus-program-controller
   * @name GetAccountLogsUsingPost
   * @summary Get financial account logs
   * @request POST:/bonus/logs
   * @secure
   */
  export namespace GetAccountLogsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinAccountLogsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetAccountLogsUsingPostData;
  }
}

export namespace Booking {
  /**
   * No description
   * @tags booking-cancellation-controller
   * @name CancelJobUsingPost
   * @summary cancelJob
   * @request POST:/booking/cancel
   * @secure
   */
  export namespace CancelJobUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CancelBookingRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CancelJobUsingPostData;
  }

  /**
   * No description
   * @tags booking-cancellation-controller
   * @name GetCancellationChargeUsingPost
   * @summary getCancellationCharge
   * @request POST:/booking/cancel/charge
   * @secure
   */
  export namespace GetCancellationChargeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CancelBookingRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetCancellationChargeUsingPostData;
  }

  /**
   * @description Commits passenger position if driver is on way and passenger isn't on board. Saves client position for every active job in valid status or for particular job if jobId present in request<br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing customer type or coordinates <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>DATA_NOT_FOUND</b> - booking has not been found <br><b>INVALID_ACCOUNT_INFO</b> - current user cannot access booking <br>
   * @tags beirut-booking-history-controller
   * @name SavePassengerLocationUsingPost
   * @summary Commit client coordinates to booking
   * @request POST:/booking/client/position
   * @secure
   */
  export namespace SavePassengerLocationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientPositionRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SavePassengerLocationUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name HideBookingUsingPost
   * @summary hideBooking
   * @request POST:/booking/hide
   * @secure
   */
  export namespace HideBookingUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = HideBookingsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = HideBookingUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name BookingsListUsingPost
   * @summary bookingsList
   * @request POST:/booking/list
   * @secure
   */
  export namespace BookingsListUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = BookingsListUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name BookingsCountUsingPost
   * @summary bookingsCount
   * @request POST:/booking/list/count
   * @secure
   */
  export namespace BookingsCountUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = BookingsCountUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name SubmitBookingSurveyUsingPost
   * @summary submitBookingSurvey
   * @request POST:/booking/list/{jobId}/feedback
   * @secure
   */
  export namespace SubmitBookingSurveyUsingPost {
    export type RequestParams = {
      /**
       * jobId
       * @format uuid
       */
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BookingFeedbackRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SubmitBookingSurveyUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadBookingSurveyUsingPost
   * @summary loadBookingSurvey
   * @request POST:/booking/list/{jobId}/survey
   * @secure
   */
  export namespace LoadBookingSurveyUsingPost {
    export type RequestParams = {
      /**
       * jobId
       * @format uuid
       */
      jobId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = BookingSurveyRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadBookingSurveyUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadActiveBookingsUsingPost
   * @summary loadActiveBookings
   * @request POST:/booking/load/active
   * @secure
   */
  export namespace LoadActiveBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadActiveBookingsUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadDetailedActiveBookingsInfoUsingPost
   * @summary loadDetailedActiveBookingsInfo
   * @request POST:/booking/load/active/full
   * @secure
   */
  export namespace LoadDetailedActiveBookingsInfoUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadDetailedActiveBookingsInfoUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadJobDetailsUsingPost
   * @summary loadJobDetails
   * @request POST:/booking/load/details
   * @secure
   */
  export namespace LoadJobDetailsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadJobDetailsUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadJobDetailsByTokenUsingPost
   * @summary loadJobDetailsByToken
   * @request POST:/booking/load/details/token
   * @secure
   */
  export namespace LoadJobDetailsByTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadJobDetailsByTokenUsingPostData;
  }

  /**
   * @description Batch method for loading booking details related to driver <br><b>loadPositionHistory</b> could be used to load a driver's position history. Loading gap could be configured using <i>historyIntervalInSeconds</i> request body field. See: <br><b>/booking/load/stops/passed</b><br><b>/booking/load/driverPosition</b>
   * @tags beirut-booking-history-controller
   * @name LoadDriverDetailsUsingPost
   * @summary Load driver details
   * @request POST:/booking/load/driver/details
   * @secure
   */
  export namespace LoadDriverDetailsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DriverDetailsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadDriverDetailsUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name GetDriverPositionUsingPost
   * @summary getDriverPosition
   * @request POST:/booking/load/driverPosition
   * @secure
   */
  export namespace GetDriverPositionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetDriverPositionUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadHistoryJobsUsingPost
   * @summary loadHistoryJobs
   * @request POST:/booking/load/history
   * @secure
   */
  export namespace LoadHistoryJobsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ArchiveBookingsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadHistoryJobsUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadFullJobsHistoryUsingPost
   * @summary loadFullJobsHistory
   * @request POST:/booking/load/history/full
   * @secure
   */
  export namespace LoadFullJobsHistoryUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ArchiveBookingsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadFullJobsHistoryUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadJobLinkUsingPost
   * @summary loadJobLink
   * @request POST:/booking/load/link
   * @secure
   */
  export namespace LoadJobLinkUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadJobLinkUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name GetPodSignatureUsingGet
   * @summary getPodSignature
   * @request GET:/booking/load/signature/{imageId}
   * @secure
   */
  export namespace GetPodSignatureUsingGet {
    export type RequestParams = {
      /**
       * imageId
       * @format uuid
       */
      imageId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPodSignatureUsingGetData;
  }

  /**
   * @description Returns id of passed stop<br>Passed stop id from response should be used in subsequent requests to optimise performance <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing customer type or booking id<br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>DATA_NOT_FOUND</b> - booking has not been found or passenger is not on board<br><b>INVALID_ACCOUNT_INFO</b> - current user cannot access this booking <br>
   * @tags beirut-booking-history-controller
   * @name GetPassedStopUsingPost
   * @summary Find passed stop using booking id
   * @request POST:/booking/load/stops/passed
   * @secure
   */
  export namespace GetPassedStopUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PassedStopRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetPassedStopUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name LoadJobTrackUsingPost
   * @summary loadJobTrack
   * @request POST:/booking/load/track
   * @secure
   */
  export namespace LoadJobTrackUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadJobTrackUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name GetJobVersionUsingPost
   * @summary getJobVersion
   * @request POST:/booking/load/version
   * @secure
   */
  export namespace GetJobVersionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetJobVersionUsingPostData;
  }

  /**
   * No description
   * @tags beirut-booking-history-controller
   * @name SendByEmailUsingPost
   * @summary sendByEmail
   * @request POST:/booking/sendByEmail
   * @secure
   */
  export namespace SendByEmailUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SendBookingRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendByEmailUsingPostData;
  }
}

export namespace Calculate {
  /**
   * No description
   * @tags delay-controller
   * @name CalculateArrivalDelayUsingPost
   * @summary calculateArrivalDelay
   * @request POST:/calculate/arrivalDelay
   * @secure
   */
  export namespace CalculateArrivalDelayUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DelayRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateArrivalDelayUsingPostData;
  }

  /**
   * No description
   * @tags delay-controller
   * @name CalculateDelayUsingPost
   * @summary calculateDelay
   * @request POST:/calculate/delay
   * @secure
   */
  export namespace CalculateDelayUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DelayRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateDelayUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name GetDurationByCoordinatesUsingPost
   * @summary getDurationByCoordinates
   * @request POST:/calculate/duration
   * @secure
   */
  export namespace GetDurationByCoordinatesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RouteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetDurationByCoordinatesUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name CalculateJourneyTimeUsingPost
   * @summary calculateJourneyTime
   * @request POST:/calculate/journeyTime
   * @secure
   */
  export namespace CalculateJourneyTimeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JourneyTimeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateJourneyTimeUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name CalculatePrebookLimitUsingPost
   * @summary calculatePrebookLimit
   * @request POST:/calculate/prebookLimit
   * @secure
   */
  export namespace CalculatePrebookLimitUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrebookLimitRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculatePrebookLimitUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name CalculatePrebookLimitRangeUsingPost
   * @summary calculatePrebookLimitRange
   * @request POST:/calculate/prebookLimit/range
   * @secure
   */
  export namespace CalculatePrebookLimitRangeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrebookLimitRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculatePrebookLimitRangeUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name CalculatePriceUsingPost
   * @summary calculatePrice
   * @request POST:/calculate/price
   * @secure
   */
  export namespace CalculatePriceUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PriceRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculatePriceUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name CalculateProposedAddresssesUsingPost
   * @summary calculateProposedAddressses
   * @request POST:/calculate/proposedAddresses
   * @secure
   */
  export namespace CalculateProposedAddresssesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProposedAddressesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateProposedAddresssesUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name CalculateQuotationUsingPost
   * @summary calculateQuotation
   * @request POST:/calculate/quotation
   * @secure
   */
  export namespace CalculateQuotationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = QuotationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateQuotationUsingPostData;
  }

  /**
   * No description
   * @tags booking-calculation-controller
   * @name GetRouteByCoordinatesUsingPost
   * @summary getRouteByCoordinates
   * @request POST:/calculate/route
   * @secure
   */
  export namespace GetRouteByCoordinatesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RouteRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetRouteByCoordinatesUsingPostData;
  }
}

export namespace Chat {
  /**
   * No description
   * @tags chat-controller
   * @name LoadChatUsingPost
   * @summary loadChat
   * @request POST:/chat/load
   * @secure
   */
  export namespace LoadChatUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadChatRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadChatUsingPostData;
  }

  /**
   * No description
   * @tags chat-controller
   * @name MarkReadUsingPost
   * @summary markRead
   * @request POST:/chat/markRead
   * @secure
   */
  export namespace MarkReadUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = MarkReadUsingPostData;
  }

  /**
   * No description
   * @tags chat-controller
   * @name SendMessageToDriverUsingPost
   * @summary sendMessageToDriver
   * @request POST:/chat/send
   * @secure
   */
  export namespace SendMessageToDriverUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = MessageToDriverRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SendMessageToDriverUsingPostData;
  }
}

export namespace Complaint {
  /**
   * No description
   * @tags complaint-controller
   * @name CreateComplaintUsingPost
   * @summary createComplaint
   * @request POST:/complaint/create
   * @secure
   */
  export namespace CreateComplaintUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateComplaintRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CreateComplaintUsingPostData;
  }

  /**
   * No description
   * @tags complaint-controller
   * @name LoadComplaintUsingPost
   * @summary loadComplaint
   * @request POST:/complaint/load
   * @secure
   */
  export namespace LoadComplaintUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadComplaintRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadComplaintUsingPostData;
  }
}

export namespace ContactBook {
  /**
   * No description
   * @tags passengers-controller
   * @name FindDefaultContactUsingPost
   * @summary findDefaultContact
   * @request POST:/contactBook/find/default/contact
   * @secure
   */
  export namespace FindDefaultContactUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FindDefaultContactUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name FindDefaultEmailUsingPost
   * @summary findDefaultEmail
   * @request POST:/contactBook/find/default/email
   * @secure
   */
  export namespace FindDefaultEmailUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FindDefaultInfoRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FindDefaultEmailUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name FindDefaultPassengerUsingPost
   * @summary findDefaultPassenger
   * @request POST:/contactBook/find/default/passenger
   * @secure
   */
  export namespace FindDefaultPassengerUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FindDefaultPassengerUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name FindDefaultPhoneUsingPost
   * @summary findDefaultPhone
   * @request POST:/contactBook/find/default/phone
   * @secure
   */
  export namespace FindDefaultPhoneUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FindDefaultInfoRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FindDefaultPhoneUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name LoadPassengersUsingPost
   * @summary loadPassengers
   * @request POST:/contactBook/load/available
   * @secure
   */
  export namespace LoadPassengersUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadAvailableContactsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPassengersUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name LoadAvailableContactsUsingPost
   * @summary loadAvailableContacts
   * @request POST:/contactBook/load/available/contacts
   * @secure
   */
  export namespace LoadAvailableContactsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadAvailableContactsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAvailableContactsUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name LoadAvailablePassengersUsingPost
   * @summary loadAvailablePassengers
   * @request POST:/contactBook/load/available/passengers
   * @secure
   */
  export namespace LoadAvailablePassengersUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadAvailableContactsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAvailablePassengersUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name SearchContactsByNameUsingPost
   * @summary searchContactsByName
   * @request POST:/contactBook/load/byName
   * @secure
   */
  export namespace SearchContactsByNameUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SearchContactByNameRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SearchContactsByNameUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name SetDefaultContactUsingPost
   * @summary setDefaultContact
   * @request POST:/contactBook/set/default/contact
   * @secure
   */
  export namespace SetDefaultContactUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetDefaultContactRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetDefaultContactUsingPostData;
  }

  /**
   * No description
   * @tags passengers-controller
   * @name SetDefaultPassengerUsingPost
   * @summary setDefaultPassenger
   * @request POST:/contactBook/set/default/passenger
   * @secure
   */
  export namespace SetDefaultPassengerUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetDefaultContactRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetDefaultPassengerUsingPostData;
  }
}

export namespace Credentials {
  /**
   * @description In case of outdated application, the server sends application link <br>Possible error statuses: <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required smartphone details <br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br>
   * @tags credentials-controller
   * @name CheckApplicationVersionUsingPost
   * @summary Validate device information
   * @request POST:/credentials/application
   * @secure
   */
  export namespace CheckApplicationVersionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BaseLoginRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckApplicationVersionUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>FILL_REQUIRED_DETAILS</b> - invalid or incomplete login. Check loginFields for more information.<br><b>BOOKINGS_NOT_ALLOWED</b> - account is not allowed for making bookings<br><b>ACCOUNT_ON_HOLD</b> - account is on hold. Used by MOBILE_WS clients<br><b>PIN_ON_HOLD</b> - pin is on hold. Used by MOBILE_WS clients<br><b>USER_ON_HOLD</b> - user is on hold. Used by MOBILE_WS clients<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br>
   * @tags credentials-controller
   * @name CheckAccountCredentialsUsingPost
   * @summary Check corporate credentials
   * @request POST:/credentials/corporate
   * @secure
   */
  export namespace CheckAccountCredentialsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CorporateLoginRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckAccountCredentialsUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - empty phone or password <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number format <br><b>USER_NOT_FOUND</b> - registration info not found <br><b>USER_ON_HOLD</b> - registration info is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br>
   * @tags credentials-controller
   * @name CheckRetailCredentialsUsingPost
   * @summary Check retail credentials
   * @request POST:/credentials/retail
   * @secure
   */
  export namespace CheckRetailCredentialsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RetailLoginRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckRetailCredentialsUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - missing device field <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required smartphone details <br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags credentials-controller
   * @name UpdateSmartphoneUsingPost
   * @summary Update device information
   * @request POST:/credentials/updateDevice
   * @secure
   */
  export namespace UpdateSmartphoneUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateDeviceRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateSmartphoneUsingPostData;
  }
}

export namespace CreditCard {
  /**
   * No description
   * @tags credit-card-controller
   * @name DeleteCreditCardsUsingPost
   * @summary deleteCreditCards
   * @request POST:/creditCard/delete
   * @secure
   */
  export namespace DeleteCreditCardsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DeleteCreditCardRequest;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteCreditCardsUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name InitSecure3DUsingPost
   * @summary initSecure3d
   * @request POST:/creditCard/initiate
   * @secure
   */
  export namespace InitSecure3DUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InitSecure3DRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InitSecure3DUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name LoadCreditCardsUsingPost
   * @summary loadCreditCards
   * @request POST:/creditCard/load
   * @secure
   */
  export namespace LoadCreditCardsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AmendableCustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadCreditCardsUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>OPERATION_UNAVAILABLE</b> - credit card provider mismatch. IPP provider required.
   * @tags credit-card-controller
   * @name GetMasterCardSessionUsingPost
   * @summary Create master card session
   * @request POST:/creditCard/master-card/session
   * @secure
   */
  export namespace GetMasterCardSessionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
    };
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetMasterCardSessionUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name SaveCreditCardUsingPost
   * @summary saveCreditCard
   * @request POST:/creditCard/save
   * @secure
   */
  export namespace SaveCreditCardUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SaveCreditCardRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SaveCreditCardUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardUsingPost
   * @summary completeSaveCreditCard
   * @request POST:/creditCard/save/complete
   * @secure
   */
  export namespace CompleteSaveCreditCardUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CompleteSaveCreditCardRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingGet
   * @summary completeSaveCreditCardInPortal
   * @request GET:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingGetData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingHead
   * @summary completeSaveCreditCardInPortal
   * @request HEAD:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingHeadData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingPost
   * @summary completeSaveCreditCardInPortal
   * @request POST:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingPut
   * @summary completeSaveCreditCardInPortal
   * @request PUT:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingPutData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingDelete
   * @summary completeSaveCreditCardInPortal
   * @request DELETE:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingDeleteData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingOptions
   * @summary completeSaveCreditCardInPortal
   * @request OPTIONS:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingOptionsData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalUsingPatch
   * @summary completeSaveCreditCardInPortal
   * @request PATCH:/creditCard/save/portalComplete
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteSaveCreditCardInPortalUsingPatchData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingGet
   * @summary completeSaveCreditCardInPortalExposed
   * @request GET:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingGet {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingGetData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingHead
   * @summary completeSaveCreditCardInPortalExposed
   * @request HEAD:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingHead {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingHeadData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingPost
   * @summary completeSaveCreditCardInPortalExposed
   * @request POST:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingPost {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingPut
   * @summary completeSaveCreditCardInPortalExposed
   * @request PUT:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingPut {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingPutData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingDelete
   * @summary completeSaveCreditCardInPortalExposed
   * @request DELETE:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingDelete {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingDeleteData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingOptions
   * @summary completeSaveCreditCardInPortalExposed
   * @request OPTIONS:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingOptions {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingOptionsData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name CompleteSaveCreditCardInPortalExposedUsingPatch
   * @summary completeSaveCreditCardInPortalExposed
   * @request PATCH:/creditCard/save/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteSaveCreditCardInPortalExposedUsingPatch {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteSaveCreditCardInPortalExposedUsingPatchData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingGet
   * @summary getInternalPage
   * @request GET:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingGetParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingGetData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingHead
   * @summary getInternalPage
   * @request HEAD:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingHeadParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingHeadData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingPost
   * @summary getInternalPage
   * @request POST:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingPostParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingPut
   * @summary getInternalPage
   * @request PUT:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingPutParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingPutData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingDelete
   * @summary getInternalPage
   * @request DELETE:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingDeleteParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingDeleteData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingOptions
   * @summary getInternalPage
   * @request OPTIONS:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingOptionsParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingOptionsData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageUsingPatch
   * @summary getInternalPage
   * @request PATCH:/creditCard/session
   * @secure
   */
  export namespace GetInternalPageUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageUsingPatchParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageUsingPatchData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingGet
   * @summary getInternalPageExposed
   * @request GET:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingGet {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingGetParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingGetData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingHead
   * @summary getInternalPageExposed
   * @request HEAD:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingHead {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingHeadParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingHeadData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingPost
   * @summary getInternalPageExposed
   * @request POST:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingPost {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingPostParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingPostData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingPut
   * @summary getInternalPageExposed
   * @request PUT:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingPut {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingPutParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingPutData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingDelete
   * @summary getInternalPageExposed
   * @request DELETE:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingDelete {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingDeleteParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingDeleteData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingOptions
   * @summary getInternalPageExposed
   * @request OPTIONS:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingOptions {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingOptionsParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingOptionsData;
  }

  /**
   * No description
   * @tags credit-card-controller
   * @name GetInternalPageExposedUsingPatch
   * @summary getInternalPageExposed
   * @request PATCH:/creditCard/session/{exposedToken}/callback
   * @secure
   */
  export namespace GetInternalPageExposedUsingPatch {
    export type RequestParams = {
      exposedToken: string;
    };
    export type RequestQuery = {
      /** customerType */
      customerType?: GetInternalPageExposedUsingPatchParams1CustomerTypeEnum;
      /**
       * paymentLinkTokenId
       * @format uuid
       */
      paymentLinkTokenId?: string;
      /** provider */
      provider?: string;
      /** session */
      session?: string;
      /** source */
      source?: string;
      /** useJson */
      useJson?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInternalPageExposedUsingPatchData;
  }
}

export namespace Data {
  /**
   * No description
   * @tags booking-data-controller
   * @name GetAirlinesUsingPost
   * @summary getAirlines
   * @request POST:/data/airlines
   * @secure
   */
  export namespace GetAirlinesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AirlinesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetAirlinesUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name BookingDataUsingPost
   * @summary bookingData
   * @request POST:/data/booking
   * @secure
   */
  export namespace BookingDataUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = BookingDataUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name BookingStartedUsingPost
   * @summary bookingStarted
   * @request POST:/data/bookingStarted
   * @secure
   */
  export namespace BookingStartedUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BookingStartedUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name GetFlightInfoUsingPost
   * @summary getFlightInfo
   * @request POST:/data/flight
   * @secure
   */
  export namespace GetFlightInfoUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FlightInfoRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetFlightInfoUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name LoadAvailableSpecialInstructionsUsingPost
   * @summary loadAvailableSpecialInstructions
   * @request POST:/data/instructions/load
   * @secure
   */
  export namespace LoadAvailableSpecialInstructionsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadSpecialInstructionsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAvailableSpecialInstructionsUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name CheckInstructionsUsingPost
   * @summary checkInstructions
   * @request POST:/data/instructions/validate
   * @secure
   */
  export namespace CheckInstructionsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ValidateSpecialInstructionsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckInstructionsUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name LoadAvailablePaymentTypesUsingPost
   * @summary loadAvailablePaymentTypes
   * @request POST:/data/paymentTypes
   * @secure
   */
  export namespace LoadAvailablePaymentTypesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadPaymentTypesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAvailablePaymentTypesUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name LoadQrCodeUsingPost
   * @summary loadQrCode
   * @request POST:/data/qr
   * @secure
   */
  export namespace LoadQrCodeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadQrCodeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadQrCodeUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name GenerateQrCodeUsingGet
   * @summary generateQrCode
   * @request GET:/data/qr/generate
   * @secure
   */
  export namespace GenerateQrCodeUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      /** asBase64 */
      asBase64?: boolean;
      /** attachment */
      attachment?: boolean;
      /** label */
      label?: string;
      /**
       * logoFile
       * @format uuid
       */
      logoFile?: string;
      /** name */
      name?: string;
      /**
       * size
       * @format int32
       */
      size?: number;
      /**
       * templateQr
       * @format uuid
       */
      templateQr?: string;
      /** text */
      text: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GenerateQrCodeUsingGetData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name LoadQrCodeUsingGet
   * @summary loadQrCode
   * @request GET:/data/qr/{id}
   * @secure
   */
  export namespace LoadQrCodeUsingGet {
    export type RequestParams = {
      /**
       * id
       * @format uuid
       */
      id: string;
    };
    export type RequestQuery = {
      /** attachment */
      attachment?: boolean;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoadQrCodeUsingGetData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name GetReferenceOptionUsingPost
   * @summary getReferenceOption
   * @request POST:/data/references/option
   * @secure
   */
  export namespace GetReferenceOptionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReferenceOptionsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetReferenceOptionUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name GetReferenceSchemaUsingPost
   * @summary getReferenceSchema
   * @request POST:/data/references/schema
   * @secure
   */
  export namespace GetReferenceSchemaUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetReferenceSchemaUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name ValidateReferenceUsingPost
   * @summary validateReference
   * @request POST:/data/references/validation
   * @secure
   */
  export namespace ValidateReferenceUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReferenceValidationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ValidateReferenceUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name CheckAvailableServicesUsingPost
   * @summary checkAvailableServices
   * @request POST:/data/services/available
   * @secure
   */
  export namespace CheckAvailableServicesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadServicesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckAvailableServicesUsingPostData;
  }

  /**
   * No description
   * @tags booking-data-controller
   * @name LoadAvailableServicesUsingPost
   * @summary loadAvailableServices
   * @request POST:/data/services/load
   * @secure
   */
  export namespace LoadAvailableServicesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoadServicesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadAvailableServicesUsingPostData;
  }
}

export namespace Discount {
  /**
   * No description
   * @tags discount-controller
   * @name LoadLoyaltyCardsUsingPost
   * @summary loadLoyaltyCards
   * @request POST:/discount/loyaltyCards
   * @secure
   */
  export namespace LoadLoyaltyCardsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AmendableCustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadLoyaltyCardsUsingPostData;
  }

  /**
   * No description
   * @tags discount-controller
   * @name CheckPromoCodeUsingPost
   * @summary checkPromoCode
   * @request POST:/discount/promoCode/validate
   * @secure
   */
  export namespace CheckPromoCodeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ValidatePromoCodeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckPromoCodeUsingPostData;
  }

  /**
   * No description
   * @tags discount-validation-controller
   * @name ValidateDiscountsUsingPost
   * @summary validateDiscounts
   * @request POST:/discount/validate
   * @secure
   */
  export namespace ValidateDiscountsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ValidateDiscountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ValidateDiscountsUsingPostData;
  }

  /**
   * No description
   * @tags discount-controller
   * @name CheckVoucherUsingPost
   * @summary checkVoucher
   * @request POST:/discount/voucher/validate
   * @secure
   */
  export namespace CheckVoucherUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ValidateVoucherRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckVoucherUsingPostData;
  }

  /**
   * No description
   * @tags discount-controller
   * @name LoadVouchersUsingPost
   * @summary loadVouchers
   * @request POST:/discount/vouchers
   * @secure
   */
  export namespace LoadVouchersUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AmendableCustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadVouchersUsingPostData;
  }
}

export namespace DriverChanges {
  /**
   * No description
   * @tags driver-changes-controller
   * @name ConfirmationUsingPost
   * @summary confirmation
   * @request POST:/driverChanges/confirmation
   * @secure
   */
  export namespace ConfirmationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DriverChangesConfirmationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmationUsingPostData;
  }

  /**
   * No description
   * @tags driver-changes-controller
   * @name ConfirmationByTokenUsingPost
   * @summary confirmationByToken
   * @request POST:/driverChanges/confirmation/token
   * @secure
   */
  export namespace ConfirmationByTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfirmationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmationByTokenUsingPostData;
  }

  /**
   * No description
   * @tags driver-changes-controller
   * @name LoadDriverChangesUsingPost
   * @summary loadDriverChanges
   * @request POST:/driverChanges/load
   * @secure
   */
  export namespace LoadDriverChangesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadDriverChangesUsingPostData;
  }
}

export namespace Info {
  /**
   * @description <b>releaseNumber</b> - number of the relsease <br><b>releaseTimestamp</b> - build time
   * @tags info-controller
   * @name GetServerInfoUsingGet
   * @summary Get server information
   * @request GET:/info
   * @secure
   */
  export namespace GetServerInfoUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetServerInfoUsingGetData;
  }
}

export namespace Job {
  /**
   * No description
   * @tags booking-confirmation-controller
   * @name ConfirmJobUsingPost
   * @summary confirmJob
   * @request POST:/job/book
   * @secure
   */
  export namespace ConfirmJobUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookJobRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmJobUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentUsingPost
   * @summary completePayment
   * @request POST:/job/payment/complete
   * @secure
   */
  export namespace CompletePaymentUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CompletePaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorUsingGet
   * @summary mirror
   * @request GET:/job/payment/mirror
   * @secure
   */
  export namespace MirrorUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorUsingGetData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorUsingPost
   * @summary mirror
   * @request POST:/job/payment/mirror
   * @secure
   */
  export namespace MirrorUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorV2UsingGet
   * @summary mirrorV2
   * @request GET:/job/payment/mirror/v2
   * @secure
   */
  export namespace MirrorV2UsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorV2UsingGetData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorV2UsingPost
   * @summary mirrorV2
   * @request POST:/job/payment/mirror/v2
   * @secure
   */
  export namespace MirrorV2UsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorV2UsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorV2ExposedUsingGet
   * @summary mirrorV2Exposed
   * @request GET:/job/payment/mirror/v2/{exposedToken}/callback
   * @secure
   */
  export namespace MirrorV2ExposedUsingGet {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorV2ExposedUsingGetData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorV2ExposedUsingPost
   * @summary mirrorV2Exposed
   * @request POST:/job/payment/mirror/v2/{exposedToken}/callback
   * @secure
   */
  export namespace MirrorV2ExposedUsingPost {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorV2ExposedUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorExposedUsingGet
   * @summary mirrorExposed
   * @request GET:/job/payment/mirror/{exposedToken}/callback
   * @secure
   */
  export namespace MirrorExposedUsingGet {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorExposedUsingGetData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name MirrorExposedUsingPost
   * @summary mirrorExposed
   * @request POST:/job/payment/mirror/{exposedToken}/callback
   * @secure
   */
  export namespace MirrorExposedUsingPost {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MirrorExposedUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingGet
   * @summary completePaymentRaw
   * @request GET:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingGetData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingHead
   * @summary completePaymentRaw
   * @request HEAD:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingHeadData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingPost
   * @summary completePaymentRaw
   * @request POST:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingPut
   * @summary completePaymentRaw
   * @request PUT:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingPutData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingDelete
   * @summary completePaymentRaw
   * @request DELETE:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingDeleteData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingOptions
   * @summary completePaymentRaw
   * @request OPTIONS:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingOptionsData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawUsingPatch
   * @summary completePaymentRaw
   * @request PATCH:/job/payment/portalCallback
   * @secure
   */
  export namespace CompletePaymentRawUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawUsingPatchData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingGet
   * @summary completePaymentRawExposed
   * @request GET:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingGet {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingGetData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingHead
   * @summary completePaymentRawExposed
   * @request HEAD:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingHead {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingHeadData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingPost
   * @summary completePaymentRawExposed
   * @request POST:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingPost {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingPostData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingPut
   * @summary completePaymentRawExposed
   * @request PUT:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingPut {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingPutData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingDelete
   * @summary completePaymentRawExposed
   * @request DELETE:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingDelete {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingDeleteData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingOptions
   * @summary completePaymentRawExposed
   * @request OPTIONS:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingOptions {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingOptionsData;
  }

  /**
   * No description
   * @tags booking-payment-controller
   * @name CompletePaymentRawExposedUsingPatch
   * @summary completePaymentRawExposed
   * @request PATCH:/job/payment/portalCallback/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePaymentRawExposedUsingPatch {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentRawExposedUsingPatchData;
  }
}

export namespace Kiosk {
  /**
   * @description Load retail kiosk settings if exists. Otherwise corporate settings <br>Possible error statuses: <br><b>DATA_NOT_FOUND</b> - missing kiosk settings for authorized customer account <br>
   * @tags kiosk-config-controller
   * @name GetKioskConfigUsingGet
   * @summary Load kiosk settings
   * @request GET:/kiosk/config
   * @secure
   */
  export namespace GetKioskConfigUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetKioskConfigUsingGetData;
  }
}

export namespace Language {
  /**
   * No description
   * @tags language-controller
   * @name LoadLanguagesUsingPost
   * @summary Load languages available in the system
   * @request POST:/language/load
   * @secure
   */
  export namespace LoadLanguagesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoadLanguagesUsingPostData;
  }

  /**
   * @description Try to find passed locale. If not found, load default system or individual language <br>If user authorized and caller used, language will be used as individual's default language <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing locale <br><b>INVALID_RETAIL_REQUEST</b> - Retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - Corporate user is not properly authenticated <br>
   * @tags language-controller
   * @name SetLanguageUsingPost
   * @summary Set user language
   * @request POST:/language/set
   * @secure
   */
  export namespace SetLanguageUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SetLanguageRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetLanguageUsingPostData;
  }
}

export namespace Log {
  /**
   * No description
   * @tags info-controller
   * @name ExpectedUnexpectedExceptionUsingPost
   * @summary Log something or trigger an unexpected error
   * @request POST:/log
   * @secure
   */
  export namespace ExpectedUnexpectedExceptionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /** text */
      text?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ExpectedUnexpectedExceptionUsingPostData;
  }

  /**
   * No description
   * @tags log-download-controller
   * @name GetLogFileUsingGet
   * @summary getLogFile
   * @request GET:/log/{file}
   * @secure
   */
  export namespace GetLogFileUsingGet {
    export type RequestParams = {
      /** file */
      file: string;
    };
    export type RequestQuery = {
      /** full */
      full?: boolean;
      /** s */
      s: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetLogFileUsingGetData;
  }
}

export namespace Login {
  /**
   * @description Log in using only smartphone device information without registration <br>Unlike a registered user, an anonymous user is not allowed to load previously used addresses, credit cards, finished or cancelled bookings <br>Authenticates webportal anonymous user if smartphone device is null <br>In case of webportal authentication user must be unauthorized <br>Possible error statuses: <br><b>USER_ON_HOLD</b> - smartphone owner is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>USER_NOT_FOUND</b> - portal anonymous user not found (taxi.sherbookPortalConfig.anonymousCaller)
   * @tags login-controller
   * @name LoginAnonymousUsingPost
   * @summary Login as anonymous user
   * @request POST:/login/anonymous
   * @secure
   */
  export namespace LoginAnonymousUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AnonymousLoginRequest;
    export type RequestHeaders = {
      /** Sherbook-Client-Base */
      "Sherbook-Client-Base"?: string;
    };
    export type ResponseBody = LoginAnonymousUsingPostData;
  }

  /**
   * @description For corporate users login is represented as a multistage process. For different accounts various login schema could be used. The only difference between the used login schemas is a set of required fields, e.g. {account number, PIN, caller name} or {account number, account password} or {account number, PIN} <br>Possible error statuses: <br><b>FILL_REQUIRED_DETAILS</b> - invalid or incomplete login. Check loginFields for more information.<br><b>BOOKINGS_NOT_ALLOWED</b> - account is not allowed for making bookings<br><b>ACCOUNT_ON_HOLD</b> - account is on hold. Used by MOBILE_WS clients<br><b>PIN_ON_HOLD</b> - pin is on hold. Used by MOBILE_WS clients<br><b>USER_ON_HOLD</b> - user is on hold. Used by MOBILE_WS clients<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br>
   * @tags login-controller
   * @name LoginCorporateUsingPost
   * @summary Login as corporate user
   * @request POST:/login/corporate
   * @secure
   */
  export namespace LoginCorporateUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CorporateLoginRequest;
    export type RequestHeaders = {
      /** Sherbook-Client-Base */
      "Sherbook-Client-Base"?: string;
    };
    export type ResponseBody = LoginCorporateUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>TOKEN_NOT_VALID</b> - invalid exposed token <br><b>TOKEN_NOT_FOUND</b> - exposed or associated access/refresh token has not been found in token storage <br>
   * @tags login-controller
   * @name TokenFindUsingPost
   * @summary Find authorization information using exposed token
   * @request POST:/login/find
   * @secure
   */
  export namespace TokenFindUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FindTokenRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TokenFindUsingPostData;
  }

  /**
   * @description Delete session information from the server <br>Revokes retail user token if token header specified <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - list of profile types is missing <br><b>INVALID_RETAIL_REQUEST</b> - could not properly logout retail user. Missing token header <br>
   * @tags login-controller
   * @name LogoutUsingPost
   * @summary Logout user
   * @request POST:/login/logout
   * @secure
   */
  export namespace LogoutUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LogoutUsingPostData;
  }

  /**
   * @description Acquire a new pair of access/refresh token using refresh token <br>Previously granted token pair will be invalidated <br>Validates information encrypted in token against current account settings <br>Token considered not valid in the following cases: <br>- Account, pin or individual has been deleted <br>- Individual's pin has been changed <br>- callerUsed is true, but missing individual <br>- pinUsed is true, but missing pin <br>Possible error statuses: <br><b>TOKEN_NOT_VALID</b> - invalid or expired refresh token <br><b>TOKEN_NOT_FOUND</b> - refresh token has not been found in token storage <br>
   * @tags login-controller
   * @name TokenRefreshUsingPost
   * @summary Refresh token
   * @request POST:/login/refresh
   * @secure
   */
  export namespace TokenRefreshUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRefreshRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TokenRefreshUsingPostData;
  }

  /**
   * @description Log in to personal account using phone number and password <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - empty phone or password <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number format <br><b>USER_NOT_FOUND</b> - registration info not found <br><b>USER_ON_HOLD</b> - registration info is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br>
   * @tags login-controller
   * @name LoginRetailUsingPost
   * @summary Login as retail user
   * @request POST:/login/retail
   * @secure
   */
  export namespace LoginRetailUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RetailLoginRequest;
    export type RequestHeaders = {
      /** Sherbook-Client-Base */
      "Sherbook-Client-Base"?: string;
    };
    export type ResponseBody = LoginRetailUsingPostData;
  }

  /**
   * @description Invalidates previously granted access token <br>Refresh token will be removed as well <br>All exposed tokens will become invalid <br>Possible error statuses: <br><b>TOKEN_NOT_VALID</b> - invalid access token <br><b>TOKEN_NOT_FOUND</b> - access token has not been found in token storage <br>
   * @tags login-controller
   * @name TokenRevokeUsingPost
   * @summary Revoke token
   * @request POST:/login/revoke
   * @secure
   */
  export namespace TokenRevokeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRevokeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TokenRevokeUsingPostData;
  }

  /**
   * @description Login by token functionality used by Quickbooker and Web Kiosk booking clients to log in the system<br>To log in Quickbooker by retail individual token, retail individual has to be registered in the web portal or mobile application<br>Web Kiosk could be logged in by retail token without registered user<br>Possible error statuses: <br><b>OUTDATED_APPLICATION</b> - Used by Kiosk. The code means that kiosk application needs to be updated <br><b>USER_NOT_FOUND</b> - Profile associated with token is not found <br>
   * @tags login-controller
   * @name LoginTokenUsingPost
   * @summary Login using token
   * @request POST:/login/token
   * @secure
   */
  export namespace LoginTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenLoginRequest;
    export type RequestHeaders = {
      /** Kiosk-version */
      "Kiosk-version"?: string;
      /** Sherbook-Client-Base */
      "Sherbook-Client-Base"?: string;
    };
    export type ResponseBody = LoginTokenUsingPostData;
  }
}

export namespace Lost {
  /**
   * No description
   * @tags lost-properties-controller
   * @name AddLostPropertyUsingPost
   * @summary addLostProperty
   * @request POST:/lost/add
   * @secure
   */
  export namespace AddLostPropertyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddLostPropertyRequest;
    export type RequestHeaders = {};
    export type ResponseBody = AddLostPropertyUsingPostData;
  }

  /**
   * No description
   * @tags lost-properties-controller
   * @name DeleteLostPropertyUsingPost
   * @summary deleteLostProperty
   * @request POST:/lost/delete
   * @secure
   */
  export namespace DeleteLostPropertyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LostPropertyRequest;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteLostPropertyUsingPostData;
  }

  /**
   * No description
   * @tags lost-properties-controller
   * @name EditLostPropertyUsingPost
   * @summary editLostProperty
   * @request POST:/lost/edit
   * @secure
   */
  export namespace EditLostPropertyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EditLostPropertyRequest;
    export type RequestHeaders = {};
    export type ResponseBody = EditLostPropertyUsingPostData;
  }

  /**
   * No description
   * @tags lost-properties-controller
   * @name LoadLostPropertiesUsingPost
   * @summary loadLostProperties
   * @request POST:/lost/load
   * @secure
   */
  export namespace LoadLostPropertiesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadLostPropertiesUsingPostData;
  }
}

export namespace Map {
  /**
   * @description Load active fleet information bounded by top left and right bottom coordinates <br>Information can be filtered using service id <br>Client can pass minimum track duration and used drivers to prioritise drivers that matches minimum duration and drivers that was previously used by the client. Priority is applied when response exceeds maximum allowed number of cars <br>Returns driver route history along with timestamps <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing coordinates <br>
   * @tags map-controller
   * @name LoadDriversDataUsingPost
   * @summary Load active fleet
   * @request POST:/map/fleet
   * @secure
   */
  export namespace LoadDriversDataUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DriverMapRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadDriversDataUsingPostData;
  }
}

export namespace Offer {
  /**
   * No description
   * @tags booking-offer-controller
   * @name CancelOfferUsingPost
   * @summary cancelOffer
   * @request POST:/offer/cancel
   * @secure
   */
  export namespace CancelOfferUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JobOfferCancelRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CancelOfferUsingPostData;
  }

  /**
   * No description
   * @tags booking-offer-controller
   * @name CheckOfferUsingPost
   * @summary checkOffer
   * @request POST:/offer/check
   * @secure
   */
  export namespace CheckOfferUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JobOfferCheckRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckOfferUsingPostData;
  }

  /**
   * No description
   * @tags booking-offer-controller
   * @name MakeOfferUsingPost
   * @summary makeOffer
   * @request POST:/offer/make
   * @secure
   */
  export namespace MakeOfferUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = JobOfferRequest;
    export type RequestHeaders = {};
    export type ResponseBody = MakeOfferUsingPostData;
  }
}

export namespace Osp {
  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - Token identifier is not specified.<br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br>
   * @tags off-session-payment-controller
   * @name LoadUsingPost
   * @summary Load Off-Session Payment details by token identifier
   * @request POST:/osp/load
   * @secure
   */
  export namespace LoadUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>REDIRECT_REQUIRED</b> - OSP page must redirect client to the credit card provider page<br><b>INVALID_REQUEST</b> - Token identifier is not specified.<br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br><b>CREDIT_CARD_PAYMENT_FAILED</b> - Server is unable to initiate 3d-secure authorization process.<br>
   * @tags off-session-payment-controller
   * @name StartUsingPost
   * @summary Start Off-Session Payment process
   * @request POST:/osp/start
   * @secure
   */
  export namespace StartUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = OffSessionPaymentStartRequest;
    export type RequestHeaders = {};
    export type ResponseBody = StartUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags off-session-payment-controller
   * @name CompletePaymentUsingPost1
   * @summary Complete credit card payment on mobile
   * @request POST:/osp/{token}/complete
   * @secure
   */
  export namespace CompletePaymentUsingPost1 {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CompletePaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentUsingPost1Data;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags off-session-payment-controller
   * @name CompleteMobileCallbackUsingGet
   * @summary Mobile callback for credit card payment
   * @request GET:/osp/{token}/complete/mb/callback
   * @secure
   */
  export namespace CompleteMobileCallbackUsingGet {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteMobileCallbackUsingGetData;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags off-session-payment-controller
   * @name CompleteMobileCallbackUsingPost
   * @summary Mobile callback for credit card payment
   * @request POST:/osp/{token}/complete/mb/callback
   * @secure
   */
  export namespace CompleteMobileCallbackUsingPost {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteMobileCallbackUsingPostData;
  }

  /**
   * @description This endpoint is usually called by Credit Card Provider after client has passed 3d-secure authorization process.<br>Possible error statuses: <br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br><b>CREDIT_CARD_PAYMENT_FAILED</b> - Server is unable to initiate 3d-secure authorization process.<br>
   * @tags off-session-payment-controller
   * @name CompleteUsingGet
   * @summary Complete Off-Session Payment process on the web
   * @request GET:/osp/{token}/complete/wp/callback
   * @secure
   */
  export namespace CompleteUsingGet {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteUsingGetData;
  }

  /**
   * @description This endpoint is usually called by Credit Card Provider after client has passed 3d-secure authorization process.<br>Possible error statuses: <br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br><b>CREDIT_CARD_PAYMENT_FAILED</b> - Server is unable to initiate 3d-secure authorization process.<br>
   * @tags off-session-payment-controller
   * @name CompleteUsingPost
   * @summary Complete Off-Session Payment process on the web
   * @request POST:/osp/{token}/complete/wp/callback
   * @secure
   */
  export namespace CompleteUsingPost {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>REDIRECT_REQUIRED</b> - OSP page must redirect client to the credit card provider page<br><b>REQUIRES_CLIENT_ACTION</b> - A client sdk action is required to continue payment e.g. in case of client-side payment<br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br><b>CREDIT_CARD_PAYMENT_FAILED</b> - Server is unable to process a mobile payment<br>
   * @tags off-session-payment-controller
   * @name MobilePayUsingPost
   * @summary Perform mobile pay payment
   * @request POST:/osp/{token}/pay
   * @secure
   */
  export namespace MobilePayUsingPost {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = OffSessionPaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = MobilePayUsingPostData;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags off-session-payment-controller
   * @name DepositMbCallbackUsingGet
   * @summary Mobile callback for mobile pay payment
   * @request GET:/osp/{token}/pay/mb/callback
   * @secure
   */
  export namespace DepositMbCallbackUsingGet {
    export type RequestParams = {
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositMbCallbackUsingGetData;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags off-session-payment-controller
   * @name DepositMbCallbackUsingPost
   * @summary Mobile callback for mobile pay payment
   * @request POST:/osp/{token}/pay/mb/callback
   * @secure
   */
  export namespace DepositMbCallbackUsingPost {
    export type RequestParams = {
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositMbCallbackUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags off-session-payment-controller
   * @name CompleteMobilePaymentUsingPost
   * @summary Complete mobile pay payment on mobile
   * @request POST:/osp/{token}/pay/mb/complete
   * @secure
   */
  export namespace CompleteMobilePaymentUsingPost {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CompletePaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteMobilePaymentUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br>
   * @tags off-session-payment-controller
   * @name CompleteMobilePayUsingGet
   * @summary Web callback to complete mobile pay payment
   * @request GET:/osp/{token}/pay/wp/callback
   * @secure
   */
  export namespace CompleteMobilePayUsingGet {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteMobilePayUsingGetData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - Payment related data is not found by specified token identifier<br>
   * @tags off-session-payment-controller
   * @name CompleteMobilePayUsingPost
   * @summary Web callback to complete mobile pay payment
   * @request POST:/osp/{token}/pay/wp/callback
   * @secure
   */
  export namespace CompleteMobilePayUsingPost {
    export type RequestParams = {
      /**
       * token
       * @format uuid
       */
      token: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteMobilePayUsingPostData;
  }
}

export namespace Payment {
  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br>
   * @tags payment-link-controller
   * @name GetPaymentInfoUsingPost
   * @summary Get information about the payment using token
   * @request POST:/payment/link/details/{tokenId}
   * @secure
   */
  export namespace GetPaymentInfoUsingPost {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PaymentInfoRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetPaymentInfoUsingPostData;
  }

  /**
   * @description Returns redirection information if provider requested a 3ds or external payment process. Otherwise returns OK <br>Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name PayUsingPost
   * @summary Pay for a job
   * @request POST:/payment/link/pay/{tokenId}
   * @secure
   */
  export namespace PayUsingPost {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = PaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PayUsingPostData;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags payment-link-controller
   * @name DepositMbCallbackUsingGet1
   * @summary Mobile callback
   * @request GET:/payment/link/pay/{tokenId}/mb/callback
   * @secure
   */
  export namespace DepositMbCallbackUsingGet1 {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositMbCallbackUsingGet1Data;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags payment-link-controller
   * @name DepositMbCallbackUsingPost1
   * @summary Mobile callback
   * @request POST:/payment/link/pay/{tokenId}/mb/callback
   * @secure
   */
  export namespace DepositMbCallbackUsingPost1 {
    export type RequestParams = {
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositMbCallbackUsingPost1Data;
  }

  /**
   * @description Possible error statuses: <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name CompletePaymentUsingPost3
   * @summary Complete payment on mobile
   * @request POST:/payment/link/pay/{tokenId}/mb/complete
   * @secure
   */
  export namespace CompletePaymentUsingPost3 {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = CompletePaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentUsingPost3Data;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingGet
   * @summary Portal callback
   * @request GET:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingGet {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingGetData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingHead
   * @summary Portal callback
   * @request HEAD:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingHead {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingHeadData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingPost
   * @summary Portal callback
   * @request POST:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingPost {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingPut
   * @summary Portal callback
   * @request PUT:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingPut {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingPutData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingDelete
   * @summary Portal callback
   * @request DELETE:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingDelete {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingDeleteData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingOptions
   * @summary Portal callback
   * @request OPTIONS:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingOptions {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingOptionsData;
  }

  /**
   * @description Possible error statuses: <br><b>DATA_NOT_FOUND</b> - could not load an applicable job using a provided tokenId <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags payment-link-controller
   * @name DepositCallbackUsingPatch
   * @summary Portal callback
   * @request PATCH:/payment/link/pay/{tokenId}/wp/callback
   * @secure
   */
  export namespace DepositCallbackUsingPatch {
    export type RequestParams = {
      /**
       * tokenId
       * @format uuid
       */
      tokenId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingPatchData;
  }
}

export namespace Paypal {
  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationUsingPost
   * @summary completeAccountCreation
   * @request POST:/paypal/account/complete
   * @secure
   */
  export namespace CompleteAccountCreationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PayPalFeedbackRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name DeletePayPalAccountUsingPost
   * @summary deletePayPalAccount
   * @request POST:/paypal/account/delete
   * @secure
   */
  export namespace DeletePayPalAccountUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = DeletePayPalAccountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = DeletePayPalAccountUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name LoadPayPalAccountsUsingPost
   * @summary loadPayPalAccounts
   * @request POST:/paypal/account/load
   * @secure
   */
  export namespace LoadPayPalAccountsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AmendableCustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPayPalAccountsUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingGet
   * @summary completeAccountCreationFromPortal
   * @request GET:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationFromPortalUsingGetData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingHead
   * @summary completeAccountCreationFromPortal
   * @request HEAD:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationFromPortalUsingHeadData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingPost
   * @summary completeAccountCreationFromPortal
   * @request POST:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationFromPortalUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingPut
   * @summary completeAccountCreationFromPortal
   * @request PUT:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationFromPortalUsingPutData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingDelete
   * @summary completeAccountCreationFromPortal
   * @request DELETE:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationFromPortalUsingDeleteData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingOptions
   * @summary completeAccountCreationFromPortal
   * @request OPTIONS:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalUsingOptionsData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalUsingPatch
   * @summary completeAccountCreationFromPortal
   * @request PATCH:/paypal/account/portalComplete
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompleteAccountCreationFromPortalUsingPatchData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingGet
   * @summary completeAccountCreationFromPortalExposed
   * @request GET:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingGet {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingGetData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingHead
   * @summary completeAccountCreationFromPortalExposed
   * @request HEAD:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingHead {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingHeadData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingPost
   * @summary completeAccountCreationFromPortalExposed
   * @request POST:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingPost {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingPut
   * @summary completeAccountCreationFromPortalExposed
   * @request PUT:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingPut {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingPutData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingDelete
   * @summary completeAccountCreationFromPortalExposed
   * @request DELETE:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingDelete {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingDeleteData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingOptions
   * @summary completeAccountCreationFromPortalExposed
   * @request OPTIONS:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingOptions {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingOptionsData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompleteAccountCreationFromPortalExposedUsingPatch
   * @summary completeAccountCreationFromPortalExposed
   * @request PATCH:/paypal/account/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompleteAccountCreationFromPortalExposedUsingPatch {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody =
      CompleteAccountCreationFromPortalExposedUsingPatchData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name SaveAccountUsingPost
   * @summary saveAccount
   * @request POST:/paypal/account/save
   * @secure
   */
  export namespace SaveAccountUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SaveAccountUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePaymentUsingPost2
   * @summary completePayment
   * @request POST:/paypal/payment/complete
   * @secure
   */
  export namespace CompletePaymentUsingPost2 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PayPalFeedbackRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentUsingPost2Data;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingGet
   * @summary completePortalPayment
   * @request GET:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingGetData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingHead
   * @summary completePortalPayment
   * @request HEAD:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingHeadData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingPost
   * @summary completePortalPayment
   * @request POST:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingPut
   * @summary completePortalPayment
   * @request PUT:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingPutData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingDelete
   * @summary completePortalPayment
   * @request DELETE:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingDeleteData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingOptions
   * @summary completePortalPayment
   * @request OPTIONS:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingOptionsData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentUsingPatch
   * @summary completePortalPayment
   * @request PATCH:/paypal/payment/portalComplete
   * @secure
   */
  export namespace CompletePortalPaymentUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentUsingPatchData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingGet
   * @summary completePortalPaymentExposed
   * @request GET:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingGet {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingGetData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingHead
   * @summary completePortalPaymentExposed
   * @request HEAD:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingHead {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingHeadData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingPost
   * @summary completePortalPaymentExposed
   * @request POST:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingPost {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingPostData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingPut
   * @summary completePortalPaymentExposed
   * @request PUT:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingPut {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingPutData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingDelete
   * @summary completePortalPaymentExposed
   * @request DELETE:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingDelete {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingDeleteData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingOptions
   * @summary completePortalPaymentExposed
   * @request OPTIONS:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingOptions {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingOptionsData;
  }

  /**
   * No description
   * @tags pay-pal-controller
   * @name CompletePortalPaymentExposedUsingPatch
   * @summary completePortalPaymentExposed
   * @request PATCH:/paypal/payment/portalComplete/{exposedToken}/callback
   * @secure
   */
  export namespace CompletePortalPaymentExposedUsingPatch {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {
      /**
       * id
       * @format uuid
       */
      id: string;
      /** success */
      success: boolean;
      /** token */
      token: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePortalPaymentExposedUsingPatchData;
  }
}

export namespace Policy {
  /**
   * No description
   * @tags policy-acceptance-controller
   * @name AcceptPolicyAgreementUsingPost
   * @summary acceptPolicyAgreement
   * @request POST:/policy/agreement/accept
   * @secure
   */
  export namespace AcceptPolicyAgreementUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = AcceptPolicyAgreementUsingPostData;
  }

  /**
   * No description
   * @tags policy-acceptance-controller
   * @name CheckPolicyAgreementUsingPost
   * @summary checkPolicyAgreement
   * @request POST:/policy/agreement/check
   * @secure
   */
  export namespace CheckPolicyAgreementUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckPolicyAgreementUsingPostData;
  }
}

export namespace Portal {
  /**
   * No description
   * @tags portal-booking-history-controller
   * @name GetBookingActionsUsingPost
   * @summary getBookingActions
   * @request POST:/portal/bookings/actions
   * @secure
   */
  export namespace GetBookingActionsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetBookingActionsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name LoadActiveBookingsUsingPost1
   * @summary loadActiveBookings
   * @request POST:/portal/bookings/active
   * @secure
   */
  export namespace LoadActiveBookingsUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalBookingListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadActiveBookingsUsingPost1Data;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name CountActiveBookingsUsingPost
   * @summary countActiveBookings
   * @request POST:/portal/bookings/active/count
   * @secure
   */
  export namespace CountActiveBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalFilteredBookingsCountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountActiveBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name LoadCompletedBookingsUsingPost
   * @summary loadCompletedBookings
   * @request POST:/portal/bookings/completed
   * @secure
   */
  export namespace LoadCompletedBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalBookingListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadCompletedBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name CountCompletedBookingsUsingPost
   * @summary countCompletedBookings
   * @request POST:/portal/bookings/completed/count
   * @secure
   */
  export namespace CountCompletedBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalFilteredBookingsCountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountCompletedBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name FindBookingsUsingPost
   * @summary findBookings
   * @request POST:/portal/bookings/find
   * @secure
   */
  export namespace FindBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalBookingListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FindBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name CountFilteredBookingsUsingPost
   * @summary countFilteredBookings
   * @request POST:/portal/bookings/find/count
   * @secure
   */
  export namespace CountFilteredBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalFilteredBookingsCountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountFilteredBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name LoadPendingBookingsUsingPost
   * @summary loadPendingBookings
   * @request POST:/portal/bookings/pending
   * @secure
   */
  export namespace LoadPendingBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalBookingListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-booking-history-controller
   * @name CountPendingBookingsUsingPost
   * @summary countPendingBookings
   * @request POST:/portal/bookings/pending/count
   * @secure
   */
  export namespace CountPendingBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalFilteredBookingsCountRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingBookingsUsingPostData;
  }

  /**
   * No description
   * @tags portal-error-controller
   * @name SaveErrorUsingPost
   * @summary saveError
   * @request POST:/portal/clientError
   * @secure
   */
  export namespace SaveErrorUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalErrorRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SaveErrorUsingPostData;
  }

  /**
   * No description
   * @tags portal-config-controller
   * @name GetPortalConfigUsingGet
   * @summary Load portal config
   * @request GET:/portal/config
   * @secure
   */
  export namespace GetPortalConfigUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetPortalConfigUsingGetData;
  }

  /**
   * No description
   * @tags portal-config-controller
   * @name GetServerTimeUsingGet
   * @summary Load server timestamp in milliseconds
   * @request GET:/portal/serverTime
   * @secure
   */
  export namespace GetServerTimeUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetServerTimeUsingGetData;
  }

  /**
   * No description
   * @tags portal-config-controller
   * @name SetLocaleUsingPost
   * @summary setLocale
   * @request POST:/portal/setLocale
   * @secure
   */
  export namespace SetLocaleUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PortalSetLocaleRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetLocaleUsingPostData;
  }
}

export namespace Prepaid {
  /**
   * @description Close current prepaid account <br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>OPERATION_UNAVAILABLE</b> - could not close account due to several reasons: no active prepaid program, account is already closed, account is on hold, unexpected account status, unexpected financial system error <br>
   * @tags prepaid-controller
   * @name CloseAccountUsingPost
   * @summary Close a prepaid account
   * @request POST:/prepaid/close
   * @secure
   */
  export namespace CloseAccountUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CloseAccountUsingPostData;
  }

  /**
   * @description Deposit funds using a credit card <br>Returns a new balance if a credit card payment has been processed by the server.Otherwise returns a redirect information <br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>INVALID_REQUEST</b> - amount must be greater than zero <br><b>OPERATION_UNAVAILABLE</b> - could not find configured financial account, sms validation failed <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - either credit card is not valid or payment has been failed <br>
   * @tags prepaid-controller
   * @name DepositUsingPost
   * @summary Deposit funds using a credit card
   * @request POST:/prepaid/deposit
   * @secure
   */
  export namespace DepositUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrepaidDepositRequest;
    export type RequestHeaders = {};
    export type ResponseBody = DepositUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name CompletePaymentUsingPost4
   * @summary Complete payment on mobile
   * @request POST:/prepaid/deposit/complete
   * @secure
   */
  export namespace CompletePaymentUsingPost4 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CompletePaymentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CompletePaymentUsingPost4Data;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags prepaid-controller
   * @name DepositMbCallbackUsingGet2
   * @summary Mobile callback
   * @request GET:/prepaid/deposit/mb/callback
   * @secure
   */
  export namespace DepositMbCallbackUsingGet2 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositMbCallbackUsingGet2Data;
  }

  /**
   * @description Prints parameters from the provider as json map
   * @tags prepaid-controller
   * @name DepositMbCallbackUsingPost2
   * @summary Mobile callback
   * @request POST:/prepaid/deposit/mb/callback
   * @secure
   */
  export namespace DepositMbCallbackUsingPost2 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositMbCallbackUsingPost2Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingGet1
   * @summary Portal callback
   * @request GET:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingGet1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingGet1Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingHead1
   * @summary Portal callback
   * @request HEAD:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingHead1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingHead1Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingPost1
   * @summary Portal callback
   * @request POST:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingPost1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingPost1Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingPut1
   * @summary Portal callback
   * @request PUT:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingPut1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingPut1Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingDelete1
   * @summary Portal callback
   * @request DELETE:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingDelete1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingDelete1Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingOptions1
   * @summary Portal callback
   * @request OPTIONS:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingOptions1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingOptions1Data;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - credit card transaction has been failed <br>
   * @tags prepaid-controller
   * @name DepositCallbackUsingPatch1
   * @summary Portal callback
   * @request PATCH:/prepaid/deposit/wp/{exposedToken}/callback
   * @secure
   */
  export namespace DepositCallbackUsingPatch1 {
    export type RequestParams = {
      /** exposedToken */
      exposedToken: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DepositCallbackUsingPatch1Data;
  }

  /**
   * @description Returns a prepaid account information <br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags prepaid-controller
   * @name GetPrepaidInfoUsingPost
   * @summary Get a prepaid account information
   * @request POST:/prepaid/info
   * @secure
   */
  export namespace GetPrepaidInfoUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetPrepaidInfoUsingPostData;
  }

  /**
   * @description Returns a prepaid account logs of the authenticated user. Not available for anonymous users<br>Available filter parameters: <br><b>from, to</b> - date intervals, inclusive <br><b>jobNumber</b> - return logs, related to specified job number <br>Logs are sorted by creation date, descending. Last created logs goes first. <br>Returns null instead of a list if a prepaid account is not configured for the authenticated user<br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags prepaid-controller
   * @name GetAccountLogsUsingPost1
   * @summary Get a prepaid account logs
   * @request POST:/prepaid/logs
   * @secure
   */
  export namespace GetAccountLogsUsingPost1 {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = FinAccountLogsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetAccountLogsUsingPost1Data;
  }

  /**
   * @description Create a new prepaid account<br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>OPERATION_UNAVAILABLE</b> - could not open account due to several reasons: no active prepaid program, account is already active, account is on hold, unexpected account status, unexpected financial system error <br>
   * @tags prepaid-controller
   * @name OpenAccountUsingPost
   * @summary Open a financial account
   * @request POST:/prepaid/open
   * @secure
   */
  export namespace OpenAccountUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = OpenAccountUsingPostData;
  }

  /**
   * @description The response data must be used in a deposit request <br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags prepaid-controller
   * @name Send2FaUsingPost
   * @summary Send a confirmation code via sms
   * @request POST:/prepaid/sms
   * @secure
   */
  export namespace Send2FaUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrepaidSmsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Send2FaUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags prepaid-controller
   * @name Check2FaUsingPost
   * @summary Check the confirmation code
   * @request POST:/prepaid/sms/check
   * @secure
   */
  export namespace Check2FaUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrepaidCheckSmsCodeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = Check2FaUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br><b>INVALID_REQUEST</b> - amount must be greater than zero <br><b>OPERATION_UNAVAILABLE</b> - could not find configured financial account, sms validation failed <br><b>CREDIT_CARD_PAYMENT_FAILED</b> - either credit card is not valid or payment has been failed <br>
   * @tags prepaid-controller
   * @name TransferUsingPost
   * @summary Transfer funds to another account
   * @request POST:/prepaid/transfer
   * @secure
   */
  export namespace TransferUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrepaidTransferRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TransferUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags prepaid-controller
   * @name CalculateCommissionUsingPost
   * @summary Calculate transfer commission
   * @request POST:/prepaid/transfer/commission
   * @secure
   */
  export namespace CalculateCommissionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrepaidCommissionCalculationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateCommissionUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - unavailable for anonymous user <br>
   * @tags prepaid-controller
   * @name FindUserUsingPost
   * @summary Find a prepaid account by a phone number
   * @request POST:/prepaid/user
   * @secure
   */
  export namespace FindUserUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PrepaidFindUserRequest;
    export type RequestHeaders = {};
    export type ResponseBody = FindUserUsingPostData;
  }
}

export namespace Profile {
  /**
   * @description Available for retail and corporate user <br>RETAIL customer type is used by default if there are no customer type specified in request<br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - anonymous user is not allowed to use this endpoint <br>
   * @tags profile-controller
   * @name LoadDetailsUsingPost
   * @summary Load user details
   * @request POST:/profile/details/load
   * @secure
   */
  export namespace LoadDetailsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadDetailsUsingPostData;
  }

  /**
   * @description Available only for retail users. Updates default email for individual and registration info <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing profile information <br><b>FIELDS_VALIDATION_FAILED</b> - invalid email or name format <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated
   * @tags profile-controller
   * @name SaveDetailsUsingPost
   * @summary Change user details
   * @request POST:/profile/details/save
   * @secure
   */
  export namespace SaveDetailsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangeProfileRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SaveDetailsUsingPostData;
  }

  /**
   * @description Available only for retail users<br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing password <br><b>FIELDS_VALIDATION_FAILED</b> - too short password <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated
   * @tags profile-controller
   * @name SetPasswordUsingPost
   * @summary Change password
   * @request POST:/profile/password
   * @secure
   */
  export namespace SetPasswordUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePasswordRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetPasswordUsingPostData;
  }

  /**
   * @description New registration code will be send to user.<br> Available only for retail users<br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing phone <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number format <br><b>USER_ALREADY_EXISTS</b> - registration info with the same number already exists <br><b>UNABLE_TO_SEND_PASSWORD</b> - server is unable to send a password in an SMS message for some technical reasons <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated
   * @tags profile-controller
   * @name SetPhoneNumberUsingPost
   * @summary Change phone number
   * @request POST:/profile/phone
   * @secure
   */
  export namespace SetPhoneNumberUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ChangePhoneRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetPhoneNumberUsingPostData;
  }

  /**
   * @description Available for retail users. Closes current sherbook sessions and removes the user profile. <br>Possible error statuses: <br><b>INVALID_RETAIL_REQUEST</b> - retail user is not properly authenticated <br><b>USER_ON_HOLD</b> - retail user has been blocked by brute force protection mechanism <br><b>DATA_NOT_FOUND</b> - retail user has already been removed <br>
   * @tags profile-controller
   * @name RemoveProfileUsingPost
   * @summary Remove user profile
   * @request POST:/profile/remove
   * @secure
   */
  export namespace RemoveProfileUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RemoveProfileUsingPostData;
  }
}

export namespace Push {
  /**
   * No description
   * @tags notification-controller
   * @name ConfirmPushNotificationUsingPost
   * @summary confirmPushNotification
   * @request POST:/push/confirm
   * @secure
   */
  export namespace ConfirmPushNotificationUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NotificationConfirmRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmPushNotificationUsingPostData;
  }

  /**
   * No description
   * @tags notification-controller
   * @name ConfirmPushNotificationUnauthorizedUsingPost
   * @summary confirmPushNotificationUnauthorized
   * @request POST:/push/received
   * @secure
   */
  export namespace ConfirmPushNotificationUnauthorizedUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NotificationConfirmRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmPushNotificationUnauthorizedUsingPostData;
  }

  /**
   * No description
   * @tags notification-controller
   * @name SetTokenUsingPost
   * @summary setToken
   * @request POST:/push/token
   * @secure
   */
  export namespace SetTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = NotificationTokenRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SetTokenUsingPostData;
  }
}

export namespace ReferralCode {
  /**
   * No description
   * @tags referral-code-controller
   * @name ApplyReferralCodeUsingPost
   * @summary applyReferralCode
   * @request POST:/referralCode/apply
   * @secure
   */
  export namespace ApplyReferralCodeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ReferralCodeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ApplyReferralCodeUsingPostData;
  }

  /**
   * No description
   * @tags referral-code-controller
   * @name CheckApplicableUsingPost
   * @summary checkApplicable
   * @request POST:/referralCode/check
   * @secure
   */
  export namespace CheckApplicableUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckApplicableUsingPostData;
  }

  /**
   * No description
   * @tags referral-code-controller
   * @name LoadReferralCodeUsingPost
   * @summary loadReferralCode
   * @request POST:/referralCode/load
   * @secure
   */
  export namespace LoadReferralCodeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoadReferralCodeUsingPostData;
  }
}

export namespace Registration {
  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - missing phone number <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number <br><b>USER_NOT_FOUND</b> - registration info not found <br><b>USER_ON_HOLD</b> - registration info or individual is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>UNABLE_TO_SEND_PASSWORD</b> - internal error during sms sending <br>
   * @tags registration-controller
   * @name CheckUserRegisteredUsingPost
   * @summary Check user registration
   * @request POST:/registration/check
   * @secure
   */
  export namespace CheckUserRegisteredUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhoneRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CheckUserRegisteredUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - missing phone number <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number or name or email<br><b>USER_ON_HOLD</b> - individual for this phone number is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required details or smartphone is banned<br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>OPERATION_UNAVAILABLE</b> - operation is currently unavailable <br><b>UNABLE_TO_SEND_PASSWORD</b> - server is unable to send a password due to technical reasons <br><b>USER_ALREADY_EXISTS</b> - User with the specified phone number is already registered <br><b>REGISTRATION_FAILED</b> - Registration has not been completed due to the internal server error <br>
   * @tags registration-controller
   * @name RegisterUsingPost
   * @summary Register a new retail user
   * @request POST:/registration/new
   * @secure
   */
  export namespace RegisterUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RegistrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RegisterUsingPostData;
  }

  /**
   * @description Request a new password (recovery). The server will send the same password each time. Once a user has successfully logged in with the new password, the old password will expire and the new password will be used for the next recovery. <br>Possible error statuses: <br><b>INVALID_REQUEST</b> - missing phone number <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number <br><b>USER_NOT_FOUND</b> - registration info not found <br><b>USER_ON_HOLD</b> - registration info or individual is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required smartphone details <br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>UNABLE_TO_SEND_PASSWORD</b> - internal error during sms sending <br><b>OPERATION_UNAVAILABLE</b> - unexpected exception or restricted operation <br>
   * @tags registration-controller
   * @name RecoveryPasswordUsingPost
   * @summary Send recovery password via sms
   * @request POST:/registration/password
   * @secure
   */
  export namespace RecoveryPasswordUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhoneRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RecoveryPasswordUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - missing phone number <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number <br><b>USER_NOT_FOUND</b> - registration info not found <br><b>USER_ON_HOLD</b> - registration info or individual is on hold <br><b>SMARTPHONE_VALIDATION_FAILED</b> - missing required smartphone details <br><b>APPLICATION_OUTDATED</b> - smartphone version is outdated <br><b>OPERATION_UNAVAILABLE</b> - voice callback disabled <br><b>UNABLE_TO_SEND_PASSWORD</b> - user didn't ask for password recovery or voice service has failed <br>
   * @tags registration-controller
   * @name PasswordCallbackUsingPost
   * @summary Registration password via the voice answerback
   * @request POST:/registration/password/callback
   * @secure
   */
  export namespace PasswordCallbackUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhoneRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PasswordCallbackUsingPostData;
  }

  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - missing phone number <br><b>FIELDS_VALIDATION_FAILED</b> - invalid phone number <br>
   * @tags registration-controller
   * @name ValidatePhoneUsingPost
   * @summary Validate phone number
   * @request POST:/registration/phone/validate
   * @secure
   */
  export namespace ValidatePhoneUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PhoneRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ValidatePhoneUsingPostData;
  }
}

export namespace Reports {
  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingGet
   * @summary reports
   * @request GET:/reports
   * @secure
   */
  export namespace ReportsUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingGetParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingGetData;
  }

  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingHead
   * @summary reports
   * @request HEAD:/reports
   * @secure
   */
  export namespace ReportsUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingHeadParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingHeadData;
  }

  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingPost
   * @summary reports
   * @request POST:/reports
   * @secure
   */
  export namespace ReportsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingPostParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingPostData;
  }

  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingPut
   * @summary reports
   * @request PUT:/reports
   * @secure
   */
  export namespace ReportsUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingPutParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingPutData;
  }

  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingDelete
   * @summary reports
   * @request DELETE:/reports
   * @secure
   */
  export namespace ReportsUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingDeleteParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingDeleteData;
  }

  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingOptions
   * @summary reports
   * @request OPTIONS:/reports
   * @secure
   */
  export namespace ReportsUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingOptionsParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingOptionsData;
  }

  /**
   * No description
   * @tags report-controller
   * @name ReportsUsingPatch
   * @summary reports
   * @request PATCH:/reports
   * @secure
   */
  export namespace ReportsUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {
      /** customerType */
      customerType?: ReportsUsingPatchParams1CustomerTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReportsUsingPatchData;
  }

  /**
   * No description
   * @tags report-controller
   * @name DownloadReportUsingPost
   * @summary downloadReport
   * @request POST:/reports/download
   * @secure
   */
  export namespace DownloadReportUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {
      customerType?: DownloadReportUsingPostParams1CustomerTypeEnum;
      "reportDto.code"?: string;
      "reportDto.inputParameters[0].alias"?: string;
      "reportDto.inputParameters[0].name"?: string;
      "reportDto.inputParameters[0].required"?: boolean;
      /** @format int32 */
      "reportDto.inputParameters[0].type"?: number;
      "reportDto.inputParameters[0].value"?: string;
      "reportDto.name"?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DownloadReportUsingPostData;
  }

  /**
   * No description
   * @tags report-controller
   * @name RenderHtmlTemplateUsingGet
   * @summary Generates HTML page using email template. Uses token request parameter to encrypt sensitive information such as jobId
   * @request GET:/reports/template/{templateId}
   * @secure
   */
  export namespace RenderHtmlTemplateUsingGet {
    export type RequestParams = {
      /**
       * templateId
       * @format uuid
       */
      templateId: string;
    };
    export type RequestQuery = {
      /** params */
      params?: Record<string, string>[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RenderHtmlTemplateUsingGetData;
  }

  /**
   * No description
   * @tags report-controller
   * @name DownloadTemplatePdfUsingGet
   * @summary Generates PDF from HTML page created using email template. Uses token request parameter to encrypt sensitive information such as jobId
   * @request GET:/reports/template/{templateId}/pdf
   * @secure
   */
  export namespace DownloadTemplatePdfUsingGet {
    export type RequestParams = {
      /**
       * templateId
       * @format uuid
       */
      templateId: string;
    };
    export type RequestQuery = {
      /** params */
      params?: Record<string, string>[];
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DownloadTemplatePdfUsingGetData;
  }
}

export namespace Resources {
  /**
   * No description
   * @tags resources-controller
   * @name GetResourcesUsingPost
   * @summary getResources
   * @request POST:/resources/get
   * @secure
   */
  export namespace GetResourcesUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ResourcesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = GetResourcesUsingPostData;
  }

  /**
   * No description
   * @tags resources-controller
   * @name LoadUsingGet
   * @summary load
   * @request GET:/resources/load
   * @secure
   */
  export namespace LoadUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {
      /** image */
      image: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoadUsingGetData;
  }
}

export namespace Settings {
  /**
   * @description Possible error statuses: <br><b>INVALID_REQUEST</b> - missing customer types <br><b>INVALID_RETAIL_REQUEST</b> - Retail user is not properly authenticated <br><b>INVALID_CORPORATE_REQUEST</b> - Corporate user is not properly authenticated <br><b>INVALID_ANONYMOUS_REQUEST</b> - Anonymous user couldn't share requests with another types <br>
   * @tags settings-controller
   * @name LoadBookingSettingsUsingPost
   * @summary Load settings relating to a customer type. For each customer type sent in a request the server returns corresponding booking settings
   * @request POST:/settings/booking
   * @secure
   */
  export namespace LoadBookingSettingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadBookingSettingsUsingPostData;
  }

  /**
   * No description
   * @tags settings-controller
   * @name LoadInitialSettingsUsingPost
   * @summary Load settings available before login
   * @request POST:/settings/initial
   * @secure
   */
  export namespace LoadInitialSettingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ClientTypeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadInitialSettingsUsingPostData;
  }

  /**
   * No description
   * @tags settings-controller
   * @name LoadPresetUsingPost
   * @summary Load quickbooker preset
   * @request POST:/settings/qb/preset
   * @secure
   */
  export namespace LoadPresetUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPresetUsingPostData;
  }

  /**
   * No description
   * @tags settings-controller
   * @name LoadSystemSettingsUsingPost
   * @summary Load settings actual for all customer types
   * @request POST:/settings/system
   * @secure
   */
  export namespace LoadSystemSettingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSystemSettingsUsingPostData;
  }
}

export namespace Status {
  /**
   * @description Checks that server instance is running and application context has started successfully <br>Returns simple "OK" answer. Can be used by automatic monitoring tools
   * @tags info-controller
   * @name StatusUsingGet
   * @summary Api status
   * @request GET:/status
   * @secure
   */
  export namespace StatusUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StatusUsingGetData;
  }
}

export namespace Supervisor {
  /**
   * No description
   * @tags supervisor-controller
   * @name ConfirmBookingUsingPost
   * @summary confirmBooking
   * @request POST:/supervisor/confirmation
   * @secure
   */
  export namespace ConfirmBookingUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfirmationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmBookingUsingPostData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name ConfirmBookingByTokenUsingPost
   * @summary confirmBookingByToken
   * @request POST:/supervisor/confirmation/token
   * @secure
   */
  export namespace ConfirmBookingByTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfirmationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ConfirmBookingByTokenUsingPostData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingGet
   * @summary countPendingApprovalBookings
   * @request GET:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingGetData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingHead
   * @summary countPendingApprovalBookings
   * @request HEAD:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingHeadData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingPost
   * @summary countPendingApprovalBookings
   * @request POST:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingPostData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingPut
   * @summary countPendingApprovalBookings
   * @request PUT:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingPutData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingDelete
   * @summary countPendingApprovalBookings
   * @request DELETE:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingDeleteData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingOptions
   * @summary countPendingApprovalBookings
   * @request OPTIONS:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingOptionsData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CountPendingApprovalBookingsUsingPatch
   * @summary countPendingApprovalBookings
   * @request PATCH:/supervisor/pendingApproval/count
   * @secure
   */
  export namespace CountPendingApprovalBookingsUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CountPendingApprovalBookingsUsingPatchData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingGet
   * @summary loadPendingApprovalBookings
   * @request GET:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingGetData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingHead
   * @summary loadPendingApprovalBookings
   * @request HEAD:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingHeadData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingPost
   * @summary loadPendingApprovalBookings
   * @request POST:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingPostData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingPut
   * @summary loadPendingApprovalBookings
   * @request PUT:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingPutData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingDelete
   * @summary loadPendingApprovalBookings
   * @request DELETE:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingDeleteData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingOptions
   * @summary loadPendingApprovalBookings
   * @request OPTIONS:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingOptionsData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name LoadPendingApprovalBookingsUsingPatch
   * @summary loadPendingApprovalBookings
   * @request PATCH:/supervisor/pendingApproval/list
   * @secure
   */
  export namespace LoadPendingApprovalBookingsUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadPendingApprovalBookingsUsingPatchData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingGet
   * @summary calculateLatestVersion
   * @request GET:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingGet {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingGetData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingHead
   * @summary calculateLatestVersion
   * @request HEAD:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingHead {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingHeadData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingPost
   * @summary calculateLatestVersion
   * @request POST:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingPostData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingPut
   * @summary calculateLatestVersion
   * @request PUT:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingPut {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingPutData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingDelete
   * @summary calculateLatestVersion
   * @request DELETE:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingDelete {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingDeleteData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingOptions
   * @summary calculateLatestVersion
   * @request OPTIONS:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingOptions {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingOptionsData;
  }

  /**
   * No description
   * @tags supervisor-controller
   * @name CalculateLatestVersionUsingPatch
   * @summary calculateLatestVersion
   * @request PATCH:/supervisor/pendingApproval/version
   * @secure
   */
  export namespace CalculateLatestVersionUsingPatch {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PendingApprovalListRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CalculateLatestVersionUsingPatchData;
  }
}

export namespace Survey {
  /**
   * No description
   * @tags survey-controller
   * @name SubmitSurveyUsingPost
   * @summary submitSurvey
   * @request POST:/survey/confirm
   * @secure
   */
  export namespace SubmitSurveyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfirmSurveyRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SubmitSurveyUsingPostData;
  }

  /**
   * No description
   * @tags survey-controller
   * @name SubmitSurveyByTokenUsingPost
   * @summary submitSurveyByToken
   * @request POST:/survey/confirm/token
   * @secure
   */
  export namespace SubmitSurveyByTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ConfirmSurveyByTokenRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SubmitSurveyByTokenUsingPostData;
  }

  /**
   * No description
   * @tags survey-controller
   * @name LoadSurveyUsingPost
   * @summary loadSurvey
   * @request POST:/survey/load
   * @secure
   */
  export namespace LoadSurveyUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSurveyUsingPostData;
  }

  /**
   * No description
   * @tags survey-controller
   * @name LoadSurveyByTokenUsingPost
   * @summary loadSurveyByToken
   * @request POST:/survey/load/token
   * @secure
   */
  export namespace LoadSurveyByTokenUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TokenRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSurveyByTokenUsingPostData;
  }

  /**
   * No description
   * @tags survey-controller
   * @name LoadUnratedBookingsUsingPost
   * @summary loadUnratedBookings
   * @request POST:/survey/load/unrated
   * @secure
   */
  export namespace LoadUnratedBookingsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CustomerDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadUnratedBookingsUsingPostData;
  }

  /**
   * No description
   * @tags survey-controller
   * @name LoadSurveyResultUsingPost
   * @summary loadSurveyResult
   * @request POST:/survey/result
   * @secure
   */
  export namespace LoadSurveyResultUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = LoadSurveyResultUsingPostData;
  }
}

export namespace Tips {
  /**
   * No description
   * @tags tips-controller
   * @name TipsRangeUsingPost
   * @summary tipsRange
   * @request POST:/tips/range
   * @secure
   */
  export namespace TipsRangeUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = BookingIdRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TipsRangeUsingPostData;
  }

  /**
   * No description
   * @tags tips-controller
   * @name SubmitTipsUsingPost
   * @summary submitTips
   * @request POST:/tips/submit
   * @secure
   */
  export namespace SubmitTipsUsingPost {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SubmitTipsRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SubmitTipsUsingPostData;
  }
}

export namespace Transaction {
  /**
   * No description
   * @tags transaction-feedback-controller
   * @name EndpointFeedbackUsingGet
   * @summary endpointFeedback
   * @request GET:/transaction/feedback/{endpoint}
   * @secure
   */
  export namespace EndpointFeedbackUsingGet {
    export type RequestParams = {
      /** endpoint */
      endpoint: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EndpointFeedbackUsingGetData;
  }

  /**
   * No description
   * @tags transaction-feedback-controller
   * @name EndpointFeedbackUsingPost
   * @summary endpointFeedback
   * @request POST:/transaction/feedback/{endpoint}
   * @secure
   */
  export namespace EndpointFeedbackUsingPost {
    export type RequestParams = {
      /** endpoint */
      endpoint: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = EndpointFeedbackUsingPostData;
  }
}
